"use client";
import { EmployeeData } from "@/types/payaid.data";
import { BenchmarkDataType } from "../../benchmark/data";
import PromotionDeterminant from "./promotiondeterminant";

const PayFactors = ({ userData }: { userData: EmployeeData[] }) => {
  const benchmarkData: BenchmarkDataType[] = [
    {
      role: "Software Engineer",
      jobLevel: "Mid-Level",
      skills: ["Programming", "System Design"],
      responsibilities: ["Develop software", "Code review"],
      currentSalary: 90000,
      benchmarkSalary: 95000,
      salaryRange: "$85,000 - $105,000",
      careerPath: "Senior Engineer -> Lead Engineer",
      growthOpportunities: "High",
      yearsOfExperience: 5,
      country: "USA",
    },
    {
      role: "Data Scientist",
      jobLevel: "Senior",
      skills: ["Data Analysis", "Machine Learning"],
      responsibilities: ["Analyze data", "Develop models"],
      currentSalary: 110000,
      benchmarkSalary: 115000,
      salaryRange: "$100,000 - $130,000",
      careerPath: "Lead Data Scientist -> Chief Data Scientist",
      growthOpportunities: "High",
      yearsOfExperience: 7,
      country: "USA",
    },
    {
      role: "Product Manager",
      jobLevel: "Mid-Level",
      skills: ["Product Strategy", "Market Research"],
      responsibilities: ["Manage product lifecycle", "Coordinate with teams"],
      currentSalary: 95000,
      benchmarkSalary: 100000,
      salaryRange: "$90,000 - $110,000",
      careerPath: "Senior Product Manager -> Director of Product",
      growthOpportunities: "Moderate",
      yearsOfExperience: 6,
      country: "USA",
    },
    {
      role: "UX Designer",
      jobLevel: "Junior",
      skills: ["User Research", "Wireframing"],
      responsibilities: ["Design user interfaces", "Conduct usability testing"],
      currentSalary: 85000,
      benchmarkSalary: 90000,
      salaryRange: "$80,000 - $95,000",
      careerPath: "Mid-Level UX Designer -> Senior UX Designer",
      growthOpportunities: "Moderate",
      yearsOfExperience: 4,
      country: "USA",
    },
    {
      role: "Marketing Manager",
      jobLevel: "Entry-Level",
      skills: ["Digital Marketing", "SEO"],
      responsibilities: ["Manage marketing campaigns", "Conduct SEO audits"],
      currentSalary: 70000,
      benchmarkSalary: 75000,
      salaryRange: "$70,000 - $85,000",
      careerPath: "Entry-Level Marketing Manager -> Lead Marketing Manager",
      growthOpportunities: "Low",
      yearsOfExperience: 3,
      country: "USA",
    },
    // Add more benchmark data as needed
  ];

  // Check if both userData and benchmarkData are available
  const isDataAvailable =
    userData &&
    userData.length > 0 &&
    benchmarkData &&
    benchmarkData.length > 0;

  if (!isDataAvailable) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-xl font-bold">Upload data first</h2>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-full flex-col gap-8">
      <h2 className="text-xl font-bold">Pay Factors</h2>
      {/* Top row with 3 components */}
      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <PromotionDeterminant data={userData} benchmarkData={benchmarkData} />
        </div>
      </div>
    </div>
  );
};

export default PayFactors;
