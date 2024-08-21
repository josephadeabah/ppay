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
    <div className="bg-gray-100 dark:bg-gray-900">
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

      <div className="relative mb-8 h-auto w-full min-w-full bg-gray-50 dark:bg-slate-700">
        <Line data={chartData} />
      </div>

      <div className="overflow-x-auto [&::-moz-scrollbar-thumb]:rounded-full [&::-moz-scrollbar-thumb]:bg-gray-200 [&::-moz-scrollbar-track]:m-1 [&::-moz-scrollbar]:w-2 [&::-ms-scrollbar-thumb]:rounded-full [&::-ms-scrollbar-thumb]:bg-gray-200 [&::-ms-scrollbar-track]:m-1 [&::-ms-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:m-1 [&::-webkit-scrollbar]:w-2">
        <Table
          aria-label="Comparative Data Table"
          className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
        >
          <TableHeader className="w-full min-w-full">
            <TableColumn className="bg-white text-left font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-100">
              Name
            </TableColumn>
            <TableColumn className="bg-white text-left font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-100">
              Location
            </TableColumn>
            <TableColumn className="bg-white text-left font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-100">
              Job Title
            </TableColumn>
            <TableColumn className="bg-white text-left font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-100">
              Salary
            </TableColumn>
            <TableColumn className="bg-white text-left font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-100">
              Bonus
            </TableColumn>
            <TableColumn className="bg-white text-left font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-100">
              Stock Options
            </TableColumn>
            <TableColumn className="bg-white text-left font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-100">
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
                  {row.salary}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">
                  {row.bonus ?? 0}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">
                  {row.stockOptions ?? 0}
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
