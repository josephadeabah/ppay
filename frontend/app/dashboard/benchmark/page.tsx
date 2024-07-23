"use client";
import SliderComponent from "@/components/slider/Slider"; // Import the SliderComponent
import {
  ArcElement,
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
import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

const initialBarChartData = {
  labels: ["Tech", "Healthcare", "Finance", "Education", "Retail"],
  datasets: [
    {
      label: "Average Salary",
      data: [85000, 75000, 90000, 60000, 50000],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
  ],
};

const initialLineChartData = {
  labels: ["North America", "Europe", "Asia", "Australia", "Africa"],
  datasets: [
    {
      label: "Regional Salary Trends",
      data: [95000, 80000, 70000, 75000, 60000],
      borderColor: "rgba(75, 192, 192, 0.6)",
      fill: false,
    },
  ],
};

const pieChartData = {
  labels: ["Entry Level", "Mid Level", "Senior Level", "Executive Level"],
  datasets: [
    {
      label: "Salary Distribution",
      data: [20000, 30000, 40000, 10000],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
      ],
    },
  ],
};

const initialJobRolesData = {
  labels: [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "Designer",
    "Sales",
  ],
  datasets: [
    {
      label: "Average Salary by Job Role",
      data: [120000, 110000, 115000, 95000, 85000],
      backgroundColor: "rgba(153, 102, 255, 0.6)",
    },
  ],
};

const initialCountriesData = {
  labels: ["USA", "Germany", "India", "UK", "Canada"],
  datasets: [
    {
      label: "Average Salary by Country",
      data: [90000, 80000, 60000, 70000, 75000],
      backgroundColor: "rgba(255, 159, 64, 0.6)",
    },
  ],
};

const initialCompaniesData = {
  labels: ["Google", "Amazon", "Microsoft", "Apple", "Facebook"],
  datasets: [
    {
      label: "Average Salary by Company",
      data: [150000, 140000, 130000, 160000, 120000],
      backgroundColor: "rgba(255, 99, 132, 0.6)",
    },
  ],
};

export default function MarketSalaryBenchmarks() {
  const [yourSalary, setYourSalary] = useState<number | null>(null);
  const [barChartData, setBarChartData] = useState(initialBarChartData);
  const [lineChartData, setLineChartData] = useState(initialLineChartData);
  const [jobRolesData, setJobRolesData] = useState(initialJobRolesData);
  const [countriesData, setCountriesData] = useState(initialCountriesData);
  const [companiesData, setCompaniesData] = useState(initialCompaniesData);

  const handleSliderChange = (value: number | number[]) => {
    setYourSalary(Array.isArray(value) ? value[0] : value);
  };

  const handleCompareClick = () => {
    if (yourSalary === null) return;

    // Update bar chart with user salary comparison
    setBarChartData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0], // Preserve existing dataset
          data: [...prevData.datasets[0].data], // Copy existing data
        },
        {
          label: "Your Salary",
          data: Array(prevData.labels.length).fill(yourSalary),
          backgroundColor: "rgba(255, 99, 132, 0.6)",
        },
      ],
    }));

    // Update line chart with user salary comparison
    setLineChartData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0], // Preserve existing dataset
          data: [...prevData.datasets[0].data], // Copy existing data
        },
        {
          label: "Your Salary",
          data: Array(prevData.labels.length).fill(yourSalary),
          borderColor: "rgba(255, 99, 132, 0.6)",
          fill: false,
        },
      ],
    }));

    // Update job roles chart with user salary comparison
    setJobRolesData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0], // Preserve existing dataset
          data: [...prevData.datasets[0].data], // Copy existing data
        },
        {
          label: "Your Salary",
          data: Array(prevData.labels.length).fill(yourSalary),
          backgroundColor: "rgba(255, 159, 64, 0.6)",
        },
      ],
    }));

    // Update countries chart with user salary comparison
    setCountriesData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0], // Preserve existing dataset
          data: [...prevData.datasets[0].data], // Copy existing data
        },
        {
          label: "Your Salary",
          data: Array(prevData.labels.length).fill(yourSalary),
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    }));

    // Update companies chart with user salary comparison
    setCompaniesData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0], // Preserve existing dataset
          data: [...prevData.datasets[0].data], // Copy existing data
        },
        {
          label: "Your Salary",
          data: Array(prevData.labels.length).fill(yourSalary),
          backgroundColor: "rgba(153, 102, 255, 0.6)",
        },
      ],
    }));
  };

  return (
    <div className="bg-gray-50 p-5 dark:bg-gray-900">
      <h1 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white">
        Market Salary Benchmarks
      </h1>
      {/* Detailed Analysis */}
      <div className="mt-10">
        <h2 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
          Detailed Analytical Information
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Salary Comparison */}
          <div className="bg-white p-4 shadow-sm dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              Compare Your Salary
            </h3>
            <p className="text-gray-700 dark:text-gray-400">
              Compare your current salary against market averages to see if
              you're making more.
            </p>
            <div className="mt-4">
              <SliderComponent
                value={yourSalary ?? 0}
                onChange={handleSliderChange}
                minValue={0}
                maxValue={200000}
                step={10}
                label={`Your Salary: $`}
              />
              <button
                onClick={handleCompareClick}
                className="mt-4 w-full rounded bg-blue-700 px-4 py-2 text-white dark:bg-gray-700"
              >
                Compare
              </button>
            </div>
          </div>

          {/* Job Roles */}
          <div className="bg-white p-4 shadow-sm dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              Average Salaries by Job Role
            </h3>
            <Bar data={jobRolesData} />
          </div>

          {/* Countries */}
          <div className="bg-white p-4 shadow-sm dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              Average Salaries by Country
            </h3>
            <Bar data={countriesData} />
          </div>

          {/* Companies */}
          <div className="bg-white p-4 shadow-sm dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              Average Salaries by Company
            </h3>
            <Bar data={companiesData} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Average Salaries */}
        <div className="bg-white p-4 shadow-sm dark:bg-gray-800">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Average Salaries by Industry
          </h2>
          <Bar data={barChartData} />
        </div>

        {/* Regional Variations */}
        <div className="bg-white p-4 shadow-sm dark:bg-gray-800">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Regional Salary Variations
          </h2>
          <Line data={lineChartData} />
        </div>

        {/* Salary Distribution */}
        <div className="bg-white p-4 shadow-sm dark:bg-gray-800">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Salary Distribution by Level
          </h2>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
}
