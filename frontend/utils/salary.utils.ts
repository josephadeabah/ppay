import { benchmarkData } from "@/app/dashboard/benchmark/data";
import { EmployeeData } from "@/types/payaid.data";

export const calculateLastSalaryIncreasePercentage = (
  currentSalary: number,
  lastSalary: number,
): number => {
  if (lastSalary === 0) return 0; // Prevent division by zero
  return ((currentSalary - lastSalary) / lastSalary) * 100;
};

export const calculateEquitablePayRange = (
  marketRate: number,
  adjustment: number = 5000,
): [number, number] => {
  const lowerBound = marketRate - adjustment;
  const upperBound = marketRate + adjustment;
  return [lowerBound, upperBound];
};

export const calculateInternalPayRange = (
  baseSalary: number,
  jobLevel: string,
  yearsOfExperience: number,
): [number, number] => {
  const adjustment = jobLevel === "Senior-Level" ? 10000 : 5000;
  const lowerBound = baseSalary - adjustment + yearsOfExperience * 500;
  const upperBound = baseSalary + adjustment + yearsOfExperience * 500;
  return [lowerBound, upperBound];
};

export const calculateTotalCompensation = (
  baseSalary: number,
  bonus: number,
  stockOptions: number,
): number => {
  return baseSalary + bonus + stockOptions;
};

export const getEquityStatus = (employee: EmployeeData) => {
  const { baseSalary, performancePoints, jobTitle, jobLevel, seniorityPoints } =
    employee;

  // Find the benchmark salary for the employee's job title and level
  const benchmarkEntry = benchmarkData.find(
    (benchmark) =>
      benchmark.role === jobTitle && benchmark.jobLevel === jobLevel,
  );

  // Use the benchmark salary if found, otherwise fallback to 0
  const benchmarkSalary = benchmarkEntry ? benchmarkEntry.benchmarkSalary : 0;

  // Convert values to numbers
  const performance = Number(performancePoints);
  const benchmark = Number(benchmarkSalary);
  const base = Number(baseSalary);
  const seniority = Number(seniorityPoints);

  // Determine status based on various criteria
  switch (true) {
    case base < benchmark && performance < 50 && seniority < 5:
      return "Risk";
    case base < benchmark && performance < 70 && seniority >= 5:
      return "Improvement";
    case base < benchmark && performance >= 70 && seniority >= 5:
      return "On Track";
    case base < benchmark && performance >= 70 && seniority < 5:
      return "Exceeds";
    case base === benchmark && performance < 50 && seniority < 5:
      return "Risk";
    case base === benchmark && performance < 70 && seniority >= 5:
      return "On Track";
    case base === benchmark && performance >= 70 && seniority < 5:
      return "Improvement";
    case base === benchmark && performance >= 70 && seniority >= 5:
      return "Exceeds";
    case base > benchmark && performance < 50 && seniority < 5:
      return "Risk";
    case base > benchmark && performance < 70 && seniority >= 5:
      return "On Track";
    case base > benchmark && performance >= 70 && seniority < 5:
      return "Improvement";
    case base > benchmark && performance >= 70 && seniority >= 5:
      return "Exceeds";
    default:
      return "N/A";
  }
};

// Logic to determine the percentage for each section
export const getSectionPercentages = (employee: EmployeeData) => {
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
