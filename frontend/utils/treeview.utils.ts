import { EmployeeData } from "@/types/payaid.data";

// Function to generate tree data
export const generateTreeData = (employees: EmployeeData[]) => {
  // Group employees by department
  const departmentGroups = employees.reduce(
    (acc, employee) => {
      if (!acc[employee.department]) {
        acc[employee.department] = [];
      }
      acc[employee.department].push(employee);
      return acc;
    },
    {} as Record<string, EmployeeData[]>,
  );

  // Create tree structure
  const treeData = Object.keys(departmentGroups).map((department) => ({
    name: department,
    children: [
      {
        name: "Teams", // Placeholder for teams, modify as needed
        children: departmentGroups[department].map((employee) => ({
          name: employee.name,
        })),
      },
    ],
  }));

  return [{ name: "Departments", children: treeData }];
};
