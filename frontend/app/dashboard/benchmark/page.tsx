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

const data: DataStructure = {
  USA: {
    industries: {
      Tech: {
        companies: {
          Google: [
            {
              role: "Software Engineer",
              jobLevel: "Mid Level",
              skills: ["JavaScript", "React"],
              responsibilities: [
                "Develop and maintain web applications",
                "Collaborate with cross-functional teams",
              ],
              currentSalary: 80000,
              benchmarkSalary: 85000,
              salaryRange: "70,000 - 100,000",
              careerPath: "Senior Software Engineer",
              growthOpportunities: "Leadership training, certifications",
            },
          ],
        },
      },
      Manufacturing: {
        companies: {
          Amazon: [
            {
              role: "Software Engineer",
              jobLevel: "Mid Level",
              skills: ["Python", "Django"],
              responsibilities: [
                "Develop and maintain web applications",
                "Collaborate with cross-functional teams and managers",
              ],
              currentSalary: 60000,
              benchmarkSalary: 65000,
              salaryRange: "50,000 - 70,000",
              careerPath: "Senior Software Engineer",
              growthOpportunities: "Leadership training, certifications",
            },
          ],
        },
      },
    },
  },
  Russia: {
    industries: {
      Tech: {
        companies: {
          Yandex: [
            {
              role: "Software Engineer",
              jobLevel: "Mid Level",
              skills: ["Python", "Django"],
              responsibilities: [
                "Develop and maintain web applications",
                "Collaborate with cross-functional teams and managers",
              ],
              currentSalary: 60000,
              benchmarkSalary: 65000,
              salaryRange: "50,000 - 70,000",
              careerPath: "Senior Software Engineer",
              growthOpportunities: "Leadership training, certifications",
            },
          ],
        },
      },
      Manufacturing: {
        companies: {
          Kazantiles: [
            {
              role: "Lead Engineer",
              jobLevel: "Mid Level",
              skills: ["Python", "Django"],
              responsibilities: [
                "Develop and maintain web applications",
                "Collaborate with cross-functional teams and managers",
              ],
              currentSalary: 60000,
              benchmarkSalary: 65000,
              salaryRange: "50,000 - 70,000",
              careerPath: "Senior Software Engineer",
              growthOpportunities: "Leadership training, certifications",
            },
          ],
        },
      },
    },
  },
};

type Role = {
  role: string;
  jobLevel: string;
  skills: string[];
  responsibilities: string[];
  currentSalary: number;
  benchmarkSalary: number;
  salaryRange: string;
  careerPath: string;
  growthOpportunities: string;
};

type DataStructure = {
  [country: string]: {
    industries: {
      [industry: string]: {
        companies: {
          [company: string]: Role[];
        };
      };
    };
  };
};

type Country = keyof DataStructure;
type Industry = keyof DataStructure[Country]["industries"];
type Company =
  keyof DataStructure[Country]["industries"][Industry]["companies"];

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
      return (
        data[selectedCountry]?.industries[selectedIndustry]?.companies[
          selectedCompany
        ] || []
      );
    }
    return [];
  }, [selectedCountry, selectedIndustry, selectedCompany, data]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-200">
        Market Salary Benchmarks
      </h1>
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

      <div className="my-4">
        <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
          Filter by Experience Range
        </h2>
        <SliderComponent
          value={experienceRange}
          onChange={(newValue: number | number[]) => {
            if (Array.isArray(newValue)) {
              setExperienceRange(newValue);
            }
          }}
          minValue={0}
          maxValue={30}
          step={1}
          label="Experience (Years)"
          trackColor="bg-gray-200 dark:bg-gray-800"
          thumbColor="bg-white dark:bg-gray-600"
        />
      </div>

      <div className="my-4">
        <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
          Filter by Salary Range
        </h2>
        <SliderComponent
          value={salaryRange}
          onChange={(newValue: number | number[]) => {
            if (Array.isArray(newValue)) {
              setSalaryRange(newValue);
            }
          }}
          minValue={30000}
          maxValue={300000}
          step={1000}
          label="Salary ($)"
          trackColor="bg-gray-200 dark:bg-gray-800"
          thumbColor="bg-white dark:bg-gray-600"
        />
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
            selectedValue={selectedCountry?.toString() || ""}
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
            selectedValue={selectedIndustry?.toString() || ""}
            onChange={(e) => {
              setSelectedIndustry(e.target.value as Industry);
              // Reset company filter
              setSelectedCompany(null);
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
              selectedIndustry
                ? Object.keys(
                    data[selectedCountry as Country]?.industries[
                      selectedIndustry
                    ]?.companies || {},
                  ).map((company) => ({ value: company, label: company }))
                : []
            }
            selectedValue={selectedCompany?.toString() || ""}
            onChange={(e) => {
              setSelectedCompany(e.target.value as Company);
            }}
            placeholder="Select Company"
          />
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900">
          <thead>
            <tr className="border-b bg-gray-100 dark:border-gray-600 dark:bg-gray-800">
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                Role
              </th>
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                Job Level
              </th>
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                Skills
              </th>
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                Responsibilities
              </th>
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                Current Salary
              </th>
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                Benchmark Salary
              </th>
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                Salary Range
              </th>
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                Career Path
              </th>
              <th className="px-4 py-2 text-left text-gray-800 dark:text-gray-200">
                Growth Opportunities
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRoles.length > 0 ? (
              filteredRoles.map((role, index) => (
                <tr key={index} className="border-b dark:border-gray-700">
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                    {role.role}
                  </td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                    {role.jobLevel}
                  </td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                    {role.skills.join(", ")}
                  </td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                    {role.responsibilities.join(", ")}
                  </td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                    {role.currentSalary}
                  </td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                    {role.benchmarkSalary}
                  </td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                    {role.salaryRange}
                  </td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                    {role.careerPath}
                  </td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-200">
                    {role.growthOpportunities}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className="px-4 py-2 text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
