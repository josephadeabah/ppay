import { Card, CardContent, CardHeader } from "@/components/card/Card";
import PaginationComponent from "@/components/pagination/pagination";
import ProgressRing from "@/components/progress/ProgressRing";
import { EmployeeData } from "@/types/payaid.data";
import { useState } from "react";

// Calculate the company's hourly rate for an employee
const calculateHourlyRate = (baseSalary: number): number => {
  const workingHoursPerYear = 2080; // 40 hours/week * 52 weeks/year
  return baseSalary / workingHoursPerYear;
};

// Calculate the average salary for a specific job title within the company
const calculateCompanyAverageSalary = (
  data: EmployeeData[],
  jobTitle: string,
): number => {
  const salaries = data
    .filter((row) => row.jobTitle === jobTitle)
    .map((row) => parseFloat(row.baseSalary) || 0);
  const total = salaries.reduce((sum, salary) => sum + salary, 0);
  return salaries.length ? total / salaries.length : 0;
};

// Calculate the global average salary across all job titles within the company
const calculateGlobalAverageSalary = (data: EmployeeData[]): number => {
  const salaries = data.map((row) => parseFloat(row.baseSalary) || 0);
  const total = salaries.reduce((sum, salary) => sum + salary, 0);
  return salaries.length ? total / salaries.length : 0;
};

// Calculate the pay raise rates and gaps, including hourly rate
const calculatePayRaiseGap = (
  baseSalary: number,
  companyAvgSalary: number,
  globalAvgSalary: number,
): {
  companyPayRaiseRate: number;
  globalPayRaiseRate: number;
  payRaiseGap: number;
  hourlyRate: number;
} => {
  const companyPayRaiseRate =
    ((baseSalary - companyAvgSalary) / companyAvgSalary) * 100;
  const globalPayRaiseRate =
    ((baseSalary - globalAvgSalary) / globalAvgSalary) * 100;
  const payRaiseGap = companyPayRaiseRate - globalPayRaiseRate;

  const hourlyRate = calculateHourlyRate(baseSalary);

  return {
    companyPayRaiseRate,
    globalPayRaiseRate,
    payRaiseGap,
    hourlyRate,
  };
};

const getIndicator = (gapPercentage: number): string => {
  if (gapPercentage <= 0) {
    return "No comparison possible"; // Adjusted to handle zero or negative values
  } else if (gapPercentage >= 90) {
    return "No significant gap";
  } else if (gapPercentage >= 50) {
    return "Non-statistically significant gap";
  } else if (gapPercentage >= 20) {
    return "Approaching statistically significant gap";
  } else if (gapPercentage >= 1) {
    return "Statistically significant gap";
  } else {
    return "Highly significant gap"; // Should not be reached with valid input
  }
};

const getRecommendation = (indicator: string): string => {
  const recommendations: Record<string, string> = {
    "Statistically significant gap":
      "Urgent action required to address pay inequity.",
    "Approaching statistically significant gap":
      "Monitor and assess pay gaps closely.",
    "Non-statistically significant gap":
      "Pay distribution is fair, but regular monitoring is needed.",
    "Highly significant gap":
      "Critical gap detected, immediate remediation required.",
    "No significant gap":
      "Pay equity is well-managed; continue regular reviews.",
    "No comparison possible": "Insufficient data to determine pay fairness.",
  };
  return recommendations[indicator] || "No remediation required.";
};

const getProgressRingColor = (
  indicator: string,
  percentage: number,
): string => {
  if (percentage <= 0) {
    return "gray"; // Always gray if percentage is zero or negative
  }

  const colors: Record<string, string> = {
    "Statistically significant gap": "red",
    "Approaching statistically significant gap": "orange",
    "Non-statistically significant gap": "yellow",
    "Highly significant gap": "darkred",
    "No significant gap": "green",
    "No comparison possible": "gray",
  };

  return colors[indicator] || "gray";
};

