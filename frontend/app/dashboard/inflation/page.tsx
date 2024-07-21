"use client";

import DropdownSelect from "@/components/dropdown/DropdownSelect";
import {
  ActiveElement,
  BarElement,
  CategoryScale,
  ChartEvent,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Table } from "flowbite-react";
import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const tooltipPlugin = {
  id: "tooltipPlugin",
  afterDatasetsDraw(chart: ChartJS) {
    if (chart.tooltip?.active && Array.isArray(chart.tooltip.active)) {
      const tooltipModel = chart.tooltip;
      const { ctx } = chart;

      // Draw the tooltip at the tooltip position
      const position =
        tooltipModel.active &&
        Array.isArray(tooltipModel.active) &&
        tooltipModel.active[0]?.tooltipPosition();

      ctx.save();
      ctx.font = "bold 14px Arial";
      ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
      ctx.fillText("💬", position.x, position.y - 10);
      ctx.restore();
    }
  },
};
ChartJS.register(tooltipPlugin);

const inflationData = {
  historical: {
    NorthAmerica: {
      labels: ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"],
      datasets: [
        {
          label: "Inflation Rate",
          data: [2.1, 2.3, 2.5, 2.4, 2.6],
          borderColor: "rgba(255, 99, 132, 0.6)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          fill: true,
        },
      ],
    },
    Europe: {
      labels: ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"],
      datasets: [
        {
          label: "Inflation Rate",
          data: [1.8, 2.0, 2.2, 2.1, 2.3],
          borderColor: "rgba(54, 162, 235, 0.6)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          fill: true,
        },
      ],
    },
    Asia: {
      labels: ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"],
      datasets: [
        {
          label: "Inflation Rate",
          data: [2.0, 2.2, 2.4, 2.3, 2.5],
          borderColor: "rgba(75, 192, 192, 0.6)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    },
    Africa: {
      labels: ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"],
      datasets: [
        {
          label: "Inflation Rate",
          data: [2.3, 2.5, 2.7, 2.6, 2.8],
          borderColor: "rgba(255, 159, 64, 0.6)",
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          fill: true,
        },
      ],
    },
    // Add other regions here...
  },
  regional: {
    labels: ["North America", "Europe", "Asia", "South America", "Africa"],
    datasets: [
      {
        label: "Inflation Rate",
        data: [3.0, 2.8, 3.5, 3.2, 2.9],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  },
};

const categoryData: {
  [key: string]: { category: string; inflationRate: string }[];
} = {
  NorthAmerica: [
    { category: "Food", inflationRate: "2.4%" },
    { category: "Housing", inflationRate: "3.1%" },
    { category: "Transportation", inflationRate: "2.8%" },
    { category: "Healthcare", inflationRate: "3.3%" },
    { category: "Education", inflationRate: "2.7%" },
  ],
  Europe: [
    { category: "Food", inflationRate: "2.1%" },
    { category: "Housing", inflationRate: "2.8%" },
    { category: "Transportation", inflationRate: "2.5%" },
    { category: "Healthcare", inflationRate: "3.0%" },
    { category: "Education", inflationRate: "2.6%" },
  ],
  Asia: [
    { category: "Food", inflationRate: "1.8%" },
    { category: "Housing", inflationRate: "2.5%" },
    { category: "Transportation", inflationRate: "2.2%" },
    { category: "Healthcare", inflationRate: "3.0%" },
    { category: "Education", inflationRate: "2.4%" },
  ],
  Africa: [
    { category: "Food", inflationRate: "2.5%" },
    { category: "Housing", inflationRate: "3.2%" },
    { category: "Transportation", inflationRate: "2.6%" },
    { category: "Healthcare", inflationRate: "3.8%" },
    { category: "Education", inflationRate: "2.7%" },
  ],
  // Add other regions here...
};

interface ChatInterfaceProps {
  isVisible: boolean;
  onClose: () => void;
  data?: string; // Added to handle different messages
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  isVisible,
  onClose,
  data,
}) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // Logic to send message
    console.log("Message sent:", message);
    // Close chat after sending message
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 right-0 m-4 w-64 bg-white p-4 text-gray-700 shadow-lg dark:bg-gray-700 dark:text-gray-50">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Mention an expert using @name"
        className="w-full border border-gray-300 p-2"
      />
      <button
        onClick={handleSendMessage}
        className="mt-2 w-full bg-blue-500 p-2 text-white dark:bg-gray-800 dark:text-gray-50"
      >
        Send
      </button>
      <button
        onClick={onClose}
        className="mt-2 w-full bg-gray-500 p-2 text-white"
      >
        Close
      </button>
      <div className="mt-2">{data && <p>{data}</p>}</div>
    </div>
  );
};

const InflationPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState("NorthAmerica");
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [chatData, setChatData] = useState<string | undefined>(undefined);

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);
  };

  const handleChartClick = (event: ChartEvent, elements: ActiveElement[]) => {
    if (elements.length > 0) {
      const element = elements[0];
      const index = element.index;
      const region = inflationData.regional.labels[index];
      setChatData(`You clicked on ${region}. What would you like to know?`);
      setIsChatVisible(true);
    }
  };

  const handleChatClose = () => {
    setIsChatVisible(false);
    setChatData(undefined);
  };

  return (
    <div className="bg-gray-50 p-6 dark:bg-gray-900">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
        Inflation Analysis
      </h1>

      {/* Overview */}
      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Overview
        </h2>
        <p className="text-gray-700 dark:text-gray-400">
          Inflation refers to the rate at which the general level of prices for
          goods and services is rising, and subsequently, purchasing power is
          falling. Central banks attempt to limit inflation, and avoid
          deflation, in order to keep the economy running smoothly.
        </p>
        <p className="text-gray-700 dark:text-gray-400">
          <strong>Key Points about Inflation:</strong>
          <ul className="list-inside list-disc">
            <li>
              <strong>Price Increases:</strong> Inflation indicates an increase
              in prices across the economy. When inflation occurs, each unit of
              currency buys fewer goods and services than it did in the past.
            </li>
            <li>
              <strong>Measurement:</strong> Inflation is commonly measured by
              the Consumer Price Index (CPI) or the Producer Price Index (PPI).
              The CPI measures the average change over time in the prices paid
              by urban consumers for a market basket of consumer goods and
              services. The PPI measures the average change over time in the
              selling prices received by domestic producers for their output.
            </li>
            <li>
              <strong>Causes:</strong> Inflation can be caused by various
              factors, including demand-pull inflation, cost-push inflation, and
              built-in inflation.
            </li>
            <li>
              <strong>Effects:</strong> Inflation reduces purchasing power,
              impacts savings and investments, affects borrowing and lending,
              and influences wage negotiations.
            </li>
            <li>
              <strong>Monetary Policy:</strong> Central banks use monetary
              policy tools such as interest rates to control inflation.
            </li>
            <li>
              <strong>Hyperinflation:</strong> An extremely high and typically
              accelerating inflation rate, often exceeding 50% per month.
            </li>
          </ul>
        </p>
      </div>

      {/* Historical Inflation Trends */}
      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Historical Inflation Trends
        </h2>
        <DropdownSelect
          options={[
            { label: "North America", value: "NorthAmerica" },
            { label: "Europe", value: "Europe" },
            { label: "Asia", value: "Asia" },
            { label: "South America", value: "SouthAmerica" },
            { label: "Africa", value: "Africa" },
          ]}
          selectedValue={selectedRegion}
          onChange={handleRegionChange}
          placeholder="Select a region"
        />
        <Line
          data={
            inflationData.historical[
              selectedRegion as keyof typeof inflationData.historical
            ] || {}
          }
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top" as const,
                display: true,
              },
              title: {
                display: true,
                text: "Historical Inflation Trends",
              },
            },
            onClick: handleChartClick,
          }}
        />
      </div>

      {/* Regional Inflation Rates */}
      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Regional Inflation Rates
        </h2>
        <Bar
          data={inflationData.regional}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top" as const,
              },
              title: {
                display: true,
                text: "Regional Inflation Rates",
              },
            },
            onClick: handleChartClick,
          }}
        />
      </div>

      {/* Category Data Table */}
      <div className="mb-6 bg-white p-5 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Category Inflation Data
        </h2>
        {categoryData[selectedRegion] ? (
          <Table>
            <Table.Head>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Inflation Rate</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {categoryData[selectedRegion].map((data, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{data.category}</Table.Cell>
                  <Table.Cell>{data.inflationRate}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        ) : (
          <p>No data available for the selected region.</p>
        )}
      </div>

      {/* Chat Interface */}
      <ChatInterface
        isVisible={isChatVisible}
        onClose={handleChatClose}
        data={chatData}
      />
    </div>
  );
};

export default InflationPage;
