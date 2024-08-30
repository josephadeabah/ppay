"use client";

import { BenchmarkDataType } from "@/app/dashboard/benchmark/data";
import { Card, CardContent, CardHeader } from "@/components/card/Card";
import ProgressRing from "@/components/progress/ProgressRing";
import { EmployeeData } from "@/types/payaid.data";
import { getCurrentMonthName } from "@/utils/date.utils";
import { Chart, registerables } from "chart.js";
import { useMemo } from "react";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

const PromotionDeterminant = ({
  data,
  benchmarkData,
}: {
  data: EmployeeData[];
  benchmarkData: BenchmarkDataType[];
}) => {
  // Function to determine promotion based on multiple factors
  const isPromoted = (row: EmployeeData): boolean => {
    const performancePoints = parseFloat(row.performancePoints) || 0;
    const managerRating = parseFloat(row.managerRating) || 0;
    return performancePoints >= 80 && managerRating >= 4; // Example thresholds
  };

  // Calculate statistics dynamically for multiple factors
  const calculatePromotionStats = (data: EmployeeData[]) => {
    const genderStats = data.reduce(
      (acc, row) => {
        const gender = row.gender;
        acc[gender] = acc[gender] || { total: 0, promoted: 0 };
        acc[gender].total += 1;
        if (isPromoted(row)) acc[gender].promoted += 1;
        return acc;
      },
      {} as { [key: string]: { total: number; promoted: number } },
    );

    const jobTitleStats = data.reduce(
      (acc, row) => {
        const jobTitleStats = row.jobTitle;
        acc[jobTitleStats] = acc[jobTitleStats] || {
          total: 0,
          promoted: 0,
        };
        acc[jobTitleStats].total += 1;
        if (isPromoted(row)) acc[jobTitleStats].promoted += 1;
        return acc;
      },
      {} as { [key: string]: { total: number; promoted: number } },
    );

    const jobLevelStats = data.reduce(
      (acc, row) => {
        const jobLevel = row.jobLevel;
        acc[jobLevel] = acc[jobLevel] || { total: 0, promoted: 0 };
        acc[jobLevel].total += 1;
        if (isPromoted(row)) acc[jobLevel].promoted += 1;
        return acc;
      },
      {} as { [key: string]: { total: number; promoted: number } },
    );

    return { genderStats, jobTitleStats, jobLevelStats };
  };

  const { genderStats, jobTitleStats, jobLevelStats } = useMemo(
    () => calculatePromotionStats(data),
    [data],
  );

  // Filter employees who are likely promoted
  const promotedEmployees = data.filter(isPromoted);

  // Data for visualizations
  const createChartData = (stats: {
    [key: string]: { total: number; promoted: number };
  }) => {
    return {
      labels: Object.keys(stats),
      datasets: [
        {
          label: "Promotion Rate (%)",
          data: Object.values(stats).map(({ total, promoted }) =>
            total > 0 ? (promoted / total) * 100 : 0,
          ),
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  // Benchmark comparison logic
  const createBenchmarkComparisonData = () => {
    const roles = Array.from(new Set(data.map((row) => row.jobTitle)));

    const roleComparison = roles.map((role) => {
      const internalSalaries = data
        .filter((row) => row.jobTitle === role)
        .map((row) => parseFloat(row.baseSalary));
      const benchmark = benchmarkData?.find((bench) => bench.role === role);
      const benchmarkSalary = benchmark?.benchmarkSalary ?? 0;

      return {
        role,
        averageInternalSalary:
          internalSalaries.length > 0
            ? internalSalaries.reduce((a, b) => a + b) / internalSalaries.length
            : 0,
        benchmarkSalary,
      };
    });

    return {
      labels: roleComparison.map((comp) => comp.role),
      datasets: [
        {
          label: "Internal Salary",
          data: roleComparison.map((comp) => comp.averageInternalSalary),
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Benchmark Salary",
          data: roleComparison.map((comp) => comp.benchmarkSalary),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  const benchmarkComparisonData = createBenchmarkComparisonData();

  return (
    <div className="w-full max-w-full rounded-lg bg-white p-2 dark:bg-gray-900">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Based on the data you provided
      </h2>

      {/* Display names of promoted employees */}
      <div className="mb-6">
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          Employees Likely to Have Been Promoted
        </span>
        <ul className="mt-2 list-disc pl-5 text-sm">
          {promotedEmployees.map((employee) => (
            <li
              key={employee.employeeId}
              className="text-gray-700 dark:text-gray-300"
            >
              {employee.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Gender Promotion Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {Object.keys(genderStats).map((gender) => {
          const { total, promoted } = genderStats[gender];
          const promotionPercentage =
            total > 0 ? Math.round((promoted / total) * 100) : 0;
          return (
            <Card key={gender}>
              <CardHeader title={`${gender} Promoted`} />
              <CardContent>
                <ProgressRing
                  value={promotionPercentage}
                  size={120}
                  strokeWidth={10}
                  color={gender === "Male" ? "blue" : "pink"}
                />
                <p className="mt-2 text-center text-sm dark:text-gray-100">
                  {promoted} out of {total} {gender.toLowerCase()}s were likely
                  to have been promoted this {getCurrentMonthName()}.
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Job Role Promotion Stats */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader title="Promotion by Job Role" />
          <CardContent>
            <Bar
              data={createChartData(jobTitleStats)}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "top" as const },
                  tooltip: {
                    callbacks: {
                      label: (context) => {
                        return `${context.label}: ${(context.raw as number).toFixed(2)}%`;
                      },
                    },
                  },
                },
                scales: {
                  x: { title: { display: true, text: "Job Role" } },
                  y: {
                    title: { display: true, text: "Promotion Rate (%)" },
                    beginAtZero: true,
                  },
                },
              }}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Promotion by Seniority Level" />
          <CardContent>
            <Bar
              data={createChartData(jobLevelStats)}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "top" as const },
                  tooltip: {
                    callbacks: {
                      label: (context) => {
                        return `${context.label}: ${(context.raw as number).toFixed(2)}%`;
                      },
                    },
                  },
                },
                scales: {
                  x: { title: { display: true, text: "Job Level" } },
                  y: {
                    title: { display: true, text: "Promotion Rate (%)" },
                    beginAtZero: true,
                  },
                },
              }}
            />
          </CardContent>
        </Card>
      </div>

      {/* Benchmark Comparison */}
      <div className="mt-8">
        <Card>
          <CardHeader title="Your current salary per role compared to global salary benchmarks per role" />
          <CardContent>
            <Bar
              data={benchmarkComparisonData}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "top" as const },
                  tooltip: {
                    callbacks: {
                      label: (context) => {
                        return `${context.label}: ${(context.raw as number).toFixed(2)}%`;
                      },
                    },
                  },
                },
                scales: {
                  x: { title: { display: true, text: "Role" } },
                  y: {
                    title: { display: true, text: "Salary ($)" },
                    beginAtZero: true,
                  },
                },
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PromotionDeterminant;
