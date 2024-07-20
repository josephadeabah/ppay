import BenchMarkChart from "@/app/dashboard/benchmark/benchmarkchart/BenchMarkChart";
import SalaryComparison from "@/app/dashboard/compare/salarycomparison/SalaryComparison";
import WagesChart from "@/app/dashboard/compare/wageschart/WagesChart";
import InflationChart from "@/app/dashboard/inflation/inflationchart/InflationChart";

import type { NextPage } from "next";

export const HomePageContent: NextPage = function () {
  return (
    <div className="bg-slate-50 dark:bg-gray-800">
      <main className="p-0">
        {/* Responsive grid container */}
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="p-1">
            <WagesChart />
          </div>
          <div className="p-1">
            <SalaryComparison />
          </div>
          <div className="p-1">
            <BenchMarkChart />
          </div>
          <div className="p-1">
            <InflationChart />
          </div>
          {/* Add more components here */}
        </div>
      </main>
    </div>
  );
};
