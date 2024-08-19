// pages/dashboard/page.tsx
// inspired by https://synd.io/ and https://www.payanalytics.com/
"use client";
import SkeletonLoader from "@/app/dashboard/equityanalyzer/loader";
import DataTable from "@/app/dashboard/payanalyzer/datatable/DataTable";
import ExportButton from "@/app/dashboard/payanalyzer/exportbutton/ExportButton";
import UploadData from "@/app/dashboard/payanalyzer/fileupload/UploadData";
import MetricsAnalysis from "@/app/dashboard/payanalyzer/metricsanalysis/MetricsAnalysis";
import Visualization from "@/app/dashboard/payanalyzer/visualize/Visualization";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useEffect, useState } from "react";
import ComparisonPage from "./comparison/Comparison";
import PayFactors from "./payfactors/payFactors";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const userData = [
  {
    name: "Alice Johnson",
    salary: 5000,
    location: "USA",
    jobTitle: "Software Engineer",
    bonus: 5000,
    stockOptions: 10000,
    gender: "Female",
  },
  {
    name: "Bob Smith",
    salary: 2000,
    location: "Canada",
    jobTitle: "Project Manager",
    bonus: 7000,
    stockOptions: 5000,
    gender: "Male",
  },
  {
    name: "Cathy Lee",
    salary: 78000,
    location: "United Kingdom",
    jobTitle: "HR Specialist",
    bonus: 3000,
    stockOptions: 0,
    gender: "Female",
  },
  {
    name: "David Brown",
    salary: 60000,
    location: "USA",
    jobTitle: "Data Scientist",
    bonus: 4000,
    stockOptions: 8000,
    gender: "Male",
  },
];

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
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
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
          <TabList className="flex space-x-1 bg-gray-50 p-1">
            {["Assess", "Analyze", "Compare"].map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm font-medium leading-5 text-gray-950 focus:outline-none",
                    selected
                      ? "bg-white shadow"
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
              <div className="min-h-screen w-full overflow-x-hidden bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                {/* Main Content */}
                <div className="flex">
                  {/* Main Dashboard Sections */}
                  <main className="flex-1 space-y-6 overflow-x-hidden p-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                      {/* Upload Section */}
                      <section className="rounded bg-white p-4 shadow dark:bg-gray-800">
                        <h2 className="mb-4 text-xl font-bold">Upload Data</h2>
                        <div className="rounded border border-dashed border-gray-300 p-6 dark:border-gray-600">
                          {!isDataUploaded && (
                            <div className="mb-8">
                              <h2 className="mb-4 text-xl">Upload CSV File</h2>
                              <UploadData
                                onDataExtracted={handleDataExtracted}
                              />
                            </div>
                          )}
                          {isDataUploaded && data.length > 0 && (
                            <div className="mb-8">
                              <h2 className="mb-4 text-xl">Export Data</h2>
                              <ExportButton data={data} />
                            </div>
                          )}
                        </div>
                      </section>

                      {/* Management Section */}
                      <section className="rounded bg-white p-4 shadow dark:bg-gray-800">
                        <h2 className="mb-4 text-xl font-bold">Manage Data</h2>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span>Dataset 1</span>
                            <button className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                              Delete
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>Dataset 2</span>
                            <button className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                              Delete
                            </button>
                          </div>
                        </div>
                      </section>
                    </div>

                    {/* Table visualization Section */}
                    <section className="overflow-x-auto rounded bg-white p-4 shadow dark:bg-gray-800">
                      <h2 className="mb-4 text-xl font-bold">
                        Table Visualization
                      </h2>
                      <div className="h-full rounded bg-gray-200 dark:bg-gray-700">
                        {isDataUploaded && data.length > 0 && (
                          <div className="mb-8 p-2">
                            <h2 className="mb-4 text-xl">Extracted Data</h2>
                            <DataTable data={data} />
                          </div>
                        )}
                      </div>
                    </section>

                    {/* Visualization Analysis */}
                    <section className="rounded bg-white p-4 shadow dark:bg-gray-800">
                      <h2 className="mb-4 text-xl font-bold">Visualization</h2>
                      <div className="h-full rounded bg-gray-200 dark:bg-gray-700">
                        {isDataUploaded && data.length > 0 && (
                          <div className="mb-8 p-2">
                            <MetricsAnalysis data={data} />
                          </div>
                        )}
                      </div>
                    </section>

                    {/* Analysis Section */}
                    <section className="rounded bg-white p-4 shadow dark:bg-gray-800">
                      <h2 className="mb-4 text-xl font-bold">Chart Analysis</h2>
                      <div className="h-full rounded bg-gray-200 dark:bg-gray-700">
                        {isDataUploaded && data.length > 0 && (
                          <div className="mb-8 p-2">
                            <h2 className="mb-4 text-xl">Data Visualization</h2>
                            <Visualization data={data} />
                          </div>
                        )}
                      </div>
                    </section>
                  </main>
                </div>
              </div>
            </TabPanel>

            {/* Upload Tab */}
            <TabPanel className="space-y-6">
              <div className="min-h-screen w-full overflow-x-hidden bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                {/* Main Content */}
                <div className="flex">
                  {/* Main Dashboard Sections */}
                  <main className="flex-1 space-y-6 overflow-x-hidden p-6">
                    {/* Management Section */}
                    <section className="rounded bg-white p-4 shadow dark:bg-gray-800">
                      <div className="space-y-4">
                        <PayFactors userData={userData} />
                      </div>
                    </section>
                  </main>
                </div>
              </div>
            </TabPanel>

            {/* Upload Tab */}
            <TabPanel className="space-y-6">
              <div className="min-h-screen w-full overflow-x-hidden bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                {/* Main Content */}
                <div className="flex">
                  {/* Main Dashboard Sections */}
                  <main className="flex-1 space-y-6 overflow-x-hidden p-6">
                    {/* Management Section */}
                    <section className="rounded bg-white p-4 shadow dark:bg-gray-800">
                      <div className="space-y-4">
                        <ComparisonPage data={userData} />
                      </div>
                    </section>
                  </main>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>

      {/* Footer */}
      <footer className="bg-white py-4 dark:bg-gray-800">
        <div className="text-center">
          <p>&copy; 2024 Paysight.live</p>
        </div>
      </footer>
    </div>
  );
}
