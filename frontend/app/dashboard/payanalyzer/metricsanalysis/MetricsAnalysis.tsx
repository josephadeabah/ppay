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
    <div className="metrics-container">
      <h2>Analysis Metrics</h2>
      <ul>
        <li>Average Salary: ${metrics.averageSalary.toFixed(2)}</li>
        <li>Male Average Salary: ${metrics.maleAverage.toFixed(2)}</li>
        <li>Female Average Salary: ${metrics.femaleAverage.toFixed(2)}</li>
        <li>Gender Pay Gap: {metrics.payGap.toFixed(2)}%</li>
      </ul>
    </div>
  );
};

export default MetricsAnalysis;
