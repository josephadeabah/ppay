"use client";

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
            {data.map((row, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{row.name}</td>
                <td className="border px-4 py-2">${row.salary}</td>
                <td className="border px-4 py-2">${row.bonus || 0}</td>
                <td className="border px-4 py-2">${row.stockOptions || 0}</td>
                <td className="border px-4 py-2">
                  $
                  {(
                    row.salary +
                    (row.bonus || 0) +
                    (row.stockOptions || 0)
                  ).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const RootCauseAnalysis = ({ data }: { data: any[] }) => {
  const identifyRootCause = (row: any) => {
    if (row.jobTitle.includes("Manager") && row.salary < 80000) {
      return "Underpaid for management role";
    }
    if (row.gender === "Female" && row.salary < 50000) {
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

// Apply similar changes to other components

const PayFactors = ({ userData }: { userData: any[] }) => {
  return (
    <div className="p-6">
      {/* Top row with 3 components */}
      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <CostOfLivingArea data={userData} />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="col-span-1 mb-2">
          <MarketRates data={userData} />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="col-span-1 mb-2">
          <CompensationComponentAnalysis data={userData} />
        </div>
      </div>

      {/* Bottom row with 2 components */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="col-span-1">
          <RootCauseAnalysis data={userData} />
        </div>
        <div className="col-span-1">
          <RemediationRecommendations data={userData} />
        </div>
      </div>
    </div>
  );
};

export default PayFactors;
