"use client";

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
        data: data.map((d) => d[selectedComparison]),
        backgroundColor: data.map((d) =>
          d[selectedComparison] > 0
            ? "rgba(75, 192, 192, 0.2)"
            : "rgba(255, 99, 132, 0.2)",
        ),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">
        Pay Factors and Equity Scores Comparison
      </h1>

      <div className="mb-6">
        <label
          className="mb-2 block text-lg font-medium"
          htmlFor="comparisonFactor"
        >
          Select Comparison Factor:
        </label>
        <select
          className="form-select mt-1 block w-full"
          value={selectedComparison}
          onChange={(e) => setSelectedComparison(e.target.value)}
        >
          <option value="salary">Salary</option>
          <option value="bonus">Bonus</option>
          <option value="stockOptions">Stock Options</option>
          <option value="marketRate">Market Rate</option>

          {/* Add more options as needed */}
        </select>
      </div>

      <div className="mb-8">
        <Line data={chartData} />
      </div>

      <div className="overflow-x-auto">
        <Table aria-label="Comparative Data Table" style={{ minWidth: "100%" }}>
          <TableHeader>
            <TableColumn className="text-left">Name</TableColumn>
            <TableColumn className="text-left">Location</TableColumn>
            <TableColumn className="text-left">Job Title</TableColumn>
            <TableColumn className="text-left">Salary</TableColumn>
            <TableColumn className="text-left">Bonus</TableColumn>
            <TableColumn className="text-left">Stock Options</TableColumn>
            <TableColumn className="text-left">Gender</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.jobTitle}</TableCell>
                <TableCell>${row.salary}</TableCell>
                <TableCell>${row.bonus}</TableCell>
                <TableCell>${row.stockOptions}</TableCell>
                <TableCell>{row.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ComparisonPage;
