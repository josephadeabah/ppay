// components/InflationLoading.tsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const InflationLoading: React.FC = () => (
  <div className="mx-auto px-4 py-8">
    <div className="min-h-screen">
      <div className="mb-6 mt-2 flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-50">
        <Skeleton width={200} height={24} />
        <Skeleton width={12} height={12} />
      </div>
      <div className="mb-8">
        <Skeleton height={40} width="100%" />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        <div className="h-64">
          <Skeleton height="100%" />
        </div>
        <div className="h-64">
          <Skeleton height="100%" />
        </div>
      </div>

      <h2 className="my-6 text-2xl font-bold text-gray-700 dark:text-gray-50">
        <Skeleton width={250} height={24} />
      </h2>

      <div className="flex flex-1 flex-col">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="mb-6 flex flex-col md:flex-row">
            <div className="mr-2 flex-1 overflow-x-auto">
              <Skeleton height={30} width="80%" />
              <Skeleton height={20} count={5} />
            </div>
            <div className="mt-4 h-96 flex-1 md:mt-0">
              <Skeleton height="100%" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center">
        <Skeleton height={40} width={150} />
      </div>
    </div>
  </div>
);

export default InflationLoading;
