"use client";

import { FiDownload } from "react-icons/fi"; // Import the download icon from react-icons

const DownloadPage = () => {
  const dataCategories = [
    {
      title: "Financial Reports",
      links: [
        {
          name: "Q1 2023 Report",
          downloadUrl: "/downloads/financial-reports/q1-2023.pdf",
        },
        {
          name: "Q2 2023 Report",
          downloadUrl: "/downloads/financial-reports/q2-2023.pdf",
        },
        {
          name: "Q3 2023 Report",
          downloadUrl: "/downloads/financial-reports/q3-2023.pdf",
        },
        {
          name: "Q4 2023 Report",
          downloadUrl: "/downloads/financial-reports/q4-2023.pdf",
        },
        {
          name: "Annual Report",
          downloadUrl: "/downloads/financial-reports/annual-report.pdf",
        },
        {
          name: "Financial Statements",
          downloadUrl: "/downloads/financial-reports/financial-statements.xlsx",
        },
        {
          name: "Balance Sheet",
          downloadUrl: "/downloads/financial-reports/balance-sheet.xlsx",
        },
        {
          name: "Income Statement",
          downloadUrl: "/downloads/financial-reports/income-statement.xlsx",
        },
        {
          name: "Cash Flow Statement",
          downloadUrl: "/downloads/financial-reports/cash-flow-statement.xlsx",
        },
        // More financial reports
      ],
    },
    {
      title: "Employee Data",
      links: [
        {
          name: "Employee List",
          downloadUrl: "/downloads/employee-data/employee-list.csv",
        },
        {
          name: "Salary Breakdown",
          downloadUrl: "/downloads/employee-data/salary-breakdown.xlsx",
        },
        {
          name: "Job Description",
          downloadUrl: "/downloads/employee-data/job-description.docx",
        },
        {
          name: "Job Applications",
          downloadUrl: "/downloads/employee-data/job-applications.xlsx",
        },
        {
          name: "Employee Retention",
          downloadUrl: "/downloads/employee-data/employee-retention.xlsx",
        },
        {
          name: "Employee Performance",
          downloadUrl: "/downloads/employee-data/employee-performance.xlsx",
        },
        {
          name: "Employee Health",
          downloadUrl: "/downloads/employee-data/employee-health.xlsx",
        },
        {
          name: "Employee Tenure",
          downloadUrl: "/downloads/employee-data/employee-tenure.xlsx",
        },
        {
          name: "Employee Diversity",
          downloadUrl: "/downloads/employee-data/employee-diversity.xlsx",
        },
        // More employee data
      ],
    },
    {
      title: "Market Research",
      links: [
        {
          name: "Industry Trends",
          downloadUrl: "/downloads/market-research/industry-trends.pdf",
        },
        {
          name: "Consumer Insights",
          downloadUrl: "/downloads/market-research/consumer-insights.pdf",
        },
        {
          name: "Employer Insights",
          downloadUrl: "/downloads/market-research/employer-insights.pdf",
        },
        {
          name: "Market Insights",
          downloadUrl: "/downloads/market-research/market-insights.pdf",
        },
        {
          name: "Market Research Report",
          downloadUrl: "/downloads/market-research/market-research-report.pdf",
        },
        {
          name: "Market Research Data",
          downloadUrl: "/downloads/market-research/market-research-data.xlsx",
        },
        {
          name: "Market Research Reports",
          downloadUrl:
            "/downloads/market-research/market-research-reports.xlsx",
        },
        {
          name: "Market Research Analysis",
          downloadUrl:
            "/downloads/market-research/market-research-analysis.xlsx",
        },
        // More market research data
      ],
    },
    {
      title: "Compliance Documents",
      links: [
        {
          name: "Labor Law Compliance",
          downloadUrl: "/downloads/compliance/labor-law-compliance.pdf",
        },
        {
          name: "Environmental Standards",
          downloadUrl: "/downloads/compliance/environmental-standards.pdf",
        },
        {
          name: "Healthcare Compliance",
          downloadUrl: "/downloads/compliance/healthcare-compliance.pdf",
        },
        {
          name: "Compliance Report",
          downloadUrl: "/downloads/compliance/compliance-report.pdf",
        },
        {
          name: "Compliance Data",
          downloadUrl: "/downloads/compliance/compliance-data.xlsx",
        },
        {
          name: "Compliance Reports",
          downloadUrl: "/downloads/compliance/compliance-reports.xlsx",
        },
        {
          name: "Compliance Analysis",
          downloadUrl: "/downloads/compliance/compliance-analysis.xlsx",
        },
        {
          name: "Compliance Documents",
          downloadUrl: "/downloads/compliance/compliance-documents.xlsx",
        },
        {
          name: "Compliance Checklist",
          downloadUrl: "/downloads/compliance/compliance-checklist.xlsx",
        },
        // More compliance documents
      ],
    },
    // More categories...
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-5xl font-bold tracking-tight">
          Download Data
        </h1>
        <p className="mb-12 text-center text-lg text-gray-600 dark:text-gray-400">
          Access our comprehensive data collection, free from sensitive
          information.
        </p>
        <div className="flex flex-col gap-8 lg:flex-row">
          {dataCategories.map((category) => (
            <div
              key={category.title}
              className="flex-1 rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:shadow-gray-700"
            >
              <div className="p-6">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-200">
                  {category.title}
                </h2>
                <ul className="space-y-2">
                  {category.links.map((link) => (
                    <li
                      key={link.name}
                      className="flex transform items-center transition duration-200 ease-in-out hover:scale-105"
                    >
                      <a
                        href={link.downloadUrl}
                        className="block flex-grow rounded-md p-4 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                      >
                        {link.name}
                      </a>
                      <FiDownload className="ml-2 text-black" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
