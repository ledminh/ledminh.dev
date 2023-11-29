import Title from "@/components/Title";
import AboutContent from "@/components/about/Content";

export default function About() {
  return (
    <Wrapper>
      <Title>About</Title>
      <AboutContent />
    </Wrapper>
  );
}

/******************
 * Components
 */
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-8">{children}</div>
);
