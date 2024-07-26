// pages/admin/countries.tsx
import axios from "axios";
import { useState } from "react";

export default function ManageCountries() {
  const [formData, setFormData] = useState({
    name: "",
    averageSalary: "",
    healthcareSalaryAverage: "",
    techSalaryAverage: "",
    educationSalaryAverage: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Replace with actual backend API endpoint
      await axios.post("/api/countries", formData);
      alert("Data submitted successfully");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data");
    }
  };

  return (
    <section className="dark:bg-gray-900">
      <div className="p-4 text-xs font-bold text-gray-400 dark:text-gray-100 sm:px-4">
        This data is only collected for the purposes of analytics and insight
        into global wage and salary trends and labor compliance. We do not share
        this data with anybody and you have our word.
      </div>
      <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Manage Countries
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 grid gap-4 sm:mb-5 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Country Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Type country name"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="averageSalary"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Average Salary
              </label>
              <input
                type="number"
                name="averageSalary"
                id="averageSalary"
                value={formData.averageSalary}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Average salary in the country"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="healthcareSalaryAverage"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Healthcare Salary Average
              </label>
              <input
                type="number"
                name="healthcareSalaryAverage"
                id="healthcareSalaryAverage"
                value={formData.healthcareSalaryAverage}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Average salary in healthcare sector"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="techSalaryAverage"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Tech Salary Average
              </label>
              <input
                type="number"
                name="techSalaryAverage"
                id="techSalaryAverage"
                value={formData.techSalaryAverage}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Average salary in tech sector"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="educationSalaryAverage"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Education Salary Average
              </label>
              <input
                type="number"
                name="educationSalaryAverage"
                id="educationSalaryAverage"
                value={formData.educationSalaryAverage}
                onChange={handleChange}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Average salary in education sector"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-gray-50 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-gray-600 dark:text-gray-50 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
}
