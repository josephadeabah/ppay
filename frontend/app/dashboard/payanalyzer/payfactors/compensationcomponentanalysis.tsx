"use client";

import { Chart, registerables } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import trendlinePlugin from "chartjs-plugin-trendline";
import { useMemo } from "react";
import { Scatter } from "react-chartjs-2";

Chart.register(...registerables, annotationPlugin, trendlinePlugin);

const CompensationComponentAnalysis = ({ data }: { data: any[] }) => {
  // Simulating actual vs predicted data points for compensation
  const actualData = data.map((d) => ({
    x: d.actualCompensation ?? 0,
    y: d.predictedCompensation ?? 0,
  }));

  const chartData = useMemo(
    () => ({
      datasets: [
        {
          label: "Actual vs Predicted Compensation",
          data: actualData,
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          pointRadius: 5,
        },
      ],
    }),
    [actualData],
  );

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Actual Compensation ($)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Predicted Compensation ($)",
        },
      },
    },
  };

  return (
    <div className="w-full max-w-full bg-white p-6 dark:bg-gray-900">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Actual vs Predicted Compensation
      </h2>
      <div className="h-96 w-full">
        <Scatter data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default CompensationComponentAnalysis;
