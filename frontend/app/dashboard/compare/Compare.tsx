"use client";

import DropdownSelect from "@/components/dropdown/DropdownSelect";
import { ActiveElement, ChartData, ChartEvent, ChartOptions } from "chart.js";
import "chart.js/auto";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

interface Country {
  name: string;
  average_salary: number;
  healthcare_salary: number;
  tech_salary: number;
  education_salary: number;
}

interface Industry {
  name: string;
  job_prospects: number;
  growth_prospects: number;
  salary_prospects: number;
  job_security: number;
}

interface Company {
  name: string;
  average_salary: number;
  innovation: number;
  work_environment: number;
  employee_retention: number;
}

const data = {
  countries: [
    {
      name: "USA",
      average_salary: 70000,
      healthcare_salary: 72000,
      tech_salary: 71000,
      education_salary: 68000,
    },
    {
      name: "Germany",
      average_salary: 60000,
      healthcare_salary: 61000,
      tech_salary: 62000,
      education_salary: 59000,
    },
    {
      name: "Japan",
      average_salary: 50000,
      healthcare_salary: 51000,
      tech_salary: 52000,
      education_salary: 53000,
    },
    {
      name: "France",
      average_salary: 40000,
      healthcare_salary: 41000,
      tech_salary: 42000,
      education_salary: 43000,
    },
    {
      name: "UK",
      average_salary: 30000,
      healthcare_salary: 31000,
      tech_salary: 32000,
      education_salary: 33000,
    },
    {
      name: "China",
      average_salary: 20000,
      healthcare_salary: 21000,
      tech_salary: 22000,
      education_salary: 23000,
    },
    {
      name: "India",
      average_salary: 10000,
      healthcare_salary: 11000,
      tech_salary: 12000,
      education_salary: 13000,
    },
    {
      name: "Brazil",
      average_salary: 80000,
      healthcare_salary: 81000,
      tech_salary: 82000,
      education_salary: 83000,
    },
    {
      name: "Australia",
      average_salary: 90000,
      healthcare_salary: 91000,
      tech_salary: 92000,
      education_salary: 93000,
    },
    {
      name: "Canada",
      average_salary: 100000,
      healthcare_salary: 101000,
      tech_salary: 102000,
      education_salary: 103000,
    },
    {
      name: "South Africa",
      average_salary: 110000,
      healthcare_salary: 111000,
      tech_salary: 112000,
      education_salary: 113000,
    },
    {
      name: "South Korea",
      average_salary: 120000,
      healthcare_salary: 121000,
      tech_salary: 122000,
      education_salary: 123000,
    },
    {
      name: "Russia",
      average_salary: 130000,
      healthcare_salary: 131000,
      tech_salary: 132000,
      education_salary: 133000,
    },
    {
      name: "Mexico",
      average_salary: 140000,
      healthcare_salary: 141000,
      tech_salary: 142000,
      education_salary: 143000,
    },
    {
      name: "Italy",
      average_salary: 150000,
      healthcare_salary: 151000,
      tech_salary: 152000,
      education_salary: 153000,
    },
    {
      name: "Spain",
      average_salary: 160000,
      healthcare_salary: 161000,
      tech_salary: 162000,
      education_salary: 163000,
    },
    {
      name: "Netherlands",
      average_salary: 170000,
      healthcare_salary: 171000,
      tech_salary: 172000,
      education_salary: 173000,
    },
    {
      name: "Turkey",
      average_salary: 180000,
      healthcare_salary: 181000,
      tech_salary: 182000,
      education_salary: 183000,
    },
    {
      name: "Saudi Arabia",
      average_salary: 190000,
      healthcare_salary: 191000,
      tech_salary: 192000,
      education_salary: 193000,
    },
    {
      name: "Switzerland",
      average_salary: 200000,
      healthcare_salary: 201000,
      tech_salary: 202000,
      education_salary: 203000,
    },
    {
      name: "Sweden",
      average_salary: 210000,
      healthcare_salary: 211000,
      tech_salary: 212000,
      education_salary: 213000,
    },
    {
      name: "Poland",
      average_salary: 220000,
      healthcare_salary: 221000,
      tech_salary: 222000,
      education_salary: 223000,
    },
    {
      name: "Israel",
      average_salary: 230000,
      healthcare_salary: 231000,
      tech_salary: 232000,
      education_salary: 233000,
    },
    {
      name: "Finland",
      average_salary: 240000,
      healthcare_salary: 241000,
      tech_salary: 242000,
      education_salary: 243000,
    },
  ],
  industries: [
    {
      name: "Tech",
      job_prospects: 85,
      growth_prospects: 90,
      salary_prospects: 80,
      job_security: 88,
    },
    {
      name: "Finance",
      job_prospects: 80,
      growth_prospects: 85,
      salary_prospects: 90,
      job_security: 82,
    },
    {
      name: "Healthcare",
      job_prospects: 75,
      growth_prospects: 80,
      salary_prospects: 85,
      job_security: 78,
    },
    {
      name: "Education",
      job_prospects: 70,
      growth_prospects: 75,
      salary_prospects: 80,
      job_security: 74,
    },
    {
      name: "Manufacturing",
      job_prospects: 65,
      growth_prospects: 70,
      salary_prospects: 75,
      job_security: 70,
    },
    {
      name: "Real Estate",
      job_prospects: 60,
      growth_prospects: 65,
      salary_prospects: 70,
      job_security: 66,
    },
    {
      name: "Other",
      job_prospects: 55,
      growth_prospects: 60,
      salary_prospects: 65,
      job_security: 62,
    },
    // ... (rest of the data)
  ],
  companies: [
    {
      name: "TechCorp",
      average_salary: 85000,
      innovation: 90,
      work_environment: 85,
      employee_retention: 88,
    },
    {
      name: "FinBank",
      average_salary: 95000,
      innovation: 85,
      work_environment: 80,
      employee_retention: 90,
    },
    {
      name: "ApexBank",
      average_salary: 80000,
      innovation: 80,
      work_environment: 75,
      employee_retention: 85,
    },
    {
      name: "Edu LLC",
      average_salary: 75000,
      innovation: 75,
      work_environment: 70,
      employee_retention: 80,
    },
    {
      name: "Manufact",
      average_salary: 70000,
      innovation: 70,
      work_environment: 65,
      employee_retention: 75,
    },
    {
      name: "Relax Corp",
      average_salary: 65000,
      innovation: 65,
      work_environment: 60,
      employee_retention: 70,
    },
    {
      name: "Company X",
      average_salary: 55000,
      innovation: 55,
      work_environment: 50,
      employee_retention: 60,
    },
    {
      name: "Company Y",
      average_salary: 50000,
      innovation: 50,
      work_environment: 45,
      employee_retention: 55,
    },
    {
      name: "Company Z",
      average_salary: 45000,
      innovation: 45,
      work_environment: 40,
      employee_retention: 50,
    },
    {
      name: "Company W",
      average_salary: 40000,
      innovation: 40,
      work_environment: 35,
      employee_retention: 45,
    },
    {
      name: "Company V",
      average_salary: 35000,
      innovation: 35,
      work_environment: 30,
      employee_retention: 40,
    },
    {
      name: "Company U",
      average_salary: 30000,
      innovation: 30,
      work_environment: 25,
      employee_retention: 35,
    },
    {
      name: "Company T",
      average_salary: 25000,
      innovation: 25,
      work_environment: 20,
      employee_retention: 30,
    },
    {
      name: "Company S",
      average_salary: 20000,
      innovation: 20,
      work_environment: 15,
      employee_retention: 25,
    },
    {
      name: "Company R",
      average_salary: 15000,
      innovation: 15,
      work_environment: 10,
      employee_retention: 20,
    },
    {
      name: "Company Q",
      average_salary: 10000,
      innovation: 10,
      work_environment: 5,
      employee_retention: 15,
    },
    {
      name: "Company P",
      average_salary: 5000,
      innovation: 5,
      work_environment: 0,
      employee_retention: 10,
    },
    // ... (rest of the data)
  ],
};

