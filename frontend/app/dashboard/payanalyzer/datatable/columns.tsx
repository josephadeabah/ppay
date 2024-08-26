"use client";
import { BlurPopover } from "@/components/popover/Popover";
import { EmployeeData } from "@/types/payaid.data";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { HiOutlineAnnotation, HiOutlineDotsHorizontal } from "react-icons/hi";

// Create a column helper for EmployeeData
const columnHelper = createColumnHelper<EmployeeData>();

const getStatus = (employee: EmployeeData) => {
  const { performancePoints, marketRate, seniorityPoints } = employee;
  if (Number(performancePoints) < 50 || Number(marketRate) < 80) return "Risk";
  if (Number(performancePoints) < 70) return "Improvement";
  if (Number(performancePoints) >= 70 && Number(seniorityPoints) >= 50)
    return "On Track";
  return "Exceeds";
};

// Logic to determine the percentage for each section
const getSectionPercentages = (employee: EmployeeData) => {
  const { performancePoints, managerRating, employeeRating } = employee;
  const maxPoints = 100; // Assume max points for each metric

  const totalPoints =
    Number(performancePoints) + Number(managerRating) + Number(employeeRating);
  const totalMaxPoints = 3 * maxPoints; // Three metrics

  const performancePercent = (Number(performancePoints) / totalMaxPoints) * 100;
  const managerPercent = (Number(managerRating) / totalMaxPoints) * 100;
  const employeePercent = (Number(employeeRating) / totalMaxPoints) * 100;

  return {
    performancePercent,
    managerPercent,
    employeePercent,
  };
};

// Define and export columns with an "id" property
export const dataColumns: ColumnDef<EmployeeData, string>[] = [
  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: (info) => (
      <BlurPopover
        triggerLabel={<HiOutlineDotsHorizontal size={16} />}
        triggerVariant="default"
        triggerColor="default"
        content={
          <span className="flex cursor-pointer items-center p-1 hover:bg-gray-50">
            <HiOutlineAnnotation className="h-4 w-4 text-violet-500" />
            <span>Add Notes</span>
          </span>
        }
        contentClassName="dark:bg-blue-900 text-gray-500 text-xs"
      />
    ),
  }),
  columnHelper.accessor("employeeId", {
    id: "employeeId",
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    id: "name",
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("gender", {
    id: "gender",
    header: "Gender",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("ethnicity", {
    id: "ethnicity",
    header: "Ethnicity",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("jobTitle", {
    id: "jobTitle",
    header: "Job Title",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("department", {
    id: "department",
    header: "Department",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("location", {
    id: "location",
    header: "Location",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("baseSalary", {
    id: "baseSalary",
    header: "Base Salary",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("bonus", {
    id: "bonus",
    header: "Bonus",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("stockOptions", {
    id: "stockOptions",
    header: "Stock Options",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("yearsOfExperience", {
    id: "yearsOfExperience",
    header: "Experience",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("performancePoints", {
    id: "performancePoints",
    header: "Performance Points",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("managerRating", {
    id: "managerRating",
    header: "Manager Rating",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("employeeRating", {
    id: "employeeRating",
    header: "Employee Rating",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("marketRate", {
    id: "marketRate",
    header: "Market Rate",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("industryPoints", {
    id: "industryPoints",
    header: "Industry Points",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("departmentPoints", {
    id: "departmentPoints",
    header: "Department Points",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("seniorityPoints", {
    id: "seniorityPoints",
    header: "Seniority Points",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("educationLevelPoints", {
    id: "educationLevelPoints",
    header: "Education Level Points",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("companySizePoints", {
    id: "companySizePoints",
    header: "Company Size Points",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("seniorityLevel", {
    id: "seniorityLevel",
    header: "Seniority Level",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: "status",
    header: "Status",
    cell: (info) => {
      const status = getStatus(info.row.original);
      let bgColor = "bg-gray-200"; // Default
      if (status === "Risk")
        bgColor =
          "inline-flex items-center rounded bg-red-100 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300";
      if (status === "Improvement")
        bgColor =
          "inline-flex items-center rounded bg-yellow-100 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      if (status === "On Track")
        bgColor =
          "inline-flex items-center rounded bg-blue-100 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      if (status === "Exceeds")
        bgColor =
          "inline-flex items-center rounded bg-green-100 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300";
      return (
        <span
          className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-800 ${bgColor}`}
        >
          {status}
        </span>
      );
    },
  }),
  // Progress Bar Column
  columnHelper.display({
    id: "progress",
    header: "Progress",
    cell: (info) => {
      const { performancePercent, managerPercent, employeePercent } =
        getSectionPercentages(info.row.original);

      return (
        <div className="relative flex h-4 w-full max-w-full bg-gray-200">
          <div
            className="inline-flex h-full w-full items-center justify-center bg-green-500 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
            style={{ width: `${performancePercent}%` }}
            title={`Performance: ${Math.round(performancePercent)}%`}
          >
            <span className="sr-only">Performance</span>
          </div>
          <div
            className="inline-flex h-full w-full items-center justify-center bg-yellow-500 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
            style={{ width: `${managerPercent}%` }}
            title={`Manager Rating: ${Math.round(managerPercent)}%`}
          >
            <span className="sr-only">Manager Rating</span>
          </div>
          <div
            className="inline-flex h-full w-full items-center justify-center bg-red-500 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300"
            style={{ width: `${employeePercent}%` }}
            title={`Employee Rating: ${Math.round(employeePercent)}%`}
          >
            <span className="sr-only">Employee Rating</span>
          </div>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
            {Math.round(performancePercent + managerPercent + employeePercent)}%
          </span>
        </div>
      );
    },
  }),
];
