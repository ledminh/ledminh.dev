"use client";

import { mainMenuData } from "@/constants";
import { MainMenuData } from "@/types";
import Link from "next/link";
import { useState } from "react";

export default function MainMenuFull() {
  const [focusedItem, setFocusedItem] = useState<MainMenuData | null>(null);

  return (
    <Wrapper>
      <List>
        {mainMenuData.map((item) => (
          <Item key={item.id} item={item} setFocusedItem={setFocusedItem} />
        ))}
      </List>
      <ItemDescription item={focusedItem} />
    </Wrapper>
  );
}

/*****************
 * Styles
 */
const Wrapper = (props: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-4 mx-4">{props.children}</div>
);

const List = (props: { children: React.ReactNode }) => (
  <ul className="flex items-center justify-center gap-6">{props.children}</ul>
);

const Item = (props: {
  item: MainMenuData;
  setFocusedItem: (item: MainMenuData | null) => void;
}) => (
  <li key={props.item.id}>
    <Link
      href={props.item.link}
      className="inline-block p-2 pb-1 text-lg font-semibold text-gray-600 border-b-4 border-b-orange-900/40 hover:border-b-orange-900/80 hover:text-black focus:ring-2 focus:ring-orange-900 focus:ring-offset-2 focus:ring-offset-gray-100 focus:outline-none"
      onMouseEnter={() => props.setFocusedItem(props.item)}
      onMouseLeave={() => props.setFocusedItem(null)}
      onFocus={() => props.setFocusedItem(props.item)}
      onBlur={() => props.setFocusedItem(null)}
    >
      {props.item.title}
    </Link>
  </li>
);

const ItemDescription = (props: { item: MainMenuData | null }) => (
  <div
    className={`p-2 text-sm font-semibold text-white h-[50px] flex justify-center items-center bg-gray-900/50 ${
      props.item !== null ? "opacity-100" : "opacity-0"
    }`}
  >
    {props.item?.description}
  </div>
);
