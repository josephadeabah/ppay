import BenchMarkChart from "@/app/dashboard/benchmark/benchmarkchart/BenchMarkChart";
import SalaryComparison from "@/app/dashboard/compare/salarycomparison/SalaryComparison";
import WagesChart from "@/app/dashboard/compare/wageschart/WagesChart";
import InflationChart from "@/app/dashboard/inflation/inflationchart/InflationChart";

import type { NextPage } from "next";

export const HomePageContent: NextPage = function () {
  return (
    <div className="bg-slate-50 dark:bg-gray-800">
      <div className="m-3 mb-6 flex items-center gap-2 text-xl font-bold text-gray-700 dark:text-gray-50">
        Global Wages and Salaries Analysis Summary (Live{" "}
        <div className="inline-block h-3 w-3 rounded-full bg-green-400"></div>)
      </div>
      <main className="p-0">
        {/* Responsive grid container */}
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="bg-white p-1 dark:bg-gray-800">
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
