import { ReactNode } from "react";
import { deleteImages } from "@/utils/deleteImages";

export default function ProjectsAdminLayout(props: { children: ReactNode }) {
  return (
    <>
      <h1 className="text-3xl mb-4 border-b-2 border-black">Projects</h1>
      <div>{props.children}</div>
    </>
  );
}
