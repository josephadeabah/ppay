"use client";

const DownloadPage = () => {
  const dataCategories = [
    {
      title: "Financial Reports",
      links: [
        {
          name: "Q1 2023 Report",
          color: "bg-blue-100",
          downloadUrl: "/downloads/financial-reports/q1-2023.pdf",
        },
        {
          name: "Q2 2023 Report",
          color: "bg-blue-100",
          downloadUrl: "/downloads/financial-reports/q2-2023.pdf",
        },
        {
          name: "Q3 2023 Report",
          color: "bg-blue-100",
          downloadUrl: "/downloads/financial-reports/q3-2023.pdf",
        },
        {
          name: "Q4 2023 Report",
          color: "bg-blue-100",
          downloadUrl: "/downloads/financial-reports/q4-2023.pdf",
        },
        {
          name: "Annual Report",
          color: "bg-blue-100",
          downloadUrl: "/downloads/financial-reports/annual-report.pdf",
        },
        {
          name: "Financial Statements",
          color: "bg-blue-100",
          downloadUrl: "/downloads/financial-reports/financial-statements.xlsx",
        },
        {
          name: "Balance Sheet",
          color: "bg-blue-100",
          downloadUrl: "/downloads/financial-reports/balance-sheet.xlsx",
        },
        {
          name: "Income Statement",
          color: "bg-blue-100",
          downloadUrl: "/downloads/financial-reports/income-statement.xlsx",
        },
        {
          name: "Cash Flow Statement",
          color: "bg-blue-100",
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
          color: "bg-green-100",
          downloadUrl: "/downloads/employee-data/employee-list.csv",
        },
        {
          name: "Salary Breakdown",
          color: "bg-green-100",
          downloadUrl: "/downloads/employee-data/salary-breakdown.xlsx",
        },
        {
          name: "Job Description",
          color: "bg-green-100",
          downloadUrl: "/downloads/employee-data/job-description.docx",
        },
        {
          name: "Job Applications",
          color: "bg-green-100",
          downloadUrl: "/downloads/employee-data/job-applications.xlsx",
        },
        {
          name: "Employee Retention",
          color: "bg-green-100",
          downloadUrl: "/downloads/employee-data/employee-retention.xlsx",
        },
        {
          name: "Employee Performance",
          color: "bg-green-100",
          downloadUrl: "/downloads/employee-data/employee-performance.xlsx",
        },
        {
          name: "Employee Health",
          color: "bg-green-100",
          downloadUrl: "/downloads/employee-data/employee-health.xlsx",
        },
        {
          name: "Employee Tenure",
          color: "bg-green-100",
          downloadUrl: "/downloads/employee-data/employee-tenure.xlsx",
        },
        {
          name: "Employee Diversity",
          color: "bg-green-100",
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
          color: "bg-yellow-100",
          downloadUrl: "/downloads/market-research/industry-trends.pdf",
        },
        {
          name: "Consumer Insights",
          color: "bg-yellow-100",
          downloadUrl: "/downloads/market-research/consumer-insights.pdf",
        },
        {
          name: "Employer Insights",
          color: "bg-yellow-100",
          downloadUrl: "/downloads/market-research/employer-insights.pdf",
        },
        {
          name: "Market Insights",
          color: "bg-yellow-100",
          downloadUrl: "/downloads/market-research/market-insights.pdf",
        },
        {
          name: "Market Research Report",
          color: "bg-yellow-100",
          downloadUrl: "/downloads/market-research/market-research-report.pdf",
        },
        {
          name: "Market Research Data",
          color: "bg-yellow-100",
          downloadUrl: "/downloads/market-research/market-research-data.xlsx",
        },
        {
          name: "Market Research Reports",
          color: "bg-yellow-100",
          downloadUrl:
            "/downloads/market-research/market-research-reports.xlsx",
        },
        {
          name: "Market Research Analysis",
          color: "bg-yellow-100",
          downloadUrl:
            "/downloads/market-research/market-research-analysis.xlsx",
        },
        {
          name: "Market Research Analysis",
          color: "bg-yellow-100",
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
          color: "bg-red-100",
          downloadUrl: "/downloads/compliance/labor-law-compliance.pdf",
        },
        {
          name: "Environmental Standards",
          color: "bg-red-100",
          downloadUrl: "/downloads/compliance/environmental-standards.pdf",
        },
        {
          name: "Healthcare Compliance",
          color: "bg-red-100",
          downloadUrl: "/downloads/compliance/healthcare-compliance.pdf",
        },
        {
          name: "Compliance Report",
          color: "bg-red-100",
          downloadUrl: "/downloads/compliance/compliance-report.pdf",
        },
        {
          name: "Compliance Data",
          color: "bg-red-100",
          downloadUrl: "/downloads/compliance/compliance-data.xlsx",
        },
        {
          name: "Compliance Reports",
          color: "bg-red-100",
          downloadUrl: "/downloads/compliance/compliance-reports.xlsx",
        },
        {
          name: "Compliance Analysis",
          color: "bg-red-100",
          downloadUrl: "/downloads/compliance/compliance-analysis.xlsx",
        },
        {
          name: "Compliance Documents",
          color: "bg-red-100",
          downloadUrl: "/downloads/compliance/compliance-documents.xlsx",
        },
        {
          name: "Compliance Checklist",
          color: "bg-red-100",
          downloadUrl: "/downloads/compliance/compliance-checklist.xlsx",
        },
        // More compliance documents
      ],
    },
    // More categories...
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="mx-auto px-2 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">Download Data</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dataCategories.map((category) => (
            <div
              key={category.title}
              className="border border-gray-200 p-4 dark:border-gray-700"
            >
              <h2 className="mb-4 text-xl font-semibold">{category.title}</h2>
              <ul className="space-y-3">
                {category.links.map((link) => (
                  <li
                    key={link.name}
                    className={`rounded-lg p-4 ${link.color} dark:bg-opacity-20`}
                  >
                    <a
                      href={link.downloadUrl}
                      className="block text-lg font-medium text-gray-800 dark:text-gray-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
