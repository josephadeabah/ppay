"use client";

import ToastComponent from "@/components/toast/Toast";
import { useEffect, useState } from "react";
import { HiOutlineBriefcase } from "react-icons/hi";
import UserProfileSkeleton from "./loader";

// Define the UserProfile and User types
type UserProfile = {
  id: number;
  user_id: number;
  name: string;
  role: string;
  status: string;
  salary_role: string;
  experience: string;
  country: string;
  industry: string;
  category: string;
  company: string;
  actual_salary: string;
  job_website: string;
  avatar: string;
  created_at: string;
  updated_at: string;
};

type User = {
  id: number;
  email: string;
  password_digest: string;
  created_at: string;
  updated_at: string;
  admin: boolean;
  profile?: UserProfile;
};

export default function UserProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);

        const storedData = localStorage.getItem("token");
        const token = storedData ? JSON.parse(storedData).token : null;

        if (!token) {
          throw new Error("Token not found");
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/members/users/me`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const data: User = await response.json();
        setUser(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch user");
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleSaveProfile = async () => {
    if (!user) return;

    const updatedData = {
      user: {
        email: user.email,
        profile_attributes: {
          name: user.profile?.name,
          role: user.profile?.role,
          status: user.profile?.status,
          salary_role: user.profile?.salary_role,
          experience: user.profile?.experience,
          country: user.profile?.country,
          industry: user.profile?.industry,
          category: user.profile?.category,
          company: user.profile?.company,
          actual_salary: user.profile?.actual_salary,
          job_website: user.profile?.job_website,
          avatar: user.profile?.avatar,
        },
      },
    };

    try {
      const storedData = localStorage.getItem("token");
      const token = storedData ? JSON.parse(storedData).token : null;

      if (!token) {
        throw new Error("Token not found");
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/members/users/me`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const updatedUser = await response.json();
      setUser(updatedUser);
      setSuccess("Profile updated successfully");
      setShowToast(true);
      setEditing(false);
    } catch (err) {
      setError("Failed to update profile");
      setShowToast(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <UserProfileSkeleton />;
  }
  if (error) return <p>{error}</p>;

  return (
    <>
      {/* Display Toast */}
      {showToast && error && (
        <ToastComponent
          type="error"
          isOpen={showToast}
          onClose={() => setShowToast(false)}
          description={error}
        />
      )}
      {showToast && success && (
        <ToastComponent
          type="success"
          isOpen={showToast}
          onClose={() => setShowToast(false)}
          description={success}
        />
      )}

      <div className="max-h-screen bg-gray-100 px-2 py-3 dark:bg-gray-900">
        <div className="mx-auto  overflow-hidden rounded-lg bg-white dark:bg-gray-800">
          <div className="flex justify-end p-6">
            <button
              onClick={handleEditToggle}
              className="rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
            >
              {editing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          <div className="flex items-center space-x-6 p-6">
            <img
              className="h-24 w-24 rounded-full"
              src={
                user?.profile?.avatar &&
                "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yUFhCM2ZKczBEd2NDVnRleGhIVElNNmxkWG4iLCJyaWQiOiJ1c2VyXzJqWTA4empFUU5XS0oyNXVNOFU5elB3RnhOTyJ9"
              }
              alt="User Avatar"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {user?.profile?.name ?? "User Name"}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {user?.email ?? "user@example.com"}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user?.profile?.role ?? "User Role"}
              </p>
            </div>
          </div>

          {editing ? (
            <div className="space-y-4 p-6">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={user?.profile?.name ?? ""}
                  onChange={(e) =>
                    setUser((prev) =>
                      prev?.profile
                        ? {
                            ...prev,
                            profile: { ...prev.profile, name: e.target.value },
                          }
                        : prev,
                    )
                  }
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
                <input
                  type="text"
                  placeholder="Role"
                  value={user?.profile?.role ?? ""}
                  onChange={(e) =>
                    setUser((prev) =>
                      prev?.profile
                        ? {
                            ...prev,
                            profile: { ...prev.profile, role: e.target.value },
                          }
                        : prev,
                    )
                  }
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Status"
                  value={user?.profile?.status ?? ""}
                  onChange={(e) =>
                    setUser((prev) =>
                      prev?.profile
                        ? {
                            ...prev,
                            profile: {
                              ...prev.profile,
                              status: e.target.value,
                            },
                          }
                        : prev,
                    )
                  }
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
                <input
                  type="text"
                  placeholder="Salary Role"
                  value={user?.profile?.salary_role ?? ""}
                  onChange={(e) =>
                    setUser((prev) =>
                      prev?.profile
                        ? {
                            ...prev,
                            profile: {
                              ...prev.profile,
                              salary_role: e.target.value,
                            },
                          }
                        : prev,
                    )
                  }
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Experience"
                  value={user?.profile?.experience ?? ""}
                  onChange={(e) =>
                    setUser((prev) =>
                      prev?.profile
                        ? {
                            ...prev,
                            profile: {
                              ...prev.profile,
                              experience: e.target.value,
                            },
                          }
                        : prev,
                    )
                  }
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
                <input
                  type="text"
                  placeholder="Country"
                  value={user?.profile?.country ?? ""}
                  onChange={(e) =>
                    setUser((prev) =>
                      prev?.profile
                        ? {
                            ...prev,
                            profile: {
                              ...prev.profile,
                              country: e.target.value,
                            },
                          }
                        : prev,
                    )
                  }
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Industry"
                  value={user?.profile?.industry ?? ""}
                  onChange={(e) =>
                    setUser((prev) =>
                      prev?.profile
                        ? {
                            ...prev,
                            profile: {
                              ...prev.profile,
                              industry: e.target.value,
                            },
                          }
                        : prev,
                    )
                  }
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
                <input
                  type="text"
                  placeholder="Category"
                  value={user?.profile?.category ?? ""}
                  onChange={(e) =>
                    setUser((prev) =>
                      prev?.profile
                        ? {
                            ...prev,
                            profile: {
                              ...prev.profile,
                              category: e.target.value,
                            },
                          }
                        : prev,
                    )
                  }
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Company"
                  value={user?.profile?.company ?? ""}
                  onChange={(e) =>
                    setUser((prev) =>
                      prev?.profile
                        ? {
                            ...prev,
                            profile: {
                              ...prev.profile,
                              company: e.target.value,
                            },
                          }
                        : prev,
                    )
                  }
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
                <input
                  type="text"
                  placeholder="Salary"
                  value={user?.profile?.actual_salary ?? ""}
                  onChange={(e) =>
                    setUser((prev) =>
                      prev?.profile
                        ? {
                            ...prev,
                            profile: {
                              ...prev.profile,
                              actual_salary: e.target.value,
                            },
                          }
                        : prev,
                    )
                  }
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Job Website"
                  value={user?.profile?.job_website ?? ""}
                  onChange={(e) =>
                    setUser((prev) =>
                      prev?.profile
                        ? {
                            ...prev,
                            profile: {
                              ...prev.profile,
                              job_website: e.target.value,
                            },
                          }
                        : prev,
                    )
                  }
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
              </div>
              <button
                onClick={handleSaveProfile}
                className="w-1/2 rounded-lg bg-gray-500 px-4 py-2 text-white transition duration-300 hover:bg-green-600 dark:bg-gray-950"
              >
                Save Profile
              </button>
            </div>
          ) : (
            <div className="max-h-screen space-y-4 p-6">
              <div className="flex items-center space-x-2">
                <HiOutlineBriefcase className="text-gray-500 dark:text-gray-300" />
                <p className="text-gray-800 dark:text-white">
                  {user?.profile?.company ?? "Company Name"}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-gray-800 dark:text-white">
                  {user?.profile?.actual_salary ?? "Actual Salary"}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-gray-800 dark:text-white">
                  {user?.profile?.experience ?? "Experience"}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-gray-800 dark:text-white">
                  {user?.profile?.category ?? "Category"}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-gray-800 dark:text-white">
                  {user?.profile?.country ?? "Country"}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-gray-800 dark:text-white">
                  {user?.profile?.industry ?? "Industry"}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-gray-800 dark:text-white">
                  {user?.profile?.job_website ?? "Website"}
                </p>
              </div>
            </div>
          )}
          <div className="px-2 py-5 text-sm font-normal text-gray-500 dark:text-gray-50">
            Note: All fields are optional but it is neccessary for us to provide
            the right data about global wages and salaries analysis for you to
            have the best possible data experience on our platform. So please
            fill all the fields with your accurate data.
          </div>
        </div>
      </div>
    </>
  );
}
