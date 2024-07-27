"use client";
import DropdownSelect from "@/components/dropdown/DropdownSelect";
import SliderComponent from "@/components/slider/Slider";
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
import { useMemo, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Company, Country, data, Industry, Role } from "./data";

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

  const exampleData = {
    labels: ["Entry Level", "Mid Level", "Senior Level"],
    datasets: [
      {
        label: "Average Salary",
        data: [50000, 75000, 120000],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  // Memoize filteredRoles to optimize performance
  const filteredRoles: Role[] = useMemo(() => {
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

  return (
    <div className="mx-auto px-4">
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
        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-gray-800">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr className="text-sm">
                <th className="p-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Role
                </th>
                <th className="p-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Job Level
                </th>
                <th className="p-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Current Salary
                </th>
                <th className="p-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Benchmark Salary
                </th>
                <th className="p-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Salary Range
                </th>
                <th className="p-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Career Path
                </th>
                <th className="p-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Growth Opportunities
                </th>
                <th className="p-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Skills
                </th>
                <th className="p-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Responsibilities
                </th>
                <th className="p-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Years of Experience
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 dark:text-gray-300">
              {filteredRoles.length > 0 ? (
                filteredRoles.map((role, index) => (
                  <tr key={index}>
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
                    <td className="border-b p-2">{role.growthOpportunities}</td>
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
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10} className="p-4 text-center">
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
            Salary Benchmarks
          </h2>
          <Bar data={exampleData} />
        </div>
        <div className="col-span-1">
          <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Salary Trends Over Time
          </h2>
          <Line data={exampleData} />
        </div>
      </div>
    </div>
  );
}
