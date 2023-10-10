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

/***********************
 * Projects
 */

interface ProjectCategoryAutoOrder extends Entity {
  order: number;
  title: string;
  description: string;
  projects: Project[];
  sortedBy: "auto";
}

interface ProjectCategoryManualOrder extends Entity {
  order: number;
  title: string;
  description: string;
  projects: (Project & { order: number })[];
  sortedBy: "manual";
}

export type ProjectCategory =
  | ProjectCategoryAutoOrder
  | ProjectCategoryManualOrder;

export interface Project extends Entity {
  title: string;
  description: string;
  github: string;
  demo: string;
  image: Image;
}
