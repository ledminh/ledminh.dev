// Create a new page named ProjectsPage

import { ProjectDB } from "@/data";
import { ProjectCategoryWithProjects } from "@/types";

export default async function ProjectsPage() {
  const projectCategories = (await ProjectDB.getCategories({
    withProjects: true,
  })) as ProjectCategoryWithProjects[];

  return (
    <div>
      <h1>Projects Page</h1>
      <ul className="flex flex-wrap gap-2">
        {projectCategories.map((category) => (
          <li key={category.id} className="border border-blue-900">
            <h2 className="font-bold text-2xl">{category.title}</h2>
            <ul>
              {category.projects.map((project) => (
                <li key={project.id}>{project.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
