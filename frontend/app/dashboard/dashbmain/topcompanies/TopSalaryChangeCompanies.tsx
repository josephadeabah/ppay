"use client";
import { getCurrentMonthName, getCurrentYear } from "@/utils/date.utils";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useMemo, useRef } from "react";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function TopSalaryChangeCompanies() {
  const chartRef = useRef<ChartJS<"bar", number[], string> | null>(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const tableData = [
    { company: "Apple", change: 5, timeframe: "Monthly" },
    { company: "Microsoft", change: 8, timeframe: "Monthly" },
    { company: "Google", change: 0, timeframe: "Yearly" },
    { company: "Amazon", change: 8, timeframe: "Monthly" },
    { company: "Facebook", change: 6, timeframe: "Monthly" },
    { company: "Tesla", change: -1, timeframe: "Yearly" },
    // Add more entries as needed
  ];

  const filteredTableData = useMemo(() => {
    const companyChangeMap: Record<string, number> = {};

    tableData.forEach((data) => {
      if (!companyChangeMap[data.company]) {
        companyChangeMap[data.company] = 0;
      }
      companyChangeMap[data.company] += data.change;
    });

    const sortedCompanies = Object.entries(companyChangeMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5); // Get top 5 companies with the most changes

    return sortedCompanies.map(([company, change]) => ({
      company,
      change,
    }));
  }, [tableData]);

  const chartData = useMemo(() => {
    const labels = filteredTableData.map((data) => data.company);
    const changes = filteredTableData.map((data) => data.change);

    return {
      labels,
      datasets: [
        {
          label: "% Salary Change by Company",
          data: changes,
          backgroundColor: "rgba(253, 220, 92, 0.6)",
        },
      ],
    };
  }, [filteredTableData]);

  return (
    <div className="mx-auto flex w-full max-w-screen-lg flex-col px-4 py-6">
      <div className="mb-4 rounded bg-gray-50 p-4 text-sm font-bold text-gray-700 dark:text-gray-200">
        Top Companies with Frequent Salary Adjustment in {getCurrentMonthName()}
        {", "}
        {getCurrentYear()}
      </div>
      <div className="relative h-80 w-full">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false, // Allows the chart to expand to fill its container
            plugins: {
              legend: { position: "top" },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    return `${tooltipItem.label}: ${tooltipItem.raw}% change`;
                  },
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10, // Limit number of ticks for readability
                },
              },
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 1, // Adjust step size for better scaling
                },
              },
            },
          }}
          // Access the chart instance using the ref
          ref={chartRef}
        />
      </div>
    </div>
  );
}
