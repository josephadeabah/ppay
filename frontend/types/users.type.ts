export type UserProfile = {
  id?: number;
  user_id?: number;
  name?: string;
  role?: string;
  status?: string;
  salary_role?: string;
  experience?: string;
  country?: string;
  industry?: string;
  category?: string;
  company?: string;
  actual_salary?: string;
  job_website?: string;
  avatar?: string;
  created_at?: string;
  updated_at?: string;
};

export type User = {
  id: number;
  email: string;
  password_digest: string;
  created_at: string;
  updated_at: string;
  admin: boolean;
  profile?: UserProfile;
};
