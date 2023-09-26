"use client";

import { mainMenuData } from "@/constants";
import { MainMenuData } from "@/types";
import Link from "next/link";
import { useState } from "react";

export default function MainMenu() {
  const [hoveredItem, setHoveredItem] = useState<MainMenuData | null>(null);

  return (
    <Wrapper>
      <List>
        {mainMenuData.map((item) => (
          <Item key={item.id} item={item} setHoveredItem={setHoveredItem} />
        ))}
      </List>
      <ItemDescription item={hoveredItem} />
    </Wrapper>
  );
}

/*****************
 * Styles
 */
const Wrapper = (props: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-4">{props.children}</div>
);

const List = (props: { children: React.ReactNode }) => (
  <ul className="flex items-center justify-between gap-4">{props.children}</ul>
);

const Item = (props: {
  item: MainMenuData;
  setHoveredItem: (item: MainMenuData | null) => void;
}) => (
  <li key={props.item.id}>
    <Link
      href={props.item.link}
      className="inline-block p-4 font-semibold text-black bg-orange-900/40 hover:text-gray-300 hover:bg-orange-900/80"
      onMouseEnter={() => props.setHoveredItem(props.item)}
      onMouseLeave={() => props.setHoveredItem(null)}
    >
      {props.item.title}
    </Link>
  </li>
);

const ItemDescription = (props: { item: MainMenuData | null }) => (
  <div
    className={`p-4 text-xl text-center text-white h-14 bg-gray-900/50 ${
      props.item !== null ? "opacity-100" : "opacity-0"
    }`}
  >
    {props.item?.description}
  </div>
);
