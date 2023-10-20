import { NextRequest, NextResponse } from "next/server";
import type { ProjectCategoriesResponse } from "@/types";
import getAll from "./getAll";

export async function GET(
  request: NextRequest
): Promise<NextResponse<ProjectCategoriesResponse>> {
  try {
    const action = request.nextUrl.searchParams.get("action");

    if (action === null) {
      throw new Error("action not found");
    }

    switch (action) {
      case "get-all":
        return getAll();
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
