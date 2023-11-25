export default function Title(props: { children: React.ReactNode }) {
  return (
    <h1 className="border-b-4 border-gray-700 text-4xl text-gray-700 font-bold ">
      {props.children}
    </h1>
  );
}
