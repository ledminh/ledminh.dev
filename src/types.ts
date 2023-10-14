interface Entity {
  id: string;
}

export interface Image extends Entity {
  src: string;
  alt: string;
}

/***********************
 * Main Menu
 */

export interface MainMenuData extends Entity {
  title: string;
  link: string;
  description: string;
}

export interface ProjectCategory extends Entity {
  order: number;
  title: string;
  description: string;
  sortedBy: "auto" | "manual";
}

export interface ProjectCategoryWithProjects extends ProjectCategory {
  projects: Project[];
}

export type NewProjectCategory = Omit<ProjectCategory, "id">;

export interface Project extends Entity {
  order: number | null;
  title: string;
  description: string;
  github: string;
  demo: string;
  image: Image;
}

export type NewProject = Omit<Project, "id" | "image"> & {
  image: File;
};

/*************************
 * API Calls
 */

export type ProjectRequest =
  | {
      type: "add-project-category";
      payload: NewProjectCategory;
    }
  | {
      type: "update-project-category";
      payload: ProjectCategory;
    }
  | {
      type: "delete-project-category";
      payload: string;
    }
  | {
      type: "add-project";
      payload: FormData;
    };

export type ProjectResponse =
  | {
      errorMessage: null;
      payload: ProjectCategory | Project;
    }
  | {
      errorMessage: string;
      payload: null;
    };
