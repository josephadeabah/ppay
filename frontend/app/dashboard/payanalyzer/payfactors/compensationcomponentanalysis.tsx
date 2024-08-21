const CompensationComponentAnalysis = ({ data }: { data: any[] }) => {
  return (
    <div className="compensation-analysis">
      <h2 className="mb-4 text-lg">Compensation Component Breakdown</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Base Salary</th>
              <th className="px-4 py-2">Bonus</th>
              <th className="px-4 py-2">Stock Options</th>
              <th className="px-4 py-2">Total Compensation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => {
              // Convert values to numbers
              const salary = Number(row.salary) || 0;
              const bonus = Number(row.bonus) || 0;
              const stockOptions = Number(row.stockOptions) || 0;

              return (
                <tr key={idx}>
                  <td className="border px-4 py-2">{row.name}</td>
                  <td className="border px-4 py-2">${salary}</td>
                  <td className="border px-4 py-2">${bonus}</td>
                  <td className="border px-4 py-2">${stockOptions}</td>
                  <td className="border px-4 py-2">
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
