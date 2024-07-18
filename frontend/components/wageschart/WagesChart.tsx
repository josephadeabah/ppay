"use client";

import { Button, Modal } from "flowbite-react"; // Import Flowbite components
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function WeatherChart() {
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
  const [loading, setLoading] = useState(true); // State to track loading status
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility
  const [selectedData, setSelectedData] = useState<{
    date: string;
    temperature: number;
  } | null>(null); // State to store selected bar data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&hourly=temperature_2m",
        ); // London coordinates
        const data = await response.json();

        const categories = data.hourly.time.slice(0, 24); // Taking only the first 24 hours for simplicity
        const temperatures = data.hourly.temperature_2m.slice(0, 24);

        const newOptions = {
          chart: {
            id: "basic-bar",
            toolbar: {
              show: false, // Disable the menu dropdown
            },
            events: {
              dataPointSelection: (
                event: any,
                chartContext: any,
                config: any,
              ) => {
                if (config.dataPointIndex !== undefined) {
                  // Debugging logs
                  console.log("Data Point Index:", config.dataPointIndex);
                  console.log("Categories:", options?.xaxis.categories);
                  console.log("Series Data:", series?.[0]?.data);

                  const date =
                    options?.xaxis.categories[config.dataPointIndex] || "";
                  const temperature =
                    series?.[0]?.data[config.dataPointIndex] || 0;

                  // Debugging logs
                  console.log("Selected Date:", date);
                  console.log("Selected Temperature:", temperature);

                  setSelectedData({ date, temperature });
                  setModalOpen(true); // Open the modal
                }
              },
            },
          },
          xaxis: {
            categories,
          },
          plotOptions: {
            bar: {
              horizontal: false, // Make sure bars are vertical
              dataLabels: {
                position: "top", // Position of data labels
              },
            },
          },
        };

        const newSeries = [
          {
            name: "Temperature (°C)",
            data: temperatures,
          },
        ];

        setOptions(newOptions);
        setSeries(newSeries);
        setLoading(false); // Data has been fetched, set loading to false
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false); // Error occurred, set loading to false
      }
    };

    fetchData();
  }, []);

  if (loading || !options || !series) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  try {
    return (
      <div className="w-full bg-white dark:bg-gray-800 dark:text-gray-50">
        <div className="row">
          <Chart
            options={options}
            series={series}
            type="bar"
            width="500"
            height="300"
          />
        </div>
        {/* Flowbite Modal for displaying full data */}
        <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
          <Modal.Header>Selected Data</Modal.Header>
          <Modal.Body>
            {selectedData ? (
              <p>
                Date: {selectedData.date}, Temperature:{" "}
                {selectedData.temperature} °C
              </p>
            ) : (
              <p>No data selected</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalOpen(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  } catch (error) {
    console.error("Error rendering chart:", error);
    return <div>Error loading chart</div>;
  }
}
