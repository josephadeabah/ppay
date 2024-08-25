"use client";
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import TableOperators from "../tableoperators/TableOperators";

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

// Create a column helper
const columnHelper = createColumnHelper<EmployeeData>();

// Define columns
const columns: ColumnDef<EmployeeData, string>[] = [
  columnHelper.accessor("employeeId", { header: "ID" }),
  columnHelper.accessor("name", { header: "Name" }),
  columnHelper.accessor("gender", { header: "Gender" }),
  columnHelper.accessor("ethnicity", { header: "Ethnicity" }),
  columnHelper.accessor("jobTitle", { header: "Job Title" }),
  columnHelper.accessor("department", { header: "Department" }),
  columnHelper.accessor("location", { header: "Location" }),
  columnHelper.accessor("baseSalary", { header: "Base Salary" }),
  columnHelper.accessor("bonus", { header: "Bonus" }),
  columnHelper.accessor("stockOptions", { header: "Stock Options" }),
  columnHelper.accessor("yearsOfExperience", { header: "Years of Experience" }),
  columnHelper.accessor("performancePoints", { header: "Performance Points" }),
  columnHelper.accessor("marketRate", { header: "Market Rate" }),
  columnHelper.accessor("industryPoints", { header: "Industry Points" }),
  columnHelper.accessor("departmentPoints", { header: "Department Points" }),
  columnHelper.accessor("seniorityPoints", { header: "Seniority Points" }),
  columnHelper.accessor("educationLevelPoints", {
    header: "Education Level Points",
  }),
  columnHelper.accessor("companySizePoints", {
    header: "Company Size Points",
  }),
  columnHelper.accessor("seniorityLevel", { header: "Seniority Level" }),
];

const DataTable = ({ data }: { data: EmployeeData[] }) => {
  if (!data.length) return null;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto [&::-moz-scrollbar-thumb]:rounded-full [&::-moz-scrollbar-thumb]:bg-gray-200 [&::-moz-scrollbar-track]:m-1 [&::-moz-scrollbar]:w-2 [&::-ms-scrollbar-thumb]:rounded-full [&::-ms-scrollbar-thumb]:bg-gray-200 [&::-ms-scrollbar-track]:m-1 [&::-ms-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:m-1 [&::-webkit-scrollbar]:w-2">
      <h2 className="mb-4 text-xl font-bold">Table Visualization</h2>
      <TableOperators />
      {/* Data table */}
      <table className="min-w-full table-auto border-collapse bg-white dark:bg-gray-900">
        <thead className="bg-gray-100 text-sm dark:bg-gray-700">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border px-4 py-2 text-left font-medium text-gray-700 dark:text-gray-300"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={
                row.index % 2 === 0
                  ? "bg-gray-50 dark:bg-gray-800"
                  : "bg-gray-50 dark:bg-gray-900"
              }
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border px-4 py-2 text-gray-900 dark:text-gray-100"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
