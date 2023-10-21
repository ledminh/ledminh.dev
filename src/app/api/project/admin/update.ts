import uploadImage from "@/utils/uploadImage";
import { ProjectDB } from "@/data";
import { NextResponse, NextRequest } from "next/server";
import { Image, Project, ProjectRequest } from "@/types";
import deleteImages from "@/utils/deleteImages";

import { Order } from "@/types";

export default async function update(request: NextRequest) {
  const { type, payload }: ProjectRequest = await request.json();

  if (type === "update-projects-order") {
    return await updateProjectsOrder(payload);
  }

  return await updateProject(request);
}

/****************
 * Helpers
 */

async function updateProjectsOrder(orders: Order[]) {
  const updatedProjects = await ProjectDB.updateProjectsOrder(orders);

  return NextResponse.json({
    errorMessage: null,
    payload: updatedProjects,
  });
}

async function updateProject(request: NextRequest) {
  const formData = await request.formData();

  const projectID = formData.get("id") as string;

  const oldProject = await ProjectDB.getProject(projectID);

  const image = formData.get("image") as File | string;

  let imageData: Image;

  if (typeof image !== "string") {
    // upload image
    const { imagePath, error } = await uploadImage("projects", "images", image);

    if (error) {
      throw new Error(error.message);
    }

    imageData = await ProjectDB.addImage({
      src: imagePath,
      alt: `Project image for ${formData.get("title")}`,
    });

    // delete old image
    await ProjectDB.deleteImage(oldProject.image);

    const delImageResult = deleteImages(
      [oldProject.image.src.split("/").pop() as string],
      "images",
      "projects"
    );

    if (!delImageResult) {
      throw new Error("Error deleting image");
    }
  } else {
    imageData = oldProject.image;
  }

  const categoryID = formData.get("categoryID") as string;

  const editedProjectData: Project = {
    id: projectID,
    order: formData.get("order") ? Number(formData.get("order")) : 0,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    github: formData.get("github") as string,
    demo: formData.get("demo") as string,
    image: imageData,
  };

  const editedProject = await ProjectDB.updateProject(
    categoryID,
    editedProjectData
  );

  return NextResponse.json({
    errorMessage: null,
    payload: editedProject,
  });
}
