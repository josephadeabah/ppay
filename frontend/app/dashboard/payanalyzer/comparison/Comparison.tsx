import { Card, CardContent, CardHeader } from "@/components/card/Card";
import DropdownSelect from "@/components/dropdown/DropdownSelect";
import ProgressRing from "@/components/progress/ProgressRing";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table/Table"; // Import your table components
import { EmployeeData } from "@/types/payaid.data";
import { Chart, registerables } from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";

Chart.register(...registerables);

const ComparisonPage = ({ data }: { data: EmployeeData[] }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("yearly");
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeData | null>(
    null,
  );
  const [userPercentage, setUserPercentage] = useState<number>(100); // Default percentage

  const handleEmployeeChange = (employeeName: string) => {
    const employee = data.find((emp) => emp.name === employeeName) || null;
    setSelectedEmployee(employee);
  };

  const handlePercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setUserPercentage(isNaN(value) ? 0 : Math.max(0, Math.min(100, value))); // Clamp percentage between 0 and 100
  };

  const calculateMetrics = (
    employee: EmployeeData | null,
    timeframe: string,
    userPercentage: number,
  ) => {
    if (!employee)
      return {
        prospectivePay: 0,
        internalPayRange: { min: 0, max: 0 },
        equitablePayRange: { min: 0, max: 0 },
        predictedCompensation: 0,
      };

    // Parse numeric values from the employee data
    const baseSalary = parseFloat(employee.baseSalary);
    const bonus = parseFloat(employee.bonus);
    const stockOptions = parseFloat(employee.stockOptions);
    const marketRate = parseFloat(employee.marketRate);

    let factor;

    // Adjust factor based on timeframe
    switch (timeframe) {
      case "daily":
        factor = 365; // Daily to yearly factor
        break;
      case "weekly":
        factor = 52; // Weekly to yearly factor
        break;
      case "monthly":
        factor = 12; // Monthly to yearly factor
        break;
      case "hourly":
        factor = 2080; // Hourly to yearly factor (assuming 40 hours/week)
        break;
      default: // yearly
        factor = 1;
        break;
    }

    const adjustedSalary =
      (baseSalary + bonus + stockOptions + marketRate) * factor;

    const prospectivePay = adjustedSalary * (userPercentage / 100); // Use user-defined percentage
    const internalPayRange = {
      min: adjustedSalary * (0.9 * (userPercentage / 100)), // Adjusted by user-defined percentage
      max: adjustedSalary * (1.1 * (userPercentage / 100)), // Adjusted by user-defined percentage
    };
    const equitablePayRange = {
      min: internalPayRange.min * 1.05, // 5% more than the internal range
      max: internalPayRange.max * 0.95, // 5% less than the internal range
    };
    const predictedCompensation = prospectivePay * 1.02; // 2% increase for predicted compensation

    return {
      prospectivePay,
      internalPayRange,
      equitablePayRange,
      predictedCompensation,
    };
  };

  const metrics = calculateMetrics(
    selectedEmployee,
    selectedTimeframe,
    userPercentage,
  );

  const generateExplanation = (metric: string) => {
    switch (metric) {
      case "Prospective Pay":
        return `Prospective pay is calculated as ${userPercentage}% of the adjusted salary for ${selectedEmployee?.name ?? "Employee"} based on a ${selectedTimeframe} timeframe. The resulting pay is $${metrics.prospectivePay.toFixed(2)}.`;
      case "Internal Pay Range":
        return `Internal pay range is calculated by applying +/-10% adjustment on ${userPercentage}% of the adjusted salary. The minimum pay is $${metrics.internalPayRange.min.toFixed(2)}, and the maximum pay is $${metrics.internalPayRange.max.toFixed(2)}.`;
      case "Equitable Pay Range":
        return `Equitable pay range adjusts the internal pay range to account for equity considerations, adding 5% to the minimum and subtracting 5% from the maximum. The range is between $${metrics.equitablePayRange.min.toFixed(2)} and $${metrics.equitablePayRange.max.toFixed(2)}.`;
      case "Predicted Compensation":
        return `Predicted compensation is a forecasted value based on the prospective pay, with an additional 2% increase. The predicted compensation is $${metrics.predictedCompensation.toFixed(2)}.`;
      default:
        return "";
    }
  };

  const chartData = {
    labels: [
      "Prospective Pay",
      "Internal Pay Range",
      "Equitable Pay Range",
      "Predicted Compensation",
    ],
    datasets: [
      {
        label: `Compensation Analysis for ${
          selectedEmployee?.name ?? "Employee"
        }`,
        data: [
          metrics.prospectivePay,
          metrics.internalPayRange.max,
          metrics.equitablePayRange.max,
          metrics.predictedCompensation,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const timeframeOptions = [
    { value: "yearly", label: "Yearly" },
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "hourly", label: "Hourly" },
  ];

  const employeeOptions = data.map((d) => ({ value: d.name, label: d.name }));

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col space-y-6">
        <div className="mb-6">
          <label
            className="mb-2 block text-lg font-medium"
            htmlFor="employeeSelect"
          >
            Select Employee:
          </label>
          <DropdownSelect
            options={employeeOptions}
            selectedValue={selectedEmployee?.name ?? ""}
            onChange={(e) => handleEmployeeChange(e.target.value)}
            placeholder="Select an employee"
            id="employeeSelect"
          />
        </div>

        <div className="mb-6">
          <label
            className="mb-2 block text-lg font-medium"
            htmlFor="timeframeSelect"
          >
            Select Timeframe:
          </label>
          <DropdownSelect
            options={timeframeOptions}
            selectedValue={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            placeholder="Select a timeframe"
            id="timeframeSelect"
          />
        </div>

        {selectedTimeframe && (
          <div className="mb-6">
            <label
              className="mb-2 block text-lg font-medium"
              htmlFor="percentageInput"
            >
              Enter Percentage (%):
            </label>
            <input
              type="number"
              id="percentageInput"
              value={userPercentage}
              onChange={handlePercentageChange}
              className="block w-full border border-gray-300 p-2"
              min="0"
              max="100"
            />
          </div>
        )}
      </div>

      {/* Metrics Cards Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader title="Prospective Pay" />
          <CardContent className="text-center">
            <ProgressRing
              value={Math.round(
                clampToPercentage(metrics.prospectivePay / 10000), // Use a realistic base value for percentage calculation
              )}
              size={100}
              color="lightgreen"
            />
            <p>${metrics.prospectivePay.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Internal Pay Range" />
          <CardContent>
            <p>Min: ${metrics.internalPayRange.min.toFixed(2)}</p>
            <p>Max: ${metrics.internalPayRange.max.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Equitable Pay Range" />
          <CardContent>
            <p>Min: ${metrics.equitablePayRange.min.toFixed(2)}</p>
            <p>Max: ${metrics.equitablePayRange.max.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Predicted Compensation" />
          <CardContent className="text-center">
            <ProgressRing
              value={Math.round(
                clampToPercentage(metrics.predictedCompensation / 10000), // Use a realistic base value for percentage calculation
              )}
              size={100}
              color="lightblue"
            />
            <p>${metrics.predictedCompensation.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>

      {/* Compensation Analysis Chart */}
      <div className="relative mb-8 h-auto w-full min-w-full bg-gray-50 shadow-md dark:bg-slate-700">
        <Line data={chartData} />
      </div>

      {/* Tabulated Explanation Section */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Metric</TableHead>
            <TableHead>Explanation</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Prospective Pay</TableCell>
            <TableCell>{generateExplanation("Prospective Pay")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Internal Pay Range</TableCell>
            <TableCell>{generateExplanation("Internal Pay Range")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Equitable Pay Range</TableCell>
            <TableCell>{generateExplanation("Equitable Pay Range")}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Predicted Compensation</TableCell>
            <TableCell>
              {generateExplanation("Predicted Compensation")}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

const clampToPercentage = (value: number) => {
  return Math.max(0, Math.min(100, value)); // Clamp percentage between 0 and 100
};

export default ComparisonPage;
