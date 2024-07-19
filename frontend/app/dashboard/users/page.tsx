"use client";

import { useState } from "react";

const users = [
  {
    id: 1,
    name: "**** *****",
    role: "Software Engineer",
    status: "Online",
    salaryRole: "Full-time",
    experience: "5 years",
    country: "USA",
    industry: "Technology",
    category: "Employee",
    company: "TechCorp",
    actualSalary: "$100,000",
    avatar:
      "https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "**** *****",
    role: "UX Designer",
    status: "Offline",
    salaryRole: "Part-time",
    experience: "3 years",
    country: "UK",
    industry: "Design",
    category: "Freelance",
    company: "DesignCo",
    actualSalary: "$70,000",
    avatar:
      "https://images.pexels.com/photos/3757371/pexels-photo-3757371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "**** *****",
    role: "Web Developer",
    status: "Online",
    salaryRole: "Part-time",
    experience: "1 year",
    country: "UK",
    industry: "Technology",
    category: "Internship",
    company: "DesignCo",
    actualSalary: "$70,000",
    avatar:
      "https://images.pexels.com/photos/9301463/pexels-photo-9301463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function UsersPage() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 sm:py-5">
        <div className="mx-auto w-full px-1">
          <div className="relative overflow-hidden bg-white dark:bg-gray-800">
            <div className="flex flex-col space-y-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:space-x-4 lg:space-y-0">
              <div className="flex flex-1 items-center space-x-4">
                <h5>
                  <span className="text-gray-500">Total Users:</span>
                  <span className="dark:text-white">123456</span>
                </h5>
              </div>
              <div className="flex flex-shrink-0 flex-col space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-end">
                <button
                  type="button"
                  className="flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="mr-2 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  Find User By
                </button>
                <button
                  type="button"
                  className="flex flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                  Update users
                </button>
                <button
                  type="button"
                  className="flex flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M3 16.5V7.875A2.625 2.625 0 015.625 5.25h12.75A2.625 2.625 0 0121 7.875V16.5M3 16.5h18m-9-6v6m-6-6v6m12-6v6"
                    />
                  </svg>
                  Export
                </button>
              </div>
            </div>
            <div className="h-screen overflow-x-auto ">
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
                      Role
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
                  {users.map((user) => (
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
                                src={user.avatar}
                                alt={user.name}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-base font-semibold text-gray-900 dark:text-white">
                                {user.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                          {user.role}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-semibold text-gray-500 dark:text-gray-100">
                          {user.status === "Offline" ? (
                            <div className="mr-2 inline-block h-4 w-4 rounded-full bg-red-400"></div>
                          ) : (
                            <div className="mr-2 inline-block h-4 w-4 rounded-full bg-green-400"></div>
                          )}
                          {user.status}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                          {user.salaryRole}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                          {user.experience}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                          {user.country}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                          {user.industry}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                          {user.category}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                          {user.company}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                          {user.actualSalary}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                          <button
                            onClick={() => toggleRow(user.id)}
                            className="text-blue-500 dark:text-blue-400"
                          >
                            {expandedRow === user.id ? "Close" : "View"}
                          </button>
                        </td>
                      </tr>
                      {expandedRow === user.id && (
                        <tr
                          key={`${user.id}-details`}
                          className="bg-gray-100 dark:bg-gray-700"
                        >
                          <td colSpan={11} className="p-4">
                            <div className="flex flex-col space-y-2">
                              <div>
                                <strong>Profile Details:</strong>
                              </div>
                              <div>
                                <strong>Role:</strong> {user.role}
                              </div>
                              <div>
                                <strong>Experience:</strong> {user.experience}
                              </div>
                              <div>
                                <strong>Country:</strong> {user.country}
                              </div>
                              <div>
                                <strong>Industry:</strong> {user.industry}
                              </div>
                              <div>
                                <strong>Category:</strong> {user.category}
                              </div>
                              <div>
                                <strong>Company:</strong> {user.company}
                              </div>
                              <div>
                                <strong>Actual Salary:</strong>{" "}
                                {user.actualSalary}
                              </div>
                              {/* Add more details as needed */}
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <nav
              className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
              aria-label="Table navigation"
            >
              <span className="flew-row flex gap-0.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span className="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>
                of
                <span className="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 flex items-center justify-center border border-primary-300 bg-primary-50 px-3 py-2 text-sm leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
