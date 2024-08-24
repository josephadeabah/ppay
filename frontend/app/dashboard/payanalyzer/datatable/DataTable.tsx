"use client";

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
  educationLevelPoints: string;
  companySizePoints: string;
  seniorityLevels: string;
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
  educationLevelPoints: "Education Level Points",
  companySizePoints: "Company Size Points",
  seniorityLevels: "Seniority Levels",
};

const DataTable = ({ data }: { data: EmployeeData[] }) => {
  if (!data.length) return null;

  const headers = Object.keys(data[0]) as (keyof EmployeeData)[];

  return (
    <div className="overflow-x-auto [&::-moz-scrollbar-thumb]:rounded-full [&::-moz-scrollbar-thumb]:bg-gray-200 [&::-moz-scrollbar-track]:m-1 [&::-moz-scrollbar]:w-2 [&::-ms-scrollbar-thumb]:rounded-full [&::-ms-scrollbar-thumb]:bg-gray-200 [&::-ms-scrollbar-track]:m-1 [&::-ms-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:m-1 [&::-webkit-scrollbar]:w-2">
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
