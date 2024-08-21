const CostOfLivingArea = ({ data }: { data: any[] }) => {
  const calculateCostOfLivingAdjustment = (
    salary: number,
    location: string,
  ) => {
    const costOfLivingIndex: { [key: string]: number } = {
      USA: 1.0,
      Canada: 0.9,
      "United Kingdom": 1.2,
    };
    return salary * (costOfLivingIndex[location] || 1.0);
  };

  const enhancedData = data.map((row) => ({
    ...row,
    adjustedSalary: calculateCostOfLivingAdjustment(row.salary, row.location),
  }));

  return (
    <div className="w-full max-w-full overflow-hidden bg-white dark:bg-gray-900">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Cost of Living Adjusted Salaries
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-100">
                Name
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-100">
                Location
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-100">
                Base Salary
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-100">
                Adjusted Salary
              </th>
            </tr>
          </thead>
          <tbody>
            {enhancedData?.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="border-b px-4 py-2 text-gray-900 dark:text-gray-100">
                  {row.name}
                </td>
                <td className="border-b px-4 py-2 text-gray-900 dark:text-gray-100">
                  {row.location}
                </td>
                <td className="border-b px-4 py-2 text-gray-900 dark:text-gray-100">
                  ${row.salary}
                </td>
                <td className="border-b px-4 py-2 text-gray-900 dark:text-gray-100">
                  ${row.adjustedSalary}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CostOfLivingArea;
