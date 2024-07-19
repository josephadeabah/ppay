"use client";

import DropdownSelect from "@/components/dropdown/DropdownSelect"; // Import the reusable DropdownSelect component
import Slider from "@/components/slider/Slider"; // Import the custom Slider component
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
import React, { useState } from "react";
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
    labels: ["Engineer", "Manager", "Sales", "HR", "Finance"],
    datasets: [
      {
        label: "Average Salary",
        data: [80000, 95000, 70000, 65000, 75000],
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
        data: [50000, 60000, 75000, 90000, 110000],
        borderColor: "rgba(255, 99, 132, 0.6)",
        fill: false,
      },
    ],
  },
  departmentBreakdown: {
    labels: ["Engineering", "Sales", "HR", "Finance", "Marketing"],
    datasets: [
      {
        label: "Salary Distribution",
        data: [40, 25, 15, 10, 10],
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
    labels: ["New York", "San Francisco", "Chicago", "Austin", "Seattle"],
    datasets: [
      {
        label: "Cost of Living Index",
        data: [100, 120, 85, 70, 90],
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
  experience: number,
  location: string,
): number => {
  const roleSalary =
    data.roleSalary.datasets[0].data[data.roleSalary.labels.indexOf(role)];
  const experienceSalary =
    data.salaryProgression.datasets[0].data[
      data.salaryProgression.labels.findIndex((label) => {
        const [min, max] = label.split("-").map(Number);
        return experience >= min && (max === undefined || experience <= max);
      })
    ];

  const locationIndex = data.costOfLiving.labels.indexOf(location);
  const locationIndexValue =
    data.costOfLiving.datasets[0].data[locationIndex] || 100;

  // Calculate adjusted salary
  const baseSalary = roleSalary || 0;
  const adjustedSalary =
    ((baseSalary * (experienceSalary || 1)) / 100) * (locationIndexValue / 100);

  return adjustedSalary;
};

export default function PayEquityAnalyzer() {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [experienceRange, setExperienceRange] = useState<[number, number]>([
    1, 20,
  ]);

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
              { value: "", label: "Select Role" },
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
              { value: "", label: "Select Location" },
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
          <label className="mb-2 block text-gray-900 dark:text-white">
            Experience Range: {experienceRange[0]} - {experienceRange[1]} years
          </label>
          <Slider
            min={1}
            max={20}
            step={1}
            value={experienceRange}
            onChange={setExperienceRange}
          />
        </div>
      </div>

      {/* Charts & Graphs */}
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-5 shadow-sm dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Average Salary by Role
          </h2>
          <Bar
            data={data.roleSalary}
            options={{
              responsive: true,
              plugins: { legend: { display: true } },
            }}
          />
        </div>
        <div className="bg-white p-5 shadow-sm dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Salary Progression Over Experience
          </h2>
          <Line
            data={data.salaryProgression}
            options={{
              responsive: true,
              plugins: { legend: { display: true } },
            }}
          />
        </div>
        <div className="bg-white p-5 shadow-sm dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Salary Distribution by Department
          </h2>
          <Pie
            data={data.departmentBreakdown}
            options={{
              responsive: true,
              plugins: { legend: { display: true } },
            }}
          />
        </div>
        <div className="bg-white p-5 shadow-sm dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Performance and Compensation Correlation
          </h2>
          <Scatter
            data={data.performanceCompensation}
            options={{
              responsive: true,
              plugins: { legend: { display: true } },
            }}
          />
        </div>
        <div className="bg-white p-5 shadow-sm dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Benefits and Perks Analysis
          </h2>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Benefit</Table.HeadCell>
              <Table.HeadCell>Average Offering (%)</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {data.benefitsAndPerks.map((perk) => (
                <Table.Row key={perk.benefit}>
                  <Table.Cell>{perk.benefit}</Table.Cell>
                  <Table.Cell>{perk.average}%</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <div className="bg-white p-5 shadow-sm dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Cost of Living Adjustments
          </h2>
          <Bar
            data={data.costOfLiving}
            options={{
              responsive: true,
              plugins: { legend: { display: true } },
            }}
          />
        </div>
      </div>

      {/* Pay Equity Table */}
      <div className="bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Employee Salary Details
        </h2>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>Experience</Table.HeadCell>
            <Table.HeadCell>Salary</Table.HeadCell>
            <Table.HeadCell>Gender</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {data.employeeData.map((employee) => (
              <Table.Row key={employee.name}>
                <Table.Cell>{employee.name}</Table.Cell>
                <Table.Cell>{employee.role}</Table.Cell>
                <Table.Cell>{employee.experience}</Table.Cell>
                <Table.Cell>
                  {calculateAdjustedSalary(
                    employee.role,
                    parseInt(employee.experience.split(" ")[0]),
                    employee.location,
                  )}
                </Table.Cell>
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
