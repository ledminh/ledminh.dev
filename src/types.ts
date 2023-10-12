interface Entity {
  id: string;
}

interface Image extends Entity {
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
  projects: Project[];
  sortedBy: "auto" | "manual";
}

export type NewProjectCategory = Omit<ProjectCategory, "id" | "projects">;

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

export type ProjectRequest = {
  type: "add-project-category";
  payload: NewProjectCategory;
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
