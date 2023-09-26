import IntroBox from "@/components/home/IntroBox";
import { mainMenuData } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <IntroBox />
      <ul className="flex items-center justify-between gap-4">
        {mainMenuData.map((item) => (
          <li key={item.id}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

/*********************
 * Styles
 */

const Wrapper = (props: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center">
    {props.children}
  </div>
);
