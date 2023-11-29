"use client";

import { AboutIcon, HomeIcon, ProjectIcon } from "@/components/icons";
import Link from "next/link";

import { FC } from "react";

import { useSelectedLayoutSegment } from "next/navigation";

export default function NavigationBar() {
  const segment = useSelectedLayoutSegment();

  return (
    <ul className="flex gap-12 justify-start">
      {links.map((link) => (
        <Link
          href={link.segment === null ? "/" : `/${link.segment}`}
          key={link.id}
          className={`flex flex-col justify-between items-center font-semibold hover:bg-slate-300 w-10 h-10 rounded-full ${
            isActive(segment, link.segment) ? "bg-slate-300" : "bg-transparent"
          }`}
        >
          <link.Icon />
          <span>{link.label}</span>
        </Link>
      ))}
    </ul>
  );
}

/********************
 * Links
 */
const links: {
  id: string;
  label: string;
  segment: string | null;
  Icon: FC;
}[] = [
  {
    id: "home",
    label: "Home",
    segment: null,
    Icon: HomeIcon,
  },
  {
    id: "projects",
    label: "Projects",
    segment: "projects",
    Icon: ProjectIcon,
  },
  {
    id: "about",
    label: "About",
    segment: "about",
    Icon: AboutIcon,
  },
];

/**************************
 * Utils
 */

const isActive = (currentSegment: string | null, linkSegment: string | null) =>
  currentSegment === linkSegment ||
  (currentSegment === null && linkSegment === null);
