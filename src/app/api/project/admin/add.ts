import uploadImage from "@/utils/uploadImage";
import { ProjectDB } from "@/data";
import { NextResponse, NextRequest } from "next/server";
import { Project } from "@/types";

export default async function add(request: NextRequest) {
  const formData = await request.formData();

  const image = formData.get("image") as File;

  const { imagePath, error } = await uploadImage("projects", "images", image);

  if (error) {
    throw new Error(error.message);
  }

  const imageData = await ProjectDB.addImage({
    src: imagePath,
    alt: `Project image for ${formData.get("title")}`,
  });

  const categoryID = formData.get("categoryID") as string;

  const newProjectData: Omit<Project, "id"> = {
    order: formData.get("order") ? Number(formData.get("order")) : null,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    github: formData.get("github") as string,
    demo: formData.get("demo") as string,
    image: imageData,
  };

  const newProject = await ProjectDB.addProject(categoryID, newProjectData);

  return NextResponse.json({
    errorMessage: null,
    payload: newProject,
  });
}
