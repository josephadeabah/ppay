"use client";
import DropdownSelect from "@/components/dropdown/DropdownSelect";
import PaginationComponent from "@/components/pagination/pagination";
import {
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import InflationLoading from "./inflationloader";
import { InflationData, inflationData } from "./sampleData";

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

type Region =
  | "Europe"
  | "Asia"
  | "Africa"
  | "MiddleEast"
  | "NorthAmerica"
  | "SouthAmerica"
  | "Australia"
  | "Antarctica";

const InflationPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region>("NorthAmerica");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [loading, setLoading] = useState(true);

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

  // Prepare inflation data for the line chart (by region)
  const lineChartData: ChartData<"line", number[], string> = {
    labels: Object.keys(
      inflationData?.regional?.[selectedRegion]?.countries || {},
    ),
    datasets: [
      {
        label: `Overall Inflation Rate in ${selectedRegion}`,
        data: Object.values(
          inflationData?.regional?.[selectedRegion]?.countries || {},
        ).map(
          (country) => country.current.datasets[0].overallInflationRate || 0,
        ),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  // Prepare inflation data for the bar chart (all countries)
  function extractCountryNames(inflationData: InflationData): string[] {
    const countryNames: Set<string> = new Set();
    // Iterate over each region
    for (const regionKey in inflationData.regional) {
      const region = inflationData.regional[regionKey];
      // Check if the 'countries' key exists and is an object
      if (region.countries && typeof region.countries === "object") {
        // Iterate over each country in the region
        for (const countryKey in region.countries) {
          countryNames.add(countryKey); // Add country name to the set
        }
      }
    }
    // Convert the Set to an array and return
    return Array.from(countryNames);
  }

  const barChartData: ChartData<"bar", number[], string> = {
    labels: extractCountryNames(inflationData).map((country) => country),
    datasets: [
      {
        label: "Overall Inflation Rate",
        data: extractCountryNames(inflationData).map((country) => {
          const countryData =
            inflationData?.regional?.[selectedRegion]?.countries?.[country];
          if (countryData) {
            return countryData.current.datasets[0].overallInflationRate || 0;
          } else {
            return 0;
          }
        }),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Function to paginate country data
  const paginatedCountries = Object.keys(
    inflationData?.regional?.[selectedRegion]?.countries || {},
  ).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const countriesData =
    inflationData?.regional?.[selectedRegion]?.countries || {};

  useEffect(() => {
    // Simulate a loading period
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulates a 2-second load time
  }, []);

  return loading ? (
    <InflationLoading />
  ) : (
    <div className="m-4 flex min-h-screen flex-col bg-white px-4">
      <div className="flex flex-grow flex-col">
        <div className="mb-6 mt-2 flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-50">
          Inflation Analysis (Live{" "}
          <div className="inline-block h-3 w-3 rounded-full bg-green-400"></div>
          )
        </div>
        <div className="mb-8">
          <DropdownSelect
            options={[
              { value: "NorthAmerica", label: "North America" },
              { value: "Europe", label: "Europe" },
              { value: "Asia", label: "Asia" },
              { value: "Africa", label: "Africa" },
              { value: "MiddleEast", label: "Middle East" },
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="h-64">
            <Line
              data={lineChartData}
              options={getChartOptions(
                `Overall Inflation Rate per Country in ${selectedRegion} (${new Date().getFullYear()})`,
              )}
            />
          </div>
          <div className="h-64">
            <Bar
              data={barChartData}
              options={getChartOptions(
                "Overall Inflation Rate of All Countries",
              )}
            />
          </div>
        </div>

        <h2 className="my-6 text-2xl font-bold text-gray-700 dark:text-gray-50">
          Category-wise Inflation Rates
        </h2>

        <div className="flex flex-1 flex-col">
          {paginatedCountries.map((country) => {
            const countryData = countriesData[country];
            return (
              <div key={country} className="mb-6 flex flex-col md:flex-row">
                {/* Country Data Table */}
                <div className="flex-1 overflow-x-auto">
                  <h3 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-50">
                    {country} - Overall Inflation Rate:{" "}
                    {countryData.current.datasets[0].overallInflationRate ||
                      "No data available"}
                  </h3>
                  <div className="h-[300px] overflow-y-auto [&::-moz-scrollbar-thumb]:rounded-full [&::-moz-scrollbar-thumb]:bg-gray-200 [&::-moz-scrollbar-track]:m-1 [&::-moz-scrollbar]:w-2 [&::-ms-scrollbar-thumb]:rounded-full [&::-ms-scrollbar-thumb]:bg-gray-200 [&::-ms-scrollbar-track]:m-1 [&::-ms-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:m-1 [&::-webkit-scrollbar]:w-2">
                    <Table hoverable={true}>
                      <Table.Head>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Inflation Rate</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        {countryData.current.datasets[0].categories.map(
                          (category) => (
                            <Table.Row
                              key={category.category}
                              className="bg-white dark:bg-gray-800"
                            >
                              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {category.category}
                              </Table.Cell>
                              <Table.Cell>
                                {category.inflationRate || "No data available"}
                              </Table.Cell>
                            </Table.Row>
                          ),
                        )}
                      </Table.Body>
                    </Table>
                  </div>
                </div>
                {/* Inflation rate per month per country Chart Container */}
                <div className="mt-4 h-96 flex-1 md:mt-0">
                  <Line
                    data={{
                      labels: countryData.current.labels || [
                        "No data available",
                      ],
                      datasets: countryData.current.datasets.map((dataset) => ({
                        ...dataset,
                        label: `Chart of monthly inflation rate in ${country}`,
                        data: dataset.categories.map(
                          (category) => category.inflationRate || 0,
                        ),
                      })),
                    }}
                    options={getChartOptions(
                      `Monthly Inflation Rate for ${country} in ${new Date().getFullYear()}`,
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center">
        <PaginationComponent
          total={Math.ceil(Object.keys(countriesData).length / itemsPerPage)}
          initialPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default InflationPage;
