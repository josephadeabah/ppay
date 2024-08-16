import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DownloadPageSkeleton: React.FC = () => {
  const numCategories = 4; // Adjust this based on how many categories you want to display in the skeleton
  const numLinks = 8; // Adjust based on the number of links per category

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Skeleton width="20rem" height="4rem" className="mx-auto mb-8" />
        <Skeleton width="15rem" height="2rem" className="mx-auto mb-12" />
        <div className="flex flex-col gap-8 lg:flex-row">
          {Array.from({ length: numCategories }).map((_, categoryIndex) => (
            <div
              key={categoryIndex}
              className="flex-1 rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:shadow-gray-700"
            >
              <div className="p-6">
                <Skeleton width="12rem" height="2rem" className="mb-4" />
                <ul className="space-y-2">
                  {Array.from({ length: numLinks }).map((_, linkIndex) => (
                    <li key={linkIndex} className="flex items-center space-x-2">
                      <Skeleton
                        width="80%"
                        height="1.5rem"
                        className="flex-grow"
                      />
                      <Skeleton width="2rem" height="2rem" circle />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadPageSkeleton;