const Compare: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "countries" | "industries" | "companies"
  >("countries");
  const [selectedComparison, setSelectedComparison] = useState<
    keyof Country | keyof Industry | keyof Company
  >("average_salary");
  const [selectedItem, setSelectedItem] = useState<
    Country | Industry | Company | null
  >(null);
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
        name: "Next Day",
        value: (item as any)[selectedComparison] * 1.001, // Assuming 0.1% increase
      },
      {
        name: "Next Week",
        value: (item as any)[selectedComparison] * 1.005, // Assuming 0.5% increase
      },
      {
        name: "Next Month",
        value: (item as any)[selectedComparison] * 1.01, // Assuming 1% increase
      },
      {
        name: "Next 3 Months",
        value: (item as any)[selectedComparison] * 1.03, // Assuming 3% increase
      },
      {
        name: "Next 6 Months",
        value: (item as any)[selectedComparison] * 1.06, // Assuming 6% increase
      },
      {
        name: "Next Year",
        value: (item as any)[selectedComparison] * 1.1, // Assuming 10% increase
      },
      {
        name: "Next 2 Years",
        value: (item as any)[selectedComparison] * 1.25, // Assuming 25% increase
      },
      {
        name: "Next 3 Years",
        value: (item as any)[selectedComparison] * 1.4, // Assuming 40% increase
      },
      {
        name: "Next 5 Years",
        value: (item as any)[selectedComparison] * 1.6, // Assuming 60% increase
      },
      {
        name: "Next 7 Years",
        value: (item as any)[selectedComparison] * 1.8, // Assuming 80% increase
      },
      {
        name: "Next 10 Years",
        value: (item as any)[selectedComparison] * 2.0, // Assuming 100% increase
      },
    ];
  };

  const differences = calculateDifferences(selectedItem);

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="flex w-full flex-col p-6 lg:w-1/2">
          <div className="mb-6 mt-2 flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-50">
            Compare {new Date().getFullYear()} (Live{" "}
            <span className="inline-block h-3 w-3 rounded-full bg-green-400"></span>
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
                      Timeframe
                    </th>
                    <th className="border border-gray-200 p-2 text-left text-sm font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-50">
                      Expected Value
                    </th>
                    <th className="border border-gray-200 p-2 text-left text-sm font-semibold text-gray-700 dark:border-gray-700 dark:text-gray-50">
                      Explanation
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
                        {`Represents a ${
                          ((diff.value -
                            (highlightedItem as any)[selectedComparison]) /
                            (highlightedItem as any)[selectedComparison]) *
                          100
                        }% change compared to the current ${selectedComparison.replace(
                          "_",
                          " ",
                        )}.`}
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
