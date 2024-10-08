"use client";

import React from "react";
import Compare from "./Compare";

const ComparisonChart: React.FC = () => {
  return (
    <div className="flex w-full flex-col overflow-x-hidden dark:bg-gray-900 lg:flex-row">
      <Compare />
    </div>
  );
};

export default ComparisonChart;
