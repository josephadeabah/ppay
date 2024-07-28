"use client";
import DropdownSelect from "@/components/dropdown/DropdownSelect";
import SliderComponent from "@/components/slider/Slider";
import { Tooltip as Tooltp } from "@nextui-org/react";
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
    borderColor?: string;
    backgroundColor?: string;
    fill?: boolean;
  }[];
}

interface TrendDataMap {
  companies: TrendData;
  timeframes: TrendData;
}

export default function TrendAnalysis() {
  const [selectedTrend, setSelectedTrend] =
    useState<keyof TrendDataMap>("companies");
  const [growthRate, setGrowthRate] = useState<number>(60); // Default value of 60
  const [salaryFilter, setSalaryFilter] = useState<number>(50000); // Default minimum salary filter
  const [changeFilter, setChangeFilter] = useState<number>(0); // Default change filter

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
      country: "Russia",
      industry: "Education",
      company: "Company F",
      role: "Teacher",
      currentSalaryByCompany: 60000,
      currentSalaryByRole: 60000,
      change: 8,
      changeTimeframe: "Monthly",
    },
    {
      country: "Russia",
      industry: "Manufacturing",
      company: "Company G",
      role: "Engineer",
      currentSalaryByCompany: 80000,
      currentSalaryByRole: 80000,
      change: 0,
      changeTimeframe: "Yearly",
    },
    {
      country: "Russia",
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

  const trendData: TrendDataMap = useMemo(() => {
    const companyLabels = adjustedTableData.map((data) => data.company);
    const companyChanges = adjustedTableData.map((data) => data.change);
    const timeframeLabels = adjustedTableData.map(
      (data) => data.changeTimeframe,
    );
    const timeframeChanges = adjustedTableData.map((data) => data.change);

    return {
      companies: {
        labels: companyLabels,
        datasets: [
          {
            label: "% Change in salary in company",
            data: companyChanges,
            borderColor: "rgba(54, 162, 235, 0.6)",
            fill: false,
          },
        ],
      },
      timeframes: {
        labels: timeframeLabels,
        datasets: [
          {
            label: "% Change in salary in timeframe",
            data: timeframeChanges,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
      },
    };
  }, [adjustedTableData]);

  const selectedCompanyTrendData = trendData.companies;
  const selectedTimeframeTrendData = trendData.timeframes;

  const handleTrendChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTrend(event.target.value as keyof TrendDataMap);
  };

  const trendOptions = [
    { value: "companies", label: "Companies" },
    { value: "timeframes", label: "Timeframes" },
  ];

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
    <div className="mx-auto flex flex-col px-4">
      <div className="mb-6 mt-2 flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-50">
        Pay Trend Analysis (Live{" "}
        <div className="inline-block h-3 w-3 rounded-full bg-green-400"></div>)
      </div>
      <DropdownSelect
        options={trendOptions}
        selectedValue={selectedTrend}
        onChange={handleTrendChange}
        placeholder="Select Trend"
      />
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="flex-1">
          <Line
            data={selectedCompanyTrendData}
            options={{ responsive: true }}
          />
        </div>
        <div className="flex-1">
          <Bar
            data={selectedTimeframeTrendData}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      const companyName =
                        adjustedTableData[context.dataIndex].company;
                      const value = context.raw;
                      return `${companyName}: ${value}% change`;
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>
      <div className="my-4">
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="flex-1">
            <label htmlFor="growthRate" className="mb-2 block">
              Growth Rate {growthRate} (%)
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
              Minimum Salary ($) {salaryFilter.toLocaleString()}
            </label>
            <SliderComponent
              id="salaryFilter"
              minValue={0}
              maxValue={200000}
              step={10}
              value={salaryFilter}
              onChange={handleSalaryFilterChange}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="changeFilter" className="mb-2 block">
              Change Filter (%) {changeFilter}
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
          <thead className="bg-white dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                <Tooltp
                  placement="top"
                  content="Country where the job is located"
                  className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                >
                  Country
                </Tooltp>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                <Tooltp
                  placement="top"
                  content="Industry in which the job is categorized"
                  className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                >
                  Industry
                </Tooltp>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                <Tooltp
                  placement="top"
                  content="Company offering the job"
                  className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                >
                  Company
                </Tooltp>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                <Tooltp
                  placement="top"
                  content="Job role or position"
                  className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                >
                  Role
                </Tooltp>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                <Tooltp
                  placement="top"
                  content="Current salary at the company per year"
                  className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                >
                  Company Salary
                </Tooltp>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                <Tooltp
                  placement="top"
                  content="Current salary for the role per year"
                  className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                >
                  Role Salary
                </Tooltp>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                <Tooltp
                  placement="top"
                  content="Timeframe for the salary change"
                  className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                >
                  Timeframe
                </Tooltp>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                <Tooltp
                  placement="top"
                  content="Percentage change in salary over the specified timeframe"
                  className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                >
                  Change
                </Tooltp>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {adjustedTableData.map((data, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                  {data.country}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                  {data.industry}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                  {data.company}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                  {data.role}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                  ${data.currentSalaryByCompany.toLocaleString()}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                  ${data.currentSalaryByRole.toLocaleString()}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                  {data.changeTimeframe}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getChangeColor(
                      data.change,
                    )}`}
                  >
                    {data.change > 0 ? "+" : ""}
                    {data.change.toFixed(2)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
