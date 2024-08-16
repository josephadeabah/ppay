// components/CompliancePageSkeleton.tsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CompliancePageSkeleton: React.FC = () => {
  return (
    <div className="bg-gray-50 p-6 dark:bg-gray-900">
      {/* Title */}
      <Skeleton width="1/4" height="3rem" className="mb-6" />

      {/* Compliance Updates Section */}
      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <Skeleton width="1/5" height="2rem" className="mb-4" />
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex justify-between">
              <Skeleton width="20%" height="1.5rem" />
              <Skeleton width="70%" height="1.5rem" />
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Resources Section */}
      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <Skeleton width="1/5" height="2rem" className="mb-4" />
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} width="80%" height="1.5rem" />
          ))}
        </div>
      </div>

      {/* Compliance Data Analysis Section */}
      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <Skeleton width="1/5" height="2rem" className="mb-4" />
        <div className="mb-6">
          <Skeleton width="1/4" height="1.5rem" className="mb-2" />
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} width="80%" height="1.5rem" />
            ))}
          </div>
        </div>
        <div>
          <Skeleton width="100%" height="20rem" />
        </div>
      </div>

      {/* Data Collection Avenues Section */}
      <div className="bg-white p-5 shadow-sm dark:bg-gray-800">
        <Skeleton width="1/5" height="2rem" className="mb-4" />
        <Skeleton width="80%" height="1.5rem" className="mb-4" />
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} width="80%" height="1.5rem" />
          ))}
        </div>
        <div className="mt-6">
          <Skeleton width="12rem" height="2.5rem" />
        </div>
      </div>
    </div>
  );
};

export default CompliancePageSkeleton;
