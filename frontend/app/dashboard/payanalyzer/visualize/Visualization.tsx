import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";

const Visualization = ({ data }: { data: any[] }) => {
  const chartInstanceRef = useRef<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const maleSalaries = data
    .filter((row) => row.gender === "Male")
    .map((row) => parseFloat(row.salary));
  const femaleSalaries = data
    .filter((row) => row.gender === "Female")
    .map((row) => parseFloat(row.salary));

  const chartData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Salary Distribution",
        data: [
          maleSalaries.reduce((a, b) => a + b, 0) / maleSalaries.length,
          femaleSalaries.reduce((a, b) => a + b, 0) / femaleSalaries.length,
        ],
        backgroundColor: ["#3498db", "#e74c3c"],
      },
    ],
  };

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (canvasRef.current) {
      chartInstanceRef.current = new Chart(canvasRef.current, {
        type: "bar",
        data: chartData,
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="chart-container">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Visualization;
