// components/LoadingSkeleton.tsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-4">
      {/* Placeholder for title */}
      <Skeleton width="1/3" height="1.5rem" />
      <div className="my-4 flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
            <Skeleton width={120} height={20} />
          </h2>
          <Skeleton height={40} />
        </div>
        <div className="flex-1">
          <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
            <Skeleton width={120} height={20} />
          </h2>
          <Skeleton height={40} />
        </div>
      </div>
      {/* Placeholders for filters */}
      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        <Skeleton width="100%" height="2.5rem" />
        <Skeleton width="100%" height="2.5rem" />
      </div>

      {/* Placeholders for charts */}
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex-1">
          <Skeleton width="100%" height="15rem" />
        </div>
        <div className="flex-1">
          <Skeleton width="100%" height="15rem" />
        </div>
      </div>

      {/* Placeholder for sliders */}
      <div className="my-4 flex flex-col md:flex-row md:gap-4">
        <Skeleton width="100%" height="2.5rem" />
        <Skeleton width="100%" height="2.5rem" />
        <Skeleton width="100%" height="2.5rem" />
      </div>

      {/* Placeholder for table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              {Array.from({ length: 9 }).map((_, i) => (
                <th
                  key={i}
                  className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider"
                >
                  <Skeleton width="4rem" height="1.5rem" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {Array.from({ length: 8 }).map((_, i) => (
              <tr key={i}>
                {Array.from({ length: 9 }).map((_, j) => (
                  <td key={j} className="px-4 py-2">
                    <Skeleton width="4rem" height="1.5rem" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
