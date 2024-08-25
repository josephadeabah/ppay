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
import SkeletonLoader from "./loader";

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
      options={{ responsive: true, maintainAspectRatio: true }}
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
  experiencePointNumber: number,
  location: string,
  performance: string,
  department: string,
  gender: string,
  education: string,
  skillsAndQualifications: string,
  marketRates: string,
  industry: string, // Change from department to industry
  companySizeRevenue: string,
  seniorityLevels: string,
  unionAgreements: string,
  benefitsAndPerks: string,
  payPolicies: string,
  discriminationFactors: string,
  jobEvaluationSystems: string,
): number {
  const roleData = payEquityData.rolesAndResponsibilities[role] || {
    points: 0,
  };
  const educationPoints = payEquityData.educationPoints[education] || 0; // Added education points
  const locationPoints = payEquityData.locationPoints[location] || 0;
  const industryPointsValue = payEquityData.industryPoints[industry] || 0; // Updated to industry
  const performancePoints = payEquityData.performancePoints[performance] || 0;
  const genderPoints = payEquityData.genderCategories[gender] || 0;
  const departmentPoints = payEquityData.departmentPoints[department] || 0; // Assuming department maps to industry
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
  const payPoliciesPoints = payEquityData.payPolicies[payPolicies] || 0;
  const discriminationFactorsPoints =
    payEquityData.discriminationFactors[discriminationFactors] || 0;
  const jobEvaluationSystemsPoints =
    payEquityData.jobEvaluationSystems[jobEvaluationSystems] || 0;

  // Sum all points
  const totalPoints =
    roleData.points +
    experiencePointNumber +
    locationPoints +
    performancePoints +
    industryPointsValue + // Updated to industry points
    genderPoints +
    educationPoints +
    departmentPoints +
    skillsPoints +
    marketRatePoints +
    companySizePoints +
    seniorityLevelPoints +
    unionAgreementPoints +
    benefitsPerksPoints +
    industryPointsValue +
    locationPoints +
    payPoliciesPoints +
    discriminationFactorsPoints +
    jobEvaluationSystemsPoints;

  // Base salary, market rate adjustment, company size, and compliance factors
  const baseSalary = 100; // Example base salary
  const marketRate = payEquityData.marketRates["Non"]; // Example value
  const companySize = payEquityData.companySizeRevenue["Non"]; // Example value
  const compliance = payEquityData.compliance["Non"]; // Example value

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
  const [role, setRole] = useState<string>("No Role");
  const [experienceRange, setExperienceRange] = useState<string>("0-2 years");
  const [experiencePoints, setExperiencePoints] = useState<number>(0);
  const [location, setLocation] = useState<string>("No Cost of Living Area");
  const [performance, setPerformance] = useState<string>("Unsatisfactory");
  const [department, setDepartment] = useState<string>("Non-specified");
  const [gender, setGender] = useState<string>("No Gender");
  const [education, setEducation] = useState<string>("No Degree");
  const [skillsAndQualifications, setSkillsAndQualifications] =
    useState<string>("No Skill");
  const [marketRates, setMarketRates] = useState<string>("Non");
  const [companySizeRevenue, setCompanySizeRevenue] = useState<string>("Non");
  const [seniorityLevels, setSeniorityLevels] = useState<string>("FreshGrad");
  const [unionAgreements, setUnionAgreements] =
    useState<string>("NoUnionAgreement");
  const [benefitsAndPerks, setBenefitsAndPerks] =
    useState<string>("NoBenefits");
  const [adjustedSalary, setAdjustedSalary] = useState<number>(0);
  const [industry, setIndustry] = useState<string>("Non-specified"); // Updated from department to industry
  const [payPolicies, setPayPolicies] = useState<string>("NoPolicy");
  const [discriminationFactors, setDiscriminationFactors] =
    useState<string>("Non");
  const [jobEvaluationSystems, setJobEvaluationSystems] =
    useState<string>("Non");
  const [loading, setLoading] = useState(true);

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
        experiencePoints,
        location,
        performance,
        department,
        gender,
        education,
        skillsAndQualifications,
        marketRates,
        industry,
        companySizeRevenue,
        seniorityLevels,
        unionAgreements,
        benefitsAndPerks,
        payPolicies,
        discriminationFactors,
        jobEvaluationSystems,
      ),
    );

    // Generate dummy data for the charts
    setBarChartData({
      labels: [
        "Role",
        "Experience",
        "Location",
        "Performance",
        "Department",
        "gender",
        "Industry",
        "Education",
        "Compliance",
        "Market Rate",
        "Company Size",
        "Seniority Level",
        "Union Agreement",
        "Benefits and Perks",
        "Skills and Qualifications",
        "Pay Policies",
        "Discrimination Factors",
        "Job Evaluation Systems",
      ],
      datasets: [
        {
          label: "Adjusted Salary Factors",
          data: [
            payEquityData.rolesAndResponsibilities[role]?.points || 0,
            experiencePoints || 0,
            payEquityData.locationPoints[location] || 0,
            payEquityData.performancePoints[performance] || 0,
            payEquityData.departmentPoints[department] || 0,
            payEquityData.genderCategories[gender] || 0,
            payEquityData.industryPoints[industry] || 0, // Updated to Industry
            payEquityData.educationPoints[education] || 0,
            payEquityData.compliance["Non"] || 0,
            payEquityData.marketRates[marketRates] || 0,
            payEquityData.companySizeRevenue[companySizeRevenue] || 0,
            payEquityData.seniorityLevels[seniorityLevels] || 0,
            payEquityData.unionAgreements[unionAgreements] || 0,
            payEquityData.benefitsAndPerks[benefitsAndPerks] || 0,
            payEquityData.skillsAndQualifications[skillsAndQualifications] || 0,
            payEquityData.payPolicies[payPolicies] || 0,
            payEquityData.discriminationFactors[discriminationFactors] || 0,
            payEquityData.jobEvaluationSystems[jobEvaluationSystems] || 0,
          ],
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
        },
      ],
    });

    const factorLabels = [
      "Role",
      "Experience",
      "Location",
      "Performance",
      "Department",
      "gender",
      "Industry",
      "Education",
      "Compliance",
      "Market Rate",
      "Company Size",
      "Seniority Level",
      "Union Agreement",
      "Benefits and Perks",
      "Skills and Qualifications",
      "Pay Policies",
      "Discrimination Factors",
      "Job Evaluation Systems",
    ];

    const factorPoints = [
      payEquityData.rolesAndResponsibilities[role]?.points || 0,
      experiencePoints || 0,
      payEquityData.locationPoints[location] || 0,
      payEquityData.performancePoints[performance] || 0,
      payEquityData.departmentPoints[department] || 0,
      payEquityData.genderCategories[gender] || 0,
      payEquityData.industryPoints[industry] || 0, // Updated to Industry
      payEquityData.educationPoints[education] || 0,
      payEquityData.compliance["Non"] || 0,
      payEquityData.marketRates[marketRates] || 0,
      payEquityData.companySizeRevenue[companySizeRevenue] || 0,
      payEquityData.seniorityLevels[seniorityLevels] || 0,
      payEquityData.unionAgreements[unionAgreements] || 0,
      payEquityData.benefitsAndPerks[benefitsAndPerks] || 0,
      payEquityData.skillsAndQualifications[skillsAndQualifications] || 0,
      payEquityData.payPolicies[payPolicies] || 0,
      payEquityData.discriminationFactors[discriminationFactors] || 0,
      payEquityData.jobEvaluationSystems[jobEvaluationSystems] || 0,
    ];

    setLineChartData({
      labels: factorLabels,
      datasets: [
        {
          label: "Points against Factor",
          data: factorPoints,
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
    industry,
    education,
    skillsAndQualifications,
    marketRates,
    companySizeRevenue,
    seniorityLevels,
    unionAgreements,
    benefitsAndPerks,
    payPolicies,
    discriminationFactors,
    jobEvaluationSystems,
  ]);

  // Prepare data for the table
  const tableData = [
    {
      label: "Role and Responsibilities",
      value: payEquityData.rolesAndResponsibilities[role]?.points || 0,
    },
    {
      label: "Experience",
      value: experiencePoints,
    },
    { label: "Location", value: payEquityData.locationPoints[location] || 0 },
    {
      label: "Industry", // Updated from Department to Industry
      value: payEquityData.industryPoints[industry] || 0,
    },
    {
      label: "Performance",
      value: payEquityData.performancePoints[performance] || 0,
    },
    {
      label: "Gender",
      value: payEquityData.genderCategories[gender] || 0,
    },
    {
      label: "Department",
      value: payEquityData.departmentPoints[department] || 0,
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
    {
      label: "Education",
      value: payEquityData.educationPoints[education] || 0,
    },
    {
      label: "Compliance",
      value: payEquityData.compliance["Non"] || 0,
    },
    {
      label: "Pay Policies",
      value: payEquityData.payPolicies[payPolicies] || 0,
    },
    {
      label: "Discrimination Factors",
      value: payEquityData.discriminationFactors[discriminationFactors] || 0,
    },
    {
      label: "Job Evaluation Systems",
      value: payEquityData.jobEvaluationSystems[jobEvaluationSystems] || 0,
    },
  ];

  useEffect(() => {
    // Simulate a data fetching delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="p-4">
      <div className="mb-6 mt-2 flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-50">
        Pay Equity Analyzer
      </div>
      <div className="mb-3 text-xs text-gray-700 dark:text-gray-50">
        Assess and analyze the fairness and equity of compensation within your
        organization
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
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
          onChange={(value) => {
            setExperiencePoints(parseInt(value.toString()));
            setExperienceRange(
              `${value.toString()}-${parseInt(value.toString()) + 2} years`,
            );
          }}
          minValue={0}
          maxValue={40}
          step={1}
          label={`Experience (${experienceRange})`}
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
          options={Object.keys(payEquityData.departmentPoints).map((key) => ({
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
        <DropdownSelect
          options={["Male", "Female", "Other"].map((key) => ({
            value: key,
            label: key,
          }))}
          onChange={(e) => setGender(e.target.value)}
          selectedValue={gender}
          placeholder="Select Gender"
        />
        <div>
          <DropdownSelect
            options={Object.keys(payEquityData.educationPoints).map((key) => ({
              value: key,
              label: key,
            }))}
            selectedValue={education}
            onChange={(e) => setEducation(e.target.value)}
            placeholder="Select Education"
          />
        </div>
        <div>
          <DropdownSelect
            options={Object.keys(payEquityData.industryPoints).map((key) => ({
              value: key,
              label: key,
            }))}
            selectedValue={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="Select Industry"
          />
        </div>

        <div>
          <DropdownSelect
            options={Object.keys(payEquityData.payPolicies).map((key) => ({
              value: key,
              label: key,
            }))}
            onChange={(e) => setPayPolicies(e.target.value)}
            selectedValue={payPolicies}
            placeholder="Select Pay Policies"
          />
        </div>

        <div>
          <DropdownSelect
            options={Object.keys(payEquityData.discriminationFactors).map(
              (key) => ({
                value: key,
                label: key,
              }),
            )}
            onChange={(e) => setDiscriminationFactors(e.target.value)}
            selectedValue={discriminationFactors}
            placeholder="Select Discrimination Factors"
          />
        </div>

        <div>
          <DropdownSelect
            options={Object.keys(payEquityData.jobEvaluationSystems).map(
              (key) => ({
                value: key,
                label: key,
              }),
            )}
            onChange={(e) => setJobEvaluationSystems(e.target.value)}
            selectedValue={jobEvaluationSystems}
            placeholder="Select Job Evaluation Systems"
          />
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">
          Adjusted Salary: ${adjustedSalary.toFixed(2)}
        </h2>
      </div>

      <div className="h-full w-full">
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
