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
    <div className="market-rates">
      <h2 className="mb-4 text-lg">Market Rates Comparison</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Job Title</th>
              <th className="px-4 py-2">Base Salary</th>
              <th className="px-4 py-2">Market Rate</th>
              <th className="px-4 py-2">Above Market Rate</th>
            </tr>
          </thead>
          <tbody>
            {enrichedData.map((row, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{row.name}</td>
                <td className="border px-4 py-2">{row.jobTitle}</td>
                <td className="border px-4 py-2">${row.salary}</td>
                <td className="border px-4 py-2">${row.marketRate}</td>
                <td className="border px-4 py-2">
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
