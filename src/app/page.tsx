import IntroBox from "@/components/home/IntroBox";
import MainMenuFull from "@/components/home/MainMenuFull";

export default function Home() {
  return (
    <Wrapper>
      <IntroBox />
      <div className="hidden sm:block">
        <MainMenuFull />
      </div>
    </Wrapper>
  );
}

/*********************
 * Styles
 */

const Wrapper = (props: { children: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center min-h-screen gap-12 text-center">
    {props.children}
  </div>
);
