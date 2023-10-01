import Link from "next/link";
import MainMenuReduced from "@/components/home/MainMenuReduced";

export default function IntroBox() {
  return (
    <Wrapper>
      <div className="block sm:hidden">
        <MainMenuReduced />
      </div>
      <Text>
        <Line>
          <h1 className="text-5xl">
            Hello, I'm <Emphasize>Minh Le</Emphasize>. I'm a web developer.
          </h1>
        </Line>
        <Line>------------</Line>
        <Line>
          I'm proficient in <Emphasize>ReactJS</Emphasize>,{" "}
          <Emphasize>NextJS</Emphasize>, and <Emphasize>TypeScript</Emphasize>.
          I'm also a fan of <Emphasize>TailwindCSS</Emphasize>.
        </Line>
        <Line>
          I'm currently learning <Emphasize>AWS</Emphasize> and{" "}
          <Emphasize>database</Emphasize>.
        </Line>
      </Text>
      <LearnMoreLink />
    </Wrapper>
  );
}

/***********************
 * Styles
 */
const Wrapper = (props: { children: React.ReactNode }) => (
  <div className="relative p-8 mx-4 overflow-hidden border-4 border-gray-500">
    {props.children}
  </div>
);

const Text = (props: { children: React.ReactNode }) => (
  <ul className="flex flex-col gap-4 my-10 font-mono text-2xl">
    {props.children}
  </ul>
);

const Line = (props: { children: React.ReactNode }) => (
  <li className="text-transparent bg-clip-text bg-gradient-to-r from-orange-800 to-orange-950">
    {props.children}
  </li>
);

const Emphasize = (props: { children: React.ReactNode }) => (
  <span className="font-extrabold text-red-700">{props.children}</span>
);

const LearnMoreLink = () => (
  <Link
    href="/about"
    className="absolute inline-block px-4 py-2 mt-4 text-lg font-bold text-white bg-gray-500 rounded-tl-lg -right-1 -bottom-1 hover:text-gray-300"
  >
    Learn more about me
  </Link>
);
