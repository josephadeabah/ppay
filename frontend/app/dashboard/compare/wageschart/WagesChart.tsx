"use client";
import ModalComponent from "@/components/modal/ModalComponent";
import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function WagesChart() {
  const [chartData, setChartData] = useState<any>({
    labels: ["USA", "Germany", "India", "Brazil", "China"],
    datasets: [],
  });
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<{
    country: string;
    salary: number;
  } | null>(null);

  useEffect(() => {
    const generateRandomSalaries = () => {
      return Array(5)
        .fill(0)
        .map(() => Math.floor(Math.random() * (120000 - 50000 + 1)) + 50000);
    };

    const fetchData = () => {
      const newSalaries = generateRandomSalaries();

      const newChartData = {
        labels: chartData.labels,
        datasets: [
          {
            label: "Average Salary (USD)",
            data: newSalaries,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      };

      setChartData(newChartData);
      setLoading(false);
    };

    fetchData();
    const intervalId = setInterval(fetchData, 4000); // Fetch new data every 4 seconds

    return () => {
      clearInterval(intervalId); // Clear interval on component unmount
    };
  }, []);

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center text-gray-600 dark:text-gray-50">
        <div>Loading...</div>
      </div>
    );
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Global Salary Trends",
      },
    },
    onClick: (event: any, elements: any) => {
      if (elements.length > 0) {
        const { index } = elements[0];
        const country = chartData.labels[index] || "";
        const salary = chartData.datasets[0].data[index] || 0;
        setSelectedData({ country, salary });
        setModalOpen(true);
      }
    },
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 dark:text-gray-50">
      <div className="mt-4">
        <Bar data={chartData} options={options} />
      </div>

      <ModalComponent
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Selected Data"
      >
        {selectedData ? (
          <p>
            Country: {selectedData.country}, Salary: {selectedData.salary} USD
          </p>
        ) : (
          <p>No data selected</p>
        )}
      </ModalComponent>
    </div>
  );
}
