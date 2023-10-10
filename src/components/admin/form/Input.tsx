export default function Input(props: { [x: string]: any }) {
  return (
    <input
      {...props}
      className="block w-full rounded-md border border-black py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
      focus:outline-none focus:ring-black disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
    />
  );
}
