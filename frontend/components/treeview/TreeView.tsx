// components/TreeView.js
import { EmployeeData } from "@/types/payaid.data";
import React, { useState } from "react";

interface TreeNode {
  name: string;
  children?: TreeNode[];
  data?: EmployeeData; // Adjust this based on your actual data type
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
        <div
          onClick={() => toggleNode(node.name)}
          className="mb-1 flex cursor-pointer select-none items-center rounded border border-gray-100 bg-gray-50 px-4 py-2"
        >
          {node.children && node.children.length > 0 && (
            <span className="mr-2">
              {expandedNodes.has(node.name) ? "[-]" : "[+]"}
            </span>
          )}
          {node.name}
        </div>
        {expandedNodes.has(node.name) && node.children && (
          <div className="ml-4">{renderTreeNodes(node.children)}</div>
        )}
      </div>
    ));

  return <div>{renderTreeNodes(nodes)}</div>;
};

export default TreeView;
