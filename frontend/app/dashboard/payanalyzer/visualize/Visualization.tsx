import { EmployeeData } from "@/app/dashboard/payanalyzer/datatable/DataTable";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { calculateMetrics } from "../metricsanalysis/MetricsAnalysis";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Visualization = ({ data }: { data: EmployeeData[] }) => {
  const metrics = calculateMetrics(data);

  // Data preparation for charts
  const experienceDistributionData = {
    labels: Object.keys(metrics.experienceDistribution),
    datasets: [
      {
        label: "Number of Employees",
        data: Object.values(metrics.experienceDistribution),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const performanceByDepartmentData = {
    labels: Object.keys(metrics.performanceByDepartment),
    datasets: [
      {
        label: "Average Performance",
        data: Object.values(metrics.performanceByDepartment),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const salaryByLocationData = {
    labels: Object.keys(metrics.salaryByLocation),
    datasets: [
      {
        label: "Average Salary",
        data: Object.values(metrics.salaryByLocation),
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const ethnicityPayGapData = {
    labels: Object.keys(metrics.ethnicityPayGap),
    datasets: [
      {
        label: "Average Salary",
        data: Object.values(metrics.ethnicityPayGap),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 gap-3 bg-gray-50 sm:grid-cols-2 md:grid-cols-2">
      <div className=" bg-white dark:bg-gray-900">
        <h3 className="mb-2 text-lg font-medium text-gray-800 dark:text-gray-200">
          Experience Distribution
        </h3>
        <div className="chart-container">
          <Bar
            data={experienceDistributionData}
            options={{
              responsive: true,
              plugins: { legend: { position: "top" } },
            }}
          />
        </div>
      </div>

      <div className=" bg-white p-4 dark:bg-gray-900">
        <h3 className="mb-2 text-lg font-medium text-gray-800 dark:text-gray-200">
          Performance by Department
        </h3>
        <div className="chart-container">
          <Bar
            data={performanceByDepartmentData}
            options={{
              responsive: true,
              plugins: { legend: { position: "top" } },
            }}
          />
        </div>
      </div>

      <div className=" bg-white p-4 dark:bg-gray-900">
        <h3 className="mb-2 text-lg font-medium text-gray-800 dark:text-gray-200">
          Salary by Location
        </h3>
        <div className="chart-container">
          <Bar
            data={salaryByLocationData}
            options={{
              responsive: true,
              plugins: { legend: { position: "top" } },
            }}
          />
        </div>
      </div>

      <div className=" bg-white p-4 dark:bg-gray-900">
        <h3 className="mb-2 text-lg font-medium text-gray-800 dark:text-gray-200">
          Ethnicity Pay Gap
        </h3>
        <div className="chart-container">
          <Pie
            data={ethnicityPayGapData}
            options={{
              responsive: true,
              plugins: { legend: { position: "top" } },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Visualization;
