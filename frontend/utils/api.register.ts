// utils/api.ts
import { RegisterUserRequest, RegisterUserResponse } from "@/types/auth";
import axios from "axios";

export async function registerUser(
  user: RegisterUserRequest,
): Promise<RegisterUserResponse> {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/members/users/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { user },
    },
  );

  const data: RegisterUserResponse = await response.data;
  return data;
}
