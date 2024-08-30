import { BlurPopover } from "@/components/popover/Popover";
import ProgressBar from "@/components/progress/ProgressBar";
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

// Define and export columns with sorting enabled
export const dataColumns: ColumnDef<EmployeeData, string>[] = [
  columnHelper.display({
    id: "actions",
    header: "Actions",
    enableSorting: false,
    cell: (info) => (
      <BlurPopover
        triggerLabel={
          <HiOutlineDotsHorizontal className="h-7 w-7 rounded-full bg-gray-200 p-2" />
        }
        triggerVariant="flat"
        triggerColor="default"
        content={
          <span className="flex cursor-pointer items-center p-2 hover:bg-gray-50">
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
    enableSorting: true,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    id: "name",
    header: () => <span data-tip="Full name of the employee">Name</span>,
    enableSorting: false,
    cell: (info) => (
      <div className="flex w-[7.5rem] items-center">
        <span>{info.getValue()}</span>
      </div>
    ),
  }),
  columnHelper.accessor("gender", {
    id: "gender",
    header: "Gender",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("ethnicity", {
    id: "ethnicity",
    header: "Ethnicity",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("jobTitle", {
    id: "jobTitle",
    header: "Job Title",
    enableSorting: false,
    cell: (info) => (
      <div className="flex w-[10rem] items-center">
        <span>{info.getValue()}</span>
      </div>
    ),
  }),
  columnHelper.accessor("department", {
    id: "department",
    header: "Department",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("location", {
    id: "location",
    header: "Location",
    enableSorting: true,
    cell: (info) => (
      <div className="flex w-[4rem] items-center justify-between">
        <span>{info.getValue()}</span>
        <div />
      </div>
    ),
  }),
  columnHelper.accessor("baseSalary", {
    id: "baseSalary",
    header: "Base Salary",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("bonus", {
    id: "bonus",
    header: "Bonus",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("stockOptions", {
    id: "stockOptions",
    header: "Stock Options",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("yearsOfExperience", {
    id: "yearsOfExperience",
    header: "Experience",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("performancePoints", {
    id: "performancePoints",
    header: "Performance Points",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("managerRating", {
    id: "managerRating",
    header: "Manager Rating",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("employeeRating", {
    id: "employeeRating",
    header: "Employee Rating",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("marketRate", {
    id: "marketRate",
    header: "Market Rate",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("industryPoints", {
    id: "industryPoints",
    header: "Industry Points",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("departmentPoints", {
    id: "departmentPoints",
    header: "Department Points",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("seniorityPoints", {
    id: "seniorityPoints",
    header: "Seniority Points",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("educationLevelPoints", {
    id: "educationLevelPoints",
    header: "Education Level Points",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("companySizePoints", {
    id: "companySizePoints",
    header: "Company Size Points",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("jobLevel", {
    id: "jobLevel",
    header: "Job Level",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("dateOfHire", {
    id: "dateOfHire",
    header: "Date of Hire",
    enableSorting: false,
    cell: (info) => (
      <div className="flex w-[8rem] items-center">
        <span>{info.getValue()}</span>
      </div>
    ),
  }),
  columnHelper.accessor("lastSalaryIncreaseDate", {
    id: "lastSalaryIncreaseDate",
    header: "Last Salary Increase",
    enableSorting: false,
    cell: (info) => (
      <div className="flex w-[8rem] items-center">
        <span>{info.getValue()}</span>
      </div>
    ),
  }),
  columnHelper.accessor("lastSalaryIncreasePercentage", {
    id: "lastSalaryIncreasePercentage",
    header: "Last Raise %",
    enableSorting: false,
    cell: (info) => `${info.getValue()}`,
  }),
  columnHelper.accessor("equitablePayRange", {
    id: "equitablePayRange",
    header: "Equitable Pay Range",
    enableSorting: false,
    cell: (info) => (
      <div className="flex w-[10rem] items-center">
        <span>{info.getValue()}</span>
      </div>
    ),
  }),
  columnHelper.accessor("internalPayRange", {
    id: "internalPayRange",
    header: "Internal Pay Range",
    enableSorting: false,
    cell: (info) => (
      <div className="flex w-[8rem] items-center">
        <span>{info.getValue()}</span>
      </div>
    ),
  }),
  columnHelper.accessor("benefits", {
    id: "benefits",
    header: "Benefits",
    enableSorting: false,
    cell: (info) => (
      <div className="flex w-[10rem] items-center">
        <span>{info.getValue()}</span>
      </div>
    ),
  }),
  columnHelper.accessor("totalCompensation", {
    id: "totalCompensation",
    header: "Total Compensation",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("costOfLivingAdjustment", {
    id: "costOfLivingAdjustment",
    header: "Cost of Living Adjustment",
    enableSorting: false,
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: "status",
    header: "Status",
    enableSorting: true,
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
          className={`${bgColor} rounded-full px-2 py-1 text-xs font-medium`}
        >
          {status}
        </span>
      );
    },
  }),
  columnHelper.display({
    id: "metrics",
    header: "Metrics",
    enableSorting: false,
    cell: (info) => {
      const { performancePercent, managerPercent, employeePercent } =
        getSectionPercentages(info.row.original);
      return (
        <div className="w-[300px] text-[11px]">
          <ProgressBar
            firstProgress={performancePercent}
            secondProgress={managerPercent}
            thirdProgress={employeePercent}
            firstTooltipContent={`Performance: ${Math.round(performancePercent)}%`}
            secondTooltipContent={`Manager Rating: ${Math.round(managerPercent)}%`}
            thirdTooltipContent={`Employee Rating: ${Math.round(employeePercent)}%`}
          />
        </div>
      );
    },
  }),
];
