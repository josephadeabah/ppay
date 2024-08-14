// types/auth.login.ts

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  admin: boolean;
  created_at: string;
  updated_at: string;
}

export interface LoginUserResponseSuccess {
  token: string;
  user: User;
}

export interface LoginUserResponseError {
  error: string;
}

export type LoginUserResponse =
  | LoginUserResponseSuccess
  | LoginUserResponseError;
