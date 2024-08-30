import { EmployeeData } from "@/types/payaid.data";
import { Chart, registerables } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import trendlinePlugin from "chartjs-plugin-trendline";
import { useMemo } from "react";
import { Scatter } from "react-chartjs-2";
import { tTestTwoSample } from "simple-statistics";

Chart.register(...registerables, annotationPlugin, trendlinePlugin);

interface CompensationComponentAnalysisProps {
  data: EmployeeData[];
  selectedDemographic: string;
  selectedRole: string;
  selectedControls: string[];
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
  selectedDemographic,
  selectedRole,
  selectedControls,
}: CompensationComponentAnalysisProps) => {
  const demographicGroups = useMemo(() => {
    return Array.from(new Set(data.map((d) => d[selectedDemographic])));
  }, [data, selectedDemographic]);

  const filteredData = useMemo(() => {
    let filtered = data.filter(
      (d) => selectedRole === "All Roles" || d.jobTitle === selectedRole,
    );

    // Apply selected controls filtering
    if (selectedControls.includes("yearsOfExperience")) {
      filtered = filtered.filter(
        (d) => d.yearsOfExperience && parseInt(d.yearsOfExperience) > 0,
      );
    }
    if (selectedControls.includes("performancePoints")) {
      filtered = filtered.filter(
        (d) => d.performancePoints && parseInt(d.performancePoints) > 0,
      );
    }
    if (selectedControls.includes("educationLevelPoints")) {
      filtered = filtered.filter(
        (d) => d.educationLevelPoints && parseInt(d.educationLevelPoints) > 0,
      );
    }
    if (selectedControls.includes("location")) {
      filtered = filtered.filter((d) => d.location !== undefined);
    }
    if (selectedControls.includes("city")) {
      filtered = filtered.filter((d) => d.city !== undefined);
    }

    return filtered;
  }, [data, selectedRole, selectedControls]);

  const actualData = useMemo(() => {
    const datasets = demographicGroups.map((group, index) => {
      const groupData = filteredData.filter(
        (d) => d[selectedDemographic] === group,
      );
      const actualComp = groupData.map(
        (d) =>
          parseFloat(d.baseSalary || "0") +
          parseFloat(d.bonus || "0") +
          parseFloat(d.stockOptions || "0"),
      );
      const predictedComp = groupData.map(
        (d) =>
          parseFloat(d.marketRate || "0") +
          parseFloat(d.industryPoints || "0") +
          parseFloat(d.departmentPoints || "0") +
          parseFloat(d.seniorityPoints || "0") +
          parseFloat(d.educationLevelPoints || "0") +
          parseFloat(d.companySizePoints || "0"),
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
            ? colorPalette[index % colorPalette.length]
            : colorPalette[index % colorPalette.length],
      };
    });

    return {
      datasets,
    };
  }, [filteredData, demographicGroups, selectedDemographic]);

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold">Compensation Analysis</h2>
      <Scatter
        data={actualData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const { raw }: { raw: any } = context;
                  const actualComp = raw.x;
                  const predictedComp = raw.y;
                  return `Actual: $${actualComp.toFixed(2)}, Predicted: $${predictedComp.toFixed(2)}`;
                },
              },
            },
          },
          scales: {
            x: {
              type: "linear",
              position: "bottom",
              title: {
                display: true,
                text: "Actual Compensation ($)",
              },
            },
            y: {
              type: "linear",
              title: {
                display: true,
                text: "Predicted Compensation ($)",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default CompensationComponentAnalysis;
