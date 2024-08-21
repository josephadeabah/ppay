const RemediationRecommendations = ({ data }: { data: any[] }) => {
  const generateRecommendation = (row: any) => {
    if (row.rootCause === "Possible gender pay gap") {
      return "Increase salary to align with male counterparts.";
    }
    if (row.rootCause === "Underpaid for management role") {
      return "Reclassify job role and increase salary.";
    }
    return "No remediation required.";
  };

  const enrichedData = data.map((row) => ({
    ...row,
    recommendation: generateRecommendation(row),
  }));

  return (
    <div className="w-full max-w-full overflow-hidden bg-white dark:bg-gray-900">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Remediation Recommendations
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
                Root Cause
              </th>
              <th className="px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-100">
                Recommendation
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
                  {row.rootCause}
                </td>
                <td className="border-b px-4 py-2 text-gray-900 dark:text-gray-100">
                  {row.recommendation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RemediationRecommendations;
