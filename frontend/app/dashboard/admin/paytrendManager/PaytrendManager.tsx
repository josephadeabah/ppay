"use client";
import { useState } from "react";

interface TableDataEntry {
  country: string;
  industry: string;
  company: string;
  role: string;
  currentSalaryByCompany: number;
  currentSalaryByRole: number;
  change: number;
  changeTimeframe: string;
}

const initialData: TableDataEntry = {
  country: "",
  industry: "",
  company: "",
  role: "",
  currentSalaryByCompany: 0,
  currentSalaryByRole: 0,
  change: 0,
  changeTimeframe: "",
};

export default function PaytrendManager() {
  const [data, setData] = useState<TableDataEntry>(initialData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement data submission logic (e.g., send to API)
    console.log("Data submitted:", data);
    // Reset form
    setData(initialData);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
        Add or Update Data
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={data.country}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="industry"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Industry
          </label>
          <input
            type="text"
            id="industry"
            name="industry"
            value={data.industry}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={data.company}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={data.role}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="currentSalaryByCompany"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Current Salary by Company
          </label>
          <input
            type="number"
            id="currentSalaryByCompany"
            name="currentSalaryByCompany"
            value={data.currentSalaryByCompany}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="currentSalaryByRole"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Current Salary by Role
          </label>
          <input
            type="number"
            id="currentSalaryByRole"
            name="currentSalaryByRole"
            value={data.currentSalaryByRole}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="change"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Change (%)
          </label>
          <input
            type="number"
            id="change"
            name="change"
            value={data.change}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="changeTimeframe"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Change Timeframe
          </label>
          <input
            type="text"
            id="changeTimeframe"
            name="changeTimeframe"
            value={data.changeTimeframe}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-700 dark:hover:bg-indigo-800"
        >
          Save Data
        </button>
      </form>
    </div>
  );
}
