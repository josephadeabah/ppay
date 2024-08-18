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

export default function RecentUserActivity() {
  const chartRef = useRef<ChartJS<"bar", number[], string> | null>(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  // Example activity data
  const activityData = [
    { activity: "Login", count: 120 },
    { activity: "Page Views", count: 350 },
    { activity: "Feature Interactions", count: 200 },
    { activity: "Profile Updates", count: 80 },
    { activity: "Transactions", count: 60 },
    // Add more entries as needed
  ];

  const filteredActivityData = useMemo(() => {
    // Sort by count and get top 5 activities
    const sortedActivities = [...activityData]
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return sortedActivities.map((data) => ({
      activity: data.activity,
      count: data.count,
    }));
  }, [activityData]);

  const chartData = useMemo(() => {
    const labels = filteredActivityData.map((data) => data.activity);
    const counts = filteredActivityData.map((data) => data.count);

    return {
      labels,
      datasets: [
        {
          label: "Recent User Activities",
          data: counts,
          backgroundColor: "rgba(100, 392, 192, 0.6)",
        },
      ],
    };
  }, [filteredActivityData]);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col px-4 py-6">
      <div className="mb-4 rounded bg-gray-50 p-4 text-sm font-bold text-gray-700 dark:text-gray-200">
        Recent User Activity in {getCurrentMonthName()}
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
                    return `${tooltipItem.label}: ${tooltipItem.raw} occurrences`;
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
                  stepSize: 20, // Adjust step size for better scaling
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
