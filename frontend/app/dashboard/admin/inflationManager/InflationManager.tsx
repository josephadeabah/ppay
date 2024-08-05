"use client";

import { useState } from "react";
import {
  InflationDataType,
  Region,
  inflationData,
} from "../../inflation/sampleData";

const InflationManager = () => {
  const [data, setData] = useState<InflationDataType>(inflationData);
  const [selectedRegion, setSelectedRegion] = useState<Region>("NorthAmerica");
  const [newData, setNewData] = useState({ month: "", rate: "" });

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value as Region);
  };

  const handleDataChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const updatedData = { ...data };
    updatedData.historical[selectedRegion].datasets[0].data[index] = parseFloat(
      e.target.value,
    );
    setData(updatedData);
  };

  const handleAddData = () => {
    if (newData.month && newData.rate) {
      const updatedData = { ...data };
      updatedData.historical[selectedRegion].labels.push(newData.month);
      updatedData.historical[selectedRegion].datasets[0].data.push(
        parseFloat(newData.rate),
      );
      setData(updatedData);
      setNewData({ month: "", rate: "" });
    }
  };

  return (
    <div className="mx-auto min-h-screen max-w-xl bg-gray-50 p-4 dark:bg-gray-900 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Inflation Data Manager
        </h1>
        <div className="mb-4">
          <label
            htmlFor="regionSelect"
            className="mb-2 block text-gray-700 dark:text-gray-300"
          >
            Select Region:
          </label>
          <select
            value={selectedRegion}
            onChange={handleRegionChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          >
            {Object.keys(data.historical).map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-200">
            Historical Data for {selectedRegion}
          </h2>
          <div>
            {data.historical[selectedRegion].labels.map(
              (label: string, index: number) => (
                <div key={`${selectedRegion}-${label}`} className="mb-4">
                  <label
                    htmlFor="monthInput"
                    className="mb-1 block text-gray-600 dark:text-gray-400"
                  >
                    {label}
                  </label>
                  <input
                    type="number"
                    value={
                      data.historical[selectedRegion].datasets[0].data[index]
                    }
                    onChange={(e) => handleDataChange(e, index)}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  />
                </div>
              ),
            )}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-200">
            Add New Data
          </h2>
          <div className="mb-4">
            <label
              htmlFor="monthInput"
              className="mb-1 block text-gray-600 dark:text-gray-400"
            >
              Month
            </label>
            <input
              type="text"
              value={newData.month}
              onChange={(e) =>
                setNewData({ ...newData, month: e.target.value })
              }
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="monthInput"
              className="mb-1 block text-gray-600 dark:text-gray-400"
            >
              Inflation Rate
            </label>
            <input
              type="number"
              value={newData.rate}
              onChange={(e) => setNewData({ ...newData, rate: e.target.value })}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            />
          </div>
          <button
            onClick={handleAddData}
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Add Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default InflationManager;
