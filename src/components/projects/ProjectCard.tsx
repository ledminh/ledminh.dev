"use client";

import { Image as ImageType } from "@/types";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

const ProjectCard = (props: {
  title: string;
  description: string;
  image: ImageType;
  github: string;
  demo: string;
}) => {
  const [fullDescription, setFullDescription] = useState(false);

  return (
    <li className="border border-slate-700 rounded-md overflow-hidden flex flex-col justify-between items-center gap-3 transition-all duration-300">
      <h3 className="bg-slate-700 text-white p-2 w-full">{props.title}</h3>
      <p className="p-2 text-center">
        {props.description.length > 50 && !fullDescription ? (
          <>
            <span className="text-sm">
              {props.description.slice(0, 50) + "..."}
            </span>{" "}
            <button
              onClick={() => setFullDescription(true)}
              className="font-mono font-semibold text-blue-700 hover:underline"
            >
              Read More
            </button>
          </>
        ) : (
          <>
            <span className="text-sm">{props.description}</span>{" "}
            <button
              onClick={() => setFullDescription(false)}
              className="font-mono font-semibold text-blue-700 hover:underline"
            >
              Less
            </button>
          </>
        )}
      </p>
      <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-md shadow-black">
        <Image
          src={props.image.src}
          className="object-cover"
          fill
          alt={props.title}
        />
      </div>
      <div className="bg-slate-400 w-full flex justify-center items-center p-2 gap-4">
        <Link
          href={props.github}
          className="border border-white p-2 rounded-md hover:bg-white/80 hover:text-slate-700 font-semibold"
        >
          GITHUB
        </Link>
        <Link
          href={props.demo}
          className="border border-white p-2 rounded-md hover:bg-white/80 hover:text-slate-700 font-semibold"
        >
          DEMO
        </Link>
      </div>
    </li>
  );
};

export default ProjectCard;
