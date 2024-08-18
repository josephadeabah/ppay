"use client";

import RecessionProneCountriesTable from "@/app/dashboard/dashbmain/recession/RecessionCountries";
import TopSatisfactionCompanies from "@/app/dashboard/dashbmain/topcompanies/TopCompaniesByEmployeeSatisfaction";
import TopLowInflationCountries from "@/app/dashboard/dashbmain/topcompanies/TopCountriesLowerInflation";
import TopSalaryChangeCompanies from "@/app/dashboard/dashbmain/topcompanies/TopSalaryChangeCompanies";
import MapComponent from "@/app/dashboard/dashbmain/worldmap/WorldMap";
import HomePageContentSkeleton from "@/app/dashboard/dashboardloader";
import RecentUserActivity from "@/app/dashboard/settings/recentactivity/RecentUserActivity";
import RecentDownloads from "@/app/dashboard/settings/recentdownloads/RecentDownloadsList";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

export const HomePageContent: NextPage = function () {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <HomePageContentSkeleton />;
  }

  return (
    <div className="bg-slate-50 dark:bg-gray-800">
      <div className="flex items-center bg-white p-4 text-xl font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-50">
        Dashboard Insights Summary
      </div>
      <div className="min-h-screen bg-gray-100 p-3 text-gray-800 dark:bg-gray-800 dark:text-gray-50">
        {/* Hero Section */}
        <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-sm  bg-white p-6 text-center text-gray-800 dark:bg-gray-900 dark:text-gray-50">
            <h2 className="text-lg font-semibold">
              Global Average Salary Change
            </h2>
            <p className="text-3xl font-bold text-green-600">+3.5%</p>
          </div>
          <div className="rounded-sm bg-white p-6 text-center text-gray-800 dark:bg-gray-900 dark:text-gray-50">
            <h2 className="text-lg font-semibold">Inflation Rate</h2>
            <p className="text-3xl font-bold text-red-600">4.2%</p>
          </div>
          <div className="rounded-sm bg-white p-6 text-center text-gray-800 dark:bg-gray-900 dark:text-gray-50">
            <h2 className="text-lg font-semibold">Top-Ranked Company</h2>
            <p className="text-3xl font-bold text-blue-600">
              Tech Innovators Inc.
            </p>
          </div>
          <div className="rounded-sm bg-white p-6 text-center text-gray-800 dark:bg-gray-900 dark:text-gray-50">
            <h2 className="text-lg font-semibold">Pay Equity Score</h2>
            <p className="text-3xl font-bold text-purple-600">92%</p>
          </div>
        </section>

        {/* Comparison Snapshot */}
        <section className="mb-8 rounded-sm bg-white p-8 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
          <h2 className="mb-4 text-xl font-bold">Global Insights</h2>
          <div className="h-96">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
                <MapComponent />
              </div>
            </div>
          </div>
          <div className="mt-4 text-center"></div>
        </section>

        {/* Recession Prone Countries */}
        <section className="mb-8 rounded-sm bg-white p-8 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
          <h2 className="mb-4 text-xl font-bold">Recession Prone Countries</h2>
          {/* RecessionProneCountriesTable */}
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
              <h3 className="text-lg font-semibold">Best htmlFor Salaries</h3>
              <p>Company A</p>
            </div>
            <div className="w-64 flex-shrink-0 rounded-lg bg-green-500 p-4 text-white">
              <h3 className="text-lg font-semibold">
                Best htmlFor Work-Life Balance
              </h3>
              <p>Company B</p>
            </div>
            <div className="w-64 flex-shrink-0 rounded-lg bg-purple-500 p-4 text-white">
              <h3 className="text-lg font-semibold">Best htmlFor Innovation</h3>
              <p>Company C</p>
            </div>
            {/* Add more company cards */}
          </div>
        </section>

        {/* Salary & Inflation Insights */}
        <h2 className="mb-4 text-xl font-semibold">
          Salary & Inflation Insights
        </h2>
        <section className="mb-8 rounded-sm bg-white p-6 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <TopSalaryChangeCompanies />
            <TopSatisfactionCompanies />
            <TopLowInflationCountries />
          </div>
        </section>

        <h1 className="mb-6 text-3xl font-bold">Your Recent Activity</h1>

        {/* User Activity Overview */}
        <section className="mb-8 rounded-sm bg-white p-6 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <RecentUserActivity />
            <RecentDownloads />
          </div>
        </section>

        {/* Order History */}
        <section className="mb-8 rounded-sm bg-white p-6 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
          <h2 className="text-xl font-semibold">Transaction History</h2>
          <section className="bg-white py-5 antialiased dark:bg-gray-900 md:py-10">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
              <div className="mx-auto max-w-5xl">
                <div className="gap-4 sm:flex sm:items-center sm:justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                    My transactions
                  </h2>

                  <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
                    <div>
                      <label
                        htmlFor="order-type"
                        className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select transaction type
                      </label>
                      <select
                        id="order-type"
                        className="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      >
                        <option selected>All orders</option>
                        <option value="in-progress">In Progress</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>

                    <span className="inline-block text-gray-500 dark:text-gray-400">
                      {" "}
                      from{" "}
                    </span>

                    <div>
                      <label
                        htmlFor="duration"
                        className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select duration
                      </label>
                      <select
                        id="duration"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      >
                        <option selected>this week</option>
                        <option value="this month">this month</option>
                        <option value="last 3 months">the last 3 months</option>
                        <option value="lats 6 months">the last 6 months</option>
                        <option value="this year">this year</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flow-root sm:mt-8">
                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    <div className="flex flex-wrap items-center gap-y-4 py-6">
                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                          Transaction ID:
                        </dt>
                        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                          <a href="." className="hover:underline">
                            .FWB125467980
                          </a>
                        </dd>
                      </dl>

                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                          Date:
                        </dt>
                        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                          11.12.2023
                        </dd>
                      </dl>

                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                          Amount:
                        </dt>
                        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                          $499
                        </dd>
                      </dl>

                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                          Status:
                        </dt>
                        <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                          <svg
                            className="me-1 h-3 w-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                            />
                          </svg>
                          In progress
                        </dd>
                      </dl>

                      <div className="grid w-full gap-4 sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end">
                        <button
                          type="button"
                          className="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 lg:w-auto"
                        >
                          Cancel order
                        </button>
                        <a
                          href="."
                          className="inline-flex w-full justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto"
                        >
                          View details
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-y-4 py-6">
                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                          Transaction ID:
                        </dt>
                        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                          <a href="." className="hover:underline">
                            .FWB134567890
                          </a>
                        </dd>
                      </dl>

                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                          Date:
                        </dt>
                        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                          02.11.2023
                        </dd>
                      </dl>

                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                          Amount:
                        </dt>
                        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                          $2,056
                        </dd>
                      </dl>

                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                          Status:
                        </dt>
                        <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                          <svg
                            className="me-1 h-3 w-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 11.917 9.724 16.5 19 7.5"
                            />
                          </svg>
                          Confirmed
                        </dd>
                      </dl>

                      <div className="grid w-full gap-4 sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end">
                        <button
                          type="button"
                          className="w-full rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 lg:w-auto"
                        >
                          Order again
                        </button>
                        <a
                          href="."
                          className="inline-flex w-full justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto"
                        >
                          View details
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-y-4 py-6">
                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                          Transaction ID:
                        </dt>
                        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                          <a href="." className="hover:underline">
                            .FWB146284623
                          </a>
                        </dd>
                      </dl>

                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                          Date:
                        </dt>
                        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                          26.09.2023
                        </dd>
                      </dl>

                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                          Amount:
                        </dt>
                        <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                          $180
                        </dd>
                      </dl>

                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                          Status:
                        </dt>
                        <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                          <svg
                            className="me-1 h-3 w-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18 17.94 6M18 18 6.06 6"
                            />
                          </svg>
                          Cancelled
                        </dd>
                      </dl>

                      <div className="grid w-full gap-4 sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end">
                        <button
                          type="button"
                          className="w-full rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 lg:w-auto"
                        >
                          Order again
                        </button>
                        <a
                          href="."
                          className="inline-flex w-full justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto"
                        >
                          View details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Pagination will be here */}
              </div>
            </div>
          </section>
        </section>

        {/* Quick Links */}
        <section className="mb-8 rounded-sm bg-white p-6 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
          <h2 className="mb-4 text-xl font-semibold">Quick Links</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded bg-gray-50 p-4">
              Favorite Companies/Industries
            </div>
            <div className="rounded bg-gray-50 p-4">Saved Reports</div>
          </div>
        </section>

        {/* Download Center */}
        <section className="mb-8 rounded-sm bg-white p-8 text-gray-800 dark:bg-gray-900 dark:text-gray-50">
          <h2 className="mb-4 text-xl font-bold">Download Center</h2>
          <div className="text-center">
            <button className="rounded bg-indigo-600 px-4 py-2 text-white">
              Download Analytics
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
