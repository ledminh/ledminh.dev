import { ProjectDB } from "@/data";
import { ProjectRequest } from "@/types";
import deleteImages from "@/utils/deleteImages";
import { NextRequest, NextResponse } from "next/server";

export default async function deleteProject(request: NextRequest) {
  const { type, payload: id } = (await request.json()) as ProjectRequest;

  if (type !== "delete-project") {
    throw new Error(
      "Incorrect request. Type should be delete-project. Current type: " + type
    );
  }

  const deletedProject = await ProjectDB.getProject(id);

  if (!deletedProject) {
    throw new Error("Project not found");
  }

  const [dbImage, image] = await Promise.all([
    ProjectDB.deleteImage(deletedProject.image),
    deleteImages(
      [deletedProject.image.src.split("/").pop() as string],
      "images",
      "projects"
    ),
  ]);

  if (!dbImage || !image) {
    throw new Error("Error deleting image");
  }

  await ProjectDB.deleteProject(id);

  return NextResponse.json({
    errorMessage: null,
    payload: deletedProject,
  });
}
