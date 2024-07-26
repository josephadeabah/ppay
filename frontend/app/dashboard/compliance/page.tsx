"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Button, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
);

// Initial data for compliance trends
const initialComplianceTrendsData = {
  labels: ["Jan 2024", "Feb 2024", "Mar 2024", "Apr 2024", "May 2024"],
  datasets: [
    {
      label: "Compliance Rate",
      data: [78, 82, 85, 88, 90],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
    },
  ],
};

const complianceUpdates = [
  {
    date: "July 2024",
    update: "New minimum wage laws implemented in California.",
  },
  { date: "June 2024", update: "Federal regulations on equal pay updated." },
  // Add more updates as needed
];

const complianceResources = [
  { title: "Minimum Wage Regulations", link: "/resources/minimum-wage" },
  { title: "Equal Pay Compliance Guide", link: "/resources/equal-pay" },
  {
    title: "Non-Discrimination Policies",
    link: "/resources/non-discrimination",
  },
  // Add more resources as needed
];

const complianceData = {
  categories: ["Minimum Wage", "Equal Pay", "Non-Discrimination"],
  complianceRates: [85, 90, 88], // Example data
};

export default function CompliancePage() {
  const [complianceTrendsData, setComplianceTrendsData] = useState(
    initialComplianceTrendsData,
  );

  useEffect(() => {
    // Function to generate random data for simulation
    const generateRandomData = () => {
      const newData = complianceTrendsData.datasets[0].data.map((value) =>
        Math.max(0, Math.min(100, value + (Math.random() - 0.5) * 5)),
      );
      setComplianceTrendsData({
        ...complianceTrendsData,
        datasets: [
          {
            ...complianceTrendsData.datasets[0],
            data: newData,
          },
        ],
      });
    };

    // Update data every 5 seconds
    const intervalId = setInterval(generateRandomData, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [complianceTrendsData]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="bg-gray-50 p-6 dark:bg-gray-900">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
        Compliance and Regulatory Insights
      </h1>

      {/* Compliance Updates Section */}
      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Updates on Labor Laws and Regulations
        </h2>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Update</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {complianceUpdates.map((update, index) => (
              <Table.Row key={index}>
                <Table.Cell>{update.date}</Table.Cell>
                <Table.Cell>{update.update}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Compliance Resources Section */}
      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Compliance Resources
        </h2>
        <ul className="list-inside list-disc text-gray-700 dark:text-gray-300">
          {complianceResources.map((resource, index) => (
            <li key={index}>
              <a
                href={resource.link}
                className="text-blue-500 hover:underline dark:text-blue-400"
              >
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Compliance Data Analysis Section */}
      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Compliance Data Analysis
        </h2>
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            Compliance Rates by Category
          </h3>
          <ul className="list-inside list-disc text-gray-700 dark:text-gray-300">
            {complianceData.categories.map((category, index) => (
              <li key={index} className="flex justify-between">
                <span>{category}</span>
                <span>{complianceData.complianceRates[index]}%</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            Compliance Trends Over Time
          </h3>
          <Line data={complianceTrendsData} options={options} />
        </div>
      </div>

      {/* Data Collection Avenues Section */}
      <div className="bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Avenues for Compliance Data Collection
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          To ensure comprehensive compliance, we collect data from various
          sources including public submissions and required authority reports.
          Here are the avenues for data collection:
        </p>
        <ul className="list-inside list-disc text-gray-700 dark:text-gray-300">
          <li>
            Public Surveys: Collect feedback and data from employees and
            employers regarding compliance practices.
          </li>
          <li>
            Regulatory Reports: Gather reports and data from government agencies
            and regulatory bodies.
          </li>
          <li>
            Anonymous Tip Lines: Provide anonymous reporting channels for
            employees to report compliance issues.
          </li>
          <li>
            Compliance Audits: Regular audits conducted to ensure adherence to
            labor laws and regulations.
          </li>
        </ul>
        <div className="mt-6">
          <Button color="light" href="/dashboard/reportpay">
            Submit Compliance Data
          </Button>
        </div>
      </div>
    </div>
  );
}
