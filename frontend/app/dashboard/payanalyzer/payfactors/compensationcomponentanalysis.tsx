const CompensationComponentAnalysis = ({ data }: { data: any[] }) => {
  return (
    <div className="w-full max-w-full overflow-hidden bg-white dark:bg-gray-900">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Compensation Component Breakdown
      </h2>
      <div className="overflow-x-auto [&::-moz-scrollbar-thumb]:rounded-full [&::-moz-scrollbar-thumb]:bg-gray-200 [&::-moz-scrollbar-track]:m-1 [&::-moz-scrollbar]:w-2 [&::-ms-scrollbar-thumb]:rounded-full [&::-ms-scrollbar-thumb]:bg-gray-200 [&::-ms-scrollbar-track]:m-1 [&::-ms-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:m-1 [&::-webkit-scrollbar]:w-2">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-100">
                Name
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-100">
                Base Salary
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-100">
                Bonus
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-100">
                Stock Options
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-100">
                Total Compensation
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => {
              // Convert values to numbers
              const salary = Number(row.baseSalary) || 0;
              const bonus = Number(row.bonus) || 0;
              const stockOptions = Number(row.stockOptions) || 0;

              return (
                <tr
                  key={idx}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="border-b px-4 py-2 text-gray-900 dark:text-gray-100">
                    {row.name}
                  </td>
                  <td className="border-b px-4 py-2 text-gray-900 dark:text-gray-100">
                    ${salary.toFixed(2)}
                  </td>
                  <td className="border-b px-4 py-2 text-gray-900 dark:text-gray-100">
                    ${bonus.toFixed(2)}
                  </td>
                  <td className="border-b px-4 py-2 text-gray-900 dark:text-gray-100">
                    ${stockOptions.toFixed(2)}
                  </td>
                  <td className="border-b px-4 py-2 text-gray-900 dark:text-gray-100">
                    ${(salary + bonus + stockOptions).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompensationComponentAnalysis;
