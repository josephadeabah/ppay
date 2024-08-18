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

export default function TopSatisfactionCompanies() {
  const chartRef = useRef<ChartJS<"bar", number[], string> | null>(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const tableData = [
    { company: "Apple", satisfaction: 90 },
    { company: "Microsoft", satisfaction: 85 },
    { company: "Google", satisfaction: 88 },
    { company: "Amazon", satisfaction: 82 },
    { company: "Facebook", satisfaction: 80 },
    { company: "Tesla", satisfaction: 75 },
    // Add more entries as needed
  ];

  const filteredTableData = useMemo(() => {
    // Sort by satisfaction score and get top 5 companies
    const sortedCompanies = [...tableData]
      .sort((a, b) => b.satisfaction - a.satisfaction)
      .slice(0, 5);

    return sortedCompanies.map((data) => ({
      company: data.company,
      satisfaction: data.satisfaction,
    }));
  }, [tableData]);

  const chartData = useMemo(() => {
    const labels = filteredTableData.map((data) => data.company);
    const satisfactions = filteredTableData.map((data) => data.satisfaction);

    return {
      labels,
      datasets: [
        {
          label: "Employee Satisfaction Score",
          data: satisfactions,
          backgroundColor: "rgba(46, 32, 108, 0.6)",
        },
      ],
    };
  }, [filteredTableData]);

  return (
    <div className="mx-auto flex flex-col px-4 py-6">
      <div className="mb-4 rounded bg-gray-50 p-4 text-sm font-bold text-gray-700 dark:text-gray-200">
        Top Companies by Employee Satisfaction in {getCurrentMonthName()}
        {", "}
        {getCurrentYear()}
      </div>
      <div className="relative h-80 w-full max-w-full overflow-x-auto">
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
                    return `${tooltipItem.label}: ${tooltipItem.raw} Satisfaction`;
                  },
                },
              },
            },
            // Optionally configure scales to better handle responsiveness
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
                  stepSize: 10, // Adjust step size for better scaling
                },
              },
            },
          }}
          ref={chartRef}
        />
      </div>
    </div>
  );
}
