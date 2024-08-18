"use client";
import { getCurrentMonthName, getCurrentYear } from "@/utils/date.utils";
import { useMemo } from "react";

export default function RecentDownloads() {
  // Example download data
  const downloadData = [
    { fileName: "Report_Q1_2024.pdf", user: "John Doe", date: "2024-08-15" },
    {
      fileName: "Salary_Analysis_2024.xlsx",
      user: "Jane Smith",
      date: "2024-08-14",
    },
    {
      fileName: "Market_Research_2024.pptx",
      user: "Alice Johnson",
      date: "2024-08-13",
    },
    {
      fileName: "Annual_Review_2023.docx",
      user: "Bob Brown",
      date: "2024-08-12",
    },
    {
      fileName: "Project_Proposal.pdf",
      user: "Charlie Green",
      date: "2024-08-11",
    },
    // Add more entries as needed
  ];

  const filteredDownloadData = useMemo(() => {
    // Sort by date and get recent 5 downloads
    const sortedDownloads = [...downloadData]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);

    return sortedDownloads;
  }, [downloadData]);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-6">
      <div className="mb-4 rounded bg-gray-50 p-4 text-center text-sm font-bold text-gray-700 dark:text-gray-200">
        Recent Downloads in {getCurrentMonthName()}
        {", "}
        {getCurrentYear()}
      </div>
      <div className="overflow-x-auto [&::-moz-scrollbar-thumb]:rounded-full [&::-moz-scrollbar-thumb]:bg-gray-200 [&::-moz-scrollbar-track]:m-1 [&::-moz-scrollbar]:w-2 [&::-ms-scrollbar-thumb]:rounded-full [&::-ms-scrollbar-thumb]:bg-gray-200 [&::-ms-scrollbar-track]:m-1 [&::-ms-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:m-1 [&::-webkit-scrollbar]:w-2">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                File Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                User
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {filteredDownloadData.map((download, index) => (
              <tr key={index}>
                <td className="break-words px-4 py-2 text-sm text-gray-800">
                  {download.fileName}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  {download.user}
                </td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  {download.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
