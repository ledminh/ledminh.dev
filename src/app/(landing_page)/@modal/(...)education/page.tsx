import InfoModal from "@/components/modals/Modal.Info";
import EducationList from "@/components/educations/EducationList";

export default function AboutModal() {
  return (
    <InfoModal title="Education">
      <EducationList />
    </InfoModal>
  );
}
