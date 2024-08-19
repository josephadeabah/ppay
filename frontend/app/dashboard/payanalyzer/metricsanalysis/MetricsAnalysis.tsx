// components/Dashboard/MetricsAnalysis.tsx
// utils/analysis.ts
export const calculateMetrics = (data: any[]) => {
  // Filter out rows where salary is not a valid number
  const filteredData = data.filter((row) => !isNaN(parseFloat(row.salary)));

  const totalSalary = filteredData.reduce(
    (sum, row) => sum + parseFloat(row.salary),
    0,
  );
  const averageSalary = filteredData.length
    ? totalSalary / filteredData.length
    : 0;

  const genderPayGap = filteredData.reduce(
    (gaps, row) => {
      const salary = parseFloat(row.salary);
      if (!isNaN(salary)) {
        if (row.gender === "Male") {
          gaps.maleTotal += salary;
          gaps.maleCount++;
        } else if (row.gender === "Female") {
          gaps.femaleTotal += salary;
          gaps.femaleCount++;
        }
      }
      return gaps;
    },
    { maleTotal: 0, maleCount: 0, femaleTotal: 0, femaleCount: 0 },
  );

  const maleAverage = genderPayGap.maleCount
    ? genderPayGap.maleTotal / genderPayGap.maleCount
    : 0;
  const femaleAverage = genderPayGap.femaleCount
    ? genderPayGap.femaleTotal / genderPayGap.femaleCount
    : 0;
  const payGap =
    maleAverage && femaleAverage
      ? ((maleAverage - femaleAverage) / maleAverage) * 100
      : 0;

  return {
    averageSalary: isNaN(averageSalary) ? 0 : averageSalary,
    maleAverage: isNaN(maleAverage) ? 0 : maleAverage,
    femaleAverage: isNaN(femaleAverage) ? 0 : femaleAverage,
    payGap: isNaN(payGap) ? 0 : payGap,
  };
};

const MetricsAnalysis = ({ data }: { data: any[] }) => {
  const metrics = calculateMetrics(data);

  return (
    <div className="metrics-container w-full overflow-x-auto">
      <h2 className="mb-4 text-lg">Analysis Metrics</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">
              Metric
            </th>
            <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Average Salary</td>
            <td className="border px-4 py-2">
              ${metrics.averageSalary.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Male Average Salary</td>
            <td className="border px-4 py-2">
              ${metrics.maleAverage.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Female Average Salary</td>
            <td className="border px-4 py-2">
              ${metrics.femaleAverage.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Gender Pay Gap</td>
            <td className="border px-4 py-2">{metrics.payGap.toFixed(2)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MetricsAnalysis;
