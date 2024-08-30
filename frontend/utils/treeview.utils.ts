import { EmployeeData } from "@/types/payaid.data";

// Define a color palette
const colorPalette = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
  // Add more colors if needed
];

// Define the structure for each metric node
interface MetricNode {
  name: string;
  type: "progress" | "chart";
  value?: number; // For progress rings
  data?: number[]; // For charts
  color?: string; // Optional: Color for the progress ring or chart
}

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

export const generateTreeData = (employees: EmployeeData[]): TreeNode[] => {
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

  const treeData = Object.keys(departmentGroups).map((department) => {
    const departmentEmployees = departmentGroups[department];
    const totalEmployees = departmentEmployees.length;

    // Corrected Total Compensation and Bonus Calculations
    const totalCompensation = departmentEmployees.reduce(
      (sum, emp) => sum + Number(emp.baseSalary ?? 0),
      0,
    );
    const avgSalary =
      totalEmployees > 0 ? totalCompensation / totalEmployees : 0;

    const employeeBonus = departmentEmployees.reduce(
      (sum, emp) =>
        sum + Number(emp.bonus ?? 0) + Number(emp.stockOptions ?? 0),
      0,
    );
    const avgBonus = totalEmployees > 0 ? employeeBonus / totalEmployees : 0;

    // Generate chart colors and labels based on employee names
    const chartLabels = departmentEmployees.map((emp) => emp.name);
    const chartColors = chartLabels.map(
      (_, index) => colorPalette[index % colorPalette.length],
    );

    return {
      name: department,
      children: [
        {
          name: "Teams",
          children: departmentEmployees.map((employee) => ({
            name: employee.name,
          })),
        },
        {
          name: "Metrics",
          children: [
            {
              name: `Total Employees: ${totalEmployees}`,
              type: "progress",
              value: (totalEmployees / 1000) * 100, // Adjust scaling as needed
              color: "blue",
            },
            {
              name: `Average Salary: $${avgSalary.toFixed(2)}`,
              type: "chart",
              data: departmentEmployees.map((emp) => emp.baseSalary),
              labels: chartLabels, // Use actual employee names
              backgroundColor: chartColors, // Assign colors to each employee
            },
            {
              name: `Average Bonus: $${avgBonus.toFixed(2)}`,
              type: "chart",
              data: departmentEmployees.map(
                (emp) => emp.bonus + emp.stockOptions,
              ),
              labels: chartLabels, // Use actual employee names
              backgroundColor: chartColors, // Assign colors to each employee
            },
          ],
        },
      ],
    };
  });

  return [{ name: "Departments", children: treeData }];
};
