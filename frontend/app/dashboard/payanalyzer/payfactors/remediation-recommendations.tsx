import { Card, CardContent, CardHeader } from "@/components/card/Card";
import ProgressRing from "@/components/progress/ProgressRing";

const RemediationRecommendations = ({ data }: { data: any[] }) => {
  const generateRecommendation = (row: any) => {
    switch (row.indicator) {
      case "Statistically significant gap":
        return "Urgent action required to address pay inequity.";
      case "Approaching statistically significant gap":
        return "Monitor and assess pay gaps closely.";
      case "Non-statistically significant gap":
        return "Pay distribution is fair, but regular monitoring is needed.";
      case "No comparison possible":
        return "Insufficient data to determine pay fairness.";
      default:
        return "No remediation required.";
    }
  };

  const getProgressRingColor = (indicator: string) => {
    switch (indicator) {
      case "Statistically significant gap":
        return "red";
      case "Approaching statistically significant gap":
        return "orange";
      case "Non-statistically significant gap":
        return "green";
      default:
        return "gray";
    }
  };

  const enrichedData = data.map((row) => ({
    ...row,
    recommendation: generateRecommendation(row),
  }));

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
                <strong>Indicator:</strong> {row.indicator}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Recommendation:</strong> {row.recommendation}
              </p>
              {/* Progress Ring based on the indicator */}
              <ProgressRing
                value={row.gapPercentage}
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
