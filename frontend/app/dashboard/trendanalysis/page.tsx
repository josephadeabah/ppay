"use client";
import DropdownSelect from "@/components/dropdown/DropdownSelect";
import SliderComponent from "@/components/slider/Slider";
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
  roles: TrendData;
  companies: TrendData;
  industries: TrendData;
  regions: TrendData;
}

const trendData: TrendDataMap = {
  roles: {
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
  companies: {
    labels: ["Company A", "Company B", "Company C", "Company D", "Company E"],
    datasets: [
      {
        label: "Average Salary",
        data: [80000, 85000, 90000, 75000, 95000],
        borderColor: "rgba(54, 162, 235, 0.6)",
        fill: false,
      },
    ],
  },
  industries: {
    labels: ["Tech", "Healthcare", "Finance", "Education", "Manufacturing"],
    datasets: [
      {
        label: "Average Salary",
        data: [95000, 70000, 85000, 60000, 80000],
        borderColor: "rgba(75, 192, 192, 0.6)",
        fill: false,
      },
    ],
  },
  regions: {
    labels: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
    datasets: [
      {
        label: "Average Salary",
        data: [90000, 85000, 80000, 75000, 70000],
        borderColor: "rgba(153, 102, 255, 0.6)",
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
    useState<keyof TrendDataMap>("roles");
  const [growthRate, setGrowthRate] = useState<number>(60); // Default value of 60
  const [changeFilter, setChangeFilter] = useState<number>(-100); // Default value to show all changes

  const selectedTrendData = useMemo(
    () => trendData[selectedTrend] || trendData.roles,
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
    { value: "roles", label: "Roles" },
    { value: "companies", label: "Companies" },
    { value: "industries", label: "Industries" },
    { value: "regions", label: "Regions" },
  ];

  const tableData = [
    { category: "Roles", label: "Engineer", currentSalary: 90000, change: 5 },
    { category: "Roles", label: "Manager", currentSalary: 95000, change: -3 },
    { category: "Roles", label: "Analyst", currentSalary: 70000, change: 0 },
    {
      category: "Companies",
      label: "Company A",
      currentSalary: 80000,
      change: 2,
    },
    {
      category: "Companies",
      label: "Company B",
      currentSalary: 85000,
      change: -10,
    },
    {
      category: "Companies",
      label: "Company C",
      currentSalary: 90000,
      change: 4,
    },
    { category: "Industries", label: "Tech", currentSalary: 95000, change: 4 },
    {
      category: "Industries",
      label: "Healthcare",
      currentSalary: 70000,
      change: -20,
    },
    {
      category: "Industries",
      label: "Finance",
      currentSalary: 85000,
      change: 0,
    },
    { category: "Regions", label: "New York", currentSalary: 90000, change: 1 },
    {
      category: "Regions",
      label: "Los Angeles",
      currentSalary: 85000,
      change: -1,
    },
    { category: "Regions", label: "Chicago", currentSalary: 80000, change: 2 },
  ];

  const adjustedTableData = useMemo(
    () =>
      tableData.map((data) => ({
        ...data,
        currentSalary: data.currentSalary * (1 + growthRate / 100),
      })),
    [growthRate],
  );

  const getChangeColor = (change: number) => {
    if (change > 0)
      return "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100";
    if (change < 0)
      return "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100";
    return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100";
  };

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

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
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

      <div className="mb-6 rounded-lg bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Filter and View Adjusted Data
        </h2>

        <div className="mb-4 text-gray-700 dark:text-gray-100">
          <SliderComponent
            value={changeFilter}
            onChange={(value: number | number[]) =>
              setChangeFilter(Array.isArray(value) ? value[0] : value)
            }
            label="Minimum Change Percentage"
            min={-100}
            max={100}
            step={1}
            trackColor="bg-gray-200"
            thumbColor="bg-white"
            trackClasses="rounded-full"
            thumbClasses="shadow-md"
          />
          <p className="text-gray-700 dark:text-gray-100">
            Minimum Change: {changeFilter}%
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-separate border-spacing-2">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Label</th>
                <th className="p-2 text-left">Current Salary</th>
                <th className="p-2 text-left">Change (%)</th>
              </tr>
            </thead>
            <tbody>
              {adjustedTableData
                .filter((row) => row.change >= changeFilter)
                .map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b ${
                      index % 2 === 0
                        ? "bg-gray-50 dark:bg-gray-800"
                        : "bg-gray-100 dark:bg-gray-900"
                    }`}
                  >
                    <td className="p-2">{row.category}</td>
                    <td className="p-2">{row.label}</td>
                    <td className="p-2">${row.currentSalary.toFixed(2)}</td>
                    <td className={`p-2 ${getChangeColor(row.change)}`}>
                      {row.change.toFixed(2)}%
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
