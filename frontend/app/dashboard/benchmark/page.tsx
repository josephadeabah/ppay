"use client";
import DropdownSelect from "@/components/dropdown/DropdownSelect";
import SliderComponent from "@/components/slider/Slider";
import { Tooltip as Tooltp } from "@nextui-org/react";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useMemo, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { BenchmarkDataType, Company, Country, data, Industry } from "./data";
import MarketSalaryBenchmarksSkeleton from "./loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
);

export default function MarketSalaryBenchmarks() {
  const [experienceRange, setExperienceRange] = useState<number[]>([0, 20]);
  const [salaryRange, setSalaryRange] = useState<number[]>([50000, 200000]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(
    null,
  );
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Calculate adjusted salary based on inflation rate
  const calculateAdjustedSalary = (salary: number, inflationRate: number) => {
    return salary * (1 + inflationRate / 100);
  };

  // Memoize filteredRoles to optimize performance
  const filteredRoles: BenchmarkDataType[] = useMemo(() => {
    if (selectedCountry && selectedIndustry && selectedCompany) {
      const roles =
        data[selectedCountry]?.industries[selectedIndustry]?.companies[
          selectedCompany
        ] || [];

      return roles.filter((role) => {
        // Filter by experience range
        const isExperienceInRange =
          experienceRange[0] <= role.yearsOfExperience &&
          role.yearsOfExperience <= experienceRange[1];

        // Filter by salary range
        const isSalaryInRange =
          role.currentSalary >= salaryRange[0] &&
          role.currentSalary <= salaryRange[1];

        return isExperienceInRange && isSalaryInRange;
      });
    }
    return [];
  }, [
    selectedCountry,
    selectedIndustry,
    selectedCompany,
    experienceRange,
    salaryRange,
    data,
  ]);

  const handleExperienceRangeChange = (newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setExperienceRange(newValue);
    }
  };

  const handleSalaryRangeChange = (newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setSalaryRange(newValue);
    }
  };

  // Create data for line chart
  const lineChartData = useMemo(() => {
    const rolesData = filteredRoles.map((role) => role.currentSalary);
    const rolesLabels = filteredRoles.map((role) => role.role);

    return {
      labels: rolesLabels,
      datasets: [
        {
          label: `Current Salary @ ${selectedCompany ?? "N/A"}`,
          data: rolesData,
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.4)",
          fill: false,
        },
      ],
    };
  }, [filteredRoles]);

  // Create data for bar chart
  const barChartData = useMemo(() => {
    const rolesData = filteredRoles.map((role) => role.currentSalary);
    const rolesLabels = filteredRoles.map((role) => role.jobLevel);

    return {
      labels: rolesLabels,
      datasets: [
        {
          label: `Current Salary @ ${selectedCompany ?? "N/A"}`,
          data: rolesData,
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.4)",
          fill: false,
        },
      ],
    };
  }, [filteredRoles]);

  return loading ? (
    <MarketSalaryBenchmarksSkeleton />
  ) : (
    <div className="mx-auto bg-white px-4">
      <div className="mb-6 mt-2 flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-50">
        Market Salary Benchmarks (Live{" "}
        <div className="inline-block h-3 w-3 rounded-full bg-green-400"></div>)
      </div>

      <div className="my-4">
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="flex-1">
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
              Filter by Experience Range
            </h2>
            <SliderComponent
              value={experienceRange}
              onChange={handleExperienceRangeChange}
              minValue={0}
              maxValue={30}
              step={1}
              label="Experience (Years)"
              trackColor="bg-gray-200 dark:bg-gray-800"
              thumbColor="bg-white dark:bg-gray-600"
            />
          </div>
          <div className="flex-1">
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
              Filter by Salary Range
            </h2>
            <SliderComponent
              value={salaryRange}
              onChange={handleSalaryRangeChange}
              minValue={30000}
              maxValue={300000}
              step={1000}
              label="Salary ($)"
              trackColor="bg-gray-200 dark:bg-gray-800"
              thumbColor="bg-white dark:bg-gray-600"
            />
          </div>
        </div>
      </div>

      <div className="my-4 flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Select Country
          </h2>
          <DropdownSelect
            options={Object.keys(data).map((country) => ({
              value: country,
              label: country,
            }))}
            selectedValue={selectedCountry?.toString() ?? ""}
            onChange={(e) => {
              setSelectedCountry(e.target.value as Country);
              // Reset other filters
              setSelectedIndustry(null);
              setSelectedCompany(null);
            }}
            placeholder="Select Country"
          />
        </div>

        <div className="flex-1">
          <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Select Industry
          </h2>
          <DropdownSelect
            options={
              selectedCountry
                ? Object.keys(data[selectedCountry]?.industries || {}).map(
                    (industry) => ({ value: industry, label: industry }),
                  )
                : []
            }
            selectedValue={selectedIndustry?.toString() ?? ""}
            onChange={(e) => {
              setSelectedIndustry(e.target.value as Industry);
              setSelectedCompany(null); // Reset company when industry changes
            }}
            placeholder="Select Industry"
          />
        </div>

        <div className="flex-1">
          <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Select Company
          </h2>
          <DropdownSelect
            options={
              selectedCountry && selectedIndustry
                ? Object.keys(
                    data[selectedCountry]?.industries[selectedIndustry]
                      ?.companies || {},
                  ).map((company) => ({ value: company, label: company }))
                : []
            }
            selectedValue={selectedCompany?.toString() ?? ""}
            onChange={(e) => setSelectedCompany(e.target.value as Company)}
            placeholder="Select Company"
          />
        </div>
      </div>

      <div className="my-4">
        <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
          Filtered Roles
        </h2>
        <div className="overflow-x-auto [&::-moz-scrollbar-thumb]:rounded-full [&::-moz-scrollbar-thumb]:bg-gray-200 [&::-moz-scrollbar-track]:m-1 [&::-moz-scrollbar]:w-2 [&::-ms-scrollbar-thumb]:rounded-full [&::-ms-scrollbar-thumb]:bg-gray-200 [&::-ms-scrollbar-track]:m-1 [&::-ms-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:m-1 [&::-webkit-scrollbar]:w-2">
          <table className="w-full bg-white dark:bg-gray-800">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr className="text-xs">
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Tooltp
                    content="The job title or position"
                    className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                  >
                    Role
                  </Tooltp>
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Tooltp
                    content="The level of the job, e.g., Entry, Mid, Senior"
                    className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                  >
                    Job Level
                  </Tooltp>
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Tooltp
                    content="The current salary for the role"
                    className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                  >
                    Current Salary
                  </Tooltp>
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Tooltp
                    content="The industry benchmark salary for the role"
                    className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                  >
                    Benchmark Salary
                  </Tooltp>
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Tooltp
                    content="The typical salary range for the role"
                    className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                  >
                    Salary Range
                  </Tooltp>
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Tooltp
                    content="Potential career advancements from this role"
                    className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                  >
                    Career Path
                  </Tooltp>
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Tooltp
                    content="Opportunities for professional growth"
                    className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                  >
                    Growth Opportunities
                  </Tooltp>
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Tooltp
                    content="Skills required for the role"
                    className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                  >
                    Skills
                  </Tooltp>
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Tooltp
                    content="Main responsibilities of the role"
                    className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                  >
                    Responsibilities
                  </Tooltp>
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Tooltp
                    content="Years of experience required for the role"
                    className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                  >
                    YEARS
                  </Tooltp>
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Tooltp
                    content="Salary adjusted for inflation"
                    className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                  >
                    Adjusted Salary
                  </Tooltp>
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Tooltp
                    content="The current inflation rate in the selected country"
                    className="bg-white text-xs text-gray-600 dark:bg-gray-950 dark:text-gray-50"
                  >
                    Inflation Rate
                  </Tooltp>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 dark:text-gray-300">
              {filteredRoles.length > 0 ? (
                filteredRoles.map((role) => {
                  const inflationRate =
                    data[selectedCountry!].inflationRate || 0;
                  const adjustedSalary = calculateAdjustedSalary(
                    role.currentSalary,
                    inflationRate,
                  );

                  let inflationColor =
                    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100";
                  if (inflationRate > 2)
                    inflationColor =
                      "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100";
                  else if (inflationRate < 0)
                    inflationColor =
                      "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100";

                  return (
                    <tr key={role.country} className="text-sm">
                      <td className="border-b p-2">{role.role}</td>
                      <td className="border-b p-2">{role.jobLevel}</td>
                      <td className="border-b p-2">
                        ${role.currentSalary.toLocaleString()}
                      </td>
                      <td className="border-b p-2">
                        ${role.benchmarkSalary.toLocaleString()}
                      </td>
                      <td className="border-b p-2">{role.salaryRange}</td>
                      <td className="border-b p-2">{role.careerPath}</td>
                      <td className="border-b p-2">
                        {role.growthOpportunities}
                      </td>
                      <td className="border-b p-2">
                        <ul>
                          {role.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="border-b p-2">
                        <ul>
                          {role.responsibilities.map((responsibility) => (
                            <li key={responsibility}>{responsibility}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="border-b p-2">{role.yearsOfExperience}</td>
                      <td className="border-b p-2">
                        ${adjustedSalary.toLocaleString()}
                      </td>
                      <td
                        className={`border-b p-2 dark:bg-gray-800 dark:text-gray-50 ${inflationColor}`}
                      >
                        {inflationRate.toFixed(2)}%
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={12} className="p-4 text-center">
                    No roles match the selected criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="col-span-1">
          <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Current Salary by Level at {selectedCompany ?? "N/A"}
          </h2>
          <Bar data={barChartData} />
        </div>
        <div className="col-span-1">
          <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Current Salary by Role at {selectedCompany ?? "N/A"}
          </h2>
          <Line data={lineChartData} />
        </div>
      </div>
    </div>
  );
}
