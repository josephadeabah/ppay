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
    <div className="cost-of-living-area">
      <h2 className="mb-4 text-lg">Cost of Living Adjusted Salaries</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Base Salary</th>
              <th className="px-4 py-2">Adjusted Salary</th>
            </tr>
          </thead>
          <tbody>
            {enhancedData.map((row, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{row.name}</td>
                <td className="border px-4 py-2">{row.location}</td>
                <td className="border px-4 py-2">${row.salary}</td>
                <td className="border px-4 py-2">
                  ${row.adjustedSalary.toFixed(2)}
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
