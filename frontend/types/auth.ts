// Define request payload for user registration
export interface RegisterUserRequest {
  email: string;
  password: string;
  password_confirmation: string;
}

// Define successful registration response
export interface RegisterUserResponseSuccess {
  token: string;
  user: {
    id: number;
    email: string;
    password_digest: string;
    created_at: string;
    updated_at: string;
    admin: boolean;
  };
}

// Define error response for failed registration
export interface RegisterUserResponseError {
  errors: string[];
}

// Union type for the registration response
export type RegisterUserResponse =
  | RegisterUserResponseSuccess
  | RegisterUserResponseError;
