import { EmployeeData } from "@/app/dashboard/payanalyzer/datatable/DataTable";

// Function to convert value to number safely
const safeParseFloat = (value: string): number => {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parsed;
};

// Function to calculate average base salary
export const calculateAverageBaseSalary = (data: EmployeeData[]): number => {
  const totalSalary = data.reduce(
    (acc, employee) => acc + safeParseFloat(employee.baseSalary),
    0,
  );
  return data.length ? totalSalary / data.length : 0;
};

// Function to calculate total compensation
export const calculateTotalCompensation = (data: EmployeeData[]): number => {
  const totalCompensation = data.reduce(
    (acc, employee) =>
      acc +
      safeParseFloat(employee.baseSalary) +
      safeParseFloat(employee.bonus) +
      safeParseFloat(employee.stockOptions),
    0,
  );
  return data.length ? totalCompensation / data.length : 0;
};

// Function to calculate experience distribution
export const calculateExperienceDistribution = (
  data: EmployeeData[],
): { [key: string]: number } => {
  const experienceDistribution: { [key: string]: number } = {};

  data.forEach((employee) => {
    const yearsOfExperience = employee.yearsOfExperience;
    if (!experienceDistribution[yearsOfExperience]) {
      experienceDistribution[yearsOfExperience] = 0;
    }
    experienceDistribution[yearsOfExperience]++;
  });

  return experienceDistribution;
};

// Function to compare performance by department
export const comparePerformanceByDepartment = (
  data: EmployeeData[],
): { [key: string]: number } => {
  const departmentPerformance: { [key: string]: number[] } = {};

  data.forEach((employee) => {
    if (!departmentPerformance[employee.department]) {
      departmentPerformance[employee.department] = [];
    }
    departmentPerformance[employee.department].push(
      safeParseFloat(employee.performancePoints),
    );
  });

  return Object.keys(departmentPerformance).reduce(
    (acc, department) => {
      const performancePoints = departmentPerformance[department];
      const averagePerformance =
        performancePoints.reduce((sum, points) => sum + points, 0) /
        performancePoints.length;
      acc[department] = averagePerformance;
      return acc;
    },
    {} as { [key: string]: number },
  );
};

// Function to compare average salary by location
export const compareSalariesByLocation = (
  data: EmployeeData[],
): { [key: string]: number } => {
  const locationSalaries: { [key: string]: number[] } = {};

  data.forEach((employee) => {
    if (!locationSalaries[employee.location]) {
      locationSalaries[employee.location] = [];
    }
    locationSalaries[employee.location].push(
      safeParseFloat(employee.baseSalary),
    );
  });

  return Object.keys(locationSalaries).reduce(
    (acc, location) => {
      const salaries = locationSalaries[location];
      const averageSalary =
        salaries.reduce((sum, salary) => sum + salary, 0) / salaries.length;
      acc[location] = averageSalary;
      return acc;
    },
    {} as { [key: string]: number },
  );
};

// Function to calculate pay gap by ethnicity
export const calculateEthnicityPayGap = (
  data: EmployeeData[],
): { [key: string]: number } => {
  const ethnicitySalaries: { [key: string]: number[] } = {};

  data.forEach((employee) => {
    if (!ethnicitySalaries[employee.ethnicity]) {
      ethnicitySalaries[employee.ethnicity] = [];
    }
    ethnicitySalaries[employee.ethnicity].push(
      safeParseFloat(employee.baseSalary),
    );
  });

  return Object.keys(ethnicitySalaries).reduce(
    (acc, ethnicity) => {
      const salaries = ethnicitySalaries[ethnicity];
      const averageSalary =
        salaries.reduce((sum, salary) => sum + salary, 0) / salaries.length;
      acc[ethnicity] = averageSalary;
      return acc;
    },
    {} as { [key: string]: number },
  );
};

export const calculateMetrics = (data: EmployeeData[]) => {
  const averageSalary = calculateAverageBaseSalary(data);
  const totalCompensation = calculateTotalCompensation(data);
  const experienceDistribution = calculateExperienceDistribution(data);
  const performanceByDepartment = comparePerformanceByDepartment(data);
  const salaryByLocation = compareSalariesByLocation(data);
  const ethnicityPayGap = calculateEthnicityPayGap(data);

  return {
    averageSalary,
    totalCompensation,
    experienceDistribution,
    performanceByDepartment,
    salaryByLocation,
    ethnicityPayGap,
  };
};

const formatExperienceDistribution = (data: { [key: string]: number }) => {
  return Object.entries(data).map(([years, count]) => (
    <tr key={years}>
      <td className="border px-4 py-2">{years} Years</td>
      <td className="border px-4 py-2">{count}</td>
    </tr>
  ));
};

const formatPerformanceByDepartment = (data: { [key: string]: number }) => {
  return Object.entries(data).map(([department, average]) => (
    <tr key={department}>
      <td className="border px-4 py-2">{department}</td>
      <td className="border px-4 py-2">{average.toFixed(2)}</td>
    </tr>
  ));
};

const formatSalariesByLocation = (data: { [key: string]: number }) => {
  return Object.entries(data).map(([location, average]) => (
    <tr key={location}>
      <td className="border px-4 py-2">{location}</td>
      <td className="border px-4 py-2">${average.toFixed(2)}</td>
    </tr>
  ));
};

const formatEthnicityPayGap = (data: { [key: string]: number }) => {
  return Object.entries(data).map(([ethnicity, average]) => (
    <tr key={ethnicity}>
      <td className="border px-4 py-2">{ethnicity}</td>
      <td className="border px-4 py-2">${average.toFixed(2)}</td>
    </tr>
  ));
};

const MetricsAnalysis = ({ data }: { data: EmployeeData[] }) => {
  const metrics = calculateMetrics(data);

  return (
    <div className="metrics-container w-full overflow-x-auto">
      <h2 className="mb-4 text-lg">Analysis Metrics</h2>
      <table className="mb-4 min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">
              Metric
            </th>
            <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Average Salary</td>
            <td className="border px-4 py-2">
              ${metrics.averageSalary.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Total Compensation</td>
            <td className="border px-4 py-2">
              ${metrics.totalCompensation.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="mb-2 text-lg">Experience Distribution</h3>
      <table className="mb-4 min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">
              Experience
            </th>
            <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">
              Count
            </th>
          </tr>
        </thead>
        <tbody>
          {formatExperienceDistribution(metrics.experienceDistribution)}
        </tbody>
      </table>

      <h3 className="mb-2 text-lg">Performance by Department</h3>
      <table className="mb-4 min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">
              Department
            </th>
            <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">
              Average Performance
            </th>
          </tr>
        </thead>
        <tbody>
          {formatPerformanceByDepartment(metrics.performanceByDepartment)}
        </tbody>
      </table>

      <h3 className="mb-2 text-lg">Salary by Location</h3>
      <table className="mb-4 min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">
              Location
            </th>
            <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">
              Average Salary
            </th>
          </tr>
        </thead>
        <tbody>{formatSalariesByLocation(metrics.salaryByLocation)}</tbody>
      </table>

      <h3 className="mb-2 text-lg">Ethnicity Pay Gap</h3>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">
              Ethnicity
            </th>
            <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-200">
              Average Salary
            </th>
          </tr>
        </thead>
        <tbody>{formatEthnicityPayGap(metrics.ethnicityPayGap)}</tbody>
      </table>
    </div>
  );
};

export default MetricsAnalysis;
