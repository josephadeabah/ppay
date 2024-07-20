// LandingPage page template from uisual studio code
"use client";

import { DashboardNavbar } from "./dashboard/navbar";

const LandingPage = () => {
  return (
    <>
      <header className="bg-white dark:bg-gray-950">
        <DashboardNavbar />
      </header>
      {/* HERO */}
      <section className="bg-primary-600 dark:bg-gray-950 lg:relative lg:flex lg:items-center">
        <div className=" mx-auto flex w-full flex-col items-center gap-y-20 px-6 py-32 lg:items-start lg:px-0">
          <div className="mx-auto flex max-w-[36.75rem] flex-col gap-y-5 lg:mx-0 lg:h-[30rem] lg:w-1/2 lg:max-w-[50%] lg:pl-6 lg:pr-20">
            <img
              alt=""
              src="https://images.pexels.com/photos/9301896/pexels-photo-9301896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-32 w-full rounded-xl object-cover"
            />
            <div className="*:text-gray-50 dark:*:text-gray-50 lg:mt-auto">
              <h1 className="mb-4 text-4xl font-bold xl:text-5xl">
                The Global Wage Transparency Platform.
              </h1>
              <p className="text-lg xl:text-xl">
                With data-driven recommendations and insights, We build trust
                and improve employer-employee relationships.
              </p>
            </div>
            <div className="flex w-full flex-col items-center gap-4 *:w-full *:rounded-lg *:px-5 *:py-3 *:text-center *:text-base *:font-medium *:transition *:duration-[250ms] *:ease-in-out lg:flex-row lg:justify-start lg:*:w-auto">
              <a
                href="/dashboard"
                className="bg-black text-white hover:bg-blue-700"
              >
                View App
              </a>
              <a
                href="https://www.pnpmmedia.com/articles/paysight-global-wages-and-salary-transparency-platform"
                className="bg-white text-gray-950 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-gray-950 dark:text-gray-50 dark:ring-gray-800 dark:hover:bg-gray-900"
              >
                Learn More
              </a>
            </div>
          </div>
          <img
            src="/paysightv1.jpg"
            alt="#"
            className="h-auto w-full rounded-3xl object-contain lg:hidden"
          />
        </div>
        <img
          src="/paysightv1.jpg"
          alt="#"
          className="hidden bg-white lg:absolute lg:right-0 lg:block lg:h-[30rem] lg:w-1/2 lg:rounded-bl-3xl lg:rounded-tl-3xl lg:object-contain"
        />
      </section>
      {/* FEATURES */}
      <section className="bg-white dark:bg-gray-950">
        <div className="mx-auto flex max-w-[52.5rem] flex-col items-center gap-y-16 px-6 py-32  lg:max-w-[78rem]">
          <div className="mx-auto max-w-[36.75rem] text-center *:text-gray-950 dark:*:text-gray-50">
            <h2 className="mb-3 text-3xl font-bold lg:text-4xl">
              Why Choose Paysight?
            </h2>
            <p className="text-base">
              We provide key data-driven insights that are crucial to provide
              value to both employees and employers with the listed below tools
              and analyzers
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-6 text-base *:w-full *:rounded-lg *:border *:border-solid *:border-gray-200 dark:*:border-gray-800 lg:max-w-[49.5rem]">
            <details className="group *:text-gray-950 dark:*:text-gray-50">
              <summary className="flex cursor-pointer list-none flex-row items-center gap-x-6 p-6 *:transition *:duration-[250ms] *:ease-in-out hover:text-blue-600 [&::-webkit-details-marker]:hidden">
                <p className="w-full font-bold">Data Privacy and Security</p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                  className="fill-gray-500 group-open:rotate-180"
                >
                  <path d="m216.49 104.49-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z" />
                </svg>
              </summary>
              <p className="-mt-3 pb-6 pl-6 pr-[4.25rem]">
                * We have strong data protection measures to ensure the
                confidentiality and security of sensitive information
              </p>
            </details>
            <details className="group *:text-gray-950 dark:*:text-gray-50">
              <summary className="flex cursor-pointer list-none flex-row items-center gap-x-6 p-6 *:transition *:duration-[250ms] *:ease-in-out hover:text-blue-600 [&::-webkit-details-marker]:hidden">
                <p className="w-full font-bold">
                  Salary and Compensation Reporting tools
                </p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                  className="fill-gray-500 group-open:rotate-180"
                >
                  <path d="m216.49 104.49-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z" />
                </svg>
              </summary>
              <p className="-mt-3 pb-6 pl-6 pr-[4.25rem]">
                <p className="text-base text-gray-950 dark:text-gray-50">
                  * Employers can anonymously report aggregate salary data to
                  provide industry benchmarks
                </p>
                <p className="text-base text-gray-950 dark:text-gray-50">
                  * Employees can anonymously report their salary information
                  and compare it with industry benchmarks
                </p>
              </p>
            </details>
            <details className="group *:text-gray-950 dark:*:text-gray-50">
              <summary className="flex cursor-pointer list-none flex-row items-center gap-x-6 p-6 *:transition *:duration-[250ms] *:ease-in-out hover:text-blue-600 [&::-webkit-details-marker]:hidden">
                <p className="w-full font-bold">
                  Market Salary Benchmark Analyzers
                </p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                  className="fill-gray-500 group-open:rotate-180"
                >
                  <path d="m216.49 104.49-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z" />
                </svg>
              </summary>
              <p className="-mt-3 pb-6 pl-6 pr-[4.25rem]">
                <p className="text-base text-gray-950 dark:text-gray-50">
                  * Data on average salaries, industry benchmarks, and regional
                  variations to help employees negotiate fair wages aligned with
                  market standards.
                </p>
                <p className="text-base text-gray-950 dark:text-gray-50">
                  * Employees can compare their current salaries against market
                  averages to ensure they're being compensated fairly.
                </p>
              </p>
            </details>
            <details className="group *:text-gray-950 dark:*:text-gray-50">
              <summary className="flex cursor-pointer list-none flex-row items-center gap-x-6 p-6 *:transition *:duration-[250ms] *:ease-in-out hover:text-blue-600 [&::-webkit-details-marker]:hidden">
                <p className="w-full font-bold">
                  Internal Pay Equity Analyzers
                </p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                  className="fill-gray-500 group-open:rotate-180"
                >
                  <path d="m216.49 104.49-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z" />
                </svg>
              </summary>
              <p className="-mt-3 pb-6 pl-6 pr-[4.25rem]">
                <p className="text-base text-gray-950 dark:text-gray-50">
                  * Analysis of pay gaps within companies based on factors like
                  role and experience
                </p>
                <p className="text-base text-gray-950 dark:text-gray-50">
                  * Employers can identify disparities and take corrective
                  actions to ensure equitable pay practices
                </p>
              </p>
            </details>
            <details className="group *:text-gray-950 dark:*:text-gray-50">
              <summary className="flex cursor-pointer list-none flex-row items-center gap-x-6 p-6 *:transition *:duration-[250ms] *:ease-in-out hover:text-blue-600 [&::-webkit-details-marker]:hidden">
                <p className="w-full font-bold"> Trend Analyzers</p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                  className="fill-gray-500 group-open:rotate-180"
                >
                  <path d="m216.49 104.49-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z" />
                </svg>
              </summary>
              <p className="-mt-3 pb-6 pl-6 pr-[4.25rem]">
                <p className="text-base text-gray-950 dark:text-gray-50">
                  * Identification of salary trends over time, considering
                  factors like inflation, industry growth, or economic
                  conditions
                </p>
                <p className="text-base text-gray-950 dark:text-gray-50">
                  * Both employees and employers can make informed decisions
                  regarding salary adjustments or negotiations based on current
                  trends
                </p>
              </p>
            </details>
            <details className="group *:text-gray-950 dark:*:text-gray-50">
              <summary className="flex cursor-pointer list-none flex-row items-center gap-x-6 p-6 *:transition *:duration-[250ms] *:ease-in-out hover:text-blue-600 [&::-webkit-details-marker]:hidden">
                <p className="w-full font-bold">
                  {" "}
                  Cost of Living Adjustment Analyzers
                </p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                  className="fill-gray-500 group-open:rotate-180"
                >
                  <path d="m216.49 104.49-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z" />
                </svg>
              </summary>
              <p className="-mt-3 pb-6 pl-6 pr-[4.25rem]">
                <p className="text-base text-gray-950 dark:text-gray-50">
                  * Data on regional cost of living variations to adjust salary
                  expectations accordingly.
                </p>
                <p className="text-base text-gray-950 dark:text-gray-50">
                  * Employers can offer competitive salaries that reflect the
                  local cost of living, improving employee satisfaction and
                  retention
                </p>
              </p>
            </details>
            <details className="group *:text-gray-950 dark:*:text-gray-50">
              <summary className="flex cursor-pointer list-none flex-row items-center gap-x-6 p-6 *:transition *:duration-[250ms] *:ease-in-out hover:text-blue-600 [&::-webkit-details-marker]:hidden">
                <p className="w-full font-bold">
                  {" "}
                  Performance and Compensation Correlation Analyzers
                </p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                  className="fill-gray-500 group-open:rotate-180"
                >
                  <path d="m216.49 104.49-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z" />
                </svg>
              </summary>
              <p className="-mt-3 pb-6 pl-6 pr-[4.25rem]">
                <p className="text-base text-gray-950 dark:text-gray-50">
                  * Analysis of how performance metrics correlate with
                  compensation levels within organizations
                </p>
                <p className="text-base text-gray-950 dark:text-gray-50">
                  * Employers can align performance reviews and compensation
                  decisions more objectively, rewarding high performers
                  appropriately
                </p>
              </p>
            </details>
            <details className="group *:text-gray-950 dark:*:text-gray-50">
              <summary className="flex cursor-pointer list-none flex-row items-center gap-x-6 p-6 *:transition *:duration-[250ms] *:ease-in-out hover:text-blue-600 [&::-webkit-details-marker]:hidden">
                <p className="w-full font-bold">
                  {" "}
                  Benefits and Perks Analyzers
                </p>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                  className="fill-gray-500 group-open:rotate-180"
                >
                  <path d="m216.49 104.49-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z" />
                </svg>
              </summary>
              <p className="-mt-3 pb-6 pl-6 pr-[4.25rem]">
                <p className="text-base text-gray-950 dark:text-gray-50">
                  * Data on common benefits and perks offered in similar roles
                  or industries
                </p>
                <p className="text-base text-gray-950 dark:text-gray-50">
                  * Employers can enhance their compensation packages with
                  competitive benefits, attracting and retaining top talent
                </p>
              </p>
            </details>
          </div>
        </div>
      </section>
      {/* PRICING */}
      <section className="bg-white dark:bg-gray-950">
        <div className="mx-auto flex max-w-[52.5rem] flex-col items-center gap-y-16 px-6 py-32 lg:max-w-[78rem]">
          <div className="mx-auto max-w-[36.75rem] text-center *:text-gray-950 dark:*:text-gray-50">
            <h1 className="mb-4 text-4xl font-bold xl:text-5xl">Pricing</h1>
            <p className="text-base">
              Choose a plan that's right for you. No hidden fees. Cancel
              anytime.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 rounded-xl bg-gray-50 p-2 text-gray-950 *:flex *:w-full *:flex-col *:gap-6 *:p-6 dark:bg-gray-900 dark:text-gray-50 md:flex-row lg:max-w-[49.5rem] lg:*:p-12">
            <div className="*:w-full">
              <div className="flex flex-col gap-4">
                <p className="text-base font-bold">Basic</p>
                <p className="text-3xl font-bold lg:text-4xl">
                  $0
                  <span className="text-sm font-normal text-gray-700 dark:text-gray-300">
                    / month
                  </span>
                </p>
                <p className="text-base">Free of Charge</p>
              </div>
              <a
                href="."
                className="w-full rounded-lg bg-white px-5 py-3 text-center text-base font-medium text-gray-950 ring-1 ring-gray-200 transition duration-[250ms] ease-in-out hover:bg-gray-50 dark:bg-gray-950 dark:text-gray-50 dark:ring-gray-800 dark:hover:bg-gray-900"
              >
                Get Started
              </a>
              <div className="flex flex-col gap-4 *:flex *:gap-3">
                <div>
                  <div className="py-1">
                    <div className="rounded-full bg-blue-600 p-0.5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 256 256"
                        className="fill-white"
                      >
                        <path d="m232.49 80.49-128 128a12 12 0 0 1-17 0l-56-56a12 12 0 1 1 17-17L96 183 215.51 63.51a12 12 0 0 1 17 17Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base">Basic Salary Data Access</p>
                </div>
                <div>
                  <div className="py-1">
                    <div className="rounded-full bg-blue-600 p-0.5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 256 256"
                        className="fill-white"
                      >
                        <path d="m232.49 80.49-128 128a12 12 0 0 1-17 0l-56-56a12 12 0 1 1 17-17L96 183 215.51 63.51a12 12 0 0 1 17 17Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base">Anonymous Aggregate Reporting</p>
                </div>
                <div>
                  <div className="py-1">
                    <div className="rounded-full bg-blue-600 p-0.5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 256 256"
                        className="fill-white"
                      >
                        <path d="m232.49 80.49-128 128a12 12 0 0 1-17 0l-56-56a12 12 0 1 1 17-17L96 183 215.51 63.51a12 12 0 0 1 17 17Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base">
                    Basic Benefits and Perks Information
                  </p>
                </div>
                <div>
                  <div className="py-1">
                    <div className="rounded-full bg-blue-600 p-0.5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 256 256"
                        className="fill-white"
                      >
                        <path d="m232.49 80.49-128 128a12 12 0 0 1-17 0l-56-56a12 12 0 1 1 17-17L96 183 215.51 63.51a12 12 0 0 1 17 17Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base">Negotiation Support templates</p>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="rounded-lg border border-solid border-gray-200 bg-white shadow-lg *:w-full dark:border-gray-800 dark:bg-gray-950">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-base font-bold">Premium</p>
                  <p className="rounded-full bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-white">
                    Most Popular
                  </p>
                </div>
                <p className="text-3xl font-bold lg:text-4xl">
                  $15.00
                  <span className="text-sm font-normal text-gray-700 dark:text-gray-300">
                    {" "}
                    / month
                  </span>
                </p>
                <p className="text-base">Basic + All the below</p>
              </div>
              <a
                href="."
                className="w-full rounded-lg bg-blue-600 px-5 py-3 text-center text-base font-medium text-white transition duration-[250ms] ease-in-out hover:bg-blue-700"
              >
                Get Started
              </a>
              <div className="flex flex-col gap-4 *:flex *:gap-3">
                <div>
                  <div className="py-1">
                    <div className="rounded-full bg-blue-600 p-0.5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 256 256"
                        className="fill-white"
                      >
                        <path d="m232.49 80.49-128 128a12 12 0 0 1-17 0l-56-56a12 12 0 1 1 17-17L96 183 215.51 63.51a12 12 0 0 1 17 17Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base">Internal Pay Equity Analysis</p>
                </div>
                <div>
                  <div className="py-1">
                    <div className="rounded-full bg-blue-600 p-0.5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 256 256"
                        className="fill-white"
                      >
                        <path d="m232.49 80.49-128 128a12 12 0 0 1-17 0l-56-56a12 12 0 1 1 17-17L96 183 215.51 63.51a12 12 0 0 1 17 17Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base">
                    Performance and Compensation Correlation Tools
                  </p>
                </div>
                <div>
                  <div className="py-1">
                    <div className="rounded-full bg-blue-600 p-0.5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 256 256"
                        className="fill-white"
                      >
                        <path d="m232.49 80.49-128 128a12 12 0 0 1-17 0l-56-56a12 12 0 1 1 17-17L96 183 215.51 63.51a12 12 0 0 1 17 17Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base">Compliance Monitoring Tools</p>
                </div>
                <div>
                  <div className="py-1">
                    <div className="rounded-full bg-blue-600 p-0.5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 256 256"
                        className="fill-white"
                      >
                        <path d="m232.49 80.49-128 128a12 12 0 0 1-17 0l-56-56a12 12 0 1 1 17-17L96 183 215.51 63.51a12 12 0 0 1 17 17Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base">
                    Advanced Data Insights and Analytics
                  </p>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <p className="mx-auto max-w-[36.75rem] text-center text-sm text-gray-500">
            No credit card required. No hidden fees.
          </p>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row">
        {/* FAQ */}
        <section className="w-full bg-slate-50 dark:bg-gray-800 lg:w-1/2">
          <div className="mx-auto flex w-full flex-col items-center gap-y-16 px-6 py-8">
            <div className="mx-auto max-w-[36.75rem] text-center text-gray-950 dark:text-gray-50">
              <h2 className="mb-3 text-3xl font-bold lg:text-4xl">
                About PaySight
              </h2>
            </div>
            <div className="flex w-full flex-col gap-6 rounded-lg border border-solid border-gray-200 text-base dark:border-gray-800  lg:max-w-[49.5rem]">
              <details className="group text-gray-950 dark:text-gray-50">
                <summary className="flex cursor-pointer list-none flex-row items-center gap-x-6 p-6 transition duration-[250ms] ease-in-out hover:text-blue-600 [&::-webkit-details-marker]:hidden">
                  <p className="w-full font-bold">Why Us?</p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                    className="fill-gray-500 group-open:rotate-180"
                  >
                    <path d="m216.49 104.49-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z" />
                  </svg>
                </summary>
                <p className="-mt-3 pb-6 pl-6 pr-[4.25rem]">
                  Most Professionals across the world are often compensated less
                  and most especially on the part of their counterparts in the
                  developing world, despite most times doing the same job and in
                  the same company or otherwise.
                </p>
              </details>
              <details className="group text-gray-950 dark:text-gray-50">
                <summary className="flex cursor-pointer list-none flex-row items-center gap-x-6 p-6 transition duration-[250ms] ease-in-out hover:text-blue-600 [&::-webkit-details-marker]:hidden">
                  <p className="w-full font-bold">The Issue</p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                    className="fill-gray-500 group-open:rotate-180"
                  >
                    <path d="m216.49 104.49-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z" />
                  </svg>
                </summary>
                <p className="-mt-3 pb-6 pl-6 pr-[4.25rem]">
                  This pay disparity, known as &rsquo;geographic pay
                  discrimination&rsquo; or &rsquo;pay arbitrage&rsquo;, is
                  unfair and driven by market forces exploiting employees and
                  lower living costs and weaker labor protections in developing
                  countries.
                </p>
              </details>
              <details className="group text-gray-950 dark:text-gray-50">
                <summary className="flex cursor-pointer list-none flex-row items-center gap-x-6 p-6 transition duration-[250ms] ease-in-out hover:text-blue-600 [&::-webkit-details-marker]:hidden">
                  <p className="w-full font-bold">The Solution</p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 256 256"
                    className="fill-gray-500 group-open:rotate-180"
                  >
                    <path d="m216.49 104.49-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z" />
                  </svg>
                </summary>
                <p className="-mt-3 pb-6 pl-6 pr-[4.25rem]">
                  PaySight is a platform where Professionals can anonymously
                  report their job data to compare pay and other data across
                  different countries. The tool compares wages across countries,
                  industries, companies and organizations, providing fair wage
                  recommendations. It also tracks inflation and other data,
                  adjusting pay accordingly and ensuring fair pay for all.
                </p>
              </details>
            </div>
            <p className="mx-auto max-w-[36.75rem] text-center text-sm text-gray-700 dark:text-gray-300">
              Have more questions?{" "}
              <a
                href="."
                className="font-medium text-blue-600 transition duration-[250ms] ease-in-out hover:text-blue-700"
              >
                Send us an email
              </a>
              .
            </p>
          </div>
        </section>
        {/* CTA */}
        <section className="w-full bg-white dark:bg-gray-950 lg:w-1/2">
          <div className="mx-auto w-full bg-slate-50 px-6  py-32 dark:bg-gray-800">
            <div className="mx-auto flex flex-col items-center gap-6 rounded-lg bg-gray-50 px-6 py-20 dark:bg-gray-900 lg:px-20">
              <div className="w-full max-w-[36.75rem] text-center text-gray-950 dark:text-gray-50">
                <h3 className="mb-3 text-2xl font-bold xl:text-3xl">
                  Ready to get started?
                </h3>
                <p className="text-base">
                  PaySight is free to use. Start by getting an account.
                </p>
              </div>
              <div className="flex w-full w-full max-w-[36.75rem] flex-col items-center justify-center gap-4 rounded-lg px-5 py-3 text-center text-base font-medium transition duration-[250ms] ease-in-out lg:w-auto lg:max-w-fit lg:flex-row">
                <a
                  href="."
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Get Started
                </a>
                <a
                  href="."
                  className="rounded-lg bg-white px-4 py-2 text-gray-950 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-gray-950 dark:text-gray-50 dark:ring-gray-800 dark:hover:bg-gray-900"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* TESTIMONIALS */}
      <section className="bg-white dark:bg-gray-950">
        <div className="mx-auto px-6 py-32">
          <div className="flex flex-col gap-6 *:flex *:flex-col *:gap-y-12 *:rounded-lg *:bg-gray-50 *:p-12 dark:*:bg-gray-900 lg:flex-row">
            <figure>
              <blockquote className="text-lg text-gray-950 dark:text-gray-50 lg:text-xl">
                “Paysight is a great tool. I use it every day. It’s easy to use
                and the results are great.”
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div className="w-full lg:order-2">
                  <p className="mb-1 text-base font-semibold text-gray-950 dark:text-gray-50">
                    Axl Newell
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Founder, Virtual
                  </p>
                </div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjlGQUZCIi8+CjxwYXRoIGQ9Ik0zNy4zMzMzIDM2QzM0LjM4NzggMzYgMzIgMzguMzg3OCAzMiA0MS4zMzMzVjY4QzMyIDg1LjY3MzEgNDYuMzI2OSAxMDAgNjQgMTAwQzY2LjQyMDMgMTAwIDY4Ljc3NzkgOTkuNzMxMyA3MS4wNDQ1IDk5LjIyMjFDNzMuMjQ5OSA5OC43MjY2IDc0LjY2NjcgOTYuNjY3OSA3NC42NjY3IDk0LjQwNzVWODkuMzMzM0M3NC42NjY3IDgzLjQ0MjMgNzkuNDQyMyA3OC42NjY3IDg1LjMzMzMgNzguNjY2N0g5MC42NjY3QzkzLjYxMjIgNzguNjY2NyA5NiA3Ni4yNzg5IDk2IDczLjMzMzNWNDEuMzMzM0M5NiAzOC4zODc4IDkzLjYxMjIgMzYgOTAuNjY2NyAzNkg4MEM3Ny4wNTQ1IDM2IDc0LjY2NjcgMzguMzg3OCA3NC42NjY3IDQxLjMzMzNWNjhDNzQuNjY2NyA3My44OTEgNjkuODkxIDc4LjY2NjcgNjQgNzguNjY2N0M1OC4xMDkgNzguNjY2NyA1My4zMzMzIDczLjg5MSA1My4zMzMzIDY4VjQxLjMzMzNDNTMuMzMzMyAzOC4zODc4IDUwLjk0NTUgMzYgNDggMzZIMzcuMzMzM1oiIGZpbGw9IiM4MjhGQTAiLz4KPC9zdmc+Cg=="
                  alt="#"
                  className="size-12 rounded-full border border-solid border-gray-200 dark:border-gray-800 lg:order-1"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 125 24"
                  width="125"
                  height="24"
                  className="hidden lg:order-3 lg:block"
                >
                  <g>
                    <path
                      d="M 36 6 C 36 9.314 27.941 12 18 12 C 8.059 12 0 9.314 0 6 L 0 18 C 0 21.314 8.059 24 18 24 C 27.941 24 36 21.314 36 18 Z"
                      fill="rgb(100,45,251)"
                    ></path>
                    <path
                      d="M 28 10.99 C 32.824 9.913 36 8.08 36 6 C 36 3.92 32.824 2.087 28 1.01 Z"
                      fill="rgb(34,9,108)"
                    ></path>
                    <path
                      d="M 8 10.99 C 3.176 9.913 0 8.08 0 6 C 0 3.92 3.176 2.087 8 1.01 Z"
                      fill="rgb(34,9,108)"
                    ></path>
                  </g>
                  <g className="dark:*:fill-gray-50">
                    <path
                      d="M 51.284 3.545 L 55.188 16.329 L 55.332 16.329 L 59.236 3.545 L 63.957 3.545 L 58.068 21 L 52.452 21 L 46.563 3.545 Z"
                      fill="rgb(15, 18, 20)"
                    ></path>
                    <path
                      d="M 65.357 21 L 65.357 7.909 L 69.524 7.909 L 69.524 21 Z M 67.445 6.384 C 66.859 6.384 66.357 6.19 65.936 5.804 C 65.516 5.412 65.305 4.94 65.305 4.389 C 65.305 3.844 65.516 3.378 65.936 2.991 C 66.357 2.599 66.859 2.403 67.445 2.403 C 68.036 2.403 68.538 2.599 68.953 2.991 C 69.374 3.378 69.584 3.844 69.584 4.389 C 69.584 4.94 69.374 5.412 68.953 5.804 C 68.538 6.19 68.036 6.384 67.445 6.384 Z"
                      fill="rgb(15, 18, 20)"
                    ></path>
                    <path
                      d="M 71.697 21 L 71.697 7.909 L 75.745 7.909 L 75.745 10.296 L 75.882 10.296 C 76.12 9.432 76.51 8.79 77.049 8.369 C 77.589 7.943 78.217 7.73 78.933 7.73 C 79.126 7.73 79.325 7.744 79.529 7.773 C 79.734 7.795 79.924 7.832 80.1 7.884 L 80.1 11.506 C 79.901 11.438 79.64 11.383 79.316 11.344 C 78.998 11.304 78.714 11.284 78.464 11.284 C 77.97 11.284 77.524 11.395 77.126 11.617 C 76.734 11.832 76.424 12.136 76.197 12.528 C 75.975 12.915 75.865 13.369 75.865 13.892 L 75.865 21 Z"
                      fill="rgb(15, 18, 20)"
                    ></path>
                    <path
                      d="M 89.317 7.909 L 89.317 10.977 L 81.059 10.977 L 81.059 7.909 Z M 82.789 4.773 L 86.956 4.773 L 86.956 16.884 C 86.956 17.139 86.996 17.347 87.076 17.506 C 87.161 17.659 87.283 17.77 87.442 17.838 C 87.601 17.901 87.791 17.932 88.013 17.932 C 88.172 17.932 88.34 17.918 88.516 17.889 C 88.698 17.855 88.834 17.827 88.925 17.804 L 89.556 20.813 C 89.357 20.869 89.076 20.94 88.712 21.026 C 88.354 21.111 87.925 21.165 87.425 21.188 C 86.448 21.233 85.61 21.119 84.911 20.847 C 84.218 20.568 83.686 20.136 83.317 19.551 C 82.953 18.966 82.777 18.23 82.789 17.344 Z"
                      fill="rgb(15, 18, 20)"
                    ></path>
                    <path
                      d="M 99.409 15.349 L 99.409 7.909 L 103.569 7.909 L 103.569 21 L 99.597 21 L 99.597 18.563 L 99.461 18.563 C 99.171 19.364 98.677 20 97.978 20.472 C 97.284 20.938 96.447 21.171 95.463 21.171 C 94.572 21.171 93.787 20.966 93.111 20.557 C 92.435 20.148 91.909 19.577 91.534 18.844 C 91.159 18.105 90.969 17.241 90.963 16.253 L 90.963 7.909 L 95.131 7.909 L 95.131 15.435 C 95.137 16.145 95.324 16.704 95.694 17.114 C 96.063 17.523 96.566 17.727 97.202 17.727 C 97.617 17.727 97.989 17.636 98.319 17.454 C 98.654 17.267 98.918 16.997 99.111 16.645 C 99.31 16.287 99.409 15.855 99.409 15.349 Z"
                      fill="rgb(15, 18, 20)"
                    ></path>
                    <path
                      d="M 109.432 21.222 C 108.596 21.222 107.855 21.082 107.207 20.804 C 106.565 20.52 106.057 20.094 105.682 19.526 C 105.312 18.952 105.128 18.233 105.128 17.369 C 105.128 16.642 105.256 16.028 105.511 15.528 C 105.767 15.028 106.119 14.622 106.568 14.31 C 107.017 13.997 107.534 13.761 108.119 13.602 C 108.704 13.438 109.329 13.327 109.994 13.27 C 110.738 13.202 111.338 13.131 111.792 13.057 C 112.247 12.977 112.577 12.867 112.781 12.724 C 112.991 12.577 113.096 12.369 113.096 12.102 L 113.096 12.06 C 113.096 11.622 112.946 11.284 112.645 11.046 C 112.344 10.807 111.937 10.688 111.426 10.688 C 110.875 10.688 110.432 10.807 110.096 11.046 C 109.761 11.284 109.548 11.614 109.457 12.034 L 105.613 11.898 C 105.727 11.102 106.02 10.392 106.491 9.767 C 106.969 9.136 107.622 8.642 108.452 8.284 C 109.287 7.92 110.29 7.739 111.46 7.739 C 112.295 7.739 113.065 7.838 113.77 8.037 C 114.474 8.23 115.088 8.514 115.611 8.889 C 116.133 9.259 116.537 9.713 116.821 10.253 C 117.111 10.793 117.256 11.409 117.256 12.102 L 117.256 21 L 113.335 21 L 113.335 19.176 L 113.233 19.176 C 113 19.619 112.702 19.994 112.338 20.301 C 111.98 20.608 111.557 20.838 111.068 20.991 C 110.585 21.145 110.04 21.222 109.432 21.222 Z M 110.719 18.494 C 111.167 18.494 111.571 18.403 111.929 18.222 C 112.292 18.04 112.582 17.79 112.798 17.472 C 113.014 17.148 113.122 16.773 113.122 16.347 L 113.122 15.102 C 113.003 15.165 112.858 15.222 112.687 15.273 C 112.523 15.324 112.341 15.372 112.142 15.418 C 111.943 15.463 111.738 15.503 111.528 15.537 C 111.318 15.571 111.116 15.602 110.923 15.631 C 110.531 15.693 110.196 15.79 109.917 15.92 C 109.645 16.051 109.435 16.222 109.287 16.432 C 109.145 16.636 109.074 16.881 109.074 17.165 C 109.074 17.597 109.227 17.926 109.534 18.153 C 109.846 18.381 110.241 18.494 110.719 18.494 Z"
                      fill="rgb(15, 18, 20)"
                    ></path>
                    <path
                      d="M 123.491 3.545 L 123.491 21 L 119.324 21 L 119.324 3.545 Z"
                      fill="rgb(15, 18, 20)"
                    ></path>
                  </g>
                </svg>
              </figcaption>
            </figure>
            <figure>
              <blockquote className="text-lg text-gray-950 dark:text-gray-50 lg:text-xl">
                “Paysight is the best. It saves me time and money and gives
                valuable insights. I recommend Paysight to all”
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div className="w-full lg:order-2">
                  <p className="mb-1 text-base font-semibold text-gray-950 dark:text-gray-50">
                    Ava Newell
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Founder, Silicon
                  </p>
                </div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjlGQUZCIi8+CjxwYXRoIGQ9Ik0zNy4zMzMzIDM2QzM0LjM4NzggMzYgMzIgMzguMzg3OCAzMiA0MS4zMzMzVjY4QzMyIDg1LjY3MzEgNDYuMzI2OSAxMDAgNjQgMTAwQzY2LjQyMDMgMTAwIDY4Ljc3NzkgOTkuNzMxMyA3MS4wNDQ1IDk5LjIyMjFDNzMuMjQ5OSA5OC43MjY2IDc0LjY2NjcgOTYuNjY3OSA3NC42NjY3IDk0LjQwNzVWODkuMzMzM0M3NC42NjY3IDgzLjQ0MjMgNzkuNDQyMyA3OC42NjY3IDg1LjMzMzMgNzguNjY2N0g5MC42NjY3QzkzLjYxMjIgNzguNjY2NyA5NiA3Ni4yNzg5IDk2IDczLjMzMzNWNDEuMzMzM0M5NiAzOC4zODc4IDkzLjYxMjIgMzYgOTAuNjY2NyAzNkg4MEM3Ny4wNTQ1IDM2IDc0LjY2NjcgMzguMzg3OCA3NC42NjY3IDQxLjMzMzNWNjhDNzQuNjY2NyA3My44OTEgNjkuODkxIDc4LjY2NjcgNjQgNzguNjY2N0M1OC4xMDkgNzguNjY2NyA1My4zMzMzIDczLjg5MSA1My4zMzMzIDY4VjQxLjMzMzNDNTMuMzMzMyAzOC4zODc4IDUwLjk0NTUgMzYgNDggMzZIMzcuMzMzM1oiIGZpbGw9IiM4MjhGQTAiLz4KPC9zdmc+Cg=="
                  alt="#"
                  className="size-12 rounded-full border border-solid border-gray-200 dark:border-gray-800 lg:order-1"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 110 24"
                  width="110"
                  height="24"
                  className="hidden lg:order-3 lg:block"
                >
                  <g>
                    <path
                      d="M 0 24 L 0 0 L 24 0 L 24 24 Z"
                      fill="transparent"
                    ></path>
                    <path
                      d="M 5.5 0 C 5.5 3.038 3.038 5.5 0 5.5 L 0 6.5 C 3.038 6.5 5.5 8.962 5.5 12 C 5.5 15.038 3.038 17.5 0 17.5 L 0 18.5 C 3.038 18.5 5.5 20.962 5.5 24 L 6.5 24 C 6.5 20.962 8.962 18.5 12 18.5 C 15.038 18.5 17.5 20.962 17.5 24 L 18.5 24 C 18.5 20.962 20.962 18.5 24 18.5 L 24 17.5 C 20.962 17.5 18.5 15.038 18.5 12 C 18.5 8.962 20.962 6.5 24 6.5 L 24 5.5 C 20.962 5.5 18.5 3.038 18.5 0 L 17.5 0 C 17.5 3.038 15.038 5.5 12 5.5 C 8.962 5.5 6.5 3.038 6.5 0 Z"
                      fill="rgb(220,38,38)"
                    ></path>
                  </g>
                  <g className="dark:*:fill-gray-50">
                    <path
                      d="M 42.756 8.778 C 42.699 8.153 42.446 7.668 41.997 7.321 C 41.554 6.969 40.92 6.793 40.097 6.793 C 39.551 6.793 39.097 6.864 38.733 7.006 C 38.369 7.148 38.097 7.344 37.915 7.594 C 37.733 7.838 37.639 8.119 37.633 8.438 C 37.622 8.699 37.673 8.929 37.787 9.128 C 37.906 9.327 38.077 9.503 38.298 9.656 C 38.526 9.804 38.798 9.935 39.117 10.048 C 39.435 10.162 39.793 10.261 40.19 10.347 L 41.69 10.688 C 42.554 10.875 43.315 11.125 43.974 11.438 C 44.639 11.75 45.196 12.122 45.645 12.554 C 46.099 12.986 46.443 13.483 46.676 14.046 C 46.909 14.608 47.028 15.239 47.034 15.938 C 47.028 17.04 46.75 17.986 46.199 18.776 C 45.648 19.565 44.855 20.171 43.821 20.591 C 42.793 21.011 41.551 21.222 40.097 21.222 C 38.636 21.222 37.364 21.003 36.278 20.565 C 35.193 20.128 34.349 19.463 33.747 18.571 C 33.145 17.679 32.835 16.551 32.818 15.188 L 36.858 15.188 C 36.892 15.75 37.043 16.219 37.31 16.594 C 37.577 16.969 37.943 17.253 38.409 17.446 C 38.881 17.639 39.426 17.736 40.045 17.736 C 40.614 17.736 41.097 17.659 41.494 17.506 C 41.898 17.352 42.207 17.139 42.423 16.866 C 42.639 16.594 42.75 16.281 42.756 15.929 C 42.75 15.599 42.648 15.318 42.449 15.085 C 42.25 14.847 41.943 14.642 41.528 14.472 C 41.119 14.296 40.597 14.133 39.96 13.986 L 38.136 13.56 C 36.625 13.213 35.435 12.653 34.565 11.881 C 33.696 11.102 33.264 10.051 33.27 8.727 C 33.264 7.648 33.554 6.702 34.139 5.889 C 34.724 5.077 35.534 4.443 36.568 3.989 C 37.602 3.534 38.781 3.307 40.105 3.307 C 41.457 3.307 42.631 3.537 43.625 3.997 C 44.625 4.452 45.401 5.091 45.952 5.915 C 46.503 6.739 46.784 7.693 46.795 8.778 Z"
                      fill="rgb(15, 18, 20)"
                    ></path>
                    <path
                      d="M 48.685 21 L 48.685 7.909 L 52.852 7.909 L 52.852 21 Z M 50.773 6.384 C 50.188 6.384 49.685 6.19 49.264 5.804 C 48.844 5.412 48.634 4.94 48.634 4.389 C 48.634 3.844 48.844 3.378 49.264 2.991 C 49.685 2.599 50.188 2.403 50.773 2.403 C 51.364 2.403 51.867 2.599 52.281 2.991 C 52.702 3.378 52.912 3.844 52.912 4.389 C 52.912 4.94 52.702 5.412 52.281 5.804 C 51.867 6.19 51.364 6.384 50.773 6.384 Z"
                      fill="rgb(15, 18, 20)"
                    ></path>
                    <path
                      d="M 59.193 3.545 L 59.193 21 L 55.025 21 L 55.025 3.545 Z"
                      fill="rgb(15, 18, 20)"
                    ></path>
                    <path
                      d="M 61.365 21 L 61.365 7.909 L 65.533 7.909 L 65.533 21 Z M 63.453 6.384 C 62.868 6.384 62.365 6.19 61.945 5.804 C 61.525 5.412 61.314 4.94 61.314 4.389 C 61.314 3.844 61.525 3.378 61.945 2.991 C 62.365 2.599 62.868 2.403 63.453 2.403 C 64.044 2.403 64.547 2.599 64.962 2.991 C 65.382 3.378 65.593 3.844 65.593 4.389 C 65.593 4.94 65.382 5.412 64.962 5.804 C 64.547 6.19 64.044 6.384 63.453 6.384 Z"
                      fill="rgb(15, 18, 20)"
                    ></path>
                    <path
                      d="M 73.817 21.247 C 72.436 21.247 71.251 20.963 70.263 20.395 C 69.28 19.827 68.524 19.037 67.996 18.026 C 67.467 17.009 67.203 15.832 67.203 14.497 C 67.203 13.156 67.467 11.98 67.996 10.969 C 68.53 9.952 69.288 9.159 70.271 8.591 C 71.26 8.023 72.439 7.739 73.808 7.739 C 75.018 7.739 76.072 7.957 76.97 8.395 C 77.873 8.832 78.578 9.452 79.084 10.253 C 79.595 11.048 79.865 11.983 79.893 13.057 L 75.998 13.057 C 75.919 12.386 75.692 11.861 75.317 11.48 C 74.947 11.099 74.464 10.909 73.868 10.909 C 73.385 10.909 72.961 11.046 72.598 11.318 C 72.234 11.585 71.95 11.983 71.746 12.511 C 71.547 13.034 71.447 13.682 71.447 14.454 C 71.447 15.227 71.547 15.881 71.746 16.415 C 71.95 16.943 72.234 17.344 72.598 17.616 C 72.961 17.884 73.385 18.017 73.868 18.017 C 74.254 18.017 74.595 17.935 74.89 17.77 C 75.192 17.605 75.439 17.364 75.632 17.046 C 75.825 16.722 75.947 16.329 75.998 15.869 L 79.893 15.869 C 79.853 16.949 79.584 17.892 79.084 18.699 C 78.589 19.506 77.893 20.134 76.996 20.582 C 76.103 21.026 75.044 21.247 73.817 21.247 Z"
                      fill="rgb(15, 18, 20)"
                    ></path>
                    <path
                      d="M 87.657 21.247 C 86.282 21.247 85.1 20.966 84.111 20.403 C 83.128 19.835 82.37 19.046 81.836 18.034 C 81.307 17.017 81.043 15.838 81.043 14.497 C 81.043 13.151 81.307 11.972 81.836 10.96 C 82.37 9.943 83.128 9.153 84.111 8.591 C 85.1 8.023 86.282 7.739 87.657 7.739 C 89.032 7.739 90.211 8.023 91.194 8.591 C 92.182 9.153 92.941 9.943 93.469 10.96 C 94.003 11.972 94.27 13.151 94.27 14.497 C 94.27 15.838 94.003 17.017 93.469 18.034 C 92.941 19.046 92.182 19.835 91.194 20.403 C 90.211 20.966 89.032 21.247 87.657 21.247 Z M 87.682 18.102 C 88.182 18.102 88.606 17.949 88.952 17.642 C 89.299 17.335 89.563 16.909 89.745 16.364 C 89.932 15.818 90.026 15.187 90.026 14.472 C 90.026 13.744 89.932 13.108 89.745 12.562 C 89.563 12.017 89.299 11.591 88.952 11.284 C 88.606 10.977 88.182 10.824 87.682 10.824 C 87.165 10.824 86.728 10.977 86.37 11.284 C 86.018 11.591 85.748 12.017 85.56 12.562 C 85.378 13.108 85.287 13.744 85.287 14.472 C 85.287 15.187 85.378 15.818 85.56 16.364 C 85.748 16.909 86.018 17.335 86.37 17.642 C 86.728 17.949 87.165 18.102 87.682 18.102 Z"
                      fill="rgb(15, 18, 20)"
                    ></path>
                    <path
                      d="M 100.093 13.534 L 100.093 21 L 95.925 21 L 95.925 7.909 L 99.888 7.909 L 99.888 10.313 L 100.033 10.313 C 100.323 9.511 100.817 8.884 101.516 8.429 C 102.215 7.969 103.048 7.739 104.013 7.739 C 104.934 7.739 105.732 7.946 106.408 8.361 C 107.09 8.77 107.619 9.344 107.994 10.082 C 108.374 10.815 108.562 11.673 108.556 12.656 L 108.556 21 L 104.388 21 L 104.388 13.474 C 104.394 12.747 104.209 12.179 103.834 11.77 C 103.465 11.361 102.951 11.156 102.292 11.156 C 101.854 11.156 101.468 11.253 101.133 11.446 C 100.803 11.633 100.548 11.903 100.366 12.256 C 100.19 12.608 100.099 13.034 100.093 13.534 Z"
                      fill="rgb(15, 18, 20)"
                    ></path>
                  </g>
                </svg>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* FOOTER  */}
      <footer className="bg-white dark:bg-gray-950">
        <div className="mx-auto flex flex-col items-center px-6 *:flex *:w-full *:flex-col *:items-center">
          <div className="gap-6 border-b border-solid border-b-gray-200 py-12 dark:border-b-gray-800 lg:flex-row">
            <div className="lg:w-full">
              <a href="#">
                <span className="text-xl font-extrabold text-gray-950 dark:text-white">
                  PAYSIGHT
                </span>
              </a>
            </div>
            <div className="flex flex-col items-center gap-2 *:flex *:items-center *:gap-x-1.5 *:px-2 *:py-1.5 *:text-sm *:font-medium *:text-gray-950 dark:*:text-gray-50 lg:flex-row">
              <a href="/dashboard">
                Features
                <span className="flex rounded-full bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-white">
                  NEW
                </span>
              </a>
              <a href="#">Pricing</a>
              <a href="#">Contact</a>
            </div>
            <div className="flex items-center gap-x-1 *:p-2 lg:w-full lg:justify-end lg:gap-x-6 lg:*:px-0">
              <a href="#">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 256 256"
                  className="fill-gray-950 dark:fill-white"
                >
                  <path d="M128 80a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48Zm0 72a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm48-132H80a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h96a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60Zm36 156a36 36 0 0 1-36 36H80a36 36 0 0 1-36-36V80a36 36 0 0 1 36-36h96a36 36 0 0 1 36 36ZM196 76a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 256 256"
                  className="fill-gray-950 dark:fill-white"
                >
                  <path d="m218.12 209.56-61-95.8 59.72-65.69a12 12 0 0 0-17.76-16.14l-55.27 60.84-37.69-59.21A12 12 0 0 0 96 28H48a12 12 0 0 0-10.12 18.44l61 95.8-59.76 65.69a12 12 0 1 0 17.76 16.14l55.31-60.84 37.69 59.21A12 12 0 0 0 160 228h48a12 12 0 0 0 10.12-18.44ZM166.59 204 69.86 52h19.55l96.73 152Z" />
                </svg>
              </a>
              <a href="#">
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
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
