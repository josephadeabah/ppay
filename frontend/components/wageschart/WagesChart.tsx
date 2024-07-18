"use client";

import ApexCharts from "apexcharts";
import { useEffect, useState } from "react";

export default function WagesChart() {
  const [isDateRangeDropdownOpen, setIsDateRangeDropdownOpen] = useState(false);
  const [isWidgetDropdownOpen, setIsWidgetDropdownOpen] = useState(false);
  const [isLastDaysDropdownOpen, setIsLastDaysDropdownOpen] = useState(false);

  const getChartOptions = () => {
    return {
      series: [52.8, 26.8, 20.4],
      colors: ["#1C64F2", "#16BDCA", "#9061F9"],
      chart: {
        height: 420,
        width: "100%",
        type: "pie",
      },
      stroke: {
        colors: ["white"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          labels: {
            show: true,
          },
          size: "100%",
          dataLabels: {
            offset: -25,
          },
        },
      },
      labels: ["Direct", "Organic search", "Referrals"],
      dataLabels: {
        enabled: true,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      yaxis: {
        labels: {
          formatter: function (value: number) {
            return value + "%";
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value: number) {
            return value + "%";
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    };
  };

  useEffect(() => {
    // Check if ApexCharts and window are defined
    if (typeof window !== "undefined" && typeof ApexCharts !== "undefined") {
      const chart = new ApexCharts(
        document.getElementById("pie-chart"),
        getChartOptions(),
      );
      chart.render();
    }
  }, []);

  const toggleDateRangeDropdown = () => {
    setIsDateRangeDropdownOpen(!isDateRangeDropdownOpen);
  };

  const toggleWidgetDropdown = () => {
    setIsWidgetDropdownOpen(!isWidgetDropdownOpen);
  };

  const toggleLastDaysDropdown = () => {
    setIsLastDaysDropdownOpen(!isLastDaysDropdownOpen);
  };

  useEffect(() => {
    // Function to close dropdowns when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const { target } = event;
      if (
        target instanceof Element &&
        !target.closest("[data-dropdown-ignore-click-outside]")
      ) {
        setIsDateRangeDropdownOpen(false);
        setIsWidgetDropdownOpen(false);
        setIsLastDaysDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:p-6">
      <div className="flex w-full items-start justify-between">
        <div className="flex-col items-center">
          <div className="mb-1 flex items-center">
            <h5 className="me-1 text-xl font-bold leading-none text-gray-900 dark:text-white">
              Wages
            </h5>
            <svg
              data-popover-target="chart-info"
              data-popover-placement="bottom"
              className="ms-1 h-3.5 w-3.5 cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
            </svg>
            <div
              data-popover
              id="chart-info"
              role="tooltip"
              className="invisible absolute z-10 inline-block w-72 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 opacity-0 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
            >
              <div className="space-y-2 p-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Activity growth - Incremental
                </h3>
                <p>
                  Report helps navigate cumulative growth of community
                  activities. Ideally, the chart should have a growing trend, as
                  stagnating chart signifies a significant decrease of community
                  activity.
                </p>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Calculation
                </h3>
                <p>
                  For each date bucket, the all-time volume of activities is
                  calculated. This means that activities in period n contain all
                  activities up to period n, plus the activities generated by
                  your community in period.
                </p>
                <a
                  href="#"
                  className="flex items-center font-medium text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-500 dark:hover:text-blue-600"
                >
                  Read more{" "}
                  <svg
                    className="ms-1.5 h-2 w-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
              <div data-popper-arrow></div>
            </div>
          </div>
        </div>
        <button
          id="dateRangeButton"
          data-dropdown-toggle="dateRangeDropdown"
          data-dropdown-ignore-click-outside
          className="inline-flex items-center font-medium text-blue-700 hover:underline dark:text-blue-600"
          type="button"
          onClick={toggleDateRangeDropdown}
        >
          31 Nov - 31 Dev{" "}
          <svg
            className="ms-2 h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {isDateRangeDropdownOpen && (
          <div
            id="dateRangeDropdown"
            className="absolute z-10 w-80 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700 lg:w-96"
          >
            <div className="p-3" aria-labelledby="dateRangeButton">
              <div
                date-rangepicker
                datepicker-autohide
                className="flex items-center"
              >
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    <svg
                      className="h-4 w-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM2 8V6h16v2Zm8 3H4v2h6Zm10-2h-2v2h2Z" />
                    </svg>
                  </div>
                  <div className="relative">
                    <svg
                      className="h-4 w-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 16a2 2 0 0 0 2 2h2v1a1 1 0 0 0 2 0v-1h3v1a1 1 0 0 0 2 0v-1h3v1a1 1 0 0 0 2 0v-1h2a2 2 0 0 0 2-2v-2H4v2Zm14-4v2H2v-2h16ZM4 8h12v2H4Zm10 5h2v-2h-2Z" />
                    </svg>
                  </div>
                  <input
                    type="date"
                    className="block w-full border-0 border-none bg-transparent py-2 ps-10 text-sm placeholder-gray-400 placeholder-opacity-100 dark:text-white dark:placeholder-gray-500"
                    placeholder="Choose a start date"
                  />
                </div>
                <div className="pe-2 ps-2">—</div>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    <svg
                      className="h-4 w-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM2 8V6h16v2Zm8 3H4v2h6Zm10-2h-2v2h2Z" />
                    </svg>
                  </div>
                  <div className="relative">
                    <svg
                      className="h-4 w-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 16a2 2 0 0 0 2 2h2v1a1 1 0 0 0 2 0v-1h3v1a1 1 0 0 0 2 0v-1h3v1a1 1 0 0 0 2 0v-1h2a2 2 0 0 0 2-2v-2H4v2Zm14-4v2H2v-2h16ZM4 8h12v2H4Zm10 5h2v-2h-2Z" />
                    </svg>
                  </div>
                  <input
                    type="date"
                    className="block w-full border-0 border-none bg-transparent py-2 ps-10 text-sm placeholder-gray-400 placeholder-opacity-100 dark:text-white dark:placeholder-gray-500"
                    placeholder="Choose a end date"
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-outline-primary btn-sm btn-sm-block"
              >
                <svg
                  className="me-2 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                Apply filters
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="relative mt-6">
        <div id="pie-chart" className="overflow-hidden rounded-lg"></div>
      </div>
    </div>
  );
}
