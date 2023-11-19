"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const supabase = createClientComponentClient();

  const router = useRouter();

  const onClick = () => {
    supabase.auth.signOut().then(() => router.refresh());
  };

  return (
    <button
      className="p-2 border border-blue-800 active:bg-slate-400"
      onClick={onClick}
    >
      Sign Out
    </button>
  );
}
