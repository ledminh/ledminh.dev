import { MainMenuData as MainMenuDataType } from "./types";

export const mainMenuData: MainMenuDataType[] = [
  {
    id: "learning-journal",
    title: "Learning Journal",
    link: "/learning-journal",
    description: "My journey of continuous learning and growth",
  },
  {
    id: "projects",
    title: "Projects",
    link: "/projects",
    description: "Check out my projects",
  },
  {
    id: "blog",
    title: "Blog",
    link: "/blog",
    description: "Read about my thoughts on various topics",
  },
  {
    id: "education",
    title: "Education",
    link: "/education",
    description: "View my educational background and qualifications",
  },
];

export const supabase_project_images_bucket = "project_images";
