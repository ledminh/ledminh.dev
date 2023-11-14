import type { AdminLoginInfo, AdminLoginRequest } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

async function login(email: string, password: string): Promise<AdminLoginInfo> {
  const request: AdminLoginRequest = {
    type: "admin-login",
    payload: {
      email,
      password,
    },
  };

  const supabase = createClientComponentClient();

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
