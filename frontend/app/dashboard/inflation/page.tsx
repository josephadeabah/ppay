"use client";
import DropdownSelect from "@/components/dropdown/DropdownSelect";
import PaginationComponent from "@/components/pagination/pagination";
import {
  BarElement,
  CategoryScale,
  Chart,
  ChartData,
  ChartEvent,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Table } from "flowbite-react";
import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { categoryData } from "./sampleCategoryData";
import { inflationData } from "./sampleData";

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

const InflationPage: React.FC = () => {
  type Region =
    | "Europe"
    | "Asia"
    | "Africa"
    | "NorthAmerica"
    | "SouthAmerica"
    | "Australia"
    | "Antarctica";

  const [selectedRegion, setSelectedRegion] = useState<Region>("NorthAmerica");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const getChartOptions = (title: string) => ({
    responsive: true,
    maintainAspectRatio: false,
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
          region as
            | "Europe"
            | "Asia"
            | "Africa"
            | "NorthAmerica"
            | "SouthAmerica"
            | "Australia"
            | "Antarctica",
        );
      }
    }
  };

  // Calculate paginated data
  const paginatedData = categoryData[selectedRegion].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Prepare inflation data for the line chart
  const lineChartData: ChartData<"line", number[], string> = {
    labels: inflationData.regional[selectedRegion]?.labels || [], // Ensure labels are not undefined
    datasets: inflationData.regional[selectedRegion]?.datasets
      ? inflationData.regional[selectedRegion]?.datasets.map((dataset) => ({
          ...dataset,
          data: dataset?.data || [], // Ensure data is not undefined
        }))
      : [], // Ensure datasets are not undefined
  };

  // Prepare inflation data for the bar chart
  const barChartData: ChartData<"bar", number[], string> = {
    labels: inflationData.regional[selectedRegion]?.labels || [], // Ensure labels are not undefined
    datasets: inflationData.regional[selectedRegion]?.datasets
      ? inflationData.regional[selectedRegion]?.datasets.map((dataset) => ({
          ...dataset,
          data: dataset?.data || [], // Ensure data is not undefined
        }))
      : [], // Ensure datasets are not undefined
  };

  // Prepare inflation data for country against overall inflation
  const prepareChartData = (data: typeof categoryData) => {
    const countries: string[] = [];
    const inflationRates: number[] = [];

    Object.values(data)
      .flat()
      .forEach((item) => {
        countries.push(item.country);
        inflationRates.push(parseFloat(item.overallInflationRate));
      });

    return {
      labels: countries,
      datasets: [
        {
          label: "Overall Inflation Rate (%)",
          data: inflationRates,
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.2)",
        },
      ],
    };
  };

  return (
    <div className="mx-auto px-4">
      <div className="mb-6 mt-2 flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-50">
        Inflation Analysis (Live{" "}
        <div className="inline-block h-3 w-3 rounded-full bg-green-400"></div>)
      </div>
      <div className="mb-8">
        <DropdownSelect
          options={[
            { value: "NorthAmerica", label: "North America" },
            { value: "Europe", label: "Europe" },
            { value: "Asia", label: "Asia" },
            { value: "Africa", label: "Africa" },
            { value: "SouthAmerica", label: "South America" },
            { value: "Australia", label: "Australia" },
            { value: "Antarctica", label: "Antarctica" },
          ]}
          selectedValue={selectedRegion}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedRegion(event.target.value as Region);
            setCurrentPage(1); // Reset to the first page when the region changes
          }}
          placeholder="Select a region"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="h-64">
          <Line
            data={lineChartData}
            options={getChartOptions(
              `Inflation Rate in ${new Date().getFullYear()}`,
            )}
          />
        </div>
        <div className="h-64">
          <Bar
            data={barChartData}
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
        <div className="h-64">
          {/* This line chart now reflects the current overall inflation data per country */}
          <Line
            data={prepareChartData(categoryData)}
            options={getChartOptions("Current Inflation Rate Per Country")}
          />
        </div>
      </div>

      <h2 className="my-6 text-2xl font-bold text-gray-700 dark:text-gray-50">
        Category-wise Inflation Rates
      </h2>

      <div className="flex flex-1 flex-col">
        {paginatedData.map((countryData) => (
          <div
            key={countryData.country}
            className="mb-6 flex flex-col md:flex-row"
          >
            {/* Country Data Table */}
            <div className="flex-1 overflow-x-auto">
              <h3 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-50">
                {countryData.country} - Overall Inflation Rate:{" "}
                {countryData.overallInflationRate}
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

            {/* Inflation rate per month per country Chart Container */}
            <div className="mt-4 h-64 flex-1 md:mt-0">
              {/* <Line
                data={inflationChartData}
                options={getChartOptions("Inflation Rate by Month")}
              /> */}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <PaginationComponent
          total={Math.ceil(categoryData[selectedRegion].length / itemsPerPage)}
          initialPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default InflationPage;
