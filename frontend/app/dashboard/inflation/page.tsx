"use client";

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
import { Dropdown, Table } from "flowbite-react";
import { useState } from "react";
import { Bar, Line } from "react-chartjs-2";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement, // Ensure PointElement is registered
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const inflationData = {
  historical: {
    labels: ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"],
    datasets: [
      {
        label: "Inflation Rate",
        data: [2.1, 2.3, 2.5, 2.4, 2.6],
        borderColor: "rgba(255, 99, 132, 0.6)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  },
  regional: {
    labels: ["North America", "Europe", "Asia", "South America", "Africa"],
    datasets: [
      {
        label: "Inflation Rate",
        data: [3.0, 2.8, 3.5, 3.2, 2.9],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  },
};

const categoryData = [
  { category: "Food", inflationRate: "2.4%" },
  { category: "Housing", inflationRate: "3.1%" },
  { category: "Transportation", inflationRate: "2.8%" },
  { category: "Healthcare", inflationRate: "3.3%" },
  { category: "Education", inflationRate: "2.7%" },
];

export default function InflationPage() {
  const [selectedYear, setSelectedYear] = useState<string>("2023");
  const [selectedRegion, setSelectedRegion] = useState<string>("North America");

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLButtonElement>) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <div className="bg-gray-50 p-6 dark:bg-gray-900">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
        Inflation Analysis
      </h1>

      {/* Historical Inflation Trends */}
      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Historical Inflation Trends
        </h2>
        <Line
          data={inflationData.historical}
          options={{ responsive: true, plugins: { legend: { display: true } } }}
        />
      </div>

      {/* Regional Inflation */}
      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Regional Inflation Rates
        </h2>
        <Dropdown
          label="Select Region"
          onChange={handleRegionChange}
          className="mb-4"
        >
          <Dropdown.Item value="North America">North America</Dropdown.Item>
          <Dropdown.Item value="Europe">Europe</Dropdown.Item>
          <Dropdown.Item value="Asia">Asia</Dropdown.Item>
          <Dropdown.Item value="South America">South America</Dropdown.Item>
          <Dropdown.Item value="Africa">Africa</Dropdown.Item>
        </Dropdown>
        <Bar
          data={inflationData.regional}
          options={{ responsive: true, plugins: { legend: { display: true } } }}
        />
      </div>

      {/* Category Inflation Table */}
      <div className="bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Category Inflation Rates
        </h2>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Inflation Rate</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {categoryData.map((item) => (
              <Table.Row key={item.category}>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>{item.inflationRate}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
