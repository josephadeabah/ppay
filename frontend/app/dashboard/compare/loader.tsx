import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CompareSkeletonLoader: React.FC = () => {
  return (
    <div className="flex h-screen w-full flex-col lg:flex-row">
      <div className="flex w-full flex-col p-3 lg:w-1/2">
        <div className="mb-6 mt-2 flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-50">
          <Skeleton width="15rem" height="2.5rem" />
        </div>
        <div className="mb-6 flex gap-1">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <Skeleton key={index} width="6rem" height="2.5rem" />
            ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="mb-6 flex-1">
            <Skeleton width="100%" height="2.5rem" />
          </div>
          <div className="mb-6 flex-1">
            <Skeleton width="100%" height="2.5rem" />
          </div>
        </div>
        <div className="mb-6">
          <Skeleton width="100%" height="20rem" />
        </div>
        <div className="mt-6">
          <Skeleton width="100%" height="2rem" />
          <Skeleton width="100%" height="2rem" />
          <Skeleton width="100%" height="2rem" />
        </div>
      </div>
      <div className="flex w-full flex-col p-3 lg:w-1/2">
        <div className="mb-6 mt-2 flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-50">
          <Skeleton width="15rem" height="2.5rem" />
        </div>
        <div className="overflow-x-auto">
          <Skeleton width="100%" height="2.5rem" />
          <div className="mt-4">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <Skeleton key={index} width="100%" height="2rem" />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareSkeletonLoader;
