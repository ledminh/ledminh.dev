import uploadImage from "@/utils/uploadImage";
import { ProjectDB } from "@/data";
import { NextResponse, NextRequest } from "next/server";
import { Image, Project } from "@/types";

export default async function updateProject(request: NextRequest) {
  const formData = await request.formData();

  const projectID = formData.get("id") as string;

  const oldProject = await ProjectDB.getProject(projectID);

  const image = formData.get("image") as File | string;

  let imageData: Image;

  if (typeof image !== "string") {
    const { imagePath, error } = await uploadImage(
      "projects",
      "images",
      image.name.split(".")[0],
      image
    );

    if (error) {
      throw new Error(error.message);
    }

    imageData = await ProjectDB.addImage({
      src: imagePath,
      alt: `Project image for ${formData.get("title")}`,
    });

    await ProjectDB.deleteImage(oldProject.image);
  } else {
    imageData = oldProject.image;
  }

  const categoryID = formData.get("categoryID") as string;

  const editedProjectData: Project = {
    id: projectID,
    order: formData.get("order") ? Number(formData.get("order")) : null,
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
