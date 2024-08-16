// components/Loading.tsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader: React.FC = () => {
  return (
    <div className="mx-auto px-4 py-8">
      <div className="min-h-screen">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="mb-8 space-y-4">
              <div className="space-y-4">
                <Skeleton width="100%" height="2.5rem" />
                <Skeleton width="100%" height="2.5rem" />
                <Skeleton width="100%" height="2.5rem" />
                <Skeleton width="100%" height="7rem" />
                <Skeleton width="100%" height="2.5rem" />
                <Skeleton width="100%" height="2.5rem" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {Array(9)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="w-full max-w-xl animate-pulse rounded bg-gray-50"
                  >
                    <Skeleton width="100%" height="8rem" />
                    <div className="p-4">
                      <Skeleton width="60%" height="1.5rem" />
                      <Skeleton width="40%" height="1rem" />
                      <div className="mt-4 flex space-x-4">
                        <Skeleton width="30%" height="1rem" />
                        <Skeleton width="30%" height="1rem" />
                        <Skeleton width="30%" height="1rem" />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Skeleton width="6rem" height="2rem" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
