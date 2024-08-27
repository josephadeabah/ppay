"use client";

import { Card, CardContent, CardHeader } from "@/components/card/Card";
import ProgressBar from "@/components/progress/ProgressBar";
import ProgressRing from "@/components/progress/ProgressRing";
import { EmployeeData } from "@/types/payaid.data";

const PromotionDeterminant = ({ data }: { data: EmployeeData[] }) => {
  // Logic to determine promotion on demand
  const isPromoted = (row: EmployeeData): boolean => {
    // Example logic: Assume an employee is promoted if their performancePoints exceed a certain threshold
    const performancePoints = parseFloat(row.performancePoints) || 0;
    return performancePoints >= 80; // Threshold for promotion
  };

  // Calculate statistics dynamically
  const totalMen = data.filter((row) => row.gender === "Male").length;
  const totalWomen = data.filter((row) => row.gender === "Female").length;

  const menPromoted = data.filter(
    (row) => row.gender === "Male" && isPromoted(row),
  ).length;
  const womenPromoted = data.filter(
    (row) => row.gender === "Female" && isPromoted(row),
  ).length;

  // Ensure promotion percentages are correctly calculated and prevent division by zero
  const menPromotionPercentage =
    totalMen > 0 ? Math.round((menPromoted / totalMen) * 100) : 0;
  const womenPromotionPercentage =
    totalWomen > 0 ? Math.round((womenPromoted / totalWomen) * 100) : 0;

  return (
    <div className="w-full max-w-full bg-white dark:bg-gray-900">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Promotion Statistics by Gender
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Card for Men */}
        <Card>
          <CardHeader title="Men Promoted" />
          <CardContent>
            <ProgressRing
              value={menPromotionPercentage}
              size={120}
              strokeWidth={10}
              color="green"
            />
            <p className="mt-2 text-center text-sm dark:text-gray-100">
              {menPromoted} out of {totalMen} men were promoted.
            </p>
          </CardContent>
        </Card>

        {/* Card for Women */}
        <Card>
          <CardHeader title="Women Promoted" />
          <CardContent>
            <ProgressRing
              value={womenPromotionPercentage}
              size={120}
              strokeWidth={10}
              color="black"
            />
            <p className="mt-2 text-center text-sm dark:text-gray-100">
              {womenPromoted} out of {totalWomen} women were promoted.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader title="Overall Promotion Comparison" />
          <CardContent>
            <ProgressBar
              firstProgress={menPromotionPercentage}
              secondProgress={womenPromotionPercentage}
              firstTooltipContent={`Men: ${menPromotionPercentage}%`}
              secondTooltipContent={`Women: ${womenPromotionPercentage}%`}
            />
            <p className="mt-4 text-center text-sm dark:text-gray-100">
              A comparison of promotion rates between men and women.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PromotionDeterminant;
