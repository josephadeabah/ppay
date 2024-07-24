"use client";
import DropdownSelect from "@/components/dropdown/DropdownSelect"; // Ensure this path is correct
import {
  BarElement,
  CategoryScale,
  Chart,
  ChartEvent,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Table } from "flowbite-react"; // Ensure you have the correct library and path
import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { categoryData, inflationData } from "./sampleData";

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
  current: Record<string, any>; // Use correct type if known
  regional: any; // Use correct type if known
}

const InflationPage: React.FC = () => {
  type Region = "Europe" | "Asia" | "Africa" | "NorthAmerica";

  const [selectedRegion, setSelectedRegion] = useState<Region>("NorthAmerica");

  const getChartOptions = (title: string) => ({
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  });

  let chartInstance: Chart<
    "bar",
    (number | [number, number] | null)[],
    unknown
  >;

  const handleBarClick = (
    elements: any[],
    event: ChartEvent,
    chartInstance: Chart<"bar", (number | [number, number] | null)[], unknown>,
  ) => {
    if (elements.length > 0) {
      const firstElement = elements[0];
      const datasetIndex = firstElement.datasetIndex;
      const dataset = chartInstance.data.datasets[datasetIndex];
      const region = dataset.label;

      if (region) {
        setSelectedRegion(
          region as "Europe" | "Asia" | "Africa" | "NorthAmerica",
        );
      }
    }
  };

  return (
    <div className="mx-auto px-4">
      <div className="mb-6 mt-2 flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-50">
        Inflation Analysis (Live{" "}
        <span className="inline-block h-3 w-3 rounded-full bg-green-400"></span>
        )
      </div>
      <div className="mb-8">
        <DropdownSelect
          options={[
            { value: "NorthAmerica", label: "North America" },
            { value: "Europe", label: "Europe" },
            { value: "Asia", label: "Asia" },
            { value: "Africa", label: "Africa" },
          ]}
          selectedValue={selectedRegion}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedRegion(
              event.target.value as
                | "Europe"
                | "Asia"
                | "Africa"
                | "NorthAmerica",
            );
          }}
          placeholder="Select a region"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <Line
            data={inflationData.current[selectedRegion]}
            options={getChartOptions(
              `Current Inflation Data ${new Date().getFullYear()}`,
            )}
          />
        </div>
        <div>
          <Bar
            data={inflationData.regional}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: "Regional Inflation Data",
                },
              },
              onClick: (event, elements) =>
                handleBarClick(elements, event, chartInstance),
            }}
          />
        </div>
      </div>

      <h2 className="my-6 text-2xl font-bold text-gray-700 dark:text-gray-50">
        Category-wise Inflation Rates
      </h2>

      {categoryData[selectedRegion].map((countryData) => (
        <div key={countryData.country} className="mb-6">
          <h3 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-50">
            {countryData.country}
          </h3>
          <Table hoverable={true}>
            <Table.Head>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Inflation Rate</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {countryData.categories.map((category) => (
                <Table.Row
                  key={category.category}
                  className="bg-white dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {category.category}
                  </Table.Cell>
                  <Table.Cell>{category.inflationRate}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default InflationPage;
