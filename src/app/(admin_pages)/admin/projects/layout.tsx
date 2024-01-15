import { ReactNode } from "react";

export default function ProjectsAdminLayout(props: { children: ReactNode }) {
  return (
    <>
      <h1 className="mb-4 text-3xl border-b-2 border-black">Projects</h1>
      <div>{props.children}</div>
    </>
  );
}
