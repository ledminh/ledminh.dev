"use client";

import { mainMenuData } from "@/constants";
import Link from "next/link";
import { useState } from "react";

export default function MainMenuReduced() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Wrapper>
      <Button onClick={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <ul className="bg-orange-400/95 p-4 rounded-lg grid gap-2">
          {mainMenuData.map((item) => (
            <li
              key={item.id}
              className="border-2 border-white hover:bg-orange-500"
            >
              <Link href={item.link} className="border border-black block p-2">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
}

/************************
 * Styles
 */

const Wrapper = (props: { children: React.ReactNode }) => (
  <div className="absolute flex items-start justify-center top-2 left-2 gap-4 z-50">
    {props.children}
  </div>
);

/**************************
 * Component(s)
 */

const Button = (props: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    className="p-2 text-gray-600 bg-orange-400 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-900 hover:ring-2 hover:ring-orange-900"
    onClick={props.onClick}
  >
    <MenuIcon />
  </button>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-gray-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
