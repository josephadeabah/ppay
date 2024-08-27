"use client";

import { Card, CardContent, CardHeader } from "@/components/card/Card";
import DropdownSelect from "@/components/dropdown/DropdownSelect";
import ProgressRing from "@/components/progress/ProgressRing";
import { EmployeeData } from "@/types/payaid.data";
import { Chart, registerables } from "chart.js";
import { useState } from "react";
import { Doughnut, Line } from "react-chartjs-2";

Chart.register(...registerables);

// Simulated data for EmployeeData

const ComparisonPage = ({ data }: { data: EmployeeData[] }) => {
  const [selectedComparison, setSelectedComparison] = useState("salary");

  // Simulate some of the metrics for the cards
  const simulateMetrics = (data: EmployeeData[]) => {
    const prospectivePay =
      data.reduce((sum, row) => sum + parseFloat(row.baseSalary || "0"), 0) /
      data.length;
    const internalPayRange = {
      min: Math.min(...data.map((row) => parseFloat(row.baseSalary || "0"))),
      max: Math.max(...data.map((row) => parseFloat(row.baseSalary || "0"))),
    };
    const equitablePayRange = {
      min: internalPayRange.min * 1.05, // Example: 5% more than the internal range
      max: internalPayRange.max * 0.95, // Example: 5% less than the internal range
    };
    const predictedCompensation = prospectivePay * 1.02; // Example: 2% increase

    return {
      prospectivePay,
      internalPayRange,
      equitablePayRange,
      predictedCompensation,
    };
  };

  const {
    prospectivePay,
    internalPayRange,
    equitablePayRange,
    predictedCompensation,
  } = simulateMetrics(data);

  const chartData = {
    labels: data.map((d) => d.name),
    datasets: [
      {
        label: `Comparison of ${selectedComparison}`,
        data: data.map((d) => parseFloat(d[selectedComparison] ?? "0")), // Default to 0 if undefined
        backgroundColor: data.map((d) =>
          parseFloat(d[selectedComparison] ?? "0") > 0
            ? "rgba(75, 192, 192, 0.2)"
            : "rgba(255, 99, 132, 0.2)",
        ),
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Calculate gender distribution based on data
  const genderCounts = data.reduce(
    (acc, row) => {
      if (row.gender === "Male") acc.male += 1;
      if (row.gender === "Female") acc.female += 1;
      return acc;
    },
    { male: 0, female: 0 },
  );

  const genderDistribution = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [genderCounts.male, genderCounts.female],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  const comparisonOptions = [
    { value: "baseSalary", label: "Base Salary" },
    { value: "bonus", label: "Bonus" },
    { value: "stockOptions", label: "Stock Options" },
    { value: "marketRate", label: "Market Rate" },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col space-y-6">
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
      </div>

      {/* Metrics Cards Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader title="Prospective Pay" />
          <CardContent className="text-center">
            <ProgressRing
              value={Math.round((prospectivePay / 100000) * 100)}
              size={100}
              color="lightgreen"
            />
            <p>${prospectivePay.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Internal Pay Range" />
          <CardContent>
            <p>Min: ${internalPayRange.min.toFixed(2)}</p>
            <p>Max: ${internalPayRange.max.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Equitable Pay Range" />
          <CardContent>
            <p>Min: ${equitablePayRange.min.toFixed(2)}</p>
            <p>Max: ${equitablePayRange.max.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Predicted Compensation" />
          <CardContent className="text-center">
            <ProgressRing
              value={Math.round((predictedCompensation / 100000) * 100)}
              size={100}
              color="blue"
            />
            <p>${predictedCompensation.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>

      {/* Gender Promotion vs Compensation Chart */}
      <div className="relative mb-8 h-auto w-full min-w-full bg-gray-50 dark:bg-slate-700">
        <Line data={chartData} />
      </div>

      {/* Gender Distribution Ring Chart */}
      <div className="mx-auto max-w-xs">
        <Doughnut data={genderDistribution} />
      </div>
    </div>
  );
};

export default ComparisonPage;
