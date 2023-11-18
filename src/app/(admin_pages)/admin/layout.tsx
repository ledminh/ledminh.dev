import SignOutButton from "@/components/admin/SignOutButton";

import authenticate from "@/utils/authenticate";
import Link from "next/link";

export default async function LayoutPage(props: { children: React.ReactNode }) {
  const { data, error } = await authenticate();

  if (error) {
    return (
      <div>
        <p>There was an error signing you in.</p>
        <pre>{error.message}</pre>
        <Link href="/sign-in">Sign in</Link>
      </div>
    );
  } else if (!data) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="border-2 border-red-500 p-4 m-4">
      <h1 className="text-3xl text-red-700">ADMIN PANEL</h1>
      <p>Welcome, {data.user.email}</p>
      <SignOutButton />

      {props.children}
    </div>
  );
}
