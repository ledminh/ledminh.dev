import { mainMenuData } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <p className="mt-4 text-2xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
            Hello, I'm Minh Le. I'm a Web Developer. I'm proficient in ReactJS,
            NextJS, and TypeScript. I'm also a fan of TailwindCSS. I'm currently
            learning AWS and database.
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
