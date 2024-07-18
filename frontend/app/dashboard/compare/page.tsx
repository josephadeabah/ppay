"use client";

import DropdownSelect from "@/components/dropdown/DropdownSelect";
import "chart.js/auto"; // For Chart.js v3
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

// Expanded Data with Multiple Sources
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

// Define Item type for comparison data
interface Item {
  name: string;
  average_salary: number;
  currency?: string;
  healthcare_salary?: number;
  tech_salary?: number;
  education_salary?: number;
}

const ComparisonChart: React.FC = () => {
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

  const chartData = {
    labels: categories[selectedCategory].map((item) => item.name),
    datasets: [
      {
        label: selectedComparison.replace("_", " ").toUpperCase(),
        data: categories[selectedCategory].map(
          (item) => item[selectedComparison as keyof Item],
        ),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const handleBarClick = (event: any, elements: any[]) => {
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
    <div className="flex h-screen w-full flex-col overflow-x-hidden bg-gray-100 dark:bg-gray-900 lg:flex-row">
      <div className="w-full bg-white p-6 dark:bg-gray-800 lg:w-1/2">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
          Wages and Salaries Comparison
        </h2>
        <div className="mb-6 flex space-x-4 overflow-x-auto">
          <button
            className={`rounded px-4 py-2 ${selectedCategory === "countries" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200"}`}
            onClick={() => {
              setSelectedCategory("countries");
              setSelectedItem(null);
            }}
          >
            Countries
          </button>
          <button
            className={`rounded px-4 py-2 ${selectedCategory === "industries" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200"}`}
            onClick={() => {
              setSelectedCategory("industries");
              setSelectedItem(null);
            }}
          >
            Industries
          </button>
          <button
            className={`rounded px-4 py-2 ${selectedCategory === "companies" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200"}`}
            onClick={() => {
              setSelectedCategory("companies");
              setSelectedItem(null);
            }}
          >
            Companies
          </button>
        </div>
        <div className="flex flex-row flex-wrap gap-4">
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
              selectedValue={selectedItem?.name || ""}
              onChange={(e) => {
                const selectedName = e.target.value;
                const item =
                  categories[selectedCategory].find(
                    (item) => item.name === selectedName,
                  ) || null;
                setSelectedItem(item);
              }}
              placeholder={`Select ${selectedCategory.slice(0, -1)}`}
            />
          </div>
        </div>
        <div className="h-80">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              onClick: handleBarClick,
              plugins: {
                legend: {
                  labels: {
                    color: "#ffffff",
                  },
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: "#ffffff",
                  },
                },
                y: {
                  ticks: {
                    color: "#ffffff",
                  },
                },
              },
            }}
          />
        </div>
      </div>
      <div className="w-full bg-white p-6 shadow-sm dark:bg-gray-800 lg:w-1/2">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
          Detailed Information
        </h2>
        {selectedItem ? (
          <div className="text-gray-900 dark:text-gray-200">
            <p>
              <strong>Name:</strong> {selectedItem.name}
            </p>
            <p>
              <strong>Average Salary:</strong> {selectedItem.average_salary}
            </p>
            {selectedItem.currency && (
              <p>
                <strong>Currency:</strong> {selectedItem.currency}
              </p>
            )}
            {selectedCategory === "countries" && (
              <>
                <p>
                  <strong>Healthcare Salary:</strong>{" "}
                  {selectedItem.healthcare_salary}
                </p>
                <p>
                  <strong>Tech Salary:</strong> {selectedItem.tech_salary}
                </p>
              </>
            )}
            {selectedCategory === "industries" && (
              <>
                <p>
                  <strong>Healthcare Salary:</strong>{" "}
                  {selectedItem.healthcare_salary}
                </p>
                <p>
                  <strong>Education Salary:</strong>{" "}
                  {selectedItem.education_salary}
                </p>
              </>
            )}
            {selectedCategory === "companies" && (
              <>
                <p>
                  <strong>Healthcare Salary:</strong>{" "}
                  {selectedItem.healthcare_salary}
                </p>
                <p>
                  <strong>Education Salary:</strong>{" "}
                  {selectedItem.education_salary}
                </p>
              </>
            )}
          </div>
        ) : (
          <p className="text-gray-700 dark:text-gray-400">
            Select a bar in the chart or choose an item from the dropdown to
            view details.
          </p>
        )}
      </div>
    </div>
  );
};

export default ComparisonChart;
