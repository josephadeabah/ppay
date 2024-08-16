// SkeletonLoader.tsx
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import default styles

export default function MarketSalaryBenchmarksSkeleton() {
  return (
    <div className="p-4">
      {/* Filter Skeletons */}
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
        <div className="flex-1">
          <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
            <Skeleton width={120} height={20} />
          </h2>
          <Skeleton height={40} />
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="my-4">
        <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
          <Skeleton width={200} height={20} />
        </h2>
        <div className="overflow-x-hidden">
          <table className="w-full bg-white dark:bg-gray-800">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr className="text-xs">
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Skeleton width={60} height={20} />
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Skeleton width={60} height={20} />
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Skeleton width={60} height={20} />
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Skeleton width={60} height={20} />
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Skeleton width={60} height={20} />
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Skeleton width={60} height={20} />
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Skeleton width={60} height={20} />
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Skeleton width={60} height={20} />
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Skeleton width={60} height={20} />
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Skeleton width={60} height={20} />
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Skeleton width={60} height={20} />
                </th>
                <th className="p-2 text-left font-medium uppercase tracking-wider text-gray-500">
                  <Skeleton width={60} height={20} />
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 dark:text-gray-300">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <tr key={i}>
                    <td className="border-b p-2">
                      <Skeleton width={120} height={20} />
                    </td>
                    <td className="border-b p-2">
                      <Skeleton width={80} height={20} />
                    </td>
                    <td className="border-b p-2">
                      <Skeleton width={100} height={20} />
                    </td>
                    <td className="border-b p-2">
                      <Skeleton width={100} height={20} />
                    </td>
                    <td className="border-b p-2">
                      <Skeleton width={100} height={20} />
                    </td>
                    <td className="border-b p-2">
                      <Skeleton width={120} height={20} />
                    </td>
                    <td className="border-b p-2">
                      <Skeleton width={120} height={20} />
                    </td>
                    <td className="border-b p-2">
                      <Skeleton width={120} height={20} />
                    </td>
                    <td className="border-b p-2">
                      <Skeleton width={100} height={20} />
                    </td>
                    <td className="border-b p-2">
                      <Skeleton width={100} height={20} />
                    </td>
                    <td className="border-b p-2">
                      <Skeleton width={120} height={20} />
                    </td>
                    <td className="border-b p-2">
                      <Skeleton width={100} height={20} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chart Skeletons */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="col-span-1">
          <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
            <Skeleton width={300} height={20} />
          </h2>
          <Skeleton height={200} />
        </div>
        <div className="col-span-1">
          <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
            <Skeleton width={300} height={20} />
          </h2>
          <Skeleton height={200} />
        </div>
      </div>
    </div>
  );
}
