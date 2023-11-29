// Create a new page named ProjectsPage

import { ProjectDB } from "@/data";
import { ProjectCategoryWithProjects } from "@/types";

import CategoryCard from "@/components/projects/CategoryCard";
import Title from "@/components/Title";

export default async function ProjectsPage() {
  const projectCategories = (await ProjectDB.getCategories({
    withProjects: true,
  })) as ProjectCategoryWithProjects[];

  const sortedProjectCategories = projectCategories.map((category) => {
    const sortedProjects = category.projects.sort((a, b) => {
      if (category.sortedBy === "auto") {
        return a.title.localeCompare(b.title);
      }
      return a.order - b.order;
    });

    return {
      ...category,
      projects: sortedProjects,
    };
  });

  return (
    <Wrapper>
      <Title>Project</Title>
      <List>
        {sortedProjectCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </List>
    </Wrapper>
  );
}

/******************
 * Components
 */
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-8">{children}</div>
);

const List = (props: { children: React.ReactNode }) => (
  <ul className="flex flex-col gap-8">{props.children}</ul>
);
