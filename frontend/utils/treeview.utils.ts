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

    const totalCompensation = departmentEmployees.reduce(
      (sum, emp) => sum + Number(emp.totalCompensation ?? emp.baseSalary ?? 0),
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

    // Calculate additional metrics
    const avgExperience =
      departmentEmployees.reduce(
        (sum, emp) => sum + Number(emp.yearsOfExperience ?? 0),
        0,
      ) / totalEmployees;

    const avgPerformance =
      departmentEmployees.reduce(
        (sum, emp) => sum + Number(emp.performancePoints ?? 0),
        0,
      ) / totalEmployees;

    const avgManagerRating =
      departmentEmployees.reduce(
        (sum, emp) => sum + Number(emp.managerRating ?? 0),
        0,
      ) / totalEmployees;

    const avgEmployeeRating =
      departmentEmployees.reduce(
        (sum, emp) => sum + Number(emp.employeeRating ?? 0),
        0,
      ) / totalEmployees;

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
              value: (totalEmployees / 1000) * 100,
              color: "blue",
            },
            {
              name: `Average Salary: $${avgSalary.toFixed(2)}`,
              type: "chart",
              data: departmentEmployees.map((emp) => Number(emp.baseSalary)),
              labels: chartLabels,
              backgroundColor: chartColors,
            },
            {
              name: `Average Bonus: $${avgBonus.toFixed(2)}`,
              type: "chart",
              data: departmentEmployees.map(
                (emp) => Number(emp.bonus) + Number(emp.stockOptions),
              ),
              labels: chartLabels,
              backgroundColor: chartColors,
            },
            {
              name: `Average Experience: ${avgExperience.toFixed(2)} years`,
              type: "progress",
              value: (avgExperience / 20) * 100, // Assuming max experience of 20 years for scaling
              color: "green",
            },
            {
              name: `Average Performance Points: ${avgPerformance.toFixed(2)}`,
              type: "progress",
              value: (avgPerformance / 100) * 100, // Assuming max performance points of 100 for scaling
              color: "purple",
            },
            {
              name: `Average Manager Rating: ${avgManagerRating.toFixed(2)}`,
              type: "progress",
              value: (avgManagerRating / 5) * 100, // Assuming max rating of 5 for scaling
              color: "orange",
            },
            {
              name: `Average Employee Rating: ${avgEmployeeRating.toFixed(2)}`,
              type: "progress",
              value: (avgEmployeeRating / 5) * 100, // Assuming max rating of 5 for scaling
              color: "red",
            },
          ],
        },
      ],
    };
  });

  return [{ name: "Departments", children: treeData }];
};
