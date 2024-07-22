"use client";

import DropdownSelect from "@/components/dropdown/DropdownSelect";
import SliderComponent from "@/components/slider/Slider"; // Import the reusable slider component
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
import { useMemo, useState } from "react";
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

const generateScenarioComparisonData = (
  baseData: TrendData,
  adjustments: { [key: string]: number },
): TrendData => {
  const adjustedData = { ...baseData };
  adjustedData.datasets[0].data = adjustedData.datasets[0].data.map(
    (value) => value * (1 + (adjustments["growthRate"] || 0)),
  );
  return adjustedData;
};

export default function TrendAnalysis() {
  const [selectedTrend, setSelectedTrend] =
    useState<keyof TrendDataMap>("inflation");
  const [growthRate, setGrowthRate] = useState<number>(60); // Default value of 60

  const selectedTrendData = useMemo(
    () => trendData[selectedTrend] || trendData.inflation,
    [selectedTrend],
  );
  const scenarioData = useMemo(
    () =>
      generateScenarioComparisonData(selectedTrendData, {
        growthRate: growthRate / 100,
      }), // Convert to decimal for calculation
    [selectedTrendData, growthRate],
  );

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

  return (
    <div className="bg-gray-50 p-6 dark:bg-gray-900">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
        Trend Analysis Dashboard
      </h1>

      <div className="mb-6 rounded-lg bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Overview
        </h2>
        <p className="text-gray-700 dark:text-gray-400">
          Use this dashboard to analyze and visualize salary trends over time.
          Explore factors like inflation, industry growth, economic conditions,
          geographical variations, role-specific trends, and demographic factors
          to make informed decisions about salary adjustments and negotiations.
        </p>
      </div>

      <div className="mb-6 rounded-lg bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Trend Visualization
        </h2>

        <DropdownSelect
          options={trendOptions}
          selectedValue={selectedTrend}
          onChange={handleTrendChange}
          placeholder="Select a trend"
        />

        <div className="mb-4 text-gray-700 dark:text-gray-100">
          <SliderComponent
            value={growthRate}
            onChange={(value: number | number[]) =>
              setGrowthRate(Array.isArray(value) ? value[0] : value)
            } // Handle single value
            label="Select Growth Rate"
            min={0}
            max={100}
            step={1}
            trackColor="bg-gray-200"
            thumbColor="bg-white"
            trackClasses="rounded-full"
            thumbClasses="shadow-md"
          />
          <p className="text-gray-700 dark:text-gray-100">
            Growth Rate: {growthRate}%
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Bar Chart
          </h3>
          <Bar
            data={scenarioData}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
            }}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Line Chart
          </h3>
          <Line
            data={scenarioData}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
            }}
          />
        </div>
      </div>
    </div>
  );
}
