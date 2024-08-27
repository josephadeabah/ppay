import { Card, CardContent, CardHeader } from "@/components/card/Card";
import ProgressRing from "@/components/progress/ProgressRing";
import { EmployeeData } from "@/types/payaid.data";

const getIndicator = (gapPercentage: number): string => {
  if (gapPercentage === 0) {
    return "No comparison possible";
  } else if (gapPercentage >= 1 && gapPercentage < 20) {
    return "Statistically significant gap";
  } else if (gapPercentage >= 20 && gapPercentage < 50) {
    return "Approaching statistically significant gap";
  } else if (gapPercentage >= 50 && gapPercentage <= 100) {
    return "Non-statistically significant gap";
  } else {
    return "No comparison possible"; // This case handles any out-of-range values
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
    "No comparison possible": "Insufficient data to determine pay fairness.",
  };
  return recommendations[indicator] || "No remediation required.";
};

const getProgressRingColor = (indicator: string): string => {
  const colors: Record<string, string> = {
    "Statistically significant gap": "red",
    "Approaching statistically significant gap": "orange",
    "Non-statistically significant gap": "green",
    "No comparison possible": "gray",
  };
  return colors[indicator] || "gray";
};

const calculateGapPercentage = (row: EmployeeData): number => {
  // Convert all relevant fields to numeric values, default to 0 if NaN
  const baseSalary = parseFloat(row.baseSalary) || 0;
  const bonus = parseFloat(row.bonus) || 0;
  const stockOptions = parseFloat(row.stockOptions) || 0;
  const marketRate = parseFloat(row.marketRate) || 0;

  // Performance-related points
  const performancePoints = parseFloat(row.performancePoints) || 0;
  const industryPoints = parseFloat(row.industryPoints) || 0;
  const departmentPoints = parseFloat(row.departmentPoints) || 0;
  const seniorityPoints = parseFloat(row.seniorityPoints) || 0;
  const educationLevelPoints = parseFloat(row.educationLevelPoints) || 0;
  const companySizePoints = parseFloat(row.companySizePoints) || 0;
  const managerRating = parseFloat(row.managerRating) || 0;
  const employeeRating = parseFloat(row.employeeRating) || 0;

  // Compute total compensation as a sum of base salary, bonus, and stock options
  const totalCompensation = baseSalary + bonus + stockOptions;

  // Combine points and ratings into a score
  const weightedScore =
    performancePoints +
    industryPoints +
    departmentPoints +
    seniorityPoints +
    educationLevelPoints +
    companySizePoints +
    managerRating +
    employeeRating;

  // Calculate the gap percentage based on the difference between total compensation and market rate, weighted by the score
  const gapPercentage = ((totalCompensation - marketRate) / marketRate) * 100;

  // Ensure the gap percentage is clamped between 0 and 100 for meaningful comparison
  return Math.max(0, Math.min(gapPercentage, 100));
};

const RemediationRecommendations = ({ data }: { data: EmployeeData[] }) => {
  const enrichedData = data.map((row) => {
    const gapPercentage = calculateGapPercentage(row);
    const indicator = getIndicator(gapPercentage);

    return {
      ...row,
      indicator,
      recommendation: getRecommendation(indicator),
      gapPercentage,
    };
  });

  return (
    <div className="w-full max-w-full bg-white p-6 dark:bg-gray-900">
      <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Pay Equity Distribution & Remediation Recommendations
      </h2>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {enrichedData.map((row, idx) => (
          <Card key={idx}>
            <CardHeader title={row.name} />
            <CardContent>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Job Title:</strong> {row.jobTitle}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Gap Percentage:</strong> {row.gapPercentage.toFixed(2)}%
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Indicator:</strong> {row.indicator}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Recommendation:</strong> {row.recommendation}
              </p>
              <ProgressRing
                value={Math.round(row.gapPercentage)}
                color={getProgressRingColor(row.indicator)}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RemediationRecommendations;
