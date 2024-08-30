import { Card, CardContent, CardHeader } from "@/components/card/Card";
import TreeView from "@/components/treeview/TreeView";
import { EmployeeData } from "@/types/payaid.data";
import { groupBy } from "@/utils/groupby.utils";
import { generateTreeData } from "@/utils/treeview.utils";
import { useState } from "react";
import CompensationComponentAnalysis from "../payfactors/compensationcomponentanalysis";

const ComparisonPage = ({ data }: { data: EmployeeData[] }) => {
  const [selectedControls, setSelectedControls] = useState<string[]>([]);
  const [selectedDemographic, setSelectedDemographic] =
    useState<string>("gender");
  const [selectedRole, setSelectedRole] = useState<string>("All Roles");

  const handleControlChange = (control: string) => {
    setSelectedControls((prev) =>
      prev.includes(control)
        ? prev.filter((c) => c !== control)
        : [...prev, control],
    );
  };

  const filteredData = data; // Add any additional filtering logic if needed

  const departmentData = groupBy(filteredData, (emp) => emp.department);

  console.log("departmentData", departmentData);

  return (
    <div className="space-y-8 p-4">
      {/* Controls */}
      <div className="mb-6 flex flex-wrap gap-4">
        {[
          "Education",
          "Performance Evaluation",
          "Time in Role",
          "Years Since Last Promotion",
          "Has Direct Report?",
          "Location",
          "City",
        ].map((control) => (
          <button
            key={control}
            onClick={() => handleControlChange(control)}
            className={`rounded-md px-4 py-2 ${
              selectedControls.includes(control)
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {control}
          </button>
        ))}
      </div>

      {/* TreeView */}
      <TreeView
        nodes={generateTreeData(data)}
        renderNode={(node) => {
          // You can include any additional metrics if needed
          return (
            <Card>
              <CardHeader title={node.name} />
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Example metric display */}
                  <p>Total Employees: {node.data.length}</p>
                </div>
              </CardContent>
            </Card>
          );
        }}
      />
      {/* Compensation Analysis */}
      <CompensationComponentAnalysis
        data={filteredData}
        selectedDemographic={selectedDemographic}
        selectedRole={selectedRole}
      />
    </div>
  );
};

export default ComparisonPage;
