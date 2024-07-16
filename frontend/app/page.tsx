"use client";

import { Carousel } from "flowbite-react";

const LandingPage = () => {
  return (
    <>
      <div className="flex h-screen flex-col lg:flex-row">
        {/* Left container */}
        <div className="flex-1 bg-gray-800 lg:h-auto lg:w-1/3">
          <div className="py-4 text-white">
            <div className="py-4 text-center text-3xl font-bold sm:px-6 lg:px-8">
              <p>The Global Wage Transparency Tool.</p>
            </div>
          </div>
        </div>

        {/* Right container */}
        <div className="flex-1 lg:h-auto lg:w-2/3">
          <Carousel>
            {/* Carousel items */}
            <div className="flex h-96 items-center justify-center bg-gray-200 lg:h-full">
              <div className="w-full max-w-[270px] text-lg text-gray-600">
                Fair Wage Negotiation: The tool empowers employees to negotiate
                fair salaries aligned with recommended pay standards.
              </div>
            </div>
            <div className="flex h-96 items-center justify-center bg-gray-300 lg:h-full">
              <p className="w-full max-w-[270px] text-lg text-gray-600">
                Standardized Pay Practices: Promotes adoption of uniform pay
                practices across companies, mitigating disparities in pay based
                on geographical location
              </p>
            </div>
            <div className="flex h-96 items-center justify-center bg-gray-400 lg:h-full">
              <p className="w-full max-w-[270px] text-lg text-gray-600">
                Enhanced Employer Branding: Companies implementing fair pay
                practices enhance their appeal to top talent, highlighting their
                dedication to equitable wages.
              </p>
            </div>

            <div className="flex h-96 items-center justify-center bg-gray-400 lg:h-full">
              <p className="w-full max-w-[270px] text-lg text-gray-600">
                Employees can use this tool to negotiate better salaries,
                encouraging standardized pay practices and enhancing employer
                branding.
              </p>
            </div>
          </Carousel>
        </div>
      </div>
      <main className="flex min-h-screen items-center justify-center bg-blue-100">
        <div className="flex h-screen w-full flex-col">
          <div className="flex flex-1 flex-col lg:flex-row">
            <div className="flex w-full flex-col space-y-0 lg:w-1/3">
              <div className="flex-1 bg-slate-50 p-4">
                <h2 className="text-lg font-bold text-gray-500">
                  Why This System?
                </h2>
                <p className="text-gray-500">
                  Professionals in developing world are often compensated less
                  than their counterparts in the developed world, despite most
                  times doing the same job and in the same company or otherwise.
                </p>
              </div>
              <div className="flex-1 bg-slate-50 p-4">
                <h2 className="text-lg font-bold text-blue-950">The Issue</h2>
                <p className="font-bold text-blue-900">
                  This pay disparity, known as &rsquo;geographic pay
                  discrimination&rsquo; or &rsquo;pay arbitrage&rsquo;, is
                  unfair and driven by market forces exploiting lower living
                  costs and weaker labor protections in developing countries.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col space-y-0 lg:w-1/3">
              <div className="flex-1 bg-blue-950 p-4">
                <h2 className="text-4xl font-bold text-white">
                  Global Wage Transparency
                </h2>
                <p className="text-white">
                  A platform where Professionals can anonymously report their
                  wages and job descriptions to compare pay across different
                  countries.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col space-y-0 lg:w-1/3">
              <div className="flex-1 bg-slate-50 p-4">
                <h2 className="text-lg font-bold text-blue-950">
                  Pay Equity Calculator
                </h2>
                <p className="text-blue-950">
                  A tool that compares wages across countries, providing fair
                  wage recommendations based on qualifications and job
                  responsibilities, excluding cost of living or geographical
                  location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
