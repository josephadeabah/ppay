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
import React, { useEffect, useRef, useState } from "react";

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
  const [chartInstance, setChartInstance] = useState<Chart<"radar"> | null>(
    null,
  );

  const generateRandomInflationData = () => {
    return Array(11)
      .fill(0)
      .map(() => parseFloat((Math.random() * (6 - 2) + 2).toFixed(1)));
  };

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const initialData: ChartData<"radar"> = {
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
          data: generateRandomInflationData(),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "2023 Inflation Rate",
          data: generateRandomInflationData(),
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    };

    const config: ChartConfiguration<"radar"> = {
      type: "radar",
      data: initialData,
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
    setChartInstance(myChart);

    return () => {
      myChart.destroy();
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (chartInstance) {
        chartInstance.data.datasets.forEach((dataset) => {
          dataset.data = generateRandomInflationData();
        });
        chartInstance.update();
      }
    }, 6000); // Update data every 5 seconds

    return () => clearInterval(intervalId);
  }, [chartInstance]);

  return (
    <div className="flex w-full justify-center bg-white dark:bg-gray-800 dark:text-gray-50">
      <canvas ref={chartRef} />
    </div>
  );
};

export default InflationChart;
