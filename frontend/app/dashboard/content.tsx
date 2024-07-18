import WagesChart from "@/components/wageschart/WagesChart";
import type { NextPage } from "next";

export const HomePageContent: NextPage = function () {
  return (
    <div className="bg-white dark:bg-gray-800">
      <main className="p-0">
        {/* Responsive grid container */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-1">
            <WagesChart />
          </div>
          <div className="p-1">
            <WagesChart />
          </div>
          {/* Add more components here */}
        </div>
      </main>
    </div>
  );
};
