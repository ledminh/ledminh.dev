import SignOutButton from "@/components/admin/SignOutButton";
import authenticate from "@/utils/authenticate";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const { data, error } = await authenticate();

  if (error) {
    return (
      <div>
        <p>There was an error signing you in.</p>
        <pre>{error.message}</pre>
        <Link href="/sign-in">
          Sign in
        </Link>
      </div>
    );
  }

  

  return (
    <div>
      <p>Welcome, {data?.user.email}</p>
      <SignOutButton />
    </div>
  );
}
