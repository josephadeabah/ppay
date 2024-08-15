"use client";

import PaginationComponent from "@/components/pagination/pagination"; // Import your Pagination component
import { ChartData, ChartOptions } from "chart.js";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { data } from "./data";

const CompanyMetrics: React.FC = () => {
  const metrics = [
    { key: "average_salary", label: "Salaries" },
    { key: "employee_retention", label: "Employee Retention" },
    { key: "work_life_balance", label: "Work Life Balance" },
    { key: "work_environment", label: "Work Environment" },
    { key: "innovation", label: "Innovation" },
    { key: "corporate_culture", label: "Corporate Culture" },
    { key: "job_security", label: "Job Security" },
    { key: "jobs", label: "Jobs" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getRankedCompanies = (metricKey: string) => {
    const sortedCompanies = [...data.companies]
      .map((company) => ({
        ...company,
        value: Number((company as any)[metricKey]) || 0,
      }))
      .sort((a, b) => b.value - a.value);

    let rank = 1;
    let previousValue = sortedCompanies[0]?.value;

    return sortedCompanies.map((company, index) => {
      if (company.value !== previousValue) {
        rank = index + 1;
      }
      previousValue = company.value;
      return {
        ...company,
        rank: rank,
      };
    });
  };

  const createChartData = (metricKey: string): ChartData<"bar"> => {
    const rankedCompanies = getRankedCompanies(metricKey);

    return {
      labels: rankedCompanies.map((company) => company.name),
      datasets: [
        {
          label: metricKey.replace("_", " ").toUpperCase(),
          data: rankedCompanies.map((company) => company.value),
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255, 182, 193, 0.7)", // Light Pink
          hoverBorderColor: "rgba(255, 182, 193, 0.7)",
        },
      ],
    };
  };

  const getBackgroundColorForRank = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-green-200"; // Light Green
      case 2:
        return "bg-yellow-100"; // Light Yellow
      case 3:
        return "bg-orange-300"; // Light Orange
      default:
        return "bg-red-200"; // Light Red
    }
  };

  const getOrdinalSuffix = (rank: number) => {
    if (rank === 1) return "1st";
    if (rank === 2) return "2nd";
    if (rank === 3) return "3rd";
    return `${rank}th`;
  };

  // Calculate paginated data
  const paginatedCompanies = data.companies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="flex w-full flex-col p-3">
      <div className="mb-6 mt-2 flex items-center gap-4 text-xl font-bold text-gray-700 dark:text-gray-50">
        Company Metrics {new Date().getFullYear()} (Live{" "}
        <div className="inline-block h-3 w-3 rounded-full bg-green-400"></div>)
      </div>
      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.key} className="bg-white p-4 dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-50">
              {metric.label}
            </h3>
            <Bar
              data={createChartData(metric.key)}
              options={
                {
                  responsive: true,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                } as ChartOptions<"bar">
              }
            />
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="mb-6 mt-2 flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-50">
          {new Date().getFullYear()} (Live{" "}
          <div className="inline-block h-3 w-3 rounded-full bg-green-400"></div>
          ) in Ranking of Best Companies by
        </div>
        <div className="overflow-x-auto [&::-moz-scrollbar-thumb]:rounded-full [&::-moz-scrollbar-thumb]:bg-gray-200 [&::-moz-scrollbar-track]:m-1 [&::-moz-scrollbar]:w-2 [&::-ms-scrollbar-thumb]:rounded-full [&::-ms-scrollbar-thumb]:bg-gray-200 [&::-ms-scrollbar-track]:m-1 [&::-ms-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:m-1 [&::-webkit-scrollbar]:w-2">
          <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700">
            <thead className="text-sm">
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-200 p-2 text-left text-sm font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-50">
                  Company
                </th>
                {metrics.map((metric) => (
                  <th
                    key={metric.key}
                    className="border border-gray-200 p-2 text-left text-sm font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-50"
                  >
                    {metric.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              {paginatedCompanies.map((company) => {
                const rankedCompanies = metrics.map((metric) =>
                  getRankedCompanies(metric.key).find(
                    (c) => c.name === company.name,
                  ),
                );
                return (
                  <tr
                    key={company.name}
                    className={`${
                      company.name === rankedCompanies[0]?.name
                        ? "bg-white dark:bg-gray-800"
                        : "bg-white dark:bg-gray-900"
                    }`}
                  >
                    <td className="border border-gray-200 p-2 text-gray-700 dark:border-gray-700 dark:text-gray-50">
                      {company.name}
                    </td>
                    {metrics.map((metric) => {
                      const metricValue = Number((company as any)[metric.key]);
                      const rankedCompany = getRankedCompanies(metric.key).find(
                        (c) => c.name === company.name,
                      );

                      const bgColor =
                        metricValue > 0
                          ? getBackgroundColorForRank(
                              rankedCompany?.rank ?? Infinity,
                            )
                          : "bg-white";

                      return (
                        <td
                          key={metric.key}
                          className={`relative border border-gray-200 p-1 text-gray-700 dark:border-gray-700 dark:text-gray-950 ${bgColor}`}
                        >
                          {metricValue > 0 && (
                            <span className="absolute right-0 top-0 px-2 py-0 text-[0.500rem] font-bold text-gray-700 dark:text-gray-950">
                              {getOrdinalSuffix(rankedCompany?.rank ?? 0)}
                            </span>
                          )}
                          <span>{metricValue > 0 ? metricValue : "-"}</span>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <PaginationComponent
          total={Math.ceil(data.companies.length / itemsPerPage)}
          initialPage={currentPage}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default CompanyMetrics;
