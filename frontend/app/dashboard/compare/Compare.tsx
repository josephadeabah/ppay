"use client";

import DropdownSelect from "@/components/dropdown/DropdownSelect";
import { Tooltip } from "@nextui-org/react";
import { ActiveElement, ChartData, ChartEvent, ChartOptions } from "chart.js";
import "chart.js/auto";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Company, Country, data, Industry } from "./data";

const Compare: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "countries" | "industries" | "companies"
  >("countries");
  const [selectedComparison, setSelectedComparison] = useState<
    keyof Country | keyof Industry | keyof Company
  >("average_salary");
  type SelectedItem = Country | Industry | Company | null;

  const [selectedItem, setSelectedItem] = useState<SelectedItem>(null);
  const [highlightedItem, setHighlightedItem] = useState<
    Country | Industry | Company | null
  >(null);

  const categories: { [key: string]: (Country | Industry | Company)[] } = {
    countries: data.countries as Country[],
    industries: data.industries,
    companies: data.companies,
  };

  const columnHeaders: { [key: string]: string[] } = {
    countries: [
      "Name",
      "Average Salary",
      "Healthcare Salary Average",
      "Tech Salary Average",
      "Education Salary Average",
    ],
    industries: [
      "Name",
      "Job Prospects",
      "Growth Prospects",
      "Salary Prospects",
      "Job Security",
    ],
    companies: [
      "Name",
      "Average Salary",
      "Innovation",
      "Work Environment",
      "Employee Retention",
    ],
  };

  const chartData: ChartData<"bar"> = {
    labels: categories[selectedCategory].map((item) => (item as any).name),
    datasets: [
      {
        label: selectedComparison.replace("_", " ").toUpperCase(),
        data: categories[selectedCategory].map(
          (item) => Number((item as any)[selectedComparison]) || 0,
        ),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 182, 193, 0.7)", // Light Pink
        hoverBorderColor: "rgba(255, 182, 193, 0.7)",
      },
    ],
  };

  const handleBarClick = (event: ChartEvent, elements: ActiveElement[]) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      const item = categories[selectedCategory][index];
      setSelectedItem(item || null);
      setHighlightedItem(item || null); // Set highlighted item
    }
  };

  const dropdownOptions = categories[selectedCategory].map((item) => ({
    value: (item as any).name,
    label: (item as any).name,
  }));

  const calculateDifferences = (
    item: Country | Industry | Company | null,
  ): any[] => {
    if (!item) return [];

    // Dummy data for differences; replace with real calculation logic
    return [
      {
        name: "Day",
        value: (item as any)[selectedComparison] * 1.001, // Assuming 0.1% increase
      },
      {
        name: "Week",
        value: (item as any)[selectedComparison] * 1.005, // Assuming 0.5% increase
      },
      {
        name: "Month",
        value: (item as any)[selectedComparison] * 1.01, // Assuming 1% increase
      },
      {
        name: "3 Months",
        value: (item as any)[selectedComparison] * 1.03, // Assuming 3% increase
      },
      {
        name: "6 Months",
        value: (item as any)[selectedComparison] * 1.06, // Assuming 6% increase
      },
      {
        name: "Year",
        value: (item as any)[selectedComparison] * 1.1, // Assuming 10% increase
      },
      {
        name: "2 Years",
        value: (item as any)[selectedComparison] * 1.25, // Assuming 25% increase
      },
      {
        name: "3 Years",
        value: (item as any)[selectedComparison] * 1.4, // Assuming 40% increase
      },
      {
        name: "5 Years",
        value: (item as any)[selectedComparison] * 1.6, // Assuming 60% increase
      },
      {
        name: "7 Years",
        value: (item as any)[selectedComparison] * 1.8, // Assuming 80% increase
      },
      {
        name: "10 Years",
        value: (item as any)[selectedComparison] * 2.0, // Assuming 100% increase
      },
    ];
  };

  const differences = calculateDifferences(selectedItem);

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="flex w-full flex-col p-3 lg:w-1/2">
          <div className="mb-6 mt-2 flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-50">
            Compare {new Date().getFullYear()} (Live{" "}
            <div className="inline-block h-3 w-3 rounded-full bg-green-400"></div>
            )
          </div>
          <div className="mb-6 flex gap-1">
            {["countries", "industries", "companies"].map((category) => (
              <button
                key={category}
                className={`rounded px-4 py-2 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-gray-50 dark:bg-gray-600 dark:text-gray-50"
                    : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                }`}
                onClick={() => {
                  setSelectedCategory(
                    category as "countries" | "industries" | "companies",
                  );
                  setSelectedItem(null);
                  setHighlightedItem(null); // Clear highlighted item
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="mb-6 flex-1">
              <DropdownSelect
                options={dropdownOptions}
                selectedValue={selectedItem?.name ?? ""}
                onChange={(e) => {
                  const selectedName = e.target.value;
                  const item = categories[selectedCategory].find(
                    (item) => (item as any).name === selectedName,
                  );
                  setSelectedItem(item || null);
                  setHighlightedItem(item || null); // Set highlighted item
                }}
                placeholder="Select Item"
              />
            </div>
            <div className="mb-6 flex-1">
              <DropdownSelect
                options={Object.keys(categories[selectedCategory][0] || {}).map(
                  (key) => ({
                    value: key,
                    label: key.replace("_", " ").toUpperCase(),
                  }),
                )}
                selectedValue={selectedComparison}
                onChange={(e) =>
                  setSelectedComparison(
                    e.target.value as
                      | keyof Country
                      | keyof Industry
                      | keyof Company,
                  )
                }
                placeholder="Select Comparison"
              />
            </div>
          </div>
          <Bar
            data={chartData}
            options={
              {
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                onClick: (event: ChartEvent, elements: ActiveElement[]) =>
                  handleBarClick(event, elements),
              } as unknown as ChartOptions<"bar">
            }
          />
          {/* Changes that are meant to occur over a specified period */}
          {highlightedItem && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-50">
                Expected Changes for {highlightedItem.name}
              </h2>
              <span className="text-sm text-gray-700 dark:text-gray-50">
                These values are bound to change based on current economic
                trends
              </span>
              <table className="mt-4 w-full border-collapse border border-gray-200 dark:border-gray-700">
                <thead className="text-sm">
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-200 p-2 text-left text-sm font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-50">
                      Timeframe (Next)
                    </th>
                    <th className="border border-gray-200 p-2 text-left text-sm font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-50">
                      Expected Value
                    </th>
                    <th className="border border-gray-200 p-2 text-left text-sm font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-50">
                      <Tooltip
                        placement="top"
                        content={`change compared to the current ${selectedComparison.replace(
                          "_",
                          " ",
                        )}.`}
                        className="bg-gray-200 text-sm text-gray-400 dark:bg-gray-950 dark:text-gray-50"
                      >
                        Explanation
                      </Tooltip>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {differences.map((diff) => (
                    <tr
                      key={diff.name}
                      className="bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
                    >
                      <td className="border border-gray-200 p-2 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-50">
                        {diff.name}
                      </td>
                      <td className="border border-gray-200 p-2 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-50">
                        {diff.value.toLocaleString()}
                      </td>
                      <td className="border border-gray-200 p-2 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-50">
                        {` ${(
                          ((diff.value -
                            (highlightedItem as any)[selectedComparison]) /
                            (highlightedItem as any)[selectedComparison]) *
                          100
                        ).toPrecision(3)}%`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="flex w-full flex-col p-6 text-gray-900 dark:text-gray-100 lg:w-1/2">
          {selectedItem ? (
            <div>
              <h3 className="text-xl font-semibold">Detailed Information</h3>
              <p className="mt-4">
                <strong>Name:</strong> {(selectedItem as any).name}
              </p>
              {selectedCategory === "countries" && (
                <>
                  <p>
                    <strong>Average Salary:</strong>{" "}
                    {(
                      selectedItem as Country
                    )?.average_salary?.toLocaleString()}
                  </p>
                  <p>
                    <strong>Healthcare Salary Average:</strong>{" "}
                    {(
                      selectedItem as Country
                    )?.healthcare_salary?.toLocaleString()}
                  </p>
                  <p>
                    <strong>Tech Salary Average:</strong>{" "}
                    {(selectedItem as Country)?.tech_salary?.toLocaleString()}
                  </p>
                  <p>
                    <strong>Education Salary Average:</strong>{" "}
                    {(
                      selectedItem as Country
                    )?.education_salary?.toLocaleString()}
                  </p>
                </>
              )}
              {selectedCategory === "industries" && (
                <>
                  <p>
                    <strong>Job Prospects:</strong>{" "}
                    {(selectedItem as Industry).job_prospects}
                  </p>
                  <p>
                    <strong>Growth Prospects:</strong>{" "}
                    {(selectedItem as Industry).growth_prospects}
                  </p>
                  <p>
                    <strong>Salary Prospects:</strong>{" "}
                    {(selectedItem as Industry).salary_prospects}
                  </p>
                  <p>
                    <strong>Job Security:</strong>{" "}
                    {(selectedItem as Industry).job_security}
                  </p>
                </>
              )}
              {selectedCategory === "companies" && (
                <>
                  <p>
                    <strong>Average Salary:</strong>{" "}
                    {(selectedItem as Company).average_salary.toLocaleString()}
                  </p>
                  <p>
                    <strong>Innovation:</strong>{" "}
                    {(selectedItem as Company).innovation}
                  </p>
                  <p>
                    <strong>Work Environment:</strong>{" "}
                    {(selectedItem as Company).work_environment}
                  </p>
                  <p>
                    <strong>Employee Retention:</strong>{" "}
                    {(selectedItem as Company).employee_retention}
                  </p>
                </>
              )}
            </div>
          ) : (
            <p>Select an item from the chart to view details.</p>
          )}

          {/* table here */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-sm">
                <tr>
                  {columnHeaders[selectedCategory].map((header) => (
                    <th key={header} className="border-b px-4 py-2">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {categories[selectedCategory].map((item, index) => (
                  <tr
                    key={index}
                    className={`cursor-pointer ${highlightedItem === item ? "bg-yellow-100" : ""}`}
                    onClick={() => {
                      setSelectedItem(item);
                      setHighlightedItem(item);
                    }}
                  >
                    <td className="border-b px-4 py-2">{(item as any).name}</td>
                    {selectedCategory === "countries" && (
                      <>
                        <td className="border-b px-4 py-2">
                          {(item as Country)?.average_salary?.toLocaleString()}
                        </td>
                        <td className="border-b px-4 py-2">
                          {(
                            item as Country
                          )?.healthcare_salary?.toLocaleString()}
                        </td>
                        <td className="border-b px-4 py-2">
                          {(item as Country)?.tech_salary?.toLocaleString()}
                        </td>
                        <td className="border-b px-4 py-2">
                          {(
                            item as Country
                          )?.education_salary?.toLocaleString()}
                        </td>
                      </>
                    )}
                    {selectedCategory === "industries" && (
                      <>
                        <td className="border-b px-4 py-2">
                          {(item as Industry)?.job_prospects}%
                        </td>
                        <td className="border-b px-4 py-2">
                          {(item as Industry)?.growth_prospects}%
                        </td>
                        <td className="border-b px-4 py-2">
                          {(item as Industry)?.salary_prospects}%
                        </td>
                        <td className="border-b px-4 py-2">
                          {(item as Industry)?.job_security}%
                        </td>
                      </>
                    )}
                    {selectedCategory === "companies" && (
                      <>
                        <td className="border-b px-4 py-2">
                          {(item as Company)?.average_salary.toLocaleString()}
                        </td>
                        <td className="border-b px-4 py-2">
                          {(item as Company)?.innovation}%
                        </td>
                        <td className="border-b px-4 py-2">
                          {(item as Company)?.work_environment}%
                        </td>
                        <td className="border-b px-4 py-2">
                          {(item as Company)?.employee_retention}%
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
