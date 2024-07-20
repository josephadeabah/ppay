"use client";

import DropdownSelect from "@/components/dropdown/DropdownSelect";
import { ActiveElement, ChartData, ChartEvent, ChartOptions } from "chart.js";
import "chart.js/auto";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

interface Item {
  name: string;
  average_salary: number;
  currency?: string;
  healthcare_salary?: number;
  tech_salary?: number;
  education_salary?: number;
}

const data = {
  countries: [
    {
      name: "USA",
      average_salary: 70000,
      currency: "USD",
      healthcare_salary: 72000,
      tech_salary: 71000,
    },
    {
      name: "Germany",
      average_salary: 60000,
      currency: "EUR",
      healthcare_salary: 61000,
      tech_salary: 62000,
    },
    {
      name: "India",
      average_salary: 15000,
      currency: "INR",
      healthcare_salary: 16000,
      tech_salary: 15000,
    },
    {
      name: "Australia",
      average_salary: 65000,
      currency: "AUD",
      healthcare_salary: 66000,
      tech_salary: 67000,
    },
    {
      name: "Canada",
      average_salary: 68000,
      currency: "CAD",
      healthcare_salary: 69000,
      tech_salary: 68000,
    },
    {
      name: "Japan",
      average_salary: 55000,
      currency: "JPY",
      healthcare_salary: 56000,
      tech_salary: 55000,
    },
    {
      name: "UK",
      average_salary: 62000,
      currency: "GBP",
      healthcare_salary: 63000,
      tech_salary: 62000,
    },
    {
      name: "France",
      average_salary: 58000,
      currency: "EUR",
      healthcare_salary: 59000,
      tech_salary: 58000,
    },
    {
      name: "Brazil",
      average_salary: 20000,
      currency: "BRL",
      healthcare_salary: 21000,
      tech_salary: 20000,
    },
    {
      name: "South Africa",
      average_salary: 25000,
      currency: "ZAR",
      healthcare_salary: 26000,
      tech_salary: 25000,
    },
  ],
  industries: [
    {
      name: "Tech",
      average_salary: 80000,
      healthcare_salary: 85000,
      education_salary: 78000,
    },
    {
      name: "Finance",
      average_salary: 90000,
      healthcare_salary: 95000,
      education_salary: 89000,
    },
    {
      name: "Healthcare",
      average_salary: 70000,
      tech_salary: 75000,
      education_salary: 72000,
    },
    {
      name: "Education",
      average_salary: 50000,
      tech_salary: 52000,
      healthcare_salary: 51000,
    },
    {
      name: "Construction",
      average_salary: 60000,
      tech_salary: 62000,
      healthcare_salary: 61000,
    },
    {
      name: "Retail",
      average_salary: 45000,
      tech_salary: 47000,
      healthcare_salary: 46000,
    },
    {
      name: "Manufacturing",
      average_salary: 55000,
      tech_salary: 57000,
      healthcare_salary: 56000,
    },
    {
      name: "Energy",
      average_salary: 75000,
      tech_salary: 78000,
      healthcare_salary: 76000,
    },
    {
      name: "Transportation",
      average_salary: 53000,
      tech_salary: 55000,
      healthcare_salary: 54000,
    },
    {
      name: "Telecommunications",
      average_salary: 65000,
      tech_salary: 68000,
      healthcare_salary: 66000,
    },
  ],
  companies: [
    {
      name: "TechCorp",
      average_salary: 85000,
      healthcare_salary: 87000,
      education_salary: 86000,
    },
    {
      name: "FinBank",
      average_salary: 95000,
      healthcare_salary: 97000,
      education_salary: 96000,
    },
    {
      name: "HealthInc",
      average_salary: 75000,
      tech_salary: 77000,
      education_salary: 76000,
    },
    {
      name: "EduLearn",
      average_salary: 52000,
      tech_salary: 54000,
      healthcare_salary: 53000,
    },
    {
      name: "BuildIt",
      average_salary: 62000,
      tech_salary: 64000,
      healthcare_salary: 63000,
    },
    {
      name: "RetailPlus",
      average_salary: 47000,
      tech_salary: 49000,
      healthcare_salary: 48000,
    },
    {
      name: "ManuTech",
      average_salary: 57000,
      tech_salary: 59000,
      healthcare_salary: 58000,
    },
    {
      name: "EnergiCo",
      average_salary: 77000,
      tech_salary: 79000,
      healthcare_salary: 78000,
    },
    {
      name: "TransLog",
      average_salary: 54000,
      tech_salary: 56000,
      healthcare_salary: 55000,
    },
    {
      name: "TeleCom",
      average_salary: 66000,
      tech_salary: 68000,
      healthcare_salary: 67000,
    },
  ],
};

