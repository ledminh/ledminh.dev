// Create a new page named ProjectsPage

import { ProjectDB } from "@/data";
import { ProjectCategoryWithProjects } from "@/types";

import ProjectCard from "@/components/projects/ProjectCard";

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
          <CategoryCard
            key={category.id}
            title={category.title}
            description={category.description}
          >
            {category.projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                github={project.github}
                demo={project.demo}
              />
            ))}
          </CategoryCard>
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

const CategoryCard = (props: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <li className="bg-gray-100 p-4 shadow-md shadow-black flex flex-col gap-3 rounded-lg">
    <h2 className="font-bold text-2xl">{props.title}</h2>
    <p>{props.description}</p>
    <ul className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {props.children}
    </ul>
  </li>
);
