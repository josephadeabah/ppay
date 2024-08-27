"use client";

import { EmployeeData } from "@/types/payaid.data"; // Adjust the import path as needed
import { Chart, registerables } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import trendlinePlugin from "chartjs-plugin-trendline";
import { useMemo } from "react";
import { Scatter } from "react-chartjs-2";

Chart.register(...registerables, annotationPlugin, trendlinePlugin);

interface CompensationComponentAnalysisProps {
  data: EmployeeData[];
}

const CompensationComponentAnalysis = ({
  data,
}: CompensationComponentAnalysisProps) => {
  // Simulating actual vs predicted data points for compensation
  const actualData = data.map((d) => ({
    x:
      parseFloat(d.baseSalary) +
      parseFloat(d.bonus) +
      parseFloat(d.stockOptions), // Sum of baseSalary, bonus, and stockOptions
    y:
      parseFloat(d.marketRate) +
      parseFloat(d.industryPoints) +
      parseFloat(d.departmentPoints) +
      parseFloat(d.seniorityPoints) +
      parseFloat(d.educationLevelPoints) +
      parseFloat(d.companySizePoints), // Example prediction
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
