"use client";

import { Card, CardContent, CardHeader } from "@/components/card/Card";
import DropdownSelect from "@/components/dropdown/DropdownSelect";
import ProgressRing from "@/components/progress/ProgressRing";
import { EmployeeData } from "@/types/payaid.data";
import { Chart, registerables } from "chart.js";
import { useState } from "react";
import { Line, Pie } from "react-chartjs-2";

Chart.register(...registerables);

const ComparisonPage = ({ data }: { data: EmployeeData[] }) => {
  const [selectedComparison, setSelectedComparison] = useState("salary");
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeData | null>(
    null,
  );

  const handleEmployeeChange = (employeeName: string) => {
    const employee = data.find((emp) => emp.name === employeeName) || null;
    setSelectedEmployee(employee);
  };

  const simulateMetrics = (employee: EmployeeData | null) => {
    if (!employee)
      return {
        prospectivePay: 0,
        internalPayRange: { min: 0, max: 0 },
        equitablePayRange: { min: 0, max: 0 },
        predictedCompensation: 0,
      };

    const prospectivePay = parseFloat(employee.baseSalary || "0") * 1.05; // Example: 5% increase for prospective pay
    const internalPayRange = {
      min: parseFloat(employee.baseSalary || "0") * 0.9, // Example: 10% less for internal range
      max: parseFloat(employee.baseSalary || "0") * 1.1, // Example: 10% more for internal range
    };
    const equitablePayRange = {
      min: internalPayRange.min * 1.05, // Example: 5% more than the internal range
      max: internalPayRange.max * 0.95, // Example: 5% less than the internal range
    };
    const predictedCompensation = prospectivePay * 1.02; // Example: 2% increase for predicted compensation

    return {
      prospectivePay,
      internalPayRange,
      equitablePayRange,
      predictedCompensation,
    };
  };

  const metrics = simulateMetrics(selectedEmployee);

  const chartData = {
    labels: [
      "Prospective Pay",
      "Internal Pay Range",
      "Equitable Pay Range",
      "Predicted Compensation",
    ],
    datasets: [
      {
        label: `Compensation Analysis for ${
          selectedEmployee?.name || "Employee"
        }`,
        data: [
          metrics.prospectivePay,
          metrics.internalPayRange.max,
          metrics.equitablePayRange.max,
          metrics.predictedCompensation,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

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

  const employeeOptions = data.map((d) => ({ value: d.name, label: d.name }));

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col space-y-6">
        <div className="mb-6">
          <label
            className="mb-2 block text-lg font-medium"
            htmlFor="employeeSelect"
          >
            Select Employee:
          </label>
          <DropdownSelect
            options={employeeOptions}
            selectedValue={selectedEmployee?.name || ""}
            onChange={(e) => handleEmployeeChange(e.target.value)}
            placeholder="Select an employee"
            id="employeeSelect"
          />
        </div>

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
              value={Math.round((metrics.prospectivePay / 100000) * 100)}
              size={100}
              color="lightgreen"
            />
            <p>${metrics.prospectivePay.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Internal Pay Range" />
          <CardContent>
            <p>Min: ${metrics.internalPayRange.min.toFixed(2)}</p>
            <p>Max: ${metrics.internalPayRange.max.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Equitable Pay Range" />
          <CardContent>
            <p>Min: ${metrics.equitablePayRange.min.toFixed(2)}</p>
            <p>Max: ${metrics.equitablePayRange.max.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Predicted Compensation" />
          <CardContent className="text-center">
            <ProgressRing
              value={Math.round((metrics.predictedCompensation / 100000) * 100)}
              size={100}
              color="lightblue"
            />
            <p>${metrics.predictedCompensation.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>

      {/* Compensation Analysis Chart */}
      <div className="relative mb-8 h-auto w-full min-w-full bg-gray-50 dark:bg-slate-700">
        <Line data={chartData} />
      </div>

      {/* Gender Distribution Pie Chart */}
      <div className="relative mb-8 h-auto w-full min-w-full bg-gray-50 dark:bg-slate-700">
        <Pie data={genderDistribution} />
      </div>
    </div>
  );
};

export default ComparisonPage;
