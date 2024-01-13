import type { AdminLoginInfo } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

async function login(email: string, password: string): Promise<AdminLoginInfo> {
  const supabase = createClientComponentClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  });

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    email: data.user.email as string,
  };
}

export default login;
