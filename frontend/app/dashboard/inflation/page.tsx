"use client";
import DropdownSelect from "@/components/dropdown/DropdownSelect"; // Make sure this path is correct
import {
  BarElement,
  CategoryScale,
  ChartEvent,
  Chart as ChartJS,
  ChartTypeRegistry,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Table } from "flowbite-react"; // Ensure you have the right library and path
import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

// Define your data types
interface CategoryData {
  country: string;
  categories: { category: string; inflationRate: number }[];
}

interface InflationData {
  historical: Record<string, any>; // Use correct type if known
  regional: any; // Use correct type if known
}

const inflationData = {
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
          data: [1.8, 2.0, 2.2, 2.1, 2.3],
          borderColor: "rgba(54, 162, 235, 0.6)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          fill: true,
        },
      ],
    },
    Asia: {
      labels: ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"],
      datasets: [
        {
          label: "Inflation Rate",
          data: [2.0, 2.2, 2.4, 2.3, 2.5],
          borderColor: "rgba(75, 192, 192, 0.6)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    },
    Africa: {
      labels: ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"],
      datasets: [
        {
          label: "Inflation Rate",
          data: [2.3, 2.5, 2.7, 2.6, 2.8],
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
  [key: string]: {
    country: string;
    categories: { category: string; inflationRate: string }[];
  }[];
} = {
  NorthAmerica: [
    {
      country: "USA",
      categories: [
        { category: "Food", inflationRate: "2.4%" },
        { category: "Housing", inflationRate: "3.1%" },
        { category: "Transportation", inflationRate: "2.8%" },
        { category: "Healthcare", inflationRate: "3.3%" },
        { category: "Education", inflationRate: "2.7%" },
      ],
    },
    {
      country: "Canada",
      categories: [
        { category: "Food", inflationRate: "2.1%" },
        { category: "Housing", inflationRate: "2.8%" },
        { category: "Transportation", inflationRate: "2.5%" },
        { category: "Healthcare", inflationRate: "3.0%" },
        { category: "Education", inflationRate: "2.6%" },
      ],
    },
  ],
  Europe: [
    {
      country: "Germany",
      categories: [
        { category: "Food", inflationRate: "2.1%" },
        { category: "Housing", inflationRate: "2.8%" },
        { category: "Transportation", inflationRate: "2.5%" },
        { category: "Healthcare", inflationRate: "3.0%" },
        { category: "Education", inflationRate: "2.6%" },
      ],
    },
    {
      country: "France",
      categories: [
        { category: "Food", inflationRate: "1.9%" },
        { category: "Housing", inflationRate: "2.6%" },
        { category: "Transportation", inflationRate: "2.3%" },
        { category: "Healthcare", inflationRate: "2.8%" },
        { category: "Education", inflationRate: "2.4%" },
      ],
    },
  ],
  Asia: [
    {
      country: "China",
      categories: [
        { category: "Food", inflationRate: "1.8%" },
        { category: "Housing", inflationRate: "2.5%" },
        { category: "Transportation", inflationRate: "2.2%" },
        { category: "Healthcare", inflationRate: "3.0%" },
        { category: "Education", inflationRate: "2.4%" },
      ],
    },
    {
      country: "India",
      categories: [
        { category: "Food", inflationRate: "2.0%" },
        { category: "Housing", inflationRate: "2.7%" },
        { category: "Transportation", inflationRate: "2.4%" },
        { category: "Healthcare", inflationRate: "3.2%" },
        { category: "Education", inflationRate: "2.6%" },
      ],
    },
  ],
  Africa: [
    {
      country: "Nigeria",
      categories: [
        { category: "Food", inflationRate: "2.5%" },
        { category: "Housing", inflationRate: "3.2%" },
        { category: "Transportation", inflationRate: "2.6%" },
        { category: "Healthcare", inflationRate: "3.8%" },
        { category: "Education", inflationRate: "2.7%" },
      ],
    },
    {
      country: "South Africa",
      categories: [
        { category: "Food", inflationRate: "2.3%" },
        { category: "Housing", inflationRate: "3.0%" },
        { category: "Transportation", inflationRate: "2.4%" },
        { category: "Healthcare", inflationRate: "3.5%" },
        { category: "Education", inflationRate: "2.5%" },
      ],
    },
  ],
};

const ChartComponent: React.FC = () => {
  const [selectedRegion, setSelectedRegion] =
    useState<keyof typeof inflationData.historical>("NorthAmerica");

  const handleBarClick = (
    elements: any[],
    event: ChartEvent,
    chart: ChartJS<keyof ChartTypeRegistry>,
  ) => {
    if (!elements.length) return;
    const { datasetIndex, index } = elements[0];
    const region = inflationData.regional.labels[index];
    console.log(`Selected region: ${region}`);
  };

  const getChartOptions = (title: string) => ({
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems: any) => {
            return `Country: ${selectedRegion}`;
          },
          label: (tooltipItem: any) => {
            const dataset =
              inflationData.historical[selectedRegion].datasets[
                tooltipItem.datasetIndex
              ];
            const inflationRate = dataset.data[tooltipItem.dataIndex];
            return `Inflation Rate: ${inflationRate}%`;
          },
        },
      },
    },
    onClick: (event: ChartEvent, elements: any[]) => {
      if (!elements.length) return;
      const chartInstance = elements[0].element.$context.chart;
      handleBarClick(elements, event, chartInstance);
    },
  });

  const regionOptions = Object.keys(inflationData.historical).map((region) => ({
    value: region,
    label: region,
  }));

  const selectedCategoryData = categoryData[selectedRegion];

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 text-2xl font-bold">Inflation Data</h2>
      <DropdownSelect
        options={regionOptions}
        selectedValue={selectedRegion}
        onChange={(event) =>
          setSelectedRegion(
            event.target.value as keyof typeof inflationData.historical,
          )
        }
        placeholder="Select a region"
      />
      <div className="mt-6">
        {inflationData.historical[selectedRegion] ? (
          <Line
            data={inflationData.historical[selectedRegion]}
            options={getChartOptions(`Inflation Data - ${selectedRegion}`)}
          />
        ) : (
          <p>No data available for the selected region.</p>
        )}
      </div>
      <div className="mt-6">
        <Bar
          data={inflationData.regional}
          options={getChartOptions("Regional Inflation Data")}
        />
      </div>
      <h2 className="mb-4 mt-8 text-2xl font-bold">
        Category Data for {selectedRegion}
      </h2>
      {selectedCategoryData && selectedCategoryData.length > 0 ? (
        <Table>
          <Table.Head>
            <Table.HeadCell>Country</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Inflation Rate</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {selectedCategoryData.map((countryData, countryIndex) =>
              countryData.categories.map((category, categoryIndex) => (
                <Table.Row key={`${countryIndex}-${categoryIndex}`}>
                  {categoryIndex === 0 && (
                    <Table.Cell rowSpan={countryData.categories.length}>
                      {countryData.country}
                    </Table.Cell>
                  )}
                  <Table.Cell>{category.category}</Table.Cell>
                  <Table.Cell>{category.inflationRate}</Table.Cell>
                </Table.Row>
              )),
            )}
          </Table.Body>
        </Table>
      ) : (
        <p>No category data available for {selectedRegion}.</p>
      )}
    </div>
  );
};

export default ChartComponent;
