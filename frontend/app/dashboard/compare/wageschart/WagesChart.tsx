//Shows on Dashboard - Compare - Wages Chart
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
    labels: [],
    datasets: [],
  });
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<{
    date: string;
    temperature: number;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&hourly=temperature_2m",
        );
        const data = await response.json();

        const categories = data.hourly.time.slice(0, 24);
        const temperatures = data.hourly.temperature_2m.slice(0, 24);

        const newChartData = {
          labels: categories,
          datasets: [
            {
              label: "Temperature (°C)",
              data: temperatures,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        };

        setChartData(newChartData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchData();
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
        text: "Wages Chart",
      },
    },
    onClick: (event: any, elements: any) => {
      if (elements.length > 0) {
        const { index } = elements[0];
        const date = chartData.labels[index] || "";
        const temperature = chartData.datasets[0].data[index] || 0;
        setSelectedData({ date, temperature });
        setModalOpen(true);
      }
    },
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 dark:text-gray-50">
      <div className="w-full bg-white dark:bg-gray-800 dark:text-gray-50">
        <Bar data={chartData} options={options} />
      </div>

      <ModalComponent
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Selected Data"
      >
        {selectedData ? (
          <p>
            Date: {selectedData.date}, Temperature: {selectedData.temperature}{" "}
            °C
          </p>
        ) : (
          <p>No data selected</p>
        )}
      </ModalComponent>
    </div>
  );
}
