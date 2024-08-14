// utils/api.register.ts
import {
  RegisterUserRequest,
  RegisterUserResponse,
} from "@/types/auth.register";
export async function registerUser(
  user: RegisterUserRequest,
): Promise<RegisterUserResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/members/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    },
  );

  const data: RegisterUserResponse = await response.json();
  return data;
}
