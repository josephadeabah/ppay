// components/HomePageContentSkeleton.tsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomePageContentSkeleton: React.FC = () => {
  return (
    <div className="dark:bg-gray-800">
      <div className="flex items-center gap-2 p-2 text-xl font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-50">
        <Skeleton width={200} height={24} />
        <Skeleton width={12} height={12} />
      </div>
      <main className="p-0">
        {/* Responsive grid container */}
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="p-1 dark:bg-gray-800">
            <Skeleton height={400} width="100%" />
          </div>
          <div className="p-1">
            <Skeleton height={400} width="100%" />
          </div>
          <div className="p-1">
            <Skeleton height={400} width="100%" />
          </div>
          <div className="p-1">
            <Skeleton height={400} width="100%" />
          </div>
          {/* Add more skeletons if you have more components */}
        </div>
      </main>
    </div>
  );
};

export default HomePageContentSkeleton;
