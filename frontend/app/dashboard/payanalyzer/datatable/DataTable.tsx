"use client";
import { AiOutlineScan, AiOutlineSearch } from "react-icons/ai";
import { BiFilterAlt } from "react-icons/bi";
import { FiGitMerge } from "react-icons/fi";
import { HiOutlineAnnotation, HiOutlineChartPie } from "react-icons/hi";
import { MdOutlineCompareArrows, MdSort } from "react-icons/md";

// Define the type for the CSV data
export interface EmployeeData {
  [key: string]: string;
  employeeId: string;
  name: string;
  gender: string;
  ethnicity: string;
  jobTitle: string;
  department: string;
  location: string;
  baseSalary: string;
  bonus: string;
  stockOptions: string;
  yearsOfExperience: string;
  performancePoints: string;
  marketRate: string;
  industryPoints: string;
  departmentPoints: string;
  seniorityPoints: string;
  educationLevelPoints: string;
  companySizePoints: string;
  seniorityLevel: string;
}

// Map to hold human-readable table headers
const headerNames: Record<keyof EmployeeData, string> = {
  employeeId: "ID",
  name: "Name",
  gender: "Gender",
  ethnicity: "Ethnicity",
  jobTitle: "Job Title",
  department: "Department",
  location: "Location",
  baseSalary: "Base Salary",
  bonus: "Bonus",
  stockOptions: "Stock Options",
  yearsOfExperience: "Years of Experience",
  performancePoints: "Performance Points",
  marketRate: "Market Rate",
  industryPoints: "Industry Points",
  departmentPoints: "Department Points",
  seniorityPoints: "Seniority Points",
  educationLevelPoints: "Education Level Points",
  companySizePoints: "Company Size Points",
  seniorityLevel: "Seniority Level",
};

const DataTable = ({ data }: { data: EmployeeData[] }) => {
  if (!data.length) return null;

  const headers = Object.keys(data[0]) as (keyof EmployeeData)[];

  return (
    <div className="overflow-x-auto [&::-moz-scrollbar-thumb]:rounded-full [&::-moz-scrollbar-thumb]:bg-gray-200 [&::-moz-scrollbar-track]:m-1 [&::-moz-scrollbar]:w-2 [&::-ms-scrollbar-thumb]:rounded-full [&::-ms-scrollbar-thumb]:bg-gray-200 [&::-ms-scrollbar-track]:m-1 [&::-ms-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:m-1 [&::-webkit-scrollbar]:w-2">
      <h2 className="mb-4 text-xl font-bold">Table Visualization</h2>
      <div className="flex w-full items-center justify-between rounded border border-dashed border-gray-300 p-2 dark:border-gray-600">
        <div className="flex flex-wrap justify-center gap-2 text-xs sm:justify-start">
          {/* Scan Button */}
          <button
            data-tip="Scan the data for potential issues or trends. Visually mark or color-code rows where discrepancies or significant differences are detected."
            className="flex w-full items-center gap-1 rounded-sm bg-slate-100 p-2 shadow-sm sm:w-auto"
          >
            <AiOutlineScan className="h-4 w-4 text-blue-500" />
            <span className="hidden sm:inline">Scan</span>
          </button>

          {/* Search Button */}
          <button
            data-tip="Search the data for specific terms or criteria."
            className="flex w-full items-center gap-1 rounded-sm bg-slate-100 p-2 shadow-sm sm:w-auto"
          >
            <AiOutlineSearch className="h-4 w-4 text-teal-500" />
            <span className="hidden sm:inline">Search</span>
          </button>

          {/* Filter Button */}
          <button
            data-tip="Narrow down the data by specific criteria (e.g., gender, ethnicity, department, or salary range)."
            className="flex w-full items-center gap-1 rounded-sm bg-slate-100 p-2 shadow-sm sm:w-auto"
          >
            <BiFilterAlt className="h-4 w-4 text-orange-500" />
            <span className="hidden sm:inline">Filter</span>
          </button>

          {/* Sort Button */}
          <button
            data-tip="Organize the data in ascending or descending order by specific columns (e.g., base salary, years of experience)."
            className="flex w-full items-center gap-1 rounded-sm bg-slate-100 p-2 shadow-sm sm:w-auto"
          >
            <MdSort className="h-4 w-4 text-green-500" />
            <span className="hidden sm:inline">Sort</span>
          </button>

          {/* Aggregate Button */}
          <button
            data-tip="Perform aggregate calculations like average, median, or sum for columns such as salaries or bonuses."
            className="flex w-full items-center gap-1 rounded-sm bg-slate-100 p-2 shadow-sm sm:w-auto"
          >
            <HiOutlineChartPie className="h-4 w-4 text-yellow-500" />
            <span className="hidden sm:inline">Aggregate</span>
          </button>

          {/* Compare Button */}
          <button
            data-tip="Compare multiple rows of data to analyze differences in salary, bonus, or other compensation components."
            className="flex w-full items-center gap-1 rounded-sm bg-slate-100 p-2 shadow-sm sm:w-auto"
          >
            <MdOutlineCompareArrows className="h-4 w-4 text-red-500" />
            <span className="hidden sm:inline">Compare</span>
          </button>

          {/* Annotate Button */}
          <button
            data-tip="Add notes or comments to specific rows or cells for context or additional information."
            className="flex w-full items-center gap-1 rounded-sm bg-slate-100 p-2 shadow-sm sm:w-auto"
          >
            <HiOutlineAnnotation className="h-4 w-4 text-violet-500" />
            <span className="hidden sm:inline">Annotate</span>
          </button>
          {/* Merge Button */}
          <button
            data-tip="Combine data from multiple sources or datasets, such as merging salary data with performance metrics."
            className="flex w-full items-center gap-1 rounded-sm bg-slate-100 p-2 shadow-sm sm:w-auto"
          >
            <FiGitMerge className="h-4 w-4 text-indigo-500" />
            <span className="hidden sm:inline">Merge</span>
          </button>
        </div>
      </div>
      {/* Data table */}
      <table className="min-w-full table-auto border-collapse bg-white dark:bg-gray-900">
        <thead className="bg-gray-100 text-sm dark:bg-gray-700">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="border px-4 py-2 text-left font-medium text-gray-700 dark:text-gray-300"
              >
                {headerNames[header]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={
                idx % 2 === 0
                  ? "bg-gray-50 dark:bg-gray-800"
                  : "bg-gray-50 dark:bg-gray-900"
              }
            >
              {headers.map((header) => (
                <td
                  key={header}
                  className="border px-4 py-2 text-gray-900 dark:text-gray-100"
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
