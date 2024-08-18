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

export default function TopLowInflationCountries() {
  const chartRef = useRef<ChartJS<"bar", number[], string> | null>(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const tableData = [
    { country: "USA", inflationRate: 3.2 },
    { country: "Germany", inflationRate: 2.5 },
    { country: "Japan", inflationRate: 1.1 },
    { country: "India", inflationRate: 4.0 },
    { country: "Brazil", inflationRate: 5.3 },
    { country: "UK", inflationRate: 2.8 },
    // Add more entries as needed
  ];

  const filteredTableData = useMemo(() => {
    // Sort by inflation rate and get top 5 countries with the lowest rates
    const sortedCountries = [...tableData]
      .sort((a, b) => a.inflationRate - b.inflationRate)
      .slice(0, 5);

    return sortedCountries.map((data) => ({
      country: data.country,
      inflationRate: data.inflationRate,
    }));
  }, [tableData]);

  const chartData = useMemo(() => {
    const labels = filteredTableData.map((data) => data.country);
    const inflationRates = filteredTableData.map((data) => data.inflationRate);

    return {
      labels,
      datasets: [
        {
          label: "Inflation Rate (%)",
          data: inflationRates,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    };
  }, [filteredTableData]);

  return (
    <div className="mx-auto flex flex-col px-4 py-6">
      <div className="mb-4 rounded bg-gray-50 p-4 text-sm font-bold text-gray-700 dark:text-gray-200">
        Top Countries with Lowest Inflation Rates in {getCurrentMonthName()}
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
                    return `${tooltipItem.label}: ${tooltipItem.raw}% Inflation`;
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
          ref={chartRef}
        />
      </div>
    </div>
  );
}
