//Shows on Dashboard - Compare - Wages Chart
"use client";
import ModalComponent from "@/components/modal/ModalComponent";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function WagesChart() {
  const [options, setOptions] = useState<{
    chart: {
      id: string;
      toolbar: { show: boolean };
      events?: {
        dataPointSelection: (
          event: any,
          chartContext: any,
          config: any,
        ) => void;
      };
    };
    xaxis: { categories: string[] };
    plotOptions: {
      bar: { horizontal: boolean; dataLabels: { position: string } };
    };
  } | null>(null);
  const [series, setSeries] = useState<
    { name: string; data: number[] }[] | null
  >(null);
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

        const newSeries = [
          {
            name: "Temperature (°C)",
            data: temperatures,
          },
        ];

        const newOptions = {
          chart: {
            id: "basic-bar",
            toolbar: {
              show: false,
            },
            events: {
              dataPointSelection: (
                event: any,
                chartContext: any,
                config: any,
              ) => {
                const date = categories[config.dataPointIndex] || "";
                const temperature = temperatures[config.dataPointIndex] || 0;
                setSelectedData({ date, temperature });
                setModalOpen(true);
              },
            },
          },
          xaxis: {
            categories,
          },
          plotOptions: {
            bar: {
              horizontal: false,
              dataLabels: {
                position: "top",
              },
            },
          },
        };

        setOptions(newOptions);
        setSeries(newSeries);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !options || !series) {
    return (
      <div className="flex h-full w-full items-center justify-center text-gray-600 dark:text-gray-50">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white dark:bg-gray-800 dark:text-gray-50">
      <div className="p-5">
        <div className="w-full bg-white dark:bg-gray-800 dark:text-gray-50">
          <Chart
            options={options}
            series={series}
            type="bar"
            height="300px" // Ensures height adapts to container
            width="100%" // Ensures width adapts to container
          />
        </div>
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
