"use client";
import ComplianceForm from "@/components/forms/ComplianceForm";
import EmployeeForm from "@/components/forms/EmployeeForm";
import EmployerForm from "@/components/forms/EmployerForm";
import { useState } from "react";

export default function ReportPay() {
  const [activeTab, setActiveTab] = useState("profile-example");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
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
              Employee
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
              Employer
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
              Compliance
            </button>
          </li>
        </ul>
      </div>
      <div id="tabContentExample">
        <div
          className={`rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "profile-example" ? "block" : "hidden"}`}
          id="profile-example"
          role="tabpanel"
          aria-labelledby="profile-tab-example"
        >
          {/* Employee form */}
          <EmployeeForm />
        </div>
        <div
          className={`rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "dashboard-example" ? "block" : "hidden"}`}
          id="dashboard-example"
          role="tabpanel"
          aria-labelledby="dashboard-tab-example"
        >
          {/* Employer form */}
          <EmployerForm />
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
