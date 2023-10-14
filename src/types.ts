interface Entity {
  id: string;
}

export interface Image extends Entity {
  url: string;
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
    };

export type ProjectResponse =
  | {
      errorMessage: null;
      payload: ProjectCategory;
    }
  | {
      errorMessage: string;
      payload: null;
    };
