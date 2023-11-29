import AboutContent from "@/components/about/Content";
import InfoModal from "@/components/modals/Modal.Info";

export default function AboutModal() {
  return (
    <InfoModal title="About">
      <AboutContent />
    </InfoModal>
  );
}
