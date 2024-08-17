const recessionProneCountries = [
  {
    code: "USA",
    name: "United States",
    gdp_growth_rate: 2.3,
    unemployment_rate: 3.6,
    inflation_rate: 3.1,
    debt_to_gdp_ratio: 107.3,
    consumer_confidence_index: 114.8,
  },
  {
    code: "CAN",
    name: "Canada",
    gdp_growth_rate: 1.8,
    unemployment_rate: 5.0,
    inflation_rate: 2.2,
    debt_to_gdp_ratio: 88.5,
    consumer_confidence_index: 90.1,
  },
  {
    code: "GBR",
    name: "United Kingdom",
    gdp_growth_rate: 1.9,
    unemployment_rate: 4.2,
    inflation_rate: 1.8,
    debt_to_gdp_ratio: 103.7,
    consumer_confidence_index: 99.3,
  },
  {
    code: "AUS",
    name: "Australia",
    gdp_growth_rate: 2.6,
    unemployment_rate: 3.7,
    inflation_rate: 2.5,
    debt_to_gdp_ratio: 41.8,
    consumer_confidence_index: 102.4,
  },
];

const getHighlightClass = (
  value: number,
  highThreshold?: number,
  lowThreshold?: number,
) => {
  if (highThreshold !== undefined && value >= highThreshold) {
    return "bg-red-100 text-red-700"; // Light red background for high values
  }
  if (lowThreshold !== undefined && value <= lowThreshold) {
    return "bg-green-100 text-green-700"; // Light green background for low values
  }
  return ""; // Default no highlight
};

const highThreshold = 5; // Example high threshold
const lowThreshold = 2; // Example low threshold

const RecessionProneCountriesTable = () => {
  return (
    <div className="overflow-x-auto [&::-moz-scrollbar-thumb]:rounded-full [&::-moz-scrollbar-thumb]:bg-gray-200 [&::-moz-scrollbar-track]:m-1 [&::-moz-scrollbar]:w-2 [&::-ms-scrollbar-thumb]:rounded-full [&::-ms-scrollbar-thumb]:bg-gray-200 [&::-ms-scrollbar-track]:m-1 [&::-ms-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:m-1 [&::-webkit-scrollbar]:w-2">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Country
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              GDP Growth Rate
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Unemployment Rate
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Inflation Rate
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Debt-to-GDP Ratio
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Consumer Confidence Index
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
          {recessionProneCountries.map((country) => (
            <tr key={country.code}>
              <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                {country.name}
              </td>
              <td
                className={`px-6 py-4 text-sm ${getHighlightClass(country.gdp_growth_rate, highThreshold)}`}
              >
                {country.gdp_growth_rate}%
              </td>
              <td
                className={`px-6 py-4 text-sm ${getHighlightClass(country.unemployment_rate, highThreshold)}`}
              >
                {country.unemployment_rate}%
              </td>
              <td
                className={`px-6 py-4 text-sm ${getHighlightClass(country.inflation_rate, highThreshold)}`}
              >
                {country.inflation_rate}%
              </td>
              <td
                className={`px-6 py-4 text-sm ${getHighlightClass(country.debt_to_gdp_ratio, highThreshold)}`}
              >
                {country.debt_to_gdp_ratio}%
              </td>
              <td
                className={`px-6 py-4 text-sm ${getHighlightClass(country.consumer_confidence_index, undefined, lowThreshold)}`}
              >
                {country.consumer_confidence_index}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecessionProneCountriesTable;
