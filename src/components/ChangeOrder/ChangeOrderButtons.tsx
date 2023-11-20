type Props = {
  setIsOpened: (opened: boolean) => void;
  isOpened: boolean;
  onSubmit: () => void;
  onCancel: () => void;
};

export default function ChangeOrderButtons({
  setIsOpened,
  isOpened,
  onSubmit,
  onCancel,
}: Props) {
  return (
    <>
      {!isOpened && (
        <button onClick={() => setIsOpened(true)} className="btn btn-secondary">
          Change Order
        </button>
      )}
      {isOpened && (
        <>
          <button onClick={onSubmit} className="btn btn-secondary">
            Submit Order
          </button>
          <button onClick={onCancel} className="btn btn-secondary">
            Cancel
          </button>
        </>
      )}
    </>
  );
}
