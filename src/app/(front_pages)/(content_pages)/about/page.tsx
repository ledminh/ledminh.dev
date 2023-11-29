import Title from "@/components/Title";

export default function About() {
  return (
    <Wrapper>
      <Title>About</Title>
    </Wrapper>
  );
}

/******************
 * Components
 */
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-8">{children}</div>
);
