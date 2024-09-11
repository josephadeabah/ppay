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
import { useEffect, useMemo, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import LoadingSkeleton from "./loader";

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
  const [selectedCountry, setSelectedCountry] = useState<string>(""); // Empty string for "All Countries"
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);
  }, []);

  interface TrendDataEntry {
    country: string;
    industry: string;
    company: string;
    role: string;
    currentSalaryByCompany: number;
    currentSalaryByRole: number;
    change: number;
    changeTimeframe: string;
    benefits: string;
  }

  const tableData: TrendDataEntry[] = [
    // Data entries here...
    {
      country: "USA",
      industry: "Tech",
      company: "Company A",
      role: "Engineer",
      currentSalaryByCompany: 90000,
      currentSalaryByRole: 95000,
      change: 5,
      changeTimeframe: "Monthly",
      benefits: "Health Insurance, 401(k), Paid Leave",
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
      benefits: "Stock Options, Health Insurance, Work from Home",
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
      benefits: "Health Insurance, Paid Leave",
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
      benefits: "Bonuses, Health Insurance, Paid Leave",
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
      benefits: "Health Insurance, Retirement Plan",
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
      benefits: "Paid Leave, Health Insurance",
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
      benefits: "Housing Assistance, Health Insurance",
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
      benefits: "Stock Options, Health Insurance",
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
      benefits: "Work from Home, Health Insurance",
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
      benefits: "Paid Leave, Health Insurance",
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
      benefits: "Housing Assistance, Health Insurance",
    },
    // Add more data as needed
  ];

  const filteredTableData = useMemo(
    () =>
      tableData
        .filter((data) => !selectedCountry || data.country === selectedCountry)
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
    [growthRate, salaryFilter, changeFilter, selectedCountry],
  );

  const trendData: TrendDataMap = useMemo(() => {
    const companyLabels = filteredTableData.map((data) => data.company);
    const companyChanges = filteredTableData.map((data) => data.change);
    const timeframeLabels = filteredTableData.map(
      (data) => data.changeTimeframe,
    );
    const timeframeChanges = filteredTableData.map((data) => data.change);

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
  }, [filteredTableData]);

  const selectedTrendData = trendData[selectedTrend];

  const handleTrendChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTrend(event.target.value as keyof TrendDataMap);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const trendOptions = [
    { value: "companies", label: "Companies" },
    { value: "timeframes", label: "Timeframes" },
  ];

  const countryOptions = [
    { value: "", label: "All Countries" }, // Use an empty string as placeholder
    { value: "USA", label: "USA" },
    { value: "Russia", label: "Russia" },
    { value: "Canada", label: "Canada" },
    { value: "Japan", label: "Japan" },
    // Add more countries as needed
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
    <div className="mx-auto flex flex-col bg-white px-4">
      {loading ? (
        <LoadingSkeleton /> // Show skeleton while loading
      ) : (
        <>
          <div className="mb-6 mt-2 flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-200">
            <span>Trend Analysis</span>
          </div>
          <div className="mb-4 flex flex-col gap-2 md:flex-row md:gap-4">
            <div className="flex-1">
              <label htmlFor="trendSelect" className="mb-2 block">
                Select Trend
              </label>
              <DropdownSelect
                id="trendSelect"
                options={trendOptions}
                selectedValue={selectedTrend}
                onChange={handleTrendChange}
                placeholder="Select Trend"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="countrySelect" className="mb-2 block">
                Select Country
              </label>
              <DropdownSelect
                id="countrySelect"
                options={countryOptions}
                selectedValue={selectedCountry}
                onChange={handleCountryChange}
                placeholder="Select Country"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
            <div className="flex-1">
              <Line
                data={selectedTrendData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: "top" },
                    tooltip: {
                      callbacks: {
                        label: function (tooltipItem) {
                          const companyName = tooltipItem.label;
                          const value = tooltipItem.raw;
                          return `${companyName}: ${value}% change`;
                        },
                      },
                    },
                  },
                }}
              />
            </div>
            <div className="flex-1">
              <Bar
                data={selectedTrendData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: "top" },
                    tooltip: {
                      callbacks: {
                        label: function (tooltipItem) {
                          const companyName = tooltipItem.label;
                          const value = tooltipItem.raw;
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
          <div className="overflow-x-auto [&::-moz-scrollbar-thumb]:rounded-full [&::-moz-scrollbar-thumb]:bg-gray-200 [&::-moz-scrollbar-track]:m-1 [&::-moz-scrollbar]:w-2 [&::-ms-scrollbar-thumb]:rounded-full [&::-ms-scrollbar-thumb]:bg-gray-200 [&::-ms-scrollbar-track]:m-1 [&::-ms-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:m-1 [&::-webkit-scrollbar]:w-2">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-white dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6 md:py-3">
                    <Tooltp
                      placement="top"
                      content="Country where the job is located"
                      className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                    >
                      Country
                    </Tooltp>
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6 md:py-3">
                    <Tooltp
                      placement="top"
                      content="Industry in which the job is categorized"
                      className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                    >
                      Industry
                    </Tooltp>
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6 md:py-3">
                    <Tooltp
                      placement="top"
                      content="Company offering the job"
                      className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                    >
                      Company
                    </Tooltp>
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6 md:py-3">
                    <Tooltp
                      placement="top"
                      content="Job role or position"
                      className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                    >
                      Role
                    </Tooltp>
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6 md:py-3">
                    <Tooltp
                      placement="top"
                      content="Current salary at the company per year"
                      className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                    >
                      Company Salary
                    </Tooltp>
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6 md:py-3">
                    <Tooltp
                      placement="top"
                      content="Current salary for the role per year"
                      className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                    >
                      Role Salary
                    </Tooltp>
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6 md:py-3">
                    <Tooltp
                      placement="top"
                      content="Timeframe for the salary change"
                      className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                    >
                      Timeframe
                    </Tooltp>
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6 md:py-3">
                    <Tooltp
                      placement="top"
                      content="Percentage change in salary over the specified timeframe"
                      className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                    >
                      Change
                    </Tooltp>
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6 md:py-3">
                    <Tooltp
                      placement="top"
                      content="Additional benefits offered by the company"
                      className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                    >
                      Benefits
                    </Tooltp>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredTableData.map((data, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-900 dark:text-gray-200 md:px-6 md:py-4">
                      {data.country}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-900 dark:text-gray-200 md:px-6 md:py-4">
                      {data.industry}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-900 dark:text-gray-200 md:px-6 md:py-4">
                      {data.company}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-900 dark:text-gray-200 md:px-6 md:py-4">
                      {data.role}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-900 dark:text-gray-200 md:px-6 md:py-4">
                      ${data.currentSalaryByCompany.toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-900 dark:text-gray-200 md:px-6 md:py-4">
                      ${data.currentSalaryByRole.toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-900 dark:text-gray-200 md:px-6 md:py-4">
                      {data.changeTimeframe}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <span
                        className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getChangeColor(
                          data.change,
                        )}`}
                      >
                        {data.change > 0 ? "+" : ""}
                        {data.change.toFixed(2)}%
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-900 dark:text-gray-200 md:px-6 md:py-4">
                      {data.benefits}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
