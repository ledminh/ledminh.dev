// Create a new page named ProjectsPage

import { ProjectDB } from "@/data";
import { ProjectCategoryWithProjects } from "@/types";

import CategoryCard from "@/components/projects/CategoryCard";

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
      <Title>Projects</Title>
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
  <div className="max-w-4xl xl:mx-auto mx-4 my-10 flex flex-col gap-8">
    {children}
  </div>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-4xl text-gray-700 font-bold border-b-2 border-b-gray-600">
    {children}
  </h1>
);

const List = (props: { children: React.ReactNode }) => (
  <ul className="flex flex-col gap-5">{props.children}</ul>
);
