import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader: React.FC = () => {
  return (
    <div className="p-4">
      <div className="mb-6 mt-2 flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-50">
        <Skeleton width="150px" height="24px" />
      </div>
      <div className="mb-3 text-xs text-gray-700 dark:text-gray-50">
        <Skeleton width="300px" height="20px" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
      </div>

      <div className="mt-4">
        <Skeleton width="200px" height="24px" />
      </div>

      <div className="mt-4 h-full w-full">
        <div className="grid h-full w-full grid-cols-1 gap-4 md:grid-cols-2">
          <div className="h-full w-full">
            <Skeleton width="100%" height="300px" />
          </div>
          <div className="h-full w-full">
            <Skeleton width="100%" height="300px" />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Skeleton width="100%" height="30px" />
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="40px" />
      </div>
    </div>
  );
};

export default SkeletonLoader;
