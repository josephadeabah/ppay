"use client";

import React, { useState } from "react";

const UpgradePage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleUpgrade = () => {
    if (selectedPlan) {
      // Handle the upgrade logic here
      console.log(`Upgrading to ${selectedPlan}`);
      // You might want to send the selectedPlan to your backend or payment service
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl p-6">
        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Upgrade Your Account
        </h1>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Choose the plan that best fits your needs. Each plan comes with unique
          features and benefits.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Basic Plan
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              The Basic Plan offers essential features including:
            </p>
            <ul className="mb-4 ml-5 list-disc text-gray-700 dark:text-gray-300">
              <li>Access to Pay Trend Analysis (Live)</li>
              <li>Market Salary Benchmark Analysis (Live)</li>
              <li>Salary & Compensation Reporting tools</li>
              <li>Access to free salary negotiation template</li>
            </ul>
            <div className="mb-4 text-gray-900 dark:text-gray-100">
              <span className="text-2xl font-bold">$5</span> per month
            </div>
            <button
              onClick={() => setSelectedPlan("Basic")}
              className="w-full rounded-lg bg-gray-400 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none dark:bg-gray-700"
            >
              Upgrade to Basic
            </button>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Premium Plan
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              The Premium Plan includes all Basic Plan features plus:
            </p>
            <ul className="mb-4 ml-5 list-disc text-gray-700 dark:text-gray-300">
              <li>Internal Pay Equity Analysis tools</li>
              <li>Access to metrics & reports download</li>
              <li>Advanced analytics & Insights</li>
              <li>Access to professional salary negotiation writing support</li>
            </ul>
            <div className="mb-4 text-gray-900 dark:text-gray-100">
              <span className="text-2xl font-bold">$20</span> per month
            </div>
            <button
              onClick={() => setSelectedPlan("Premium")}
              className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none dark:bg-gray-700"
            >
              Upgrade to Premium
            </button>
          </div>
        </div>

        {selectedPlan && (
          <div className="mt-8 rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Confirm Your Upgrade
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              You have selected the <strong>{selectedPlan}</strong> plan. Click
              the button below to proceed with the upgrade.
            </p>
            <button
              onClick={handleUpgrade}
              className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none dark:bg-gray-700"
            >
              Confirm Upgrade
            </button>
            <button
              onClick={() => setSelectedPlan(null)}
              className="ml-4 rounded-lg bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpgradePage;
