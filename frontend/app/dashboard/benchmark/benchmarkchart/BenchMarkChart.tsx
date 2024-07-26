"use client";

import {
  ArcElement,
  Chart,
  ChartConfiguration,
  ChartData,
  Legend,
  PolarAreaController,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import React, { useEffect, useRef } from "react";

Chart.register(
  PolarAreaController,
  RadialLinearScale,
  Tooltip,
  Legend,
  ArcElement,
);

const BenchMarkChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const myChartRef = useRef<Chart<"polarArea"> | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const data: ChartData<"polarArea"> = {
      labels: [
        "Region A",
        "Region B",
        "Region C",
        "Country A",
        "Country B",
        "Country C",
        "Industry A",
        "Industry B",
        "Industry C",
        "Level 1",
        "Level 2",
        "Level 3",
        "Avg Industry A",
        "Avg Industry B",
        "Avg Industry C",
        "Regional Variation A",
        "Regional Variation B",
        "Regional Variation C",
        "Industry Benchmark A",
        "Industry Benchmark B",
        "Industry Benchmark C",
        "Regional Trend A",
        "Regional Trend B",
        "Regional Trend C",
      ],
      datasets: [
        {
          label: "Salary Benchmark Data",
          data: [
            12000, 15000, 18000, 14000, 16000, 20000, 13000, 17000, 19000,
            15000, 17000, 21000, 16000, 18000, 22000, 17000, 19000, 23000,
            18000, 20000, 24000, 19000, 21000, 25000,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
            "rgba(199, 199, 199, 0.5)",
            "rgba(83, 102, 255, 0.5)",
            "rgba(99, 159, 64, 0.5)",
            "rgba(192, 255, 86, 0.5)",
            "rgba(206, 162, 235, 0.5)",
            "rgba(255, 199, 132, 0.5)",
            "rgba(235, 75, 192, 0.5)",
            "rgba(255, 153, 102, 0.5)",
            "rgba(255, 255, 159, 0.5)",
            "rgba(132, 199, 199, 0.5)",
            "rgba(192, 83, 102, 0.5)",
            "rgba(255, 99, 159, 0.5)",
            "rgba(102, 192, 255, 0.5)",
            "rgba(159, 255, 83, 0.5)",
            "rgba(235, 99, 255, 0.5)",
            "rgba(192, 206, 255, 0.5)",
            "rgba(255, 83, 102, 0.5)",
            "rgba(159, 192, 255, 0.5)",
          ],
        },
      ],
    };

    const config: ChartConfiguration<"polarArea"> = {
      type: "polarArea",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "right",
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.label}: ${context.raw}`;
              },
            },
          },
        },
        scales: {
          r: {
            // Adjusting ticks is optional and can include 'beginAtZero' if necessary
          },
        },
      },
    };

    // Initialize chart
    myChartRef.current = new Chart(ctx, config);

    // Function to simulate new data
    const fetchNewData = () => {
      return data.labels!.map(() => Math.floor(Math.random() * 30000) + 10000);
    };

    // Function to update chart data
    const updateChartData = () => {
      if (myChartRef.current) {
        myChartRef.current.data.datasets[0].data = fetchNewData();
        myChartRef.current.update();
      }
    };

    // Update chart every 2 seconds
    const intervalId = setInterval(updateChartData, 5000);

    // Cleanup on component unmount
    return () => {
      clearInterval(intervalId);
      if (myChartRef.current) {
        myChartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex w-full justify-center bg-white dark:bg-gray-800 dark:text-gray-50">
      <canvas ref={chartRef} />
    </div>
  );
};

export default BenchMarkChart;
