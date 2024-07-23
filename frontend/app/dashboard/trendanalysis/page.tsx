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
  const [salaryFilter, setSalaryFilter] = useState<number>(50000); // Default minimum salary filter
  const [changeFilter, setChangeFilter] = useState<number>(0); // Default change filter

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
    {
      country: "USA",
      industry: "Tech",
      company: "Company A",
      role: "Engineer",
      currentSalaryByCompany: 90000,
      currentSalaryByRole: 95000,
      change: 5,
      changeTimeframe: "Monthly",
    },
    {
      country: "USA",
      industry: "Tech",
      company: "Company B",
      role: "Manager",
      currentSalaryByCompany: 95000,
      currentSalaryByRole: 95000,
      change: -3,
      changeTimeframe: "Monthly",
    },
    {
      country: "USA",
      industry: "Healthcare",
      company: "Company C",
      role: "Analyst",
      currentSalaryByCompany: 70000,
      currentSalaryByRole: 70000,
      change: 0,
      changeTimeframe: "Weekly",
    },
    {
      country: "USA",
      industry: "Finance",
      company: "Company D",
      role: "Developer",
      currentSalaryByCompany: 80000,
      currentSalaryByRole: 80000,
      change: 2,
      changeTimeframe: "Yearly",
    },
    {
      country: "USA",
      industry: "Manufacturing",
      company: "Company E",
      role: "Designer",
      currentSalaryByCompany: 75000,
      currentSalaryByRole: 75000,
      change: -10,
      changeTimeframe: "Yearly",
    },
    {
      country: "USA",
      industry: "Education",
      company: "Company F",
      role: "Teacher",
      currentSalaryByCompany: 60000,
      currentSalaryByRole: 60000,
      change: 8,
      changeTimeframe: "Monthly",
    },
    {
      country: "USA",
      industry: "Manufacturing",
      company: "Company G",
      role: "Engineer",
      currentSalaryByCompany: 80000,
      currentSalaryByRole: 80000,
      change: 0,
      changeTimeframe: "Yearly",
    },
    {
      country: "USA",
      industry: "Healthcare",
      company: "Company H",
      role: "Manager",
      currentSalaryByCompany: 85000,
      currentSalaryByRole: 85000,
      change: 5,
      changeTimeframe: "Monthly",
    },
    {
      country: "Canada",
      industry: "Tech",
      company: "Company I",
      role: "Designer",
      currentSalaryByCompany: 70000,
      currentSalaryByRole: 70000,
      change: 0,
      changeTimeframe: "Yearly",
    },
    {
      country: "Japan",
      industry: "Finance",
      company: "Company J",
      role: "Developer",
      currentSalaryByCompany: 80000,
      currentSalaryByRole: 80000,
      change: 2,
      changeTimeframe: "Yearly",
    },
    {
      country: "Japan",
      industry: "Education",
      company: "Company K",
      role: "Teacher",
      currentSalaryByCompany: 60000,
      currentSalaryByRole: 60000,
      change: 8,
      changeTimeframe: "Monthly",
    },
    // Add more data as needed
  ];

  const adjustedTableData = useMemo(
    () =>
      tableData
        .map((data) => ({
          ...data,
          currentSalaryByCompany:
            data.currentSalaryByCompany * (1 + growthRate / 100),
          currentSalaryByRole:
            data.currentSalaryByRole * (1 + growthRate / 100),
        }))
        .filter(
          (data) =>
            data.currentSalaryByCompany >= salaryFilter &&
            (data.change >= changeFilter || changeFilter <= 0), // Ensure negative values are considered
        )
        .slice(0, 8), // Limit rows to 8
    [growthRate, salaryFilter, changeFilter],
  );

  const getChangeColor = (change: number) => {
    if (change > 0)
      return "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100";
    if (change < 0)
      return "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100";
    return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100";
  };

  const handleGrowthRateChange = (value: number | number[]) => {
    if (typeof value === "number") {
      setGrowthRate(value);
    }
  };

  const handleSalaryFilterChange = (value: number | number[]) => {
    if (typeof value === "number") {
      setSalaryFilter(value);
    }
  };

  const handleChangeFilterChange = (value: number | number[]) => {
    if (typeof value === "number") {
      setChangeFilter(value);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <DropdownSelect
        options={trendOptions}
        selectedValue={selectedTrend}
        onChange={handleTrendChange}
        placeholder="Select Trend"
      />
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="flex-1">
          <Line data={scenarioData} options={{ responsive: true }} />
        </div>
        <div className="flex-1">
          <Bar data={scenarioData} options={{ responsive: true }} />
        </div>
      </div>
      <div className="my-4">
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="flex-1">
            <label htmlFor="growthRate" className="mb-2 block">
              Growth Rate
            </label>
            <SliderComponent
              id="growthRate"
              minValue={-100}
              maxValue={100}
              step={1}
              value={growthRate}
              onChange={handleGrowthRateChange}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="salaryFilter" className="mb-2 block">
              Minimum Salary
            </label>
            <SliderComponent
              id="salaryFilter"
              minValue={0}
              maxValue={200000}
              step={100}
              value={salaryFilter}
              onChange={handleSalaryFilterChange}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="changeFilter" className="mb-2 block">
              Change
            </label>
            <SliderComponent
              id="changeFilter"
              minValue={-100}
              maxValue={100}
              step={1}
              value={changeFilter}
              onChange={handleChangeFilterChange}
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                title="Country where the job is located"
              >
                Country
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                title="Industry in which the job is categorized"
              >
                Industry
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                title="Company offering the job"
              >
                Company
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                title="Job role or position"
              >
                Role
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                title="Current salary at the company"
              >
                Current Salary by Company
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                title="Current salary for the role"
              >
                Current Salary by Role
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                title="Percentage change in salary"
              >
                Change
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                title="Timeframe of the salary change"
              >
                Change Timeframe
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
            {adjustedTableData.map((data, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                  {data.country}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {data.industry}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {data.company}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {data.role}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  ${data.currentSalaryByCompany.toLocaleString()}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  ${data.currentSalaryByRole.toLocaleString()}
                </td>
                <td
                  className={`whitespace-nowrap px-6 py-4 text-sm ${getChangeColor(data.change)}`}
                >
                  {data.change}%
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {data.changeTimeframe}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
