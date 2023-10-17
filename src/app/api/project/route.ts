import { NextRequest, NextResponse } from "next/server";
import type { ProjectResponse, ProjectRequest } from "@/types";
import addProjectCategory from "./addProjectCategory";
import updateProjectCategory from "./updateProjectCategory";
import deleteProjectCategory from "./deleteProjectCategory";
import addProject from "./admin/add";
import updateProject from "./admin/update";
import deleteProject from "./admin/del";

export async function POST(
  request: NextRequest
): Promise<NextResponse<ProjectResponse>> {
  try {
    const typeParam = request.nextUrl.searchParams.get("type");

    // For projects
    if (typeParam !== null) {
      switch (typeParam) {
        case "add-project":
          return addProject(request);
        case "update-project":
          return updateProject(request);
        case "delete-project":
          return deleteProject(request);
        default:
          throw new Error("type not found");
      }
    }

    // For project categories

    const { type, payload }: ProjectRequest = await request.json();

    switch (type) {
      case "add-project-category":
        return addProjectCategory(payload);
      case "update-project-category":
        return updateProjectCategory(payload);
      case "delete-project-category":
        return deleteProjectCategory(payload);
      default:
        throw new Error("action not found");
    }
  } catch (error: any) {
    return NextResponse.json({
      errorMessage: error.message as string,
      payload: null,
    });
  }
}
