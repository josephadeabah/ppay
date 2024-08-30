import ProgressRing from "@/components/progress/ProgressRing";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

interface TreeNode {
  name: string;
  children?: TreeNode[];
  type?: "progress" | "chart"; // Optional: Only for metric nodes
  value?: number; // For progress rings
  data?: number[]; // For charts
  color?: string; // Optional: Color for the progress ring or chart
  labels?: string[]; // Optional: Labels for the chart
  backgroundColor?: string[]; // Optional: Colors for the chart data points
}

interface TreeViewProps {
  nodes: TreeNode[];
  renderNode: (node: TreeNode) => React.ReactNode;
}

const TreeView: React.FC<TreeViewProps> = ({ nodes, renderNode }) => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const toggleNode = (nodeName: string) => {
    setExpandedNodes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(nodeName)) {
        newSet.delete(nodeName);
      } else {
        newSet.add(nodeName);
      }
      return newSet;
    });
  };

  const renderTreeNodes = (nodes: TreeNode[]) =>
    nodes.map((node) => (
      <div key={node.name} className="relative ml-4">
        <button
          onClick={() => toggleNode(node.name)}
          className="mb-1 flex w-full cursor-pointer select-none items-center rounded border border-gray-100 bg-gray-50 px-4 py-1"
        >
          {node.children && node.children.length > 0 && (
            <span className="mr-2">
              {expandedNodes.has(node.name) ? "[-]" : "[+]"}
            </span>
          )}
          {node.name}
        </button>
        {expandedNodes.has(node.name) && node.children && (
          <div className="ml-4">
            {node.children.map((child) => {
              if (child.type === "progress") {
                return (
                  <div
                    key={child.name}
                    className="my-2 flex items-center space-x-4"
                  >
                    <span className="font-semibold">{child.name}</span>
                    {child.value !== undefined && (
                      <ProgressRing
                        value={child.value}
                        size={80}
                        strokeWidth={6}
                        color={child.color ?? "lightblue"}
                      />
                    )}
                  </div>
                );
              } else if (child.type === "chart") {
                const chartData = {
                  labels: child.labels || [],
                  datasets: [
                    {
                      label: child.name,
                      data: child.data || [],
                      backgroundColor:
                        child.backgroundColor || "rgba(75, 192, 192, 0.2)",
                      borderColor: "rgba(75, 192, 192, 1)",
                      borderWidth: 1,
                    },
                  ],
                };

                const chartOptions = {
                  maintainAspectRatio: false, // Allow custom sizing
                  responsive: true,
                  layout: {
                    padding: 10, // Adjust the padding as needed
                  },
                };

                return (
                  <div
                    key={child.name}
                    className="my-4"
                    style={{ display: "flex", width: "200px", height: "200px" }} // Set smaller width and height
                  >
                    <span className="font-semibold">{child.name}</span>
                    {child.data && child.data.length > 0 ? (
                      <Doughnut data={chartData} options={chartOptions} />
                    ) : (
                      <p className="text-gray-500">No data available</p>
                    )}
                  </div>
                );
              } else if (child.children) {
                return (
                  <TreeView
                    key={child.name}
                    nodes={[child]}
                    renderNode={renderNode}
                  />
                );
              } else {
                return (
                  <p key={child.name} className="my-2">
                    {child.name}
                  </p>
                );
              }
            })}
          </div>
        )}
      </div>
    ));

  return <div>{renderTreeNodes(nodes)}</div>;
};

export default TreeView;
