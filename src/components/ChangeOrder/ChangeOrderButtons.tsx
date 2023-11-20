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
        <div className="flex gap-2 p-2 items-center">
          <button onClick={onSubmit} className="btn btn-secondary btn-sm">
            Submit Order
          </button>
          <button onClick={onCancel} className="btn btn-tertiary btn-sm">
            Cancel
          </button>
        </div>
      )}
    </>
  );
}
