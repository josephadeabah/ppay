"use client";

import DropdownSelect from "@/components/dropdown/DropdownSelect";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Scatter } from "react-chartjs-2";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

// Dummy data
const data = {
  roleSalary: {
    labels: [
      "Engineer",
      "Manager",
      "Sales",
      "HR",
      "Finance",
      "Marketing",
      "Other",
    ],
    datasets: [
      {
        label: "Average Salary",
        data: [80000, 95000, 70000, 65000, 75000, 85000, 90000],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  },
  salaryProgression: {
    labels: [
      "1-3 years",
      "4-6 years",
      "7-10 years",
      "11-15 years",
      "16+ years",
    ],
    datasets: [
      {
        label: "Average Salary",
        data: [50000, 60000, 75000, 90000, 110000, 120000, 130000],
        borderColor: "rgba(255, 99, 132, 0.6)",
        fill: false,
      },
    ],
  },
  departmentBreakdown: {
    labels: [
      "Engineering",
      "Management",
      "Sales",
      "HR",
      "Finance",
      "Marketing",
      "Other",
    ],
    datasets: [
      {
        label: "Salary Distribution",
        data: [40, 25, 15, 10, 10, 5, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  },
  performanceCompensation: {
    labels: ["Low", "Average", "High"],
    datasets: [
      {
        label: "Performance vs Compensation",
        data: [
          { x: 1, y: 50000 },
          { x: 2, y: 70000 },
          { x: 3, y: 90000 },
          { x: 4, y: 110000 },
          { x: 5, y: 130000 },
          { x: 6, y: 150000 },
          { x: 7, y: 170000 },
          { x: 8, y: 190000 },
          { x: 9, y: 210000 },
          { x: 10, y: 230000 },
          { x: 11, y: 250000 },
          { x: 12, y: 270000 },
          { x: 13, y: 290000 },
          { x: 14, y: 310000 },
          { x: 15, y: 330000 },
          { x: 16, y: 350000 },
        ],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  },
  benefitsAndPerks: [
    { benefit: "Health Insurance", average: 90 },
    { benefit: "Retirement Plan", average: 75 },
    { benefit: "Paid Time Off", average: 80 },
    { benefit: "Education Reimbursement", average: 60 },
    { benefit: "Flexible Working Hours", average: 70 },
  ],
  costOfLiving: {
    labels: [
      "New York",
      "San Francisco",
      "Chicago",
      "Austin",
      "Seattle",
      "Miami",
      "Denver",
      "Boston",
      "Los Angeles",
      "Portland",
    ],
    datasets: [
      {
        label: "Cost of Living Index",
        data: [100, 120, 85, 70, 90, 80, 95, 105, 110, 115],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  },
  employeeData: [
    {
      name: "John Doe",
      role: "Engineer",
      experience: "5 years",
      salary: "$80,000",
      gender: "Male",
      location: "New York",
    },
    {
      name: "Jane Smith",
      role: "Manager",
      experience: "8 years",
      salary: "$95,000",
      gender: "Female",
      location: "San Francisco",
    },
    // Add more dummy data as needed
  ],
};

// Calculate adjusted salary
const calculateAdjustedSalary = (
  role: string,
  experienceRange: string,
  location: string,
  performance: number,
): number => {
  // Find base salary for the role
  const roleIndex = data.roleSalary.labels.indexOf(role);
  const baseSalary =
    roleIndex !== -1 ? data.roleSalary.datasets[0].data[roleIndex] : 0;

  // Find experience-based adjustment
  const experienceIndex =
    data.salaryProgression.labels.indexOf(experienceRange);
  const experienceAdjustment =
    experienceIndex !== -1
      ? data.salaryProgression.datasets[0].data[experienceIndex] / 100
      : 1;

  // Find location-based cost of living adjustment
  const locationIndex = data.costOfLiving.labels.indexOf(location);
  const locationIndexValue =
    locationIndex !== -1
      ? data.costOfLiving.datasets[0].data[locationIndex] / 100
      : 1;

  // Basic adjusted salary calculation
  let adjustedSalary =
    ((baseSalary * (performance || 1)) / 100) *
    (locationIndexValue / 100) *
    experienceAdjustment;

  // Incorporate benefits and perks realistically
  const averageBenefitRating =
    data.benefitsAndPerks.reduce((total, perk) => total + perk.average, 0) /
    data.benefitsAndPerks.length;
  adjustedSalary *= 1 + (averageBenefitRating / 100) * 0.5; // More conservative adjustment

  // Performance adjustment
  const performanceAdjustment =
    data.performanceCompensation.datasets[0].data.find(
      (d) => d.x === performance,
    )?.y || 0;
  adjustedSalary += performanceAdjustment;

  return adjustedSalary;
};

export default function PayEquityAnalyzer() {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [experienceRange, setExperienceRange] = useState<string>("1-3 years");
  const [performance, setPerformance] = useState<number>(1); // Default performance level
  const [adjustedSalary, setAdjustedSalary] = useState<number | null>(null);

  useEffect(() => {
    if (selectedRole && selectedLocation && experienceRange) {
      setAdjustedSalary(
        calculateAdjustedSalary(
          selectedRole,
          experienceRange,
          selectedLocation,
          performance,
        ),
      );
    } else {
      setAdjustedSalary(null); // Reset if criteria are not met
    }
  }, [selectedRole, selectedLocation, experienceRange, performance]);

  return (
    <div className="bg-gray-50 p-6 dark:bg-gray-900">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
        Pay Equity Analyzer
      </h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Analyze and address pay disparities based on various factors.
      </p>

      {/* Filters Section */}
      <div className="mb-6 flex flex-wrap gap-4 bg-white p-5 shadow-sm dark:bg-gray-800">
        <div className="min-w-[200px] flex-1">
          <DropdownSelect
            options={[
              { value: "Engineer", label: "Engineer" },
              { value: "Manager", label: "Manager" },
              { value: "Sales", label: "Sales" },
              { value: "HR", label: "HR" },
              { value: "Finance", label: "Finance" },
            ]}
            selectedValue={selectedRole}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedRole(e.target.value)
            }
            placeholder="Select Role"
          />
        </div>
        <div className="min-w-[200px] flex-1">
          <DropdownSelect
            options={[
              { value: "New York", label: "New York" },
              { value: "San Francisco", label: "San Francisco" },
              { value: "Chicago", label: "Chicago" },
              { value: "Austin", label: "Austin" },
              { value: "Seattle", label: "Seattle" },
            ]}
            selectedValue={selectedLocation}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedLocation(e.target.value)
            }
            placeholder="Select Location"
          />
        </div>
        <div className="min-w-[200px] flex-1">
          <DropdownSelect
            options={[
              { value: "1-3 years", label: "1-3 years" },
              { value: "4-6 years", label: "4-6 years" },
              { value: "7-10 years", label: "7-10 years" },
              { value: "11-15 years", label: "11-15 years" },
              { value: "16+ years", label: "16+ years" },
            ]}
            selectedValue={experienceRange}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setExperienceRange(e.target.value)
            }
            placeholder="Select Experience Range"
          />
        </div>
        <div className="min-w-[200px] flex-1">
          <DropdownSelect
            options={[
              { value: "1", label: "Low" },
              { value: "2", label: "Average" },
              { value: "3", label: "High" },
            ]}
            selectedValue={performance.toString()}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setPerformance(Number(e.target.value))
            }
            placeholder="Select Performance Level"
          />
        </div>
      </div>

      {/* Adjusted Salary Display */}
      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        {adjustedSalary !== null ? (
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Adjusted Salary: ${adjustedSalary.toFixed(2)}
          </p>
        ) : (
          <p className="text-gray-700 dark:text-gray-300">
            Please select all filters to see the adjusted salary.
          </p>
        )}
      </div>

      {/* Charts Section */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-5 shadow-sm dark:bg-gray-800">
          <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
            Role Salary
          </h2>
          <Bar data={data.roleSalary} />
        </div>
        <div className="bg-white p-5 shadow-sm dark:bg-gray-800">
          <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
            Salary Progression
          </h2>
          <Line data={data.salaryProgression} />
        </div>
        <div className="bg-white p-5 shadow-sm dark:bg-gray-800">
          <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
            Department Breakdown
          </h2>
          <Pie data={data.departmentBreakdown} />
        </div>
        <div className="bg-white p-5 shadow-sm dark:bg-gray-800">
          <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
            Performance vs Compensation
          </h2>
          <Scatter data={data.performanceCompensation} />
        </div>
        <div className="bg-white p-5 shadow-sm dark:bg-gray-800">
          <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
            Cost of Living
          </h2>
          <Bar data={data.costOfLiving} />
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
          Employee Data
        </h2>
        <Table>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Experience</Table.HeadCell>
            <Table.HeadCell>Salary</Table.HeadCell>
            <Table.HeadCell>Gender</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {data.employeeData.map((employee, index) => (
              <Table.Row key={index}>
                <Table.Cell>{employee.name}</Table.Cell>
                <Table.Cell>{employee.role}</Table.Cell>
                <Table.Cell>{employee.experience}</Table.Cell>
                <Table.Cell>{employee.salary}</Table.Cell>
                <Table.Cell>{employee.gender}</Table.Cell>
                <Table.Cell>{employee.location}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      {/* Insights & Recommendations */}
      <div className="mt-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Insights & Recommendations
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Based on the analysis, here are some key insights and recommendations
          to address pay disparities:
        </p>
        <ul className="mt-4 list-inside list-disc text-gray-700 dark:text-gray-300">
          <li>
            Review salary ranges for different roles to ensure competitiveness.
          </li>
          <li>
            Consider performance-based adjustments for roles with significant
            salary gaps.
          </li>
          <li>
            Implement transparent salary bands and career progression paths to
            promote fairness.
          </li>
          <li>
            Adjust salaries based on regional cost of living to enhance employee
            satisfaction.
          </li>
        </ul>
      </div>
    </div>
  );
}
