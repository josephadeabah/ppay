const MarketRates = ({ data }: { data: any[] }) => {
  const marketRates: { [key: string]: number } = {
    "Software Engineer": 95000,
    "Project Manager": 90000,
    "Data Scientist": 110000,
    "HR Specialist": 80000,
  };

  const enrichedData = data.map((row) => ({
    ...row,
    marketRate: marketRates[row.jobTitle] || 0,
    aboveMarketRate: row.salary > (marketRates[row.jobTitle] || 0),
  }));

  return (
    <div className="w-full max-w-full overflow-hidden bg-white dark:bg-gray-900">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Market Rates Comparison
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-100">
                Name
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-100">
                Job Title
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-100">
                Base Salary
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-100">
                Market Rate
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-100">
                Above Market Rate
              </th>
            </tr>
          </thead>
          <tbody>
            {enrichedData.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="border-b px-4 py-2 text-gray-900 dark:text-gray-100">
                  {row.name}
                </td>
                <td className="border-b px-4 py-2 text-gray-900 dark:text-gray-100">
                  {row.jobTitle}
                </td>
                <td className="border-b px-4 py-2 text-gray-900 dark:text-gray-100">
                  ${row.salary}
                </td>
                <td className="border-b px-4 py-2 text-gray-900 dark:text-gray-100">
                  ${row.marketRate}
                </td>
                <td className="border-b px-4 py-2 text-gray-900 dark:text-gray-100">
                  {row.aboveMarketRate ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketRates;
