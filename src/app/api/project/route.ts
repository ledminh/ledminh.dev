import { NextRequest, NextResponse } from "next/server";
import type { ProjectResponse, ProjectRequest } from "@/types";

import { ProjectDB } from "@/data";

export async function POST(
  request: NextRequest
): Promise<NextResponse<ProjectResponse>> {
  try {
    const { type, payload }: ProjectRequest = await request.json();

    if (type === "add-project-category") {
      const newCategory = await ProjectDB.addProjectCategory(payload);

      return NextResponse.json({
        errorMessage: null,
        payload: newCategory,
      });
    } else if (type === "update-project-category") {
      const updatedCategory = await ProjectDB.updateProjectCategory(payload);

      return NextResponse.json({
        errorMessage: null,
        payload: updatedCategory,
      });
    } else if (type === "delete-project-category") {
      const deletedCategory = await ProjectDB.deleteProjectCategory(payload);

      return NextResponse.json({
        errorMessage: null,
        payload: deletedCategory,
      });
    } else {
      throw new Error("action not found");
    }
  } catch (error: any) {
    return NextResponse.json({
      errorMessage: error.message as string,
      payload: null,
    });
  }
}
