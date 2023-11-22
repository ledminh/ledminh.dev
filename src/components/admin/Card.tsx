import Link from "next/link";

export const CardWrapper = (
  props: {
    children: React.ReactNode;
    className?: string;
  } & (
    | {
        type: "div";
        href?: undefined;
      }
    | {
        type: "link";
        href: string;
      }
  )
) =>
  props.type === "link" ? (
    <Link
      href={props.href}
      className={`hover:bg-gray-300 rounded-lg shadow-sm shadow-slate-700 overflow-hidden h-full flex flex-col justify-between ${props.className}`}
    >
      {props.children}
    </Link>
  ) : (
    <div
      className={`rounded-lg shadow-sm shadow-slate-700 overflow-hidden h-full flex flex-col justify-between ${props.className}`}
    >
      {props.children}
    </div>
  );

export const CardHeader = (props: { children: React.ReactNode }) => {
  return (
    <div className="p-2 bg-slate-400 flex justify-between items-center">
      {props.children}
    </div>
  );
};

export const CardBody = (props: { children: React.ReactNode }) => {
  return (
    <div className="p-4 flex flex-col gap-2 text-sm">{props.children}</div>
  );
};

export const CardFooter = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2 justify-center bg-slate-300 p-2">
      {props.children}
    </div>
  );
};
