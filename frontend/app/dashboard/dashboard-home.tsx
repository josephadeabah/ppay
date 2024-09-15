"use client";

import RecessionProneCountriesTable from "@/app/dashboard/dashbmain/recession/RecessionCountries";
import TopSatisfactionCompanies from "@/app/dashboard/dashbmain/topcompanies/TopCompaniesByEmployeeSatisfaction";
import TopLowInflationCountries from "@/app/dashboard/dashbmain/topcompanies/TopCountriesLowerInflation";
import TopSalaryChangeCompanies from "@/app/dashboard/dashbmain/topcompanies/TopSalaryChangeCompanies";
import MapComponent from "@/app/dashboard/dashbmain/worldmap/WorldMap";
import HomePageContentSkeleton from "@/app/dashboard/dashboardloader";
import RecentUserActivity from "@/app/dashboard/settings/recentactivity/RecentUserActivity";
import RecentDownloads from "@/app/dashboard/settings/recentdownloads/RecentDownloadsList";
import { Tooltip } from "@nextui-org/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

export const HomePageContent: NextPage = function () {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<{ email?: string } | null>(null);

  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    if (tokenString) {
      try {
        const token = JSON.parse(tokenString);
        setUser(token.user);
      } catch (error) {
        console.error("Failed to parse token from local storage:", error);
      }
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <HomePageContentSkeleton />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-800">
      {/* Always show the MapComponent */}
      <section className="mb-8 rounded-sm bg-white p-8 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
        <h2 className="mb-4 text-xl font-bold">Global Insights</h2>
        <div className="h-96">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
              <MapComponent />
            </div>
          </div>
        </div>
      </section>
      {/* Conditionally render the rest of the content if user exists */}
      {user && (
        <>
          <div className="flex items-center bg-white p-4 text-xl font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-50">
            Dashboard Insights Summary
          </div>
          <div className="min-h-screen bg-gray-100 p-3 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
            {/* Hero Section */}
            <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-sm bg-white p-6 text-center text-gray-800 dark:bg-gray-900 dark:text-gray-50">
                <h2 className="text-lg font-semibold">
                  Global Average Salary Change
                </h2>
                <p className="text-sm">
                  In the past month, the global average salary has increased by
                  <div className="font-bold text-green-600"> +3.5%</div>
                </p>
                <div className="inline-block text-sm text-blue-500 hover:no-underline">
                  <Tooltip
                    content="This reflects the overall trend in global wage growth and its impact on industries worldwide."
                    color="primary"
                    placement="top"
                    className="w-full max-w-sm bg-white p-5 text-gray-900 dark:bg-slate-800 dark:text-gray-50"
                  >
                    <p className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-gray-500 dark:text-gray-100">
                      What does this mean?
                    </p>
                  </Tooltip>
                </div>
              </div>

              <div className="rounded-sm bg-white p-6 text-center text-gray-800 dark:bg-gray-900 dark:text-gray-50">
                <h2 className="text-lg font-semibold">Inflation Rate</h2>
                <p className="text-sm">
                  The current inflation rate in USA is
                  <div className="font-bold text-red-600"> 4.2%</div>
                </p>
                <div className="inline-block text-sm text-blue-500 hover:no-underline">
                  <Tooltip
                    content=" This means the cost of goods and services has risen, potentially
                    affecting your purchasing power and overall financial health.
                    Monitoring inflation is essential for maintaining your pay's real
                    value."
                    color="primary"
                    placement="top"
                    className="w-full max-w-sm bg-white p-5 text-gray-900 dark:bg-slate-800 dark:text-gray-50"
                  >
                    <p className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-gray-500 dark:text-gray-100">
                      What does this mean?
                    </p>
                  </Tooltip>
                </div>
              </div>

              <div className="rounded-sm bg-white p-6 text-center text-gray-800 dark:bg-gray-900 dark:text-gray-50">
                <h2 className="text-lg font-semibold">Pay Equity Score</h2>
                <p className="text-sm">
                  By your recent pay equity analysis, your pay equity score is
                  <div className="font-bold text-purple-600"> 92%</div>
                </p>
                <div className="inline-block text-sm text-blue-500 hover:no-underline">
                  <Tooltip
                    content="This score indicates how fairly you are compensating your workers compared to others in similar industries, and regions. A score of 92% means your pay is relatively equitable, though some disparities may still exist."
                    color="primary"
                    placement="top"
                    className="w-full max-w-sm bg-white p-5 text-gray-900 dark:bg-slate-800 dark:text-gray-50"
                  >
                    <p className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-gray-500 dark:text-gray-100">
                      What does this mean?
                    </p>
                  </Tooltip>
                </div>
              </div>
            </section>

            {/* Recession Prone Countries */}
            <section className="mb-8 rounded-sm bg-white p-8 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
              <h2 className="mb-4 text-xl font-bold">
                Recession Prone Countries
              </h2>
              <RecessionProneCountriesTable />
            </section>

            {/* Compliance & Pay Equity Alerts */}
            <section className="mb-8 rounded-sm bg-white p-8 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
              <h2 className="mb-4 text-xl font-bold">
                Compliance & Pay Equity Alerts
              </h2>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  Labor Law Update: Minimum wage increased by 5% in California.
                </li>
                <li>Pay Equity: Your industry has an equity score of 85%.</li>
                <li>
                  New Compliance Regulation: Equal Pay Act enforcement expanded.
                </li>
              </ul>
              <div className="mt-4 text-center">
                <button className="rounded bg-red-600 px-4 py-2 text-white">
                  View Details
                </button>
              </div>
            </section>

            {/* Company Rankings Section */}
            <section className="mb-8 rounded-sm bg-white p-8 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
              <h2 className="mb-4 text-xl font-bold">Top-Ranked Companies</h2>
              <div className="flex space-x-4 overflow-x-auto [&::-moz-scrollbar-thumb]:rounded-full [&::-moz-scrollbar-thumb]:bg-gray-200 [&::-moz-scrollbar-track]:m-1 [&::-moz-scrollbar]:w-2 [&::-ms-scrollbar-thumb]:rounded-full [&::-ms-scrollbar-thumb]:bg-gray-200 [&::-ms-scrollbar-track]:m-1 [&::-ms-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:m-1 [&::-webkit-scrollbar]:w-2">
                <div className="w-64 flex-shrink-0 rounded-lg bg-blue-500 p-4 text-white">
                  <h3 className="text-lg font-semibold">Best for Salaries</h3>
                  <p>Company A</p>
                </div>
                <div className="w-64 flex-shrink-0 rounded-lg bg-green-500 p-4 text-white">
                  <h3 className="text-lg font-semibold">
                    Best for Work-Life Balance
                  </h3>
                  <p>Company B</p>
                </div>
                <div className="w-64 flex-shrink-0 rounded-lg bg-purple-500 p-4 text-white">
                  <h3 className="text-lg font-semibold">Best for Innovation</h3>
                  <p>Company C</p>
                </div>
              </div>
            </section>

            {/* Employee Satisfaction */}
            <section className="mb-8 rounded-sm bg-white p-8 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
              <h2 className="mb-4 text-xl font-bold">
                Top Companies by Employee Satisfaction
              </h2>
              <TopSatisfactionCompanies />
            </section>

            {/* Countries with Low Inflation */}
            <section className="mb-8 rounded-sm bg-white p-8 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
              <h2 className="mb-4 text-xl font-bold">
                Countries with Lower Inflation Rates
              </h2>
              <TopLowInflationCountries />
            </section>

            {/* Companies with High Salary Increases */}
            <section className="mb-8 rounded-sm bg-white p-8 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
              <h2 className="mb-4 text-xl font-bold">
                Companies with Highest Salary Increases
              </h2>
              <TopSalaryChangeCompanies />
            </section>

            {/* Recent User Activity */}
            <section className="mb-8 rounded-sm bg-white p-8 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
              <h2 className="mb-4 text-xl font-bold">Recent Activity</h2>
              <RecentUserActivity />
            </section>

            {/* Downloads Section */}
            <section className="mb-8 rounded-sm bg-white p-8 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
              <h2 className="mb-4 text-xl font-bold">Downloads</h2>
              <RecentDownloads />
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePageContent;
