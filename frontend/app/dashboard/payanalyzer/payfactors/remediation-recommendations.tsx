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
    <div className="remediation-recommendations">
      <h2 className="mb-4 text-lg">Remediation Recommendations</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Job Title</th>
              <th className="px-4 py-2">Root Cause</th>
              <th className="px-4 py-2">Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {enrichedData.map((row, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{row.name}</td>
                <td className="border px-4 py-2">{row.jobTitle}</td>
                <td className="border px-4 py-2">{row.rootCause}</td>
                <td className="border px-4 py-2">{row.recommendation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RemediationRecommendations;
