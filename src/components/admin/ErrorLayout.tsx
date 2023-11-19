import { ReactNode } from "react";

export default function ErrorLayout(props: { children: ReactNode }) {
  return (
    <div className="fixed w-screen h-screen bg-red-100/50 flex justify-center items-center">
      <div className="border-4 border-red-700/60 p-4 flex flex-col justify-center items-center gap-4">
        {props.children}
      </div>
    </div>
  );
}
