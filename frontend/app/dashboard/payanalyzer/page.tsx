// pages/dashboard/page.tsx
// inspired by https://synd.io/ and https://www.payanalytics.com/
"use client";
import DataTable from "@/app/dashboard/payanalyzer/datatable/DataTable";
import ExportButton from "@/app/dashboard/payanalyzer/exportbutton/ExportButton";
import UploadData from "@/app/dashboard/payanalyzer/fileupload/UploadData";
import MetricsAnalysis from "@/app/dashboard/payanalyzer/metricsanalysis/MetricsAnalysis";
import Visualization from "@/app/dashboard/payanalyzer/visualize/Visualization";
import { useState } from "react";

export default function PayAnalyzerPage() {
  const [data, setData] = useState<any[]>([]);
  const [isDataUploaded, setIsDataUploaded] = useState(false);

  const handleDataExtracted = (extractedData: any[]) => {
    setData(extractedData);
    setIsDataUploaded(true);
  };

  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-bold">Pay Equity Analyzer</h1>
      <div className="mb-3 text-xs text-gray-700 dark:text-gray-50">
        Assess and analyze the fairness and equity of compensation within your
        organization
      </div>

      {/* Upload CSV */}
      {!isDataUploaded && (
        <div className="mb-8">
          <h2 className="mb-4 text-xl">Upload CSV File</h2>
          <UploadData onDataExtracted={handleDataExtracted} />
        </div>
      )}

      {/* Display Data Table */}
      {isDataUploaded && data.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-xl">Extracted Data</h2>
          <DataTable data={data} />
        </div>
      )}

      {/* Analysis Metrics */}
      {isDataUploaded && data.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-xl">Analysis Metrics</h2>
          <MetricsAnalysis data={data} />
        </div>
      )}

      {/* Data Visualization */}
      {isDataUploaded && data.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-xl">Data Visualization</h2>
          <Visualization data={data} />
        </div>
      )}

      {/* Export as CSV */}
      {isDataUploaded && data.length > 0 && (
        <div className="mb-8">
          <h2 className="mb-4 text-xl">Export Data</h2>
          <ExportButton data={data} />
        </div>
      )}
    </div>
  );
}
