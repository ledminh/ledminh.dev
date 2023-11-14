import SignOutButton from "@/components/admin/SignOutButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div>
      <p>Welcome, {session.user.email}</p>
      <SignOutButton />
    </div>
  );
}
