"use client";

import DropdownSelect from "@/components/dropdown/DropdownSelect";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Chart, registerables } from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";

Chart.register(...registerables);

const ComparisonPage = ({ data }: { data: any[] }) => {
  const [selectedComparison, setSelectedComparison] = useState("salary");

  const chartData = {
    labels: data.map((d) => d.name),
    datasets: [
      {
        label: `Comparison of ${selectedComparison}`,
        data: data.map((d) => d[selectedComparison] ?? 0), // Default to 0 if undefined
        backgroundColor: data.map((d) =>
          (d[selectedComparison] ?? 0) > 0
            ? "rgba(75, 192, 192, 0.2)"
            : "rgba(255, 99, 132, 0.2)",
        ),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const comparisonOptions = [
    { value: "salary", label: "Salary" },
    { value: "bonus", label: "Bonus" },
    { value: "stockOptions", label: "Stock Options" },
    { value: "marketRate", label: "Market Rate" },
  ];

  return (
    <div className="bg-white p-6 dark:bg-gray-900">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
        Pay Factors and Equity Scores Comparison
      </h1>

      <div className="mb-6">
        <label
          className="mb-2 block text-lg font-medium"
          htmlFor="comparisonFactor"
        >
          Select Comparison Factor:
        </label>
        <DropdownSelect
          options={comparisonOptions}
          selectedValue={selectedComparison}
          onChange={(e) => setSelectedComparison(e.target.value)}
          placeholder="Select a factor"
          id="comparisonFactor"
        />
      </div>

      <div
        className="mb-8 bg-gray-50 dark:bg-slate-700"
        style={{ position: "relative", height: "auto", width: "100%" }}
      >
        <Line data={chartData} />
      </div>

      <div className="overflow-x-auto">
        <Table
          aria-label="Comparative Data Table"
          className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
        >
          <TableHeader className="bg-gray-50 dark:bg-gray-800">
            <TableColumn className="text-left font-medium text-gray-900 dark:text-gray-100">
              Name
            </TableColumn>
            <TableColumn className="text-left font-medium text-gray-900 dark:text-gray-100">
              Location
            </TableColumn>
            <TableColumn className="text-left font-medium text-gray-900 dark:text-gray-100">
              Job Title
            </TableColumn>
            <TableColumn className="text-left font-medium text-gray-900 dark:text-gray-100">
              Salary
            </TableColumn>
            <TableColumn className="text-left font-medium text-gray-900 dark:text-gray-100">
              Bonus
            </TableColumn>
            <TableColumn className="text-left font-medium text-gray-900 dark:text-gray-100">
              Stock Options
            </TableColumn>
            <TableColumn className="text-left font-medium text-gray-900 dark:text-gray-100">
              Gender
            </TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow
                key={idx}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <TableCell className="text-gray-900 dark:text-gray-100">
                  {row.name}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">
                  {row.location}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">
                  {row.jobTitle}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">
                  ${row.salary}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">
                  ${row.bonus ?? 0}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">
                  ${row.stockOptions ?? 0}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">
                  {row.gender}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ComparisonPage;
