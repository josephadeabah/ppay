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
      {/* Compensation Analysis */}
      <CompensationComponentAnalysis
        data={filteredData}
        selectedDemographic={selectedDemographic}
        selectedRole={selectedRole}
      />

      {/* TreeView */}
      <h1 className="text-lg font-semibold">
        Departmental Metrics and Employee Analysis Tree
      </h1>
      <TreeView
        nodes={generateTreeData(data)}
        renderNode={(node) => {
          return (
            <Card>
              <CardHeader title={node.name} />
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {node.children && node.children.length > 0 ? (
                    node.children.map((child) => (
                      <p key={child.name}>{child.name}</p>
                    ))
                  ) : (
                    <p>No data available</p>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        }}
      />
    </div>
  );
};

export default ComparisonPage;
