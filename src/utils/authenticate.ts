import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function authenticate() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session?.user.email !== process.env.ADMIN_EMAIL) {
    return {
      error: {
        message: "Wrong credentials",
      },
      data: null,
    };
  }

  return {
    error: null,
    data: session,
  };
}
