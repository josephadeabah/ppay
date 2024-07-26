"use client";
import ComplianceForm from "@/app/dashboard/reportpay/forms/ComplianceForm";
import { useState } from "react";
import BenchmarkManager from "./benchmarkManager/BenchMarkManager";
import ManageCompanies from "./compareManager/ManageCompanies";
import ManageCountries from "./compareManager/ManageCountries";
import ManageIndustries from "./compareManager/ManageIndustries";

export default function Administration() {
  const [activeTab, setActiveTab] = useState("profile-example");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleFormSubmit = (formData: any) => {
    console.log("Form Data Submitted:", formData);

    // You can perform additional actions with formData here
    // For example, you might send it to an API or update local state
  };

  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="-mb-px flex flex-wrap bg-white text-center text-sm font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-50"
          id="tabs-example"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className={`inline-block rounded-t-lg border-b-2 ${activeTab === "profile-example" ? "border-gray-300 text-gray-600 dark:text-gray-300" : "border-transparent"} p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300`}
              id="profile-tab-example"
              type="button"
              role="tab"
              aria-controls="profile-example"
              aria-selected={activeTab === "profile-example"}
              onClick={() => handleTabClick("profile-example")}
            >
              Compare Database
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block rounded-t-lg border-b-2 ${activeTab === "dashboard-example" ? "border-gray-300 text-gray-600 dark:text-gray-300" : "border-transparent"} p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300`}
              id="dashboard-tab-example"
              type="button"
              role="tab"
              aria-controls="dashboard-example"
              aria-selected={activeTab === "dashboard-example"}
              onClick={() => handleTabClick("dashboard-example")}
            >
              Benchmark Database
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block rounded-t-lg border-b-2 ${activeTab === "Inflation-example" ? "border-gray-300 text-gray-600 dark:text-gray-300" : "border-transparent"} p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300`}
              id="Inflation-tab-example"
              type="button"
              role="tab"
              aria-controls="Inflation-example"
              aria-selected={activeTab === "Inflation-example"}
              onClick={() => handleTabClick("Inflation-example")}
            >
              Inflation Database
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={`inline-block rounded-t-lg border-b-2 ${activeTab === "compliance-example" ? "border-gray-300 text-gray-600 dark:text-gray-300" : "border-transparent"} p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300`}
              id="compliance-tab-example"
              type="button"
              role="tab"
              aria-controls="compliance-example"
              aria-selected={activeTab === "compliance-example"}
              onClick={() => handleTabClick("compliance-example")}
            >
              Compliance Database
            </button>
          </li>
        </ul>
      </div>

      <div id="tabContentExample">
        <div
          className={`grid grid-cols-1 rounded-lg bg-gray-50 dark:bg-gray-800 sm:grid-cols-3 lg:grid-cols-3 ${activeTab === "profile-example" ? "block" : "hidden"}`}
          id="dashboard-example"
          role="tabpanel"
          aria-labelledby="profile-tab-example"
        >
          {/* Compare manager form */}
          <ManageCountries />
          <ManageIndustries />
          <ManageCompanies />
        </div>
        <div
          className={`rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "dashboard-example" ? "block" : "hidden"}`}
          id="dashboard-example"
          role="tabpanel"
          aria-labelledby="dashboard-tab-example"
        >
          {/* Employer form */}
          <BenchmarkManager onSubmit={handleFormSubmit} />
        </div>
        <div
          className={`rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "Inflation-example" ? "block" : "hidden"}`}
          id="Inflation-example"
          role="tabpanel"
          aria-labelledby="Inflation-tab-example"
        >
          {/* Compliance form */}
          <ComplianceForm />
        </div>
        <div
          className={`rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "compliance-example" ? "block" : "hidden"}`}
          id="compliance-example"
          role="tabpanel"
          aria-labelledby="compliance-tab-example"
        >
          {/* Compliance form */}
          <ComplianceForm />
        </div>
      </div>
    </>
  );
}
