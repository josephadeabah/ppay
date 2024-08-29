// inspired by https://synd.io/ and https://www.payanalytics.com/
"use client";
import DataTable from "@/app/dashboard/payanalyzer/datatable/DataTable";
import SkeletonLoader from "@/app/dashboard/payanalyzer/equitycalculator/loader";
import UploadData from "@/app/dashboard/payanalyzer/fileupload/UploadData";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useEffect, useState } from "react";
import ComparisonPage from "./comparison/Comparison";
import PayEquityAnalyzer from "./equitycalculator/page";
import ManagementComponent from "./managedata/manageData";
import PayFactors from "./payfactors/payFactors";
import RemediationRecommendations from "./payfactors/remediation-recommendations";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
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
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="flex w-full flex-col text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow dark:bg-gray-800">
        <div className="mx-auto flex flex-col items-center justify-between space-y-2 px-4 py-4 sm:flex-row sm:space-y-0 sm:px-6">
          <h1 className="text-center text-lg font-bold sm:text-left">PayAiD</h1>
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
            {["Assess", "Analyze", "Manage", "Calculate"].map((tab) => (
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
                <section className="bg-white p-4 shadow-sm dark:bg-gray-800">
                  <div>
                    {!isDataUploaded && (
                      <UploadData onDataExtracted={handleDataExtracted} />
                    )}
                  </div>
                </section>
                {/* Table visualization Section */}
                <section className="overflow-x-auto bg-white p-2 shadow-sm dark:bg-gray-800 ">
                  {isDataUploaded && data.length > 0 && (
                    <DataTable data={data} />
                  )}
                </section>
              </div>
            </TabPanel>

            {/* Analyze Tab */}
            <TabPanel className="space-y-6">
              {/* Main Content */}

              <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                {/* Comparison Section */}
                <section className="bg-white p-2 dark:bg-gray-800">
                  <ComparisonPage data={data} />
                </section>

                {/* Pay Factors Section */}
                <section className="bg-white p-2 shadow-sm dark:bg-gray-800">
                  <div className="dark:bg-gray-700">
                    <PayFactors userData={data} />
                  </div>
                </section>
              </div>
              <div className="">
                <RemediationRecommendations data={data} />
              </div>
            </TabPanel>

            {/* Manage Tab */}
            <TabPanel>
              {/* Management Section */}
              <div className="w-full bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                <section className="h-screen bg-white p-4 shadow-sm dark:bg-gray-800">
                  {data.length > 0 ? (
                    <ManagementComponent initialData={data} />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <p className="text-center text-2xl font-medium text-gray-700 dark:text-gray-50">
                        Please upload data first
                      </p>
                    </div>
                  )}
                </section>
              </div>
            </TabPanel>

            <TabPanel className="space-y-6">
              <div className="w-full bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
                <section className="bg-white p-4 shadow-sm dark:bg-gray-800">
                  <PayEquityAnalyzer />
                </section>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
