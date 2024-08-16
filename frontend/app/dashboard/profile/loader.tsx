"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserProfileSkeleton: React.FC = () => {
  return (
    <div className="max-h-screen bg-gray-100 px-2 py-3 dark:bg-gray-900">
      <div className="mx-auto overflow-hidden rounded-lg bg-white dark:bg-gray-800">
        <div className="flex justify-end p-6">
          <Skeleton width={120} height={36} />
        </div>

        <div className="flex items-center space-x-6 p-6">
          <Skeleton circle={true} height={96} width={96} />
          <div className="flex-1">
            <Skeleton width={200} height={32} />
            <Skeleton width={150} height={20} />
            <Skeleton width={100} height={20} />
          </div>
        </div>

        <div className="space-y-4 p-6">
          <div className="flex space-x-4">
            <Skeleton width={500} height={40} />
            <Skeleton width={500} height={40} />
          </div>
          <div className="flex space-x-4">
            <Skeleton width={500} height={40} />
            <Skeleton width={500} height={40} />
          </div>
          <div className="flex space-x-4">
            <Skeleton width={500} height={40} />
            <Skeleton width={500} height={40} />
          </div>
          <div className="flex space-x-4">
            <Skeleton width={500} height={40} />
            <Skeleton width={500} height={40} />
          </div>
          <div className="flex space-x-4">
            <Skeleton width={500} height={40} />
            <Skeleton width={500} height={40} />
          </div>
          <div className="flex space-x-4">
            <Skeleton width={500} height={40} />
            <Skeleton width={500} height={40} />
          </div>
          <div className="flex space-x-4">
            <Skeleton width={500} height={40} />
            <Skeleton width={500} height={40} />
          </div>
          <div className="flex space-x-4">
            <Skeleton width={500} height={40} />
            <Skeleton width={500} height={40} />
          </div>
          <button className="w-1/2 rounded-lg bg-gray-50 px-4 py-2 text-white dark:bg-gray-950">
            <Skeleton width={200} height={36} />
          </button>
        </div>

        <div className="px-2 py-5 text-sm font-normal text-gray-500 dark:text-gray-50">
          <Skeleton width={100} height={24} />
          <Skeleton width={100} height={24} />
        </div>
      </div>
    </div>
  );
};

export default UserProfileSkeleton;
