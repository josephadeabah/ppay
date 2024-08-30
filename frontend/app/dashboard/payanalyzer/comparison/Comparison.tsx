import { Card, CardContent, CardHeader } from "@/components/card/Card";
import TreeView from "@/components/treeview/TreeView";
import { EmployeeData } from "@/types/payaid.data";
import { groupBy } from "@/utils/groupby.utils";
import { generateTreeData } from "@/utils/treeview.utils";

const ComparisonPage = ({ data }: { data: EmployeeData[] }) => {
  const filteredData = data; // Add any additional filtering logic if needed
  const departmentData = groupBy(filteredData, (emp) => emp.department);

  return (
    <div className="space-y-8 p-4">
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
