"use client";

import {
  Chart,
  ChartConfiguration,
  ChartData,
  Legend,
  LineElement,
  PointElement,
  RadarController,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import React, { useEffect, useRef } from "react";

Chart.register(
  RadarController,
  RadialLinearScale,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
);

const InflationChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const data: ChartData<"radar"> = {
      labels: [
        "Region A",
        "Region B",
        "Region C",
        "Food",
        "Housing",
        "Transport",
        "Healthcare",
        "Education",
        "Utilities",
        "Entertainment",
        "Miscellaneous",
      ],
      datasets: [
        {
          label: "2022 Inflation Rate",
          data: [5.2, 6.1, 4.8, 2.9, 3.5, 4.2, 3.8, 2.7, 3.3, 4.5, 3.1],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "2023 Inflation Rate",
          data: [5.5, 6.4, 5.0, 3.2, 3.8, 4.5, 4.0, 3.0, 3.6, 4.8, 3.4],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    };

    const config: ChartConfiguration<"radar"> = {
      type: "radar",
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
                return `${context.label}: ${context.raw}%`;
              },
            },
          },
        },
        scales: {
          r: {
            ticks: {
              callback: function (value) {
                return value + "%";
              },
            },
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
    <div className="flex w-full justify-center bg-white dark:bg-gray-800 dark:text-gray-50">
      <canvas ref={chartRef} />
    </div>
  );
};

export default InflationChart;
