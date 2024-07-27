// LandingPage page template from uisual studio code
"use client";

import { DashboardNavbar } from "./dashboard/navbar";

export default function LandingPage() {
  return (
    <>
      <DashboardNavbar />
      <section className="flex h-screen bg-white dark:bg-gray-900">
        {/* Left container */}
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="mx-auto w-full px-6 py-8 lg:py-16">
            <div className="mt-12 w-full border border-gray-100 bg-white dark:border dark:border-gray-700 dark:bg-gray-800">
              <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                  Welcome to PaySight
                </h1>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  At PaySight, our mission is to promote fair and equitable
                  compensation for professionals worldwide.
                </p>
                <div className="flex w-full flex-col items-center gap-4 *:w-full *:px-5 *:py-3 *:text-center *:text-base *:font-medium *:transition *:duration-[250ms] *:ease-in-out lg:flex-row lg:justify-start lg:*:w-auto">
                  <a
                    href="/dashboard"
                    className="border border-gray-100 bg-white text-gray-800 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-50"
                  >
                    View App
                  </a>
                </div>
              </div>
              <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                <img
                  src="/paysightv1.jpg"
                  alt="#"
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right container */}
        <div className="hidden w-full items-center justify-center bg-primary-600 dark:bg-gray-950  lg:flex lg:w-1/2">
          <section className="bg-primary-600 text-gray-50 dark:bg-gray-950 dark:text-gray-50">
            <div className="mx-auto flex max-w-[52.5rem] flex-col items-center gap-y-16 px-6 py-32 lg:max-w-[78rem]">
              <div className="mx-auto max-w-[36.75rem] text-center">
                <h2 className="mb-3 text-3xl font-bold lg:text-4xl">
                  Explore the world’s leading Wages and Salaries Insights
                  Platform
                </h2>
                <p className="text-base">
                  Our platform provides comprehensive insights, tailored to your
                  needs. We provide data-driven insights to help you make better
                  decisions.
                </p>
              </div>
              <div className="flex w-full flex-col items-center gap-12 rounded-lg bg-gray-50 px-6 py-12 dark:bg-gray-900 lg:flex-row lg:justify-center lg:gap-6 lg:px-12">
                <div>
                  <h4 className="mb-2 text-2xl font-bold text-blue-600 lg:text-3xl">
                    500k+
                  </h4>
                  <p className="text-base font-medium text-gray-950 dark:text-gray-50">
                    Monthly Visitors
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-bold text-blue-600 lg:text-3xl">
                    250k+
                  </h4>
                  <p className="text-base font-medium text-gray-950 dark:text-gray-50">
                    Registered Users
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-bold text-blue-600 lg:text-3xl">
                    175k+
                  </h4>
                  <p className="text-base font-medium text-gray-950 dark:text-gray-50">
                    Monthly Reports
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-2xl font-bold text-blue-600 lg:text-3xl">
                    100k+
                  </h4>
                  <p className="text-base font-medium text-gray-950 dark:text-gray-50">
                    Email Subscribers
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <footer className="bg-white dark:bg-gray-950">
        <div className="mx-auto flex flex-col items-center px-6 *:flex *:w-full *:flex-col *:items-center">
          <div className="gap-6 border-b border-solid border-b-gray-200 py-12 dark:border-b-gray-800 lg:flex-row">
            <div className="lg:w-full">
              <a href=".">
                <span className="text-xl font-extrabold text-gray-950 dark:text-white">
                  PAYSIGHT
                </span>
              </a>
            </div>
            <div className="flex flex-col items-center gap-2 *:flex *:items-center *:gap-x-1.5 *:px-2 *:py-1.5 *:text-sm *:font-medium *:text-gray-950 dark:*:text-gray-50 lg:flex-row">
              <a href="/dashboard">
                Features
                <div className="flex rounded-full bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-white">
                  NEW
                </div>
              </a>
              <a href="/dashboard/upgrade">Pricing</a>
              <a href="https://www.linkedin.com/in/joseph-835977a5/">Contact</a>
            </div>
            <div className="flex items-center gap-x-1 *:p-2 lg:w-full lg:justify-end lg:gap-x-6 lg:*:px-0">
              <a href=".">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 256 256"
                  className="fill-gray-950 dark:fill-white"
                >
                  <path d="M128 80a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48Zm0 72a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm48-132H80a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h96a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60Zm36 156a36 36 0 0 1-36 36H80a36 36 0 0 1-36-36V80a36 36 0 0 1 36-36h96a36 36 0 0 1 36 36ZM196 76a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z" />
                </svg>
              </a>
              <a href=".">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 256 256"
                  className="fill-gray-950 dark:fill-white"
                >
                  <path d="m218.12 209.56-61-95.8 59.72-65.69a12 12 0 0 0-17.76-16.14l-55.27 60.84-37.69-59.21A12 12 0 0 0 96 28H48a12 12 0 0 0-10.12 18.44l61 95.8-59.76 65.69a12 12 0 1 0 17.76 16.14l55.31-60.84 37.69 59.21A12 12 0 0 0 160 228h48a12 12 0 0 0 10.12-18.44ZM166.59 204 69.86 52h19.55l96.73 152Z" />
                </svg>
              </a>
              <a href=".">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 256 256"
                  className="fill-gray-950 dark:fill-white"
                >
                  <path d="M216 20H40a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20Zm-4 192H44V44h168Zm-100-36v-56a12 12 0 0 1 21.43-7.41A40 40 0 0 1 192 148v28a12 12 0 0 1-24 0v-28a16 16 0 0 0-32 0v28a12 12 0 0 1-24 0Zm-16-56v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0ZM68 80a16 16 0 1 1 16 16 16 16 0 0 1-16-16Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="gap-y-6 py-8 *:text-sm *:text-gray-500 lg:flex-row lg:justify-between">
            <p>&copy; 2024 PaySight. All rights reserved.</p>
            <div className="flex items-center gap-x-6 *:transition *:duration-[250ms] *:ease-in-out hover:*:text-gray-950 dark:hover:*:text-gray-50">
              <a href=".">Privacy</a>
              <a href=".">Terms</a>
              <a href=".">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
