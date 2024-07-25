"use client";

import DropdownSelect from "@/components/dropdown/DropdownSelect";
import SliderComponent from "@/components/slider/Slider"; // Import the SliderComponent
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
  RadialLinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { payEquityData } from "./data";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  LineElement,
  PointElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

// Define data types for charts
interface BarChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

interface LineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

// BarChart component
const BarChart: React.FC<{ data: BarChartData }> = ({ data }) => {
  return (
    <Bar
      data={data}
      options={{ responsive: true, maintainAspectRatio: false }}
    />
  );
};

// LineChart component
const LineChart: React.FC<{ data: LineChartData }> = ({ data }) => {
  return (
    <Line
      data={data}
      options={{ responsive: true, maintainAspectRatio: false }}
    />
  );
};

// Calculate adjusted salary
function calculateAdjustedSalary(
  role: string,
  experienceRange: string,
  location: string,
  performance: string,
  department: string,
  gender: string,
  education: string,
  rolesAndResponsibilities: string,
  skillsAndQualifications: string,
  marketRates: string,
  industryPoints: string,
  companySizeRevenue: string,
  seniorityLevels: string,
  unionAgreements: string,
  benefitsAndPerks: string,
): number {
  const roleData = payEquityData.rolesAndResponsibilities[role] || {
    points: 0,
  };
  const experiencePoints = payEquityData.experiencePoints[experienceRange] || 0;
  const locationPoints = payEquityData.locationPoints[location] || 0;
  const performancePoints = payEquityData.performancePoints[performance] || 0;
  const departmentPoints = payEquityData.industryPoints[department] || 0; // Assuming department maps to industry
  const skillsPoints =
    payEquityData.skillsAndQualifications[skillsAndQualifications] || 0;
  const marketRatePoints = payEquityData.marketRates[marketRates] || 0;
  const companySizePoints =
    payEquityData.companySizeRevenue[companySizeRevenue] || 0;
  const seniorityLevelPoints =
    payEquityData.seniorityLevels[seniorityLevels] || 0;
  const unionAgreementPoints =
    payEquityData.unionAgreements[unionAgreements] || 0;
  const benefitsPerksPoints =
    payEquityData.benefitsAndPerks[benefitsAndPerks] || 0;

  // Sum all points
  const totalPoints =
    roleData.points +
    experiencePoints +
    locationPoints +
    performancePoints +
    departmentPoints +
    skillsPoints +
    marketRatePoints +
    companySizePoints +
    seniorityLevelPoints +
    unionAgreementPoints +
    benefitsPerksPoints;

  // Base salary, market rate adjustment, company size, and compliance factors
  const baseSalary = 50000; // Example base salary
  const marketRate = payEquityData.marketRates["AtMarket"]; // Example value
  const companySize = payEquityData.companySizeRevenue["MediumSizedCompany"]; // Example value
  const compliance = payEquityData.compliance["FullyCompliant"]; // Example value

  // Adjust salary based on points and additional factors
  const adjustedSalary =
    baseSalary +
    (totalPoints / 100) * baseSalary +
    marketRate +
    companySize +
    compliance;

  return adjustedSalary;
}

