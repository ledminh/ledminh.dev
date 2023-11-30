import Title from "@/components/Title";
import EducationList from "@/components/educations/EducationList";

export default function EducationPage() {
  return (
    <Wrapper>
      <Title>Education</Title>
      <EducationList />
    </Wrapper>
  );
}

/******************
 * Components
 */
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-8">{children}</div>
);
