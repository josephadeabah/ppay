"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function WeatherChart() {
  const [options, setOptions] = useState<{
    chart: { id: string; toolbar: { show: boolean } };
    xaxis: { categories: string[] };
  } | null>(null);
  const [series, setSeries] = useState<
    { name: string; data: number[] }[] | null
  >(null);
  const [loading, setLoading] = useState(true); // State to track loading status

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
          },
          xaxis: {
            categories,
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
      </div>
    );
  } catch (error) {
    console.error("Error rendering chart:", error);
    return <div>Error loading chart</div>;
  }
}
