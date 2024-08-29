"use client";

import DropdownSelect from "@/components/dropdown/DropdownSelect"; // Adjust the import path as needed
import { EmployeeData } from "@/types/payaid.data";
import { Chart, registerables } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import trendlinePlugin from "chartjs-plugin-trendline";
import { SetStateAction, useMemo, useState } from "react";
import { Scatter } from "react-chartjs-2";
import { tTestTwoSample } from "simple-statistics";

Chart.register(...registerables, annotationPlugin, trendlinePlugin);

interface CompensationComponentAnalysisProps {
  data: EmployeeData[];
}

const colorPalette = [
  "rgba(255, 99, 132, 0.5)", // Red
  "rgba(54, 162, 235, 0.5)", // Blue
  "rgba(255, 206, 86, 0.5)", // Yellow
  "rgba(75, 192, 192, 0.5)", // Teal
  "rgba(153, 102, 255, 0.5)", // Purple
  "rgba(255, 159, 64, 0.5)", // Orange
];

const CompensationComponentAnalysis = ({
  data,
}: CompensationComponentAnalysisProps) => {
  const [selectedDemographic, setSelectedDemographic] =
    useState<string>("gender");
  const [selectedRole, setSelectedRole] = useState<string>("All Roles");

  const demographicGroups = useMemo(() => {
    return Array.from(new Set(data.map((d) => d[selectedDemographic])));
  }, [data, selectedDemographic]);

  const roleGroups = useMemo(() => {
    return Array.from(new Set(data.map((d) => d.jobTitle)));
  }, [data]);

  const filteredData = useMemo(() => {
    return data.filter(
      (d) => selectedRole === "All Roles" || d.jobTitle === selectedRole,
    );
  }, [data, selectedRole]);

  const actualData = useMemo(() => {
    const datasets = demographicGroups.map((group, index) => {
      const groupData = filteredData.filter(
        (d) => d[selectedDemographic] === group,
      );
      const actualComp = groupData.map(
        (d) =>
          parseFloat(d.baseSalary) +
          parseFloat(d.bonus) +
          parseFloat(d.stockOptions),
      );
      const predictedComp = groupData.map(
        (d) =>
          parseFloat(d.marketRate) +
          parseFloat(d.industryPoints) +
          parseFloat(d.departmentPoints) +
          parseFloat(d.seniorityPoints) +
          parseFloat(d.educationLevelPoints) +
          parseFloat(d.companySizePoints),
      );

      let pValue: number | null = null;

      if (actualComp.length >= 2 && predictedComp.length >= 2) {
        pValue = tTestTwoSample(actualComp, predictedComp);
      }

      return {
        label: group,
        data: groupData.map((d, i) => ({
          x: parseFloat(actualComp[i].toFixed(2)),
          y: parseFloat(predictedComp[i].toFixed(2)),
        })),
        backgroundColor:
          pValue !== null && pValue < 0.05
            ? colorPalette[index % colorPalette.length]
            : colorPalette[index % colorPalette.length],
        borderColor:
          pValue !== null && pValue < 0.05
            ? "rgba(255, 99, 132, 1)"
            : "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        pointRadius: 5,
      };
    });

    return datasets;
  }, [filteredData, demographicGroups, selectedDemographic]);

  const chartData = useMemo(
    () => ({
      datasets: actualData,
    }),
    [actualData],
  );

  const chartOptions = useMemo(() => {
    const allActualComp = actualData.flatMap((dataset) =>
      dataset.data.map((point) => point.x),
    );
    const allPredictedComp = actualData.flatMap((dataset) =>
      dataset.data.map((point) => point.y),
    );

    const maxActualComp = Math.max(...allActualComp, 0);
    const maxPredictedComp = Math.max(...allPredictedComp, 0);

    return {
      scales: {
        x: {
          title: {
            display: true,
            text: "Actual Compensation ($)",
          },
          ticks: {
            beginAtZero: true,
            stepSize: Math.max(maxActualComp / 10, 10000),
          },
        },
        y: {
          title: {
            display: true,
            text: "Predicted Compensation ($)",
          },
          ticks: {
            beginAtZero: true,
            stepSize: Math.max(maxPredictedComp / 10, 10000),
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "bottom" as const,
        },
        annotation: {
          annotations: {
            line1: {
              type: "line" as const,
              xMin: 0,
              xMax: maxActualComp,
              yMin: 0,
              yMax: maxPredictedComp,
              borderColor: "rgba(0, 0, 0, 0.8)",
              borderWidth: 2,
              label: {
                content: "Ideal Compensation",
                enabled: true,
                position: "end" as const,
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color: "#fff",
                xAdjust: 10,
                yAdjust: 10,
              },
            },
          },
        },
      },
    };
  }, [actualData]);

  return (
    <div className="w-full max-w-full bg-white p-6 shadow-md dark:bg-gray-900">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Compensation Analysis by {selectedDemographic}
      </h2>

      {/* Demographic and Role Filters */}
      <div className="mb-4 flex gap-4">
        <DropdownSelect
          options={[
            { value: "gender", label: "Gender" },
            { value: "ethnicity", label: "Ethnicity" },
            { value: "department", label: "Department" },
            { value: "location", label: "Location" },
          ]}
          selectedValue={selectedDemographic}
          onChange={(e) => setSelectedDemographic(e.target.value)}
          placeholder="Select Demographic"
          className="border p-2"
        />

        <DropdownSelect
          options={[
            { value: "All Roles", label: "All Roles" },
            ...roleGroups.map((role) => ({ value: role, label: role })),
          ]}
          selectedValue={selectedRole}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setSelectedRole(e.target.value)
          }
          placeholder="Select Role"
          className="border p-2"
        />
      </div>

      <div className="h-96 w-full">
        <Scatter data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default CompensationComponentAnalysis;
