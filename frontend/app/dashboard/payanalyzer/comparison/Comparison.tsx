"use client";

import { Card, CardContent, CardHeader } from "@/components/card/Card";
import DropdownSelect from "@/components/dropdown/DropdownSelect";
import ProgressRing from "@/components/progress/ProgressRing";
import { Chart, registerables } from "chart.js";
import { useState } from "react";
import { Doughnut, Line } from "react-chartjs-2";

Chart.register(...registerables);

const ComparisonPage = ({ data }: { data: any[] }) => {
  const [selectedComparison, setSelectedComparison] = useState("salary");

  // Simulate some of the metrics for the cards
  const prospectivePay = 85000;
  const internalPayRange = { min: 75000, max: 90000 };
  const equitablePayRange = { min: 78000, max: 88000 };
  const predictedCompensation = 86000;

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

  const genderDistribution = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [60, 40], // Example values
        backgroundColor: ["#36A2EB", "#FF6384"],
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
            <ProgressRing value={85} size={100} color="green" />
            <p>${prospectivePay}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Internal Pay Range" />
          <CardContent>
            <p>Min: ${internalPayRange.min}</p>
            <p>Max: ${internalPayRange.max}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Equitable Pay Range" />
          <CardContent>
            <p>Min: ${equitablePayRange.min}</p>
            <p>Max: ${equitablePayRange.max}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Predicted Compensation" />
          <CardContent className="text-center">
            <ProgressRing value={86} size={100} color="blue" />
            <p>${predictedCompensation}</p>
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
