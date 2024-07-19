"use client";

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
import { useEffect } from "react";
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

const barChartData = {
  labels: ["Tech", "Healthcare", "Finance", "Education", "Retail"],
  datasets: [
    {
      label: "Average Salary",
      data: [85000, 75000, 90000, 60000, 50000],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
  ],
};

const lineChartData = {
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

export default function MarketSalaryBenchmarks() {
  useEffect(() => {
    // Any additional setup can be done here
  }, []);

  return (
    <div className="bg-gray-50 p-5 dark:bg-gray-900">
      <h1 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white">
        Market Salary Benchmarks
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* Average Salaries */}
        <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Average Salaries by Industry
          </h2>
          <Bar data={barChartData} />
        </div>

        {/* Regional Variations */}
        <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Regional Salary Variations
          </h2>
          <Line data={lineChartData} />
        </div>

        {/* Salary Distribution */}
        <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
            Salary Distribution by Level
          </h2>
          <Pie data={pieChartData} />
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="mt-10">
        <h2 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
          Detailed Analytical Information
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Salary Comparison */}
          <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              Compare Your Salary
            </h3>
            <p className="text-gray-700 dark:text-gray-400">
              Compare your current salary against market averages to ensure fair
              compensation.
            </p>
            <form className="mt-4">
              <label
                className="mb-2 block text-gray-900 dark:text-white"
                htmlFor="your-salary"
              >
                Your Salary
              </label>
              <input
                type="number"
                id="your-salary"
                className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              <button
                type="submit"
                className="mt-3 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-800"
              >
                Compare
              </button>
            </form>
          </div>

          {/* Industry Benchmarks */}
          <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              Industry Benchmarks
            </h3>
            <p className="text-gray-700 dark:text-gray-400">
              See how salaries compare across different industries.
            </p>
            <Bar data={barChartData} />
          </div>

          {/* Regional Trends */}
          <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              Regional Trends
            </h3>
            <p className="text-gray-700 dark:text-gray-400">
              Understand how salaries vary by region.
            </p>
            <Line data={lineChartData} />
          </div>
        </div>
      </div>
    </div>
  );
}
