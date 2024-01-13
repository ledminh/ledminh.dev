import ErrorLoginScreen from "@/components/admin/ErrorLoginScreen";
import SignOutButton from "@/components/admin/SignOutButton";
import UnAuthenticateScreen from "@/components/admin/UnAuthenticateScreen";

import authenticate from "@/utils/authenticate";

export default async function LayoutPage(props: { children: React.ReactNode }) {
  const { data, error } = await authenticate();

  if (error) {
    return <ErrorLoginScreen errorMessage={error.message} />;
  } else if (!data) {
    return <UnAuthenticateScreen />;
  }

  return (
    <div className="max-w-4xl m-4 border-2 rounded-lg border-red-500/60 lg:mx-auto">
      <section className="flex items-center justify-between p-2 bg-red-300/60">
        <div>
          <h1 className="text-3xl font-bold text-black">ADMIN PANEL</h1>
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
