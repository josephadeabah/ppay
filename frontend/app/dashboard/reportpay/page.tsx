"use client";
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
        </ul>
      </div>
      <div id="tabContentExample">
        <div
          className={`rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "profile-example" ? "block" : "hidden"}`}
          id="profile-example"
          role="tabpanel"
          aria-labelledby="profile-tab-example"
        >
          <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Report Salary and Job Data
              </h2>
              <form action="#">
                <div className="mb-4 grid gap-4 sm:mb-5 sm:grid-cols-2 sm:gap-6">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company-name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company-name"
                      id="company-name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Type company name"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="job-title"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="job-title"
                      id="job-title"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Type job title"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="location"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="City, State, Country"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="salary"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Salary
                    </label>
                    <input
                      type="number"
                      name="salary"
                      id="salary"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Annual salary in USD"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="years-experience"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Years of Experience
                    </label>
                    <input
                      type="number"
                      name="years-experience"
                      id="years-experience"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Number of years"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="education-level"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Education Level
                    </label>
                    <select
                      id="education-level"
                      name="education-level"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    >
                      <option value="High School">High School</option>
                      <option value="Associate Degree">Associate Degree</option>
                      <option value="Bachelor's Degree">
                        Bachelor's Degree
                      </option>
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="Doctorate">Doctorate</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="industry"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Industry
                    </label>
                    <input
                      type="text"
                      name="industry"
                      id="industry"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Industry of employment"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="job-type"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Job Type
                    </label>
                    <select
                      id="job-type"
                      name="job-type"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                      <option value="Temporary">Temporary</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="job-description"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Job Description
                    </label>
                    <textarea
                      id="job-description"
                      name="job-description"
                      rows={8}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Describe the job role and responsibilities"
                      required
                    ></textarea>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="benefits"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Benefits
                    </label>
                    <input
                      type="text"
                      name="benefits"
                      id="benefits"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="List benefits provided (e.g., health insurance, 401k)"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="gender"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Non-binary">Non-binary</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">
                        Prefer not to say
                      </option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="race"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Race/Ethnicity
                    </label>
                    <select
                      id="race"
                      name="race"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    >
                      <option value="Asian">Asian</option>
                      <option value="Black">Black</option>
                      <option value="Hispanic/Latino">Hispanic/Latino</option>
                      <option value="White">White</option>
                      <option value="Native American">Native American</option>
                      <option value="Pacific Islander">Pacific Islander</option>
                      <option value="Mixed Race">Mixed Race</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">
                        Prefer not to say
                      </option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    type="submit"
                    className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Submit Data
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded-lg border border-red-600 px-5 py-2.5 text-center text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900"
                  >
                    <svg
                      className="-ml-1 mr-1 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>

        {/* Employer */}
        <div
          className={`rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "dashboard-example" ? "block" : "hidden"}`}
          id="dashboard-example"
          role="tabpanel"
          aria-labelledby="dashboard-tab-example"
        >
          <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Report Employee Data
              </h2>
              <form action="#">
                <div className="mb-4 grid gap-4 sm:mb-5 sm:grid-cols-2 sm:gap-6">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="employee-name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Employee Name
                    </label>
                    <input
                      type="text"
                      name="employee-name"
                      id="employee-name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Enter employee's full name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="employee-id"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Employee ID
                    </label>
                    <input
                      type="text"
                      name="employee-id"
                      id="employee-id"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Enter employee ID number"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="department"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Department
                    </label>
                    <input
                      type="text"
                      name="department"
                      id="department"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Enter employee's department"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="position"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      name="position"
                      id="position"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Enter employee's position"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="employee-salary"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Employee Salary
                    </label>
                    <input
                      type="number"
                      name="employee-salary"
                      id="employee-salary"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Enter employee's annual salary in USD"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="employee-years-experience"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Employee Years of Experience
                    </label>
                    <input
                      type="number"
                      name="employee-years-experience"
                      id="employee-years-experience"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Enter employee's years of experience"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="employee-education-level"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Employee Education Level
                    </label>
                    <select
                      id="employee-education-level"
                      name="employee-education-level"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    >
                      <option value="High School">High School</option>
                      <option value="Associate Degree">Associate Degree</option>
                      <option value="Bachelor's Degree">
                        Bachelor's Degree
                      </option>
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="Doctorate">Doctorate</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="employee-industry"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Employee Industry
                    </label>
                    <input
                      type="text"
                      name="employee-industry"
                      id="employee-industry"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Enter employee's industry of employment"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="employee-job-type"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Employee Job Type
                    </label>
                    <select
                      id="employee-job-type"
                      name="employee-job-type"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                      <option value="Temporary">Temporary</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="employee-job-description"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Employee Job Description
                    </label>
                    <textarea
                      id="employee-job-description"
                      name="employee-job-description"
                      rows={8}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Describe the employee's job role and responsibilities"
                      required
                    ></textarea>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="employee-benefits"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Employee Benefits
                    </label>
                    <input
                      type="text"
                      name="employee-benefits"
                      id="employee-benefits"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="List benefits provided (e.g., health insurance, 401k)"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="employee-gender"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Employee Gender
                    </label>
                    <select
                      id="employee-gender"
                      name="employee-gender"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Non-binary">Non-binary</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">
                        Prefer not to say
                      </option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="employee-race"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Employee Race/Ethnicity
                    </label>
                    <select
                      id="employee-race"
                      name="employee-race"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    >
                      <option value="Asian">Asian</option>
                      <option value="Black">Black</option>
                      <option value="Hispanic/Latino">Hispanic/Latino</option>
                      <option value="White">White</option>
                      <option value="Native American">Native American</option>
                      <option value="Pacific Islander">Pacific Islander</option>
                      <option value="Mixed Race">Mixed Race</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">
                        Prefer not to say
                      </option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    type="submit"
                    className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Submit Data
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded-lg border border-red-600 px-5 py-2.5 text-center text-sm font-medium text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900"
                  >
                    <svg
                      className="-ml-1 mr-1 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
