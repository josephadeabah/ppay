// components/ReportPaySkeleton.tsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ReportPaySkeleton: React.FC = () => {
  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="-mb-px flex flex-wrap bg-white text-center text-sm font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-50"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              type="button"
              role="tab"
            >
              <Skeleton width="6rem" height="2rem" />
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              type="button"
              role="tab"
            >
              <Skeleton width="6rem" height="2rem" />
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              type="button"
              role="tab"
            >
              <Skeleton width="6rem" height="2rem" />
            </button>
          </li>
        </ul>
      </div>

      <div id="tabContentExample">
        <div className="rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel">
          <div className="p-6">
            <Skeleton height="2rem" width="100%" className="mb-4" />
            <Skeleton height="3rem" count={5} className="mb-4" />
            <Skeleton height="3rem" count={5} />
          </div>
        </div>
        <div
          className="hidden rounded-lg bg-gray-50 dark:bg-gray-800"
          role="tabpanel"
        >
          <div className="p-6">
            <Skeleton height="2rem" width="100%" className="mb-4" />
            <Skeleton height="3rem" count={5} className="mb-4" />
            <Skeleton height="3rem" count={5} />
          </div>
        </div>
        <div
          className="hidden rounded-lg bg-gray-50 dark:bg-gray-800"
          role="tabpanel"
        >
          <div className="p-6">
            <Skeleton height="2rem" width="100%" className="mb-4" />
            <Skeleton height="3rem" count={5} className="mb-4" />
            <Skeleton height="3rem" count={5} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportPaySkeleton;
