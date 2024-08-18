import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SidebarLoadingSkeleton: React.FC = () => {
  return (
    <div className="flex h-full flex-col space-y-4 bg-gray-50 px-4 dark:bg-gray-900">
      {/* Simulating each sidebar item */}
      <div className="flex-1 space-y-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="flex items-center space-x-3">
            {/* Circle placeholder for sidebar icon */}
            <Skeleton circle width={24} height={24} />
            {/* Placeholder for sidebar item text */}
            <Skeleton width={100} height={20} />
          </div>
        ))}
      </div>

      {/* Placeholder for the upgrade button */}
      <div className="mt-6 space-y-2">
        <div className="flex items-center space-x-3">
          {/* Circle placeholder for upgrade icon */}
          <Skeleton circle width={24} height={24} />
          {/* Placeholder for upgrade button text */}
          <Skeleton width={100} height={20} />
        </div>
      </div>

      {/* Placeholder for admin section (if applicable) */}
      <div className="mt-6 space-y-2">
        <div className="flex items-center space-x-3">
          {/* Circle placeholder for admin icon */}
          <Skeleton circle width={24} height={24} />
          {/* Placeholder for admin link text */}
          <Skeleton width={100} height={20} />
        </div>
      </div>
    </div>
  );
};

export default SidebarLoadingSkeleton;
