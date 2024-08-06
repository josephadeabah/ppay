"use client";

import DropdownSelect from "@/components/dropdown/DropdownSelect";
import { Tooltip } from "@nextui-org/react";
import { ActiveElement, ChartData, ChartEvent, ChartOptions } from "chart.js";
import "chart.js/auto";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import CompanyMetrics from "./CompanyMetrics";
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
  const [highlightedItem, setHighlightedItem] = useState<SelectedItem>(null);

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
    labels: categories[selectedCategory].map((item) => item.name),
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
    value: item.name,
    label: item.name,
  }));

  const calculateDifferences = (item: SelectedItem): any[] => {
    if (!item) return [];

    // Dummy data for differences; replace with real calculation logic
    return [
      { name: "Day", value: (item as any)[selectedComparison] * 1.001 },
      { name: "Week", value: (item as any)[selectedComparison] * 1.005 },
      { name: "Month", value: (item as any)[selectedComparison] * 1.01 },
      { name: "3 Months", value: (item as any)[selectedComparison] * 1.03 },
      { name: "6 Months", value: (item as any)[selectedComparison] * 1.06 },
      { name: "Year", value: (item as any)[selectedComparison] * 1.1 },
      { name: "2 Years", value: (item as any)[selectedComparison] * 1.25 },
      { name: "3 Years", value: (item as any)[selectedComparison] * 1.4 },
      { name: "5 Years", value: (item as any)[selectedComparison] * 1.6 },
      { name: "7 Years", value: (item as any)[selectedComparison] * 1.8 },
      { name: "10 Years", value: (item as any)[selectedComparison] * 2.0 },
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
                    (item) => item.name === selectedName,
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
                onClick: handleBarClick,
              } as ChartOptions<"bar">
            }
          />
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
                        content={`Change compared to the current ${selectedComparison.replace("_", " ")}.`}
                        className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
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
                      <td className="border border-gray-200 p-2 text-gray-700 dark:border-gray-700 dark:text-gray-50">
                        {diff.name}
                      </td>
                      <td className="border border-gray-200 p-2 text-gray-700 dark:border-gray-700 dark:text-gray-50">
                        {diff.value.toFixed(2)}
                      </td>
                      <td className="border border-gray-200 p-2 text-gray-700 dark:border-gray-700 dark:text-gray-50">
                        The value is projected to be {diff.value.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="flex w-full flex-col p-3 lg:w-1/2">
          <div className="mb-6 mt-2 flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-50">
            Top{" "}
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}{" "}
            {new Date().getFullYear()} (Live{" "}
            <div className="inline-block h-3 w-3 rounded-full bg-green-400"></div>
            )
          </div>
          <div className="overflow-x-auto">
            <table className="mt-4 w-full border-collapse border border-gray-200 dark:border-gray-700">
              <thead className="text-sm">
                <tr className="bg-gray-100 dark:bg-gray-800">
                  {columnHeaders[selectedCategory].map((header, index) => (
                    <th
                      key={index}
                      className="border border-gray-200 p-2 text-left text-sm font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-50"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {categories[selectedCategory].map((item, index) => (
                  <tr
                    key={item.name}
                    className={`${
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-900"
                        : "bg-gray-50 dark:bg-gray-800"
                    } ${highlightedItem?.name === item.name ? "bg-yellow-100 dark:bg-yellow-900" : ""}`}
                  >
                    <td className="border border-gray-200 p-2 text-gray-700 dark:border-gray-700 dark:text-gray-50">
                      {item.name}
                    </td>
                    {columnHeaders[selectedCategory]
                      .slice(1)
                      .map((header, index) => (
                        <td
                          key={index}
                          className="border border-gray-200 p-2 text-gray-700 dark:border-gray-700 dark:text-gray-50"
                        >
                          {(item as any)[Object.keys(item)[index + 1]]}
                        </td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <CompanyMetrics />
    </div>
  );
};

export default Compare;
