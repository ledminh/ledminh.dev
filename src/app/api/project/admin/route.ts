import { NextRequest, NextResponse } from "next/server";
import type { ProjectResponse, ProjectsResponse } from "@/types";

import add from "./add";
import update from "./update";
import del from "./del";
import authenticate from "@/utils/authenticate";

export async function POST(
  request: NextRequest
): Promise<NextResponse<ProjectResponse | ProjectsResponse>> {
  try {

    const { data, error } = await authenticate();

    if (error) {
      throw new Error(error.message);
    }


    const action = request.nextUrl.searchParams.get("action");

    if (action === null) {
      throw new Error("action not found");
    }

    switch (action) {
      case "add":
        return add(request);
      case "update":
        return update(request);
      case "delete":
        return del(request);

      default:
        throw new Error("type not found");
    }
  } catch (error: any) {
    return NextResponse.json({
      errorMessage: error.message as string,
      payload: null,
    });
  }
}
