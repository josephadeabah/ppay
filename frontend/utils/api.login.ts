// utils/api.login.ts
import { LoginUserRequest, LoginUserResponse } from "@/types/auth.login";

export async function loginUser(
  user: LoginUserRequest,
): Promise<LoginUserResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/members/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    },
  );

  const data: LoginUserResponse = await response.json();
  return data;
}
