// pages/dashboard/page.tsx
// inspired by https://synd.io/ and https://www.payanalytics.com/
"use client";
import SkeletonLoader from "@/app/dashboard/equityanalyzer/loader";
import DataTable from "@/app/dashboard/payanalyzer/datatable/DataTable";
import ExportButton from "@/app/dashboard/payanalyzer/exportbutton/ExportButton";
import UploadData from "@/app/dashboard/payanalyzer/fileupload/UploadData";
import MetricsAnalysis from "@/app/dashboard/payanalyzer/metricsanalysis/MetricsAnalysis";
import Visualization from "@/app/dashboard/payanalyzer/visualize/Visualization";
import { useEffect, useState } from "react";

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
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow dark:bg-gray-800">
        <div className="mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-lg font-bold">Pay Equity Analyzer</h1>
          <div className="mb-3 text-xs text-gray-700 dark:text-gray-50">
            Assess and analyze the fairness and equity of compensation within
            your organization
          </div>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-34 max-h-screen bg-white p-4 dark:bg-gray-800">
          <nav>
            <ul className="space-y-4">
              <li>
                <a
                  href="."
                  className="block rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Upload
                </a>
              </li>
              <li>
                <a
                  href="."
                  className="block rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Management
                </a>
              </li>
              <li>
                <a
                  href="."
                  className="block rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Visualization
                </a>
              </li>
              <li>
                <a
                  href="."
                  className="block rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Analysis
                </a>
              </li>
            </ul>
          </nav>
        </aside>

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
                    <UploadData onDataExtracted={handleDataExtracted} />
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
            <h2 className="mb-4 text-xl font-bold">Table Visualization</h2>
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

      {/* Footer */}
      <footer className="mt-6 bg-white py-4 dark:bg-gray-800">
        <div className="text-center">
          <p>&copy; 2024 Paysight.live</p>
        </div>
      </footer>
    </div>
  );
}
