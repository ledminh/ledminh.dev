import {
  Image,
  NewProjectCategory,
  ProjectCategory,
  ProjectCategoryWithProjects,
  Project,
} from "@/types";

import prismaClient from "./prismaClient";

/*************************************
 * ADMIN FUNCTIONS
 *************************************/

// *********************
// Project Category
// *********************

export async function addProjectCategory(
  newCategory: NewProjectCategory
): Promise<ProjectCategory> {
  const returnedCategory = await prismaClient.projectCategory.create({
    data: { ...newCategory, numProjects: 0 },
  });

  return {
    id: returnedCategory.id,
    order: returnedCategory.order,
    title: returnedCategory.title,
    description: returnedCategory.description,
    numProjects: returnedCategory.numProjects,
    sortedBy: returnedCategory.sortedBy as "auto" | "manual",
  };
}

export async function updateProjectCategory(
  editedCategory: ProjectCategory
): Promise<ProjectCategory> {
  const oldCategory = await prismaClient.projectCategory.findUnique({
    where: {
      id: editedCategory.id,
    },
  });

  if (!oldCategory) {
    throw new Error("Category not found");
  }

  if (oldCategory.sortedBy === "auto" && editedCategory.sortedBy === "manual") {
    prismaClient.project.updateMany({
      where: {
        categoryId: editedCategory.id,
      },
      data: {
        order: 0,
      },
    });
  }

  const returnedCategory = await prismaClient.projectCategory.update({
    where: {
      id: editedCategory.id,
    },
    data: {
      order: editedCategory.order,
      title: editedCategory.title,
      description: editedCategory.description,
      sortedBy: editedCategory.sortedBy,
    },
  });

  return {
    id: returnedCategory.id,
    order: returnedCategory.order,
    title: returnedCategory.title,
    description: returnedCategory.description,
    numProjects: returnedCategory.numProjects,
    sortedBy: returnedCategory.sortedBy as "auto" | "manual",
  };
}

export async function deleteProjectCategory(
  categoryID: string
): Promise<ProjectCategory> {
  const returnedCategory = await prismaClient.projectCategory.delete({
    where: {
      id: categoryID,
    },
  });

  return {
    id: returnedCategory.id,
    order: returnedCategory.order,
    title: returnedCategory.title,
    description: returnedCategory.description,
    numProjects: returnedCategory.numProjects,
    sortedBy: returnedCategory.sortedBy as "auto" | "manual",
  };
}

export async function getCategories(props: {
  withProjects: boolean;
}): Promise<ProjectCategory[]> {
  return (
    await prismaClient.projectCategory.findMany({
      orderBy: {
        order: "asc",
      },
      ...(props.withProjects
        ? {
            include: {
              projects: {
                include: {
                  image: true,
                },
              },
            },
          }
        : {}),
    })
  ).map((category) => ({
    ...category,
    sortedBy: category.sortedBy as "auto" | "manual",
  }));
}

// *********************
// Project
// *********************

export async function addImage(image: Omit<Image, "id">): Promise<Image> {
  const returnedImage = await prismaClient.image.create({
    data: image,
  });

  return {
    id: returnedImage.id,
    src: returnedImage.src,
    alt: returnedImage.alt,
  };
}

export async function deleteImage(image: Image): Promise<Image> {
  const returnedImage = await prismaClient.image.delete({
    where: {
      id: image.id,
    },
  });

  return {
    id: returnedImage.id,
    src: returnedImage.src,
    alt: returnedImage.alt,
  };
}

export async function addProject(
  categoryID: string,
  newProjectData: Omit<Project, "id">
): Promise<Project> {
  const newProject = await prismaClient.project.create({
    data: {
      ...newProjectData,
      category: {
        connect: {
          id: categoryID,
        },
      },
      image: {
        connect: {
          id: newProjectData.image.id,
        },
      },
    },

    include: {
      image: true,
    },
  });

  await prismaClient.projectCategory.update({
    where: {
      id: categoryID,
    },
    data: {
      numProjects: {
        increment: 1,
      },
    },
  });

  return {
    ...newProject,
    image: newProject.image as Image,
  };
}

export async function updateProject(
  categoryID: string,
  editedProjectData: Project
): Promise<Project> {
  const updatedProject = await prismaClient.project.update({
    where: {
      id: editedProjectData.id,
    },
    data: {
      order: editedProjectData.order,
      title: editedProjectData.title,
      description: editedProjectData.description,
      github: editedProjectData.github,
      demo: editedProjectData.demo,
      category: {
        connect: {
          id: categoryID,
        },
      },
      image: {
        connect: {
          id: editedProjectData.image.id,
        },
      },
    },
    include: {
      image: true,
    },
  });

  return {
    ...updatedProject,
    image: updatedProject.image as Image,
  };
}

export async function deleteProject(projectID: string): Promise<string> {
  const project = await prismaClient.project.findUnique({
    where: {
      id: projectID,
    },
  });

  if (!project) {
    throw new Error("Project not found");
  }

  await prismaClient.image.delete({
    where: {
      id: project.imageId as string,
    },
  });

  await prismaClient.project.update({
    where: {
      id: projectID,
    },
    data: {
      imageId: undefined,
    },
  });

  const deletedProject = await prismaClient.project.delete({
    where: {
      id: projectID,
    },
  });

  if (!deletedProject) {
    throw new Error("Project not found");
  }

  await prismaClient.projectCategory.update({
    where: {
      id: deletedProject.categoryId,
    },
    data: {
      numProjects: {
        decrement: 1,
      },
    },
  });

  return deletedProject.id;
}

export async function getProject(projectID: string): Promise<Project> {
  const project = await prismaClient.project.findUnique({
    where: {
      id: projectID,
    },
    include: {
      image: true,
    },
  });

  if (!project) {
    throw new Error("Project not found");
  }

  return {
    ...project,
    image: project.image as Image,
  };
}

/*************************************
 * USER FUNCTIONS
 *************************************/

export async function getCategoryWithProjects(
  categoryID: string
): Promise<ProjectCategoryWithProjects> {
  const category = await prismaClient.projectCategory.findUnique({
    where: {
      id: categoryID,
    },
    include: {
      projects: {
        include: {
          image: true,
        },
      },
    },
  });

  if (!category) {
    throw new Error("Category not found");
  }

  const projects = category.projects.map((project) => ({
    ...project,
    image: project.image as Image,
  }));

  return {
    ...category,
    sortedBy: category.sortedBy as "auto" | "manual",
    projects,
  };
}
