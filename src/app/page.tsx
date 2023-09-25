import { mainMenuData } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <p className="flex flex-col mt-4 text-2xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-800 to-orange-950">
            Hello, I'm Minh Le.
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-800 to-orange-950">
            I'm a software engineer.
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-800 to-orange-950">
            I'm proficient in ReactJS, NextJS, and TypeScript. I'm also a fan of
            TailwindCSS.
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-800 to-orange-950">
            I'm currently learning AWS and database.
          </span>
        </p>
        <ul className="flex items-center justify-between gap-4">
          {mainMenuData.map((item) => (
            <li>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
