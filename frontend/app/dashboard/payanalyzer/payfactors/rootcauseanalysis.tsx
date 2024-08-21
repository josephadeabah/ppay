const RootCauseAnalysis = ({ data }: { data: any[] }) => {
  const identifyRootCause = (row: any) => {
    const jobTitle = row.jobTitle || ""; // Default to an empty string if jobTitle is undefined
    const salary = Number(row.salary) || 0; // Convert to number with default value

    if (jobTitle.includes("Manager") && salary < 80000) {
      return "Underpaid for management role";
    }
    if (row.gender === "Female" && salary < 50000) {
      return "Possible gender pay gap";
    }
    return "No identified issue";
  };

  const enrichedData = data.map((row) => ({
    ...row,
    rootCause: identifyRootCause(row),
  }));

  return (
    <div className="root-cause-analysis">
      <h2 className="mb-4 text-lg">Root Cause Analysis</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Job Title</th>
              <th className="px-4 py-2">Salary</th>
              <th className="px-4 py-2">Root Cause</th>
            </tr>
          </thead>
          <tbody>
            {enrichedData.map((row, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{row.name}</td>
                <td className="border px-4 py-2">{row.jobTitle}</td>
                <td className="border px-4 py-2">${row.salary}</td>
                <td className="border px-4 py-2">{row.rootCause}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RootCauseAnalysis;
