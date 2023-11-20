import ErrorLoginScreen from "@/components/admin/ErrorLoginScreen";
import SignOutButton from "@/components/admin/SignOutButton";
import UnAuthenticateScreen from "@/components/admin/UnAuthenticateScreen";
import SignIn from "@/components/admin/form/Form.SignIn";

import authenticate from "@/utils/authenticate";
import Link from "next/link";

export default async function LayoutPage(props: { children: React.ReactNode }) {
  const { data, error } = await authenticate();

  if (error) {
    return <ErrorLoginScreen errorMessage={error.message} />;
  } else if (!data) {
    return <UnAuthenticateScreen />;
  }

  return (
    <div className="border-2 border-red-500/60 rounded-lg m-4">
      <section className="bg-red-300/60 p-2 flex justify-between items-center">
        <div>
          <h1 className="text-3xl text-black font-bold">ADMIN PANEL</h1>
          <p className="font-mono text-slate-950">Welcome, {data.user.email}</p>
        </div>
        <div>
          <SignOutButton />
        </div>
      </section>
      <section className="p-4">{props.children}</section>
    </div>
  );
}
