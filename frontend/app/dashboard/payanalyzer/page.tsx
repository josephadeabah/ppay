// app/dashboard/page.tsx
// inspired by https://synd.io/ and https://www.payanalytics.com/
"use client";
import SkeletonLoader from "@/app/dashboard/equityanalyzer/loader";
import DataTable from "@/app/dashboard/payanalyzer/datatable/DataTable";
import UploadData from "@/app/dashboard/payanalyzer/fileupload/UploadData";
import MetricsAnalysis from "@/app/dashboard/payanalyzer/metricsanalysis/MetricsAnalysis";
import Visualization from "@/app/dashboard/payanalyzer/visualize/Visualization";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useEffect, useState } from "react";
import { AiOutlineScan } from "react-icons/ai";
import ComparisonPage from "./comparison/Comparison";
import ManagementComponent from "./managedata/manageData";
import PayFactors from "./payfactors/payFactors";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface EmployeeData {
  [key: string]: string;
  employeeId: string;
  name: string;
  gender: string;
  ethnicity: string;
  jobTitle: string;
  department: string;
  location: string;
  baseSalary: string;
  bonus: string;
  stockOptions: string;
  yearsOfExperience: string;
  performancePoints: string;
  marketRate: string;
  industryPoints: string;
  departmentPoints: string;
  seniorityLevels: string;
  educationLevelPoints: string;
  companySizePoints: string;
}

export default function PayAnalyzerPage() {
  const [data, setData] = useState<any[]>([]);
  const [isDataUploaded, setIsDataUploaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleDataExtracted = (extractedData: any[]) => {
    setData(extractedData);
    setIsDataUploaded(true);
  };

  useEffect(() => {
    // Simulate a data fetching delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="flex w-full flex-col overflow-x-hidden bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow dark:bg-gray-800">
        <div className="mx-auto flex flex-col items-center justify-between space-y-2 px-4 py-4 sm:flex-row sm:space-y-0 sm:px-6">
          <h1 className="text-center text-lg font-bold sm:text-left">
            Pay Equity Analyzer
          </h1>
          <div className="text-center text-xs text-gray-700 dark:text-gray-50 sm:mb-0 sm:text-right">
            Assess and analyze the fairness and equity of compensation within
            your organization
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex-1">
        <TabGroup>
          <TabList className="flex space-x-1 bg-gray-50">
            {["Assess", "Analyze", "Manage"].map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    "text-md w-full py-2.5 font-medium leading-5 text-gray-950 focus:outline-none",
                    selected
                      ? "bg-white shadow-sm dark:border-gray-950 dark:bg-gray-950 dark:text-gray-50"
                      : "text-gray-700 hover:bg-white/[0.12] hover:text-gray-300",
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-6">
            {/* Upload Tab */}
            <TabPanel className="space-y-6">
              <div className="w-full bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                <div className="w-full max-w-full">
                  {/* Upload Section */}
                  <section className="bg-white p-4 shadow-sm dark:bg-gray-800">
                    <div className="flex w-full items-center justify-between rounded border border-dashed border-gray-300 p-6 dark:border-gray-600">
                      <div>
                        {!isDataUploaded && (
                          <div>
                            <h2 className="mb-4 text-xl">Upload CSV File</h2>
                            <UploadData onDataExtracted={handleDataExtracted} />
                            {/* Example file */}
                            <a
                              href="/employeeData.csv"
                              download="/employeeData.csv"
                              className="flex items-center text-sm text-gray-600 hover:underline"
                            >
                              Download Example CSV
                            </a>
                          </div>
                        )}
                      </div>
                      <div>
                        {isDataUploaded && data.length > 0 && (
                          <div className="">
                            <button className="flex w-full min-w-20 items-center gap-1 rounded-sm bg-slate-100 p-2 shadow-sm">
                              <AiOutlineScan className="h-5 w-5" /> Scan
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </section>
                </div>

                {/* Table visualization Section */}
                <div className="flex flex-col gap-4">
                  <section className="overflow-x-auto bg-white p-4 shadow-sm dark:bg-gray-800 [&::-moz-scrollbar-thumb]:rounded-full [&::-moz-scrollbar-thumb]:bg-gray-200 [&::-moz-scrollbar-track]:m-1 [&::-moz-scrollbar]:w-2 [&::-ms-scrollbar-thumb]:rounded-full [&::-ms-scrollbar-thumb]:bg-gray-200 [&::-ms-scrollbar-track]:m-1 [&::-ms-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:m-1 [&::-webkit-scrollbar]:w-2">
                    <h2 className="mb-4 text-xl font-bold">
                      Table Visualization
                    </h2>
                    <div className="h-full rounded dark:bg-gray-700">
                      {isDataUploaded && data.length > 0 && (
                        <div className="mb-8 p-2">
                          <DataTable data={data} />
                        </div>
                      )}
                    </div>
                  </section>

                  {/* Visualization Analysis */}
                  <section className=" bg-white p-4 shadow-sm dark:bg-gray-800">
                    <h2 className="mb-4 text-xl font-bold">
                      Visualization Analysis
                    </h2>
                    <div className="h-full rounded dark:bg-gray-700">
                      {isDataUploaded && data.length > 0 && (
                        <div className="mb-8 p-2">
                          <MetricsAnalysis data={data} />
                        </div>
                      )}
                    </div>
                  </section>

                  {/* Analysis Section */}
                  <section className="bg-white p-4 dark:bg-gray-800">
                    <h2 className="mb-4 text-xl font-bold">Chart Analysis</h2>
                    <div className="h-full rounded bg-gray-100 dark:bg-gray-700">
                      {isDataUploaded && data.length > 0 && (
                        <div className="mb-8 p-2">
                          <h2 className="mb-4 text-xl">Data Visualization</h2>
                          <Visualization data={data} />
                        </div>
                      )}
                    </div>
                  </section>
                </div>
              </div>
            </TabPanel>

            {/* Analyze Tab */}
            <TabPanel className="space-y-6">
              <div className="w-full bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                {/* Main Content */}
                <div className="flex">
                  {/* Main Dashboard Sections */}
                  <main className="flex-1 space-y-6 p-2">
                    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                      {/* Comparison Section */}
                      <section className=" bg-white p-2 dark:bg-gray-800">
                        <h2 className="mb-4 text-xl font-bold">Compare Data</h2>
                        <div className="bg-gray-200 dark:bg-gray-700">
                          <ComparisonPage data={data} />
                        </div>
                      </section>

                      {/* Pay Factors Section */}
                      <section className="bg-white p-2 shadow-sm dark:bg-gray-800">
                        <h2 className="mb-4 text-xl font-bold">Pay Factors</h2>
                        <div className="bg-gray-200 dark:bg-gray-700">
                          <PayFactors userData={data} />
                        </div>
                      </section>
                    </div>
                  </main>
                </div>
              </div>
            </TabPanel>

            {/* Manage Tab */}
            <TabPanel className="space-y-6">
              <div className="w-full bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                {/* Management Section */}
                <section className="rounded bg-white p-4 shadow-sm dark:bg-gray-800">
                  <div className="space-y-4">
                    {data.length > 0 && (
                      <ManagementComponent initialData={data} />
                    )}
                  </div>
                </section>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
