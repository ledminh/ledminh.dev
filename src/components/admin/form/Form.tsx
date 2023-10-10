const Form = (props: {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form
      className="border border-black rounded-lg p-4 flex flex-col gap-4"
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  );
};

export default Form;
