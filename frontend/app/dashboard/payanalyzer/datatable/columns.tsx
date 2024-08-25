"use client";
import { EmployeeData } from "@/types/payaid.data";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

// Create a column helper for EmployeeData
const columnHelper = createColumnHelper<EmployeeData>();

// Define and export columns with an "id" property
export const dataColumns: ColumnDef<EmployeeData, string>[] = [
  columnHelper.accessor("employeeId", {
    id: "employeeId", // Unique ID for the column
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    id: "name", // Unique ID for the column
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("gender", {
    id: "gender", // Unique ID for the column
    header: "Gender",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("ethnicity", {
    id: "ethnicity", // Unique ID for the column
    header: "Ethnicity",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("jobTitle", {
    id: "jobTitle", // Unique ID for the column
    header: "Job Title",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("department", {
    id: "department", // Unique ID for the column
    header: "Department",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("location", {
    id: "location", // Unique ID for the column
    header: "Location",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("baseSalary", {
    id: "baseSalary", // Unique ID for the column
    header: "Base Salary",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("bonus", {
    id: "bonus", // Unique ID for the column
    header: "Bonus",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("stockOptions", {
    id: "stockOptions", // Unique ID for the column
    header: "Stock Options",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("yearsOfExperience", {
    id: "yearsOfExperience", // Unique ID for the column
    header: "Years of Experience",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("performancePoints", {
    id: "performancePoints", // Unique ID for the column
    header: "Performance Points",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("marketRate", {
    id: "marketRate", // Unique ID for the column
    header: "Market Rate",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("industryPoints", {
    id: "industryPoints", // Unique ID for the column
    header: "Industry Points",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("departmentPoints", {
    id: "departmentPoints", // Unique ID for the column
    header: "Department Points",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("seniorityPoints", {
    id: "seniorityPoints", // Unique ID for the column
    header: "Seniority Points",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("educationLevelPoints", {
    id: "educationLevelPoints", // Unique ID for the column
    header: "Education Level Points",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("companySizePoints", {
    id: "companySizePoints", // Unique ID for the column
    header: "Company Size Points",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("seniorityLevel", {
    id: "seniorityLevel", // Unique ID for the column
    header: "Seniority Level",
    cell: (info) => info.getValue(),
  }),
];
