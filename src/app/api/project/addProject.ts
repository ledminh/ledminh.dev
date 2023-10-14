import uploadImage from "@/utils/uploadImage";
import { ProjectDB } from "@/data";
import { NextResponse, NextRequest } from "next/server";

export default async function addProject(request: NextRequest) {
  const formData = await request.formData();

  // const image = formData.get("image") as File;

  // const { imagePath, error } = await uploadImage(
  //   "projects",
  //   "images",
  //   image.name,
  //   image
  // );

  // if (error) {
  //   throw new Error(error.message);
  // }

  // const newProjectData = {
  //   name: formData.get("name") as string,
  //   description: formData.get("description") as string,
  //   category: formData.get("category") as string,
  //   image: imagePath,
  // };
  // };

  // const newCategory = await ProjectDB.addProjectCategory(
  //   newProjectCategoryData
  // );

  return NextResponse.json({
    // errorMessage: null,
    // payload: newCategory,
  });
}
