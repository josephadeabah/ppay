"use client";

import React from "react";
import Compare from "./Compare";

const ComparisonChart: React.FC = () => {
  return (
    <div className="flex h-screen w-full flex-col overflow-x-hidden bg-gray-100 dark:bg-gray-900 lg:flex-row">
      <Compare />
    </div>
  );
};

export default ComparisonChart;
