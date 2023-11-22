// Create a new page named ProjectsPage

import { ProjectDB } from "@/data";
import { ProjectCategoryWithProjects } from "@/types";
import Image from "next/image";
import Link from "next/link";

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
      <CategoryList categories={sortedProjectCategories} />
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

const CategoryList = ({
  categories,
}: {
  categories: ProjectCategoryWithProjects[];
}) => (
  <ul className="flex flex-col gap-5">
    {categories.map((category) => (
      <li
        key={category.id}
        className="bg-gray-100 p-4 shadow-md shadow-black flex flex-col gap-3 rounded-lg"
      >
        <h2 className="font-bold text-2xl">{category.title}</h2>
        <p>{category.description}</p>
        <ul className="flex gap-4 flex-wrap justify-between">
          {category.projects.map((project) => (
            <li
              key={project.id}
              className="border border-slate-700 rounded-md overflow-hidden flex flex-col justify-between"
            >
              <h3 className="bg-slate-700 text-white p-2">{project.title}</h3>
              <p className="p-2 text-sm">{project.description}</p>
              <div className="relative w-40 h-40">
                <Image
                  src={project.image.src}
                  className="object-cover"
                  fill
                  alt={project.title}
                />
              </div>
              <div>
                <Link href={project.github}>GITHUB</Link>
                <Link href={project.demo}>DEMO</Link>
              </div>
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);
