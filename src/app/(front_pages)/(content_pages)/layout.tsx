import "@/styles/globals.css";

import { AboutIcon, HomeIcon, ProjectIcon } from "@/components/icons";
import Link from "next/link";
import { FC } from "react";

export default function ContentPageLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl xl:mx-auto mx-4 my-8 flex flex-col gap-8">
      <header>
        <ul className="flex gap-12 justify-start">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.url}
              className="flex flex-col justify-between items-center font-semibold hover:bg-slate-300 bg-transparent w-10 h-10 rounded-full"
            >
              <link.Icon />
              <span>{link.label}</span>
            </Link>
          ))}
        </ul>
      </header>
      <main>{props.children}</main>
    </div>
  );
}

/********************
 * Links
 */
const links: {
  label: string;
  url: string;
  Icon: FC;
}[] = [
  {
    label: "Home",
    url: "/",
    Icon: HomeIcon,
  },
  {
    label: "Projects",
    url: "/projects",
    Icon: ProjectIcon,
  },
  {
    label: "About",
    url: "/about",
    Icon: AboutIcon,
  },
];
