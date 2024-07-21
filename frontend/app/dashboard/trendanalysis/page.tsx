"use client";

import DropdownSelect from "@/components/dropdown/DropdownSelect";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useState } from "react";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface TrendData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    fill: boolean;
  }[];
}

interface TrendDataMap {
  inflation: TrendData;
  industryGrowth: TrendData;
  economicConditions: TrendData;
  geographicalVariations: TrendData;
  roleSpecificTrends: TrendData;
  demographicFactors: TrendData;
}

const trendData: TrendDataMap = {
  inflation: {
    labels: ["Jan 2024", "Feb 2024", "Mar 2024", "Apr 2024", "May 2024"],
    datasets: [
      {
        label: "Inflation Rate",
        data: [1.2, 1.3, 1.5, 1.7, 1.6],
        borderColor: "rgba(255, 99, 132, 0.6)",
        fill: false,
      },
    ],
  },
  industryGrowth: {
    labels: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024"],
    datasets: [
      {
        label: "Industry Growth",
        data: [2.5, 3.0, 3.2, 3.5],
        borderColor: "rgba(54, 162, 235, 0.6)",
        fill: false,
      },
    ],
  },
  economicConditions: {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Economic Index",
        data: [100, 105, 110, 115, 120],
        borderColor: "rgba(75, 192, 192, 0.6)",
        fill: false,
      },
    ],
  },
  geographicalVariations: {
    labels: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
    datasets: [
      {
        label: "Average Salary",
        data: [80000, 75000, 70000, 65000, 60000],
        borderColor: "rgba(153, 102, 255, 0.6)",
        fill: false,
      },
    ],
  },
  roleSpecificTrends: {
    labels: ["Engineer", "Manager", "Analyst", "Developer", "Designer"],
    datasets: [
      {
        label: "Average Salary",
        data: [90000, 95000, 70000, 80000, 75000],
        borderColor: "rgba(255, 159, 64, 0.6)",
        fill: false,
      },
    ],
  },
  demographicFactors: {
    labels: ["Male", "Female", "Non-binary", "Prefer not to say"],
    datasets: [
      {
        label: "Average Salary",
        data: [85000, 80000, 75000, 78000],
        borderColor: "rgba(255, 206, 86, 0.6)",
        fill: false,
      },
    ],
  },
};

export default function TrendAnalysis() {
  const [selectedTrend, setSelectedTrend] =
    useState<keyof TrendDataMap>("inflation");

  const handleTrendChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTrend(event.target.value as keyof TrendDataMap);
  };

  const trendOptions = [
    { value: "inflation", label: "Inflation Impact" },
    { value: "industryGrowth", label: "Industry Growth" },
    { value: "economicConditions", label: "Economic Conditions" },
    { value: "geographicalVariations", label: "Geographical Variations" },
    { value: "roleSpecificTrends", label: "Role-specific Trends" },
    { value: "demographicFactors", label: "Demographic Factors" },
  ];

  // Fallback data in case selectedTrend does not match any key
  const selectedTrendData = trendData[selectedTrend] || trendData.inflation;

  return (
    <div className="bg-gray-50 p-6 dark:bg-gray-900">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
        Trend Analysis
      </h1>

      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Overview
        </h2>
        <p className="text-gray-700 dark:text-gray-400">
          Analyze salary trends over time, considering factors like inflation,
          industry growth, economic conditions, geographical variations,
          role-specific trends, and demographic factors. Use this data to make
          informed decisions regarding salary adjustments or negotiations.
        </p>
      </div>

      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Trend Charts
        </h2>

        <DropdownSelect
          options={trendOptions}
          selectedValue={selectedTrend}
          onChange={handleTrendChange}
          placeholder="Select Trend"
          className="mb-4"
        />

        <div className="mt-4">
          <Line data={selectedTrendData} />
        </div>
      </div>

      <div className="bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Detailed Analysis
        </h2>

        <p className="mb-4 text-gray-700 dark:text-gray-400">
          Dive deeper into specific trends and how they affect salary
          adjustments. Compare different trends and adjust your strategies
          accordingly.
        </p>

        <Bar
          data={selectedTrendData} // Default to inflation if no trend is selected
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
          }}
        />
      </div>
    </div>
  );
}
