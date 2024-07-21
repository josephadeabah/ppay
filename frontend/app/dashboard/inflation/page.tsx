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
import { Table } from "flowbite-react";
import { useState } from "react";
import { Bar, Line } from "react-chartjs-2";

// Register necessary Chart.js components
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

const inflationData: {
  historical: {
    [key: string]: {
      labels: string[];
      datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
        fill: boolean;
      }[];
    };
  };
  regional: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
} = {
  historical: {
    NorthAmerica: {
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
    Europe: {
      labels: ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"],
      datasets: [
        {
          label: "Inflation Rate",
          data: [1.8, 1.9, 2.1, 2.0, 2.2],
          borderColor: "rgba(255, 206, 86, 0.6)",
          backgroundColor: "rgba(255, 206, 86, 0.2)",
          fill: true,
        },
      ],
    },
    Asia: {
      labels: ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"],
      datasets: [
        {
          label: "Inflation Rate",
          data: [3.1, 3.3, 3.5, 3.4, 3.6],
          borderColor: "rgba(75, 192, 192, 0.6)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    },
    SouthAmerica: {
      labels: ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"],
      datasets: [
        {
          label: "Inflation Rate",
          data: [2.5, 2.7, 2.9, 2.8, 3.0],
          borderColor: "rgba(153, 102, 255, 0.6)",
          backgroundColor: "rgba(153, 102, 255, 0.2)",
          fill: true,
        },
      ],
    },
    Africa: {
      labels: ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"],
      datasets: [
        {
          label: "Inflation Rate",
          data: [2.9, 3.1, 3.3, 3.2, 3.4],
          borderColor: "rgba(255, 159, 64, 0.6)",
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          fill: true,
        },
      ],
    },
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

const categoryData: {
  [key: string]: { category: string; inflationRate: string }[];
} = {
  NorthAmerica: [
    { category: "Food", inflationRate: "2.4%" },
    { category: "Housing", inflationRate: "3.1%" },
    { category: "Transportation", inflationRate: "2.8%" },
    { category: "Healthcare", inflationRate: "3.3%" },
    { category: "Education", inflationRate: "2.7%" },
  ],
  Europe: [
    { category: "Food", inflationRate: "1.8%" },
    { category: "Housing", inflationRate: "2.0%" },
    { category: "Transportation", inflationRate: "1.9%" },
    { category: "Healthcare", inflationRate: "2.2%" },
    { category: "Education", inflationRate: "1.7%" },
  ],
  Asia: [
    { category: "Food", inflationRate: "3.2%" },
    { category: "Housing", inflationRate: "3.5%" },
    { category: "Transportation", inflationRate: "3.3%" },
    { category: "Healthcare", inflationRate: "3.7%" },
    { category: "Education", inflationRate: "3.4%" },
  ],
  SouthAmerica: [
    { category: "Food", inflationRate: "2.7%" },
    { category: "Housing", inflationRate: "3.0%" },
    { category: "Transportation", inflationRate: "2.9%" },
    { category: "Healthcare", inflationRate: "3.3%" },
    { category: "Education", inflationRate: "2.9%" },
  ],
  Africa: [
    { category: "Food", inflationRate: "3.0%" },
    { category: "Housing", inflationRate: "3.2%" },
    { category: "Transportation", inflationRate: "3.1%" },
    { category: "Healthcare", inflationRate: "3.5%" },
    { category: "Education", inflationRate: "3.3%" },
  ],
};

export default function InflationPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>("NorthAmerica");

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <div className="bg-gray-50 p-6 dark:bg-gray-900">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
        Inflation Analysis
      </h1>

      {/* Overview */}
      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Overview
        </h2>
        <p className="text-gray-700 dark:text-gray-400">
          Inflation refers to the rate at which the general level of prices for
          goods and services is rising, and subsequently, purchasing power is
          falling. Central banks attempt to limit inflation, and avoid
          deflation, in order to keep the economy running smoothly.
        </p>
        <p className="text-gray-700 dark:text-gray-400">
          <strong>Key Points about Inflation:</strong>
          <ul className="list-inside list-disc">
            <li>
              <strong>Price Increases:</strong> Inflation indicates an increase
              in prices across the economy. When inflation occurs, each unit of
              currency buys fewer goods and services than it did in the past.
            </li>
            <li>
              <strong>Measurement:</strong> Inflation is commonly measured by
              the Consumer Price Index (CPI) or the Producer Price Index (PPI).
              The CPI measures the average change over time in the prices paid
              by urban consumers for a market basket of consumer goods and
              services. The PPI measures the average change over time in the
              selling prices received by domestic producers for their output.
            </li>
            <li>
              <strong>Causes:</strong> Inflation can be caused by various
              factors, including demand-pull inflation, cost-push inflation, and
              built-in inflation.
            </li>
            <li>
              <strong>Effects:</strong> Inflation reduces purchasing power,
              impacts savings and investments, affects borrowing and lending,
              and influences wage negotiations.
            </li>
            <li>
              <strong>Monetary Policy:</strong> Central banks use monetary
              policy tools such as interest rates to control inflation.
            </li>
            <li>
              <strong>Hyperinflation:</strong> An extremely high and typically
              accelerating inflation rate, often exceeding 50% per month.
            </li>
          </ul>
        </p>
      </div>

      {/* Historical Inflation Trends */}
      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Historical Inflation Trends
        </h2>
        <div className="flex max-w-[300px] flex-1 flex-col">
          <DropdownSelect
            options={[
              { value: "NorthAmerica", label: "North America" },
              { value: "Europe", label: "Europe" },
              { value: "Asia", label: "Asia" },
              { value: "SouthAmerica", label: "South America" },
              { value: "Africa", label: "Africa" },
            ]}
            selectedValue={selectedRegion}
            onChange={handleRegionChange}
            placeholder="Select Region"
          />
        </div>
        <Line
          data={inflationData.historical[selectedRegion]}
          options={{ responsive: true, plugins: { legend: { display: true } } }}
        />
      </div>

      {/* Regional Inflation */}
      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Regional Inflation Rates
        </h2>

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
            {categoryData[selectedRegion].map((item) => (
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
