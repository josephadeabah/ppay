import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomePageContentSkeleton = () => {
  return (
    <div className="bg-slate-50 dark:bg-gray-800">
      <div className="flex items-center gap-2 bg-white p-2 text-xl font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-50">
        <Skeleton width={300} height={30} />
      </div>

      <div className="min-h-screen bg-gray-100 p-8 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
        {/* Hero Section */}
        <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="rounded-sm bg-white p-6 text-center">
                <Skeleton height={30} />
                <Skeleton height={40} width={100} className="mt-4" />
              </div>
            ))}
        </section>

        {/* Global Insights */}
        <section className="mb-8 rounded-sm bg-white p-8">
          <Skeleton height={30} width={200} />
          <div className="mt-4 h-96">
            <Skeleton height="100%" />
          </div>
          <div className="mt-4 text-center">
            <Skeleton width={150} height={40} />
          </div>
        </section>

        {/* Recession Prone Countries */}
        <section className="mb-8 rounded-sm bg-white p-8">
          <Skeleton height={30} width={250} />
          <div className="mt-4 h-72">
            <Skeleton height="100%" />
          </div>
        </section>

        {/* Compliance & Pay Equity Alerts */}
        <section className="mb-8 rounded-sm bg-white p-8">
          <Skeleton height={30} width={300} />
          <ul className="mt-4 list-inside space-y-2">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <li key={index}>
                  <Skeleton width="80%" height={20} />
                </li>
              ))}
          </ul>
          <div className="mt-4 text-center">
            <Skeleton width={150} height={40} />
          </div>
        </section>

        {/* Company Rankings Section */}
        <section className="mb-8 rounded-sm bg-white p-8">
          <Skeleton height={30} width={250} />
          <div className="mt-4 flex space-x-4 overflow-x-auto">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-64 flex-shrink-0 rounded-lg bg-gray-300 p-4"
                >
                  <Skeleton height={30} />
                  <Skeleton height={20} width="60%" className="mt-2" />
                </div>
              ))}
          </div>
        </section>

        {/* Salary & Inflation Insights */}
        <section className="mb-8 rounded-sm bg-white p-6">
          <Skeleton height={30} width={300} />
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="rounded bg-gray-50 p-4">
                  <Skeleton height={30} />
                </div>
              ))}
          </div>
        </section>

        {/* User Activity Overview */}
        <section className="mb-8 rounded-sm bg-white p-6">
          <Skeleton height={30} width={200} />
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="rounded bg-gray-50 p-4">
                  <Skeleton height={30} />
                </div>
              ))}
          </div>
        </section>

        {/* Order History */}
        <section className="mb-8 rounded-sm bg-white p-6">
          <Skeleton height={30} width={250} />
          {Array(2)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-wrap items-center gap-y-4 py-6"
              >
                <Skeleton width="30%" height={30} />
                <Skeleton width="20%" height={30} />
                <Skeleton width="20%" height={30} />
                <Skeleton width="20%" height={30} />
                <Skeleton width="20%" height={30} className="ml-auto" />
              </div>
            ))}
        </section>
      </div>
    </div>
  );
};

export default HomePageContentSkeleton;
