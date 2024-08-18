// components/Dashboard/ExportButton.tsx
import { useState } from "react";
import { CSVLink } from "react-csv";

const ExportButton = ({ data }: { data: any[] }) => {
  const [exportData, setExportData] = useState(data);

  const headers = Object.keys(data[0]);

  return (
    <CSVLink
      data={exportData}
      headers={headers}
      filename={"pay_equity_analysis.csv"}
      className="export-button bg-green-500 p-2 text-white"
    >
      Export as CSV
    </CSVLink>
  );
};

export default ExportButton;
