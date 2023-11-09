import { UserButton } from "@clerk/nextjs";

export default function LayoutPage(props: { children: React.ReactNode }) {
  return (
    <div className="border-2 border-red-500 p-4 m-4">
      <h1 className="text-3xl text-red-700">ADMIN PANEL</h1>

      <UserButton afterSignOutUrl="/admin/sign-in" />

      {props.children}
    </div>
  );
}
