import { EmployeeData } from "@/types/payaid.data";

// Function to generate tree data
export const generateTreeData = (employees: EmployeeData[]) => {
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
      (sum, emp) => sum + Number(emp.baseSalary ?? 0),
      0,
    );
    const avgSalary =
      totalEmployees > 0 ? totalCompensation / totalEmployees : 0;
    const employeeBonus = departmentEmployees.reduce(
      (sum, emp) =>
        sum +
        Number(
          (emp.bonus?.toString() ?? 0) + (emp.stockOptions?.toString() ?? 0),
        ),
      0,
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
            { name: `Total Employees: ${totalEmployees}` },
            { name: `Average Salary: ${avgSalary.toFixed(2)}` },
            { name: `Average Bonus: ${employeeBonus.toFixed(2)}` },
          ],
        },
      ],
    };
  });

  return [{ name: "Departments", children: treeData }];
};
