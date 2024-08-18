// pages/dashboard/analysis.tsx
import MetricsAnalysis from "@/app/dashboard/payanalyzer/metricsanalysis/MetricsAnalysis";
import { useState } from "react";

export default function AnalysisPage({ initialData }: { initialData: any[] }) {
  const [data] = useState(initialData);

  return (
    <div>
      <MetricsAnalysis data={data} />
    </div>
  );
}
