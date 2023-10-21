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
        <button onClick={() => setIsOpened(true)} className="bg-slate-400 p-2">
          Change Order
        </button>
      )}
      {isOpened && (
        <>
          <button onClick={onSubmit} className="bg-slate-400 p-2">
            Submit Order
          </button>
          <button onClick={onCancel} className="bg-slate-400 p-2">
            Cancel
          </button>
        </>
      )}
    </>
  );
}