const Compare: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "countries" | "industries" | "companies"
  >("countries");
  const [selectedComparison, setSelectedComparison] = useState<
    "average_salary" | "healthcare_salary" | "tech_salary" | "education_salary"
  >("average_salary");
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const categories: { [key: string]: Item[] } = {
    countries: data.countries,
    industries: data.industries,
    companies: data.companies,
  };

  const chartData: ChartData<"bar"> = {
    labels: categories[selectedCategory].map((item) => item.name),
    datasets: [
      {
        label: selectedComparison.replace("_", " ").toUpperCase(),
        data: categories[selectedCategory].map(
          (item) => Number(item[selectedComparison as keyof Item]) || 0,
        ),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const handleBarClick = (event: ChartEvent, elements: ActiveElement[]) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      const item = categories[selectedCategory][index];
      setSelectedItem(item || null);
    }
  };

  const dropdownOptions = categories[selectedCategory].map((item) => ({
    value: item.name,
    label: item.name,
  }));

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="flex w-full flex-col p-6 lg:w-1/2">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Wages and Salaries Comparison
          </h2>
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
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="mb-6 flex-1">
              <DropdownSelect
                options={[
                  { value: "average_salary", label: "Average Salary" },
                  { value: "healthcare_salary", label: "Healthcare Salary" },
                  { value: "tech_salary", label: "Tech Salary" },
                  { value: "education_salary", label: "Education Salary" },
                ]}
                selectedValue={selectedComparison}
                onChange={(e) =>
                  setSelectedComparison(
                    e.target.value as
                      | "average_salary"
                      | "healthcare_salary"
                      | "tech_salary"
                      | "education_salary",
                  )
                }
                placeholder="Select Comparison"
              />
            </div>
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
                }}
                placeholder="Select Item"
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
        </div>
        <div className="flex w-full flex-col p-6 text-gray-900 dark:text-gray-100 lg:w-1/2">
          {selectedItem ? (
            <div>
              <h3 className="text-xl font-semibold ">Detailed Information</h3>
              <p className="mt-4">
                <strong>Name:</strong> {selectedItem.name}
              </p>
              <p>
                <strong>Average Salary:</strong>{" "}
                {selectedItem.average_salary.toLocaleString()}
              </p>
              <p>
                <strong>Healthcare Salary:</strong>{" "}
                {selectedItem.healthcare_salary?.toLocaleString() || "N/A"}
              </p>
              <p>
                <strong>Tech Salary:</strong>{" "}
                {selectedItem.tech_salary?.toLocaleString() || "N/A"}
              </p>
              <p>
                <strong>Education Salary:</strong>{" "}
                {selectedItem.education_salary?.toLocaleString() || "N/A"}
              </p>
            </div>
          ) : (
            <p className="text-gray-700 dark:text-gray-300">
              Select an item to see detailed information.
            </p>
          )}
        </div>
      </div>
      <div className="mt-4 overflow-x-auto p-6">
        <table className="w-full divide-x divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Average Salary
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Healthcare Salary
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Tech Salary
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Education Salary
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
            {categories[selectedCategory].map((item) => (
              <tr
                key={item.name}
                className={
                  selectedItem?.name === item.name
                    ? "bg-yellow-100 dark:bg-yellow-800"
                    : ""
                }
              >
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {item.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                  {item.average_salary.toLocaleString()}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                  {item.healthcare_salary?.toLocaleString() || "N/A"}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                  {item.tech_salary?.toLocaleString() || "N/A"}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                  {item.education_salary?.toLocaleString() || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Compare;
