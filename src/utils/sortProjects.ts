import { Project } from "@/types";

export default function sortProjects(
  projects: Project[],
  sortedBy: "auto" | "manual"
): Project[] {
  const newProjects = [...projects];

  if (sortedBy === "auto") {
    newProjects.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    newProjects.sort((a, b) => (a.order as number) - (b.order as number));
  }
  return newProjects;
}