export default function PayEquityAnalyzer() {
  const [role, setRole] = useState<string>("SoftwareEngineer");
  const [experienceRange, setExperienceRange] = useState<string>("0-2 years");
  const [location, setLocation] = useState<string>("High Cost of Living Area");
  const [performance, setPerformance] = useState<string>("MeetsExpectations");
  const [department, setDepartment] = useState<string>("Tech");
  const [gender, setGender] = useState<string>("Male");
  const [education, setEducation] = useState<string>("Bachelor's Degree");
  const [skillsAndQualifications, setSkillsAndQualifications] =
    useState<string>("JavaScript");
  const [marketRates, setMarketRates] = useState<string>("AtMarket");
  const [industryPoints, setIndustryPoints] = useState<string>("Tech");
  const [companySizeRevenue, setCompanySizeRevenue] =
    useState<string>("MediumSizedCompany");
  const [seniorityLevels, setSeniorityLevels] = useState<string>("MidLevel");
  const [unionAgreements, setUnionAgreements] =
    useState<string>("StandardAgreement");
  const [benefitsAndPerks, setBenefitsAndPerks] = useState<string>(
    "ComprehensiveBenefitsPackage",
  );
  const [adjustedSalary, setAdjustedSalary] = useState<number>(0);

  const [barChartData, setBarChartData] = useState<BarChartData>({
    labels: [],
    datasets: [
      {
        label: "Adjusted Salary Comparison",
        data: [],
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
      },
    ],
  });

  const [lineChartData, setLineChartData] = useState<LineChartData>({
    labels: [],
    datasets: [
      {
        label: "Salary Trends",
        data: [],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  });

  useEffect(() => {
    setAdjustedSalary(
      calculateAdjustedSalary(
        role,
        experienceRange,
        location,
        performance,
        department,
        gender,
        education,
        role,
        skillsAndQualifications,
        marketRates,
        industryPoints,
        companySizeRevenue,
        seniorityLevels,
        unionAgreements,
        benefitsAndPerks,
      ),
    );

    // Generate dummy data for the charts
    setBarChartData({
      labels: ["Role", "Experience", "Location", "Performance", "Department"],
      datasets: [
        {
          label: "Adjusted Salary Factors",
          data: [
            payEquityData.rolesAndResponsibilities[role]?.points || 0,
            payEquityData.experiencePoints[experienceRange] || 0,
            payEquityData.locationPoints[location] || 0,
            payEquityData.performancePoints[performance] || 0,
            payEquityData.industryPoints[department] || 0,
          ],
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
        },
      ],
    });

    setLineChartData({
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Salary Trend Over Time",
          data: [50000, 52000, 51000, 53000, 55000],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    });
  }, [
    role,
    experienceRange,
    location,
    performance,
    department,
    gender,
    education,
    skillsAndQualifications,
    marketRates,
    industryPoints,
    companySizeRevenue,
    seniorityLevels,
    unionAgreements,
    benefitsAndPerks,
  ]);

  // Prepare data for the table
  const tableData = [
    {
      label: "Role",
      value: payEquityData.rolesAndResponsibilities[role]?.points || 0,
    },
    {
      label: "Experience",
      value: payEquityData.experiencePoints[experienceRange] || 0,
    },
    { label: "Location", value: payEquityData.locationPoints[location] || 0 },
    {
      label: "Performance",
      value: payEquityData.performancePoints[performance] || 0,
    },
    {
      label: "Department",
      value: payEquityData.industryPoints[department] || 0,
    },
    {
      label: "Skills & Qualifications",
      value:
        payEquityData.skillsAndQualifications[skillsAndQualifications] || 0,
    },
    {
      label: "Market Rates",
      value: payEquityData.marketRates[marketRates] || 0,
    },
    {
      label: "Company Size",
      value: payEquityData.companySizeRevenue[companySizeRevenue] || 0,
    },
    {
      label: "Seniority Levels",
      value: payEquityData.seniorityLevels[seniorityLevels] || 0,
    },
    {
      label: "Union Agreements",
      value: payEquityData.unionAgreements[unionAgreements] || 0,
    },
    {
      label: "Benefits & Perks",
      value: payEquityData.benefitsAndPerks[benefitsAndPerks] || 0,
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {/* Existing dropdowns and sliders */}
        <DropdownSelect
          options={Object.keys(payEquityData.rolesAndResponsibilities).map(
            (key) => ({ value: key, label: key }),
          )}
          selectedValue={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Select Role"
        />
        <SliderComponent
          value={parseInt(experienceRange.split("-")[0], 10)}
          onChange={(value) => setExperienceRange(`${value}-years`)}
          minValue={0}
          maxValue={20}
          step={1}
          label="Experience Range (years)"
        />
        <DropdownSelect
          options={Object.keys(payEquityData.locationPoints).map((key) => ({
            value: key,
            label: key,
          }))}
          selectedValue={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Select Location"
        />
        <DropdownSelect
          options={Object.keys(payEquityData.performancePoints).map((key) => ({
            value: key,
            label: key,
          }))}
          selectedValue={performance}
          onChange={(e) => setPerformance(e.target.value)}
          placeholder="Select Performance"
        />
        <DropdownSelect
          options={Object.keys(payEquityData.industryPoints).map((key) => ({
            value: key,
            label: key,
          }))}
          selectedValue={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Select Department"
        />
        <DropdownSelect
          options={Object.keys(payEquityData.skillsAndQualifications).map(
            (key) => ({ value: key, label: key }),
          )}
          selectedValue={skillsAndQualifications}
          onChange={(e) => setSkillsAndQualifications(e.target.value)}
          placeholder="Select Skills & Qualifications"
        />
        <DropdownSelect
          options={Object.keys(payEquityData.marketRates).map((key) => ({
            value: key,
            label: key,
          }))}
          selectedValue={marketRates}
          onChange={(e) => setMarketRates(e.target.value)}
          placeholder="Select Market Rate"
        />
        <DropdownSelect
          options={Object.keys(payEquityData.companySizeRevenue).map((key) => ({
            value: key,
            label: key,
          }))}
          selectedValue={companySizeRevenue}
          onChange={(e) => setCompanySizeRevenue(e.target.value)}
          placeholder="Select Company Size"
        />
        <DropdownSelect
          options={Object.keys(payEquityData.seniorityLevels).map((key) => ({
            value: key,
            label: key,
          }))}
          selectedValue={seniorityLevels}
          onChange={(e) => setSeniorityLevels(e.target.value)}
          placeholder="Select Seniority Level"
        />
        <DropdownSelect
          options={Object.keys(payEquityData.unionAgreements).map((key) => ({
            value: key,
            label: key,
          }))}
          selectedValue={unionAgreements}
          onChange={(e) => setUnionAgreements(e.target.value)}
          placeholder="Select Union Agreement"
        />
        <DropdownSelect
          options={Object.keys(payEquityData.benefitsAndPerks).map((key) => ({
            value: key,
            label: key,
          }))}
          selectedValue={benefitsAndPerks}
          onChange={(e) => setBenefitsAndPerks(e.target.value)}
          placeholder="Select Benefits & Perks"
        />
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">
          Adjusted Salary: ${adjustedSalary.toFixed(2)}
        </h2>
      </div>

      <div className="h-full w-full p-4">
        <div className="grid h-full w-full grid-cols-1 gap-4 md:grid-cols-2">
          <div className="h-full w-full">
            <BarChart data={barChartData} />
          </div>
          <div className="h-full w-full">
            <LineChart data={lineChartData} />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-4">
        <Table>
          <Table.Head>
            <Table.HeadCell>Factor</Table.HeadCell>
            <Table.HeadCell>Points</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {tableData.map((row, index) => (
              <Table.Row key={index}>
                <Table.Cell>{row.label}</Table.Cell>
                <Table.Cell>{row.value}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
