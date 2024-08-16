"use client";

import PaginationComponent from "@/components/pagination/pagination";
import { useEffect, useState } from "react";
import { HiOutlineBriefcase } from "react-icons/hi";
import UsersPageSkeleton from "./loader";

// Define the User type
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

export default function UsersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 9;
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const totalPages = Math.ceil(users.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/members/users`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: User[] = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to get users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <UsersPageSkeleton />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 sm:py-5">
        <div className="mx-auto w-full px-1">
          <div className="relative overflow-hidden bg-white dark:bg-gray-800">
            <div className="h-screen overflow-x-auto">
              <table className="w-full divide-y divide-gray-200 dark:divide-gray-600">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium uppercase text-gray-700 dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium uppercase text-gray-700 dark:text-gray-400"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium uppercase text-gray-700 dark:text-gray-400"
                    >
                      Salary Role
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium uppercase text-gray-700 dark:text-gray-400"
                    >
                      Experience
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium uppercase text-gray-700 dark:text-gray-400"
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium uppercase text-gray-700 dark:text-gray-400"
                    >
                      Industry
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium uppercase text-gray-700 dark:text-gray-400"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium uppercase text-gray-700 dark:text-gray-400"
                    >
                      Company
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium uppercase text-gray-700 dark:text-gray-400"
                    >
                      Actual Salary
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium uppercase text-gray-700 dark:text-gray-400"
                    >
                      Profile
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-600 dark:divide-gray-600 dark:text-gray-200">
                  {currentUsers.map((user) => (
                    <>
                      <tr
                        key={user.id}
                        className="hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src="https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yUFhCM2ZKczBEd2NDVnRleGhIVElNNmxkWG4iLCJyaWQiOiJ1c2VyXzJqWTA4empFUU5XS0oyNXVNOFU5elB3RnhOTyJ9"
                                alt="User Avatar"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-base font-semibold text-gray-900 dark:text-white">
                                ***** ****
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal">
                          {user?.profile?.status}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal">
                          {user?.profile?.salary_role}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal">
                          {user?.profile?.experience}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal">
                          {user?.profile?.country}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal">
                          {user?.profile?.industry}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal">
                          {user?.profile?.category}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal">
                          {user?.profile?.company}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal">
                          {user?.profile?.actual_salary}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal">
                          <button
                            onClick={() => toggleRow(user.id)}
                            className="text-primary-600 dark:text-primary-500"
                          >
                            {expandedRow === user.id ? "Hide" : "Show"}
                          </button>
                        </td>
                      </tr>
                      {expandedRow === user.id && (
                        <tr className="bg-gray-50 dark:bg-gray-800">
                          <td
                            colSpan={11}
                            className="p-4 text-sm font-normal text-gray-900 dark:text-white"
                          >
                            <div className="flex flex-col">
                              <div className="flex items-center space-x-4">
                                <img
                                  className="h-16 w-16 rounded-full object-cover"
                                  src={
                                    user?.profile?.avatar ??
                                    "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yUFhCM2ZKczBEd2NDVnRleGhIVElNNmxkWG4iLCJyaWQiOiJ1c2VyXzJqWTA4empFUU5XS0oyNXVNOFU5elB3RnhOTyJ9"
                                  }
                                  alt="User Avatar"
                                />
                                <div>
                                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {user?.profile?.name}
                                  </div>
                                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    {user?.profile?.role}
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div className="flex flex-row items-center">
                                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Status
                                  </div>
                                  <div className="flex flex-row items-center gap-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                                    {user?.profile?.status === "Online" ? (
                                      <div className="mr-2 inline-block h-3 w-3 rounded-full bg-green-400"></div>
                                    ) : (
                                      <div className="mr-2 inline-block h-3 w-3 rounded-full bg-red-400"></div>
                                    )}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Salary Role:
                                  </div>
                                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    {user?.profile?.salary_role}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Experience:
                                  </div>
                                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    {user?.profile?.experience}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Country:
                                  </div>
                                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    {user?.profile?.country}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Industry:
                                  </div>
                                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    {user?.profile?.industry}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Category:
                                  </div>
                                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    {user?.profile?.category}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Company:
                                  </div>
                                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    {user?.profile?.company}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Actual Salary:
                                  </div>
                                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    {user?.profile?.actual_salary}
                                  </div>
                                </div>
                                {user?.profile?.category === "Employer" &&
                                  user?.profile?.job_website && (
                                    <div>
                                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                        Job Website:
                                      </div>
                                      <a
                                        href={user?.profile?.job_website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-600 dark:text-gray-50"
                                      >
                                        <HiOutlineBriefcase className="mr-1 h-5 w-5" />
                                        {user?.profile?.job_website}
                                      </a>
                                    </div>
                                  )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-8 flex justify-center">
        <PaginationComponent
          initialPage={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