const calculateGapPercentage = (row: EmployeeData): number => {
  const baseSalary = parseFloat(row.baseSalary) || 0;
  const bonus = parseFloat(row.bonus) || 0;
  const stockOptions = parseFloat(row.stockOptions) || 0;
  const marketRate = parseFloat(row.marketRate) || 0;

  const performancePoints = parseFloat(row.performancePoints) || 0;
  const industryPoints = parseFloat(row.industryPoints) || 0;
  const departmentPoints = parseFloat(row.departmentPoints) || 0;
  const seniorityPoints = parseFloat(row.seniorityPoints) || 0;
  const educationLevelPoints = parseFloat(row.educationLevelPoints) || 0;
  const companySizePoints = parseFloat(row.companySizePoints) || 0;
  const managerRating = parseFloat(row.managerRating) || 0;
  const employeeRating = parseFloat(row.employeeRating) || 0;

  const totalCompensation = baseSalary + bonus + stockOptions;
  const weightedScore =
    performancePoints +
    industryPoints +
    departmentPoints +
    seniorityPoints +
    educationLevelPoints +
    companySizePoints +
    managerRating +
    employeeRating;

  const gapPercentage = ((totalCompensation - marketRate) / marketRate) * 100;
  return Math.max(0, Math.min(gapPercentage, 100));
};

const RemediationRecommendations = ({ data }: { data: EmployeeData[] }) => {
  const globalAvgSalary = calculateGlobalAverageSalary(data);

  const enrichedData = data.map((row) => {
    const gapPercentage = calculateGapPercentage(row);
    const indicator = getIndicator(gapPercentage);
    const companyAvgSalary = calculateCompanyAverageSalary(data, row.jobTitle);
    const { companyPayRaiseRate, globalPayRaiseRate, payRaiseGap, hourlyRate } =
      calculatePayRaiseGap(
        parseFloat(row.baseSalary) || 0,
        companyAvgSalary,
        globalAvgSalary,
      );

    return {
      ...row,
      indicator,
      recommendation: getRecommendation(indicator),
      gapPercentage,
      companyPayRaiseRate,
      globalPayRaiseRate,
      payRaiseGap,
      hourlyRate,
    };
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of cards per page

  // Calculate the paginated data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = enrichedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-full max-w-full bg-white p-2 dark:bg-gray-900">
      {enrichedData.length > 0 && (
        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
          Pay Equity Distribution & Remediation Recommendations for your
          Employees
        </h2>
      )}
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((row, idx) => (
          <Card key={idx}>
            <CardHeader title={row.name} />
            <CardContent>
              <div className="flex">
                {/* Left side: Textual details */}
                <div className="flex w-2/3 flex-col gap-1">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Job Title:</strong> {row.jobTitle}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Gap Percentage:</strong>{" "}
                    {row.gapPercentage.toFixed(2)}%
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Indicator:</strong> {row.indicator}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Recommendation:</strong> {row.recommendation}
                  </p>
                  <div className="w-full border-b-2 border-gray-200 dark:border-gray-700" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Company Pay Raise Rate:</strong>{" "}
                    {row.companyPayRaiseRate.toFixed(2)}%
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Global Pay Raise Rate:</strong>{" "}
                    {row.globalPayRaiseRate.toFixed(2)}%
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Pay Raise Gap:</strong> {row.payRaiseGap.toFixed(2)}
                    %
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Hourly Rate:</strong> ${row.hourlyRate.toFixed(2)}
                  </p>
                </div>

                {/* Right side: Progress Rings */}
                <div className="flex w-1/3 flex-col items-center justify-between gap-10">
                  <div data-tip data-for="gapPercentage">
                    <ProgressRing
                      value={Math.round(row.gapPercentage)}
                      color={getProgressRingColor(
                        row.indicator,
                        row.gapPercentage,
                      )}
                    />
                  </div>
                  <div data-tip data-for="payRaiseGap">
                    <ProgressRing
                      value={Math.round(row.payRaiseGap)}
                      color={getProgressRingColor(
                        row.indicator,
                        row.payRaiseGap,
                      )}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Component */}
      <PaginationComponent
        total={Math.ceil(enrichedData.length / itemsPerPage)}
        initialPage={1}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default RemediationRecommendations;
