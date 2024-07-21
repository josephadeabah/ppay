//Shows on Dashboard - Compare - Salary Comparison
"use client";

import {
  CategoryScale,
  Chart,
  ChartConfiguration,
  ChartData,
  Legend,
  LinearScale,
  PointElement,
  ScatterController,
  Tooltip,
} from "chart.js";
import React, { useEffect, useRef } from "react";

Chart.register(
  ScatterController,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  PointElement,
);

const SalaryComparison: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const data: ChartData<"scatter"> = {
      datasets: [
        {
          label: "Tech Industry Salaries",
          data: [
            { x: 1, y: 120000 },
            { x: 2, y: 100000 },
            { x: 3, y: 80000 },
            { x: 4, y: 70000 },
            { x: 5, y: 85000 },
          ],
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "Healthcare Industry Salaries",
          data: [
            { x: 1, y: 110000 },
            { x: 2, y: 95000 },
            { x: 3, y: 70000 },
            { x: 4, y: 65000 },
            { x: 5, y: 80000 },
          ],
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          label: "Finance Industry Salaries",
          data: [
            { x: 1, y: 150000 },
            { x: 2, y: 120000 },
            { x: 3, y: 90000 },
            { x: 4, y: 75000 },
            { x: 5, y: 95000 },
          ],
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };

    const config: ChartConfiguration<"scatter"> = {
      type: "scatter",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const dataPoint = context.raw as { x: number; y: number };
                const countryLabels = [
                  "USA",
                  "Germany",
                  "India",
                  "Brazil",
                  "China",
                ];
                return `${context.dataset.label}: ${dataPoint.y} USD (${countryLabels[dataPoint.x - 1]})`;
              },
            },
          },
        },
        scales: {
          x: {
            type: "category",
            labels: ["USA", "Germany", "India", "Brazil", "China"],
            title: {
              display: true,
              text: "Countries",
            },
          },
          y: {
            title: {
              display: true,
              text: "Average Salary (USD)",
            },
            beginAtZero: true,
          },
        },
      },
    };

    const myChart = new Chart(ctx, config);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="w-full bg-white text-gray-600 dark:bg-gray-800 dark:text-gray-50">
      <h1 className="text-lg font-bold">Salary Comparison</h1>
      <div className="mt-4">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default SalaryComparison;
