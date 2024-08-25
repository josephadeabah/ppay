"use client";

import DropdownSelect from "@/components/dropdown/DropdownSelect";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table/Table";
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
    <div className="">
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

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Job Title</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Bonus</TableHead>
            <TableHead>Stock Options</TableHead>
            <TableHead>Gender</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={idx} className="">
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.jobTitle}</TableCell>
              <TableCell>{row.salary}</TableCell>
              <TableCell>{row.bonus ?? 0}</TableCell>
              <TableCell>{row.stockOptions ?? 0}</TableCell>
              <TableCell>{row.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparisonPage;
