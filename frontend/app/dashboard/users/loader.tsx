// components/UsersPageSkeleton.tsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UsersPageSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-4">
      {/* Placeholder for title */}
      <Skeleton width="1/4" height="1.5rem" />

      {/* Placeholders for filters and buttons */}
      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        <Skeleton width="100%" height="2.5rem" />
        <Skeleton width="100%" height="2.5rem" />
      </div>

      {/* Placeholder for table */}
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              {Array.from({ length: 10 }).map((_, i) => (
                <th
                  key={i}
                  className="p-4 text-left text-xs font-medium uppercase text-gray-700 dark:text-gray-400"
                >
                  <Skeleton width="6rem" height="1.5rem" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {Array.from({ length: 8 }).map((_, i) => (
              <tr key={i} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                {Array.from({ length: 10 }).map((_, j) => (
                  <td key={j} className="whitespace-nowrap p-4 text-sm">
                    <Skeleton width="6rem" height="1.5rem" />
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

export default UsersPageSkeleton;
