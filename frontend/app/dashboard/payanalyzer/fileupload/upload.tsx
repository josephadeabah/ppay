// upload.tsx

import DataTable, {
  EmployeeData,
} from "@/app/dashboard/payanalyzer/datatable/DataTable";
import UploadData from "@/app/dashboard/payanalyzer/fileupload/UploadData";
import { useState } from "react";
// Define the type for the CSV data

export default function UploadPage() {
  const [data, setData] = useState<EmployeeData[]>([]);

  return (
    <div>
      <h1>Upload CSV Data</h1>
      <UploadData onDataExtracted={setData} />
      {data.length > 0 && <DataTable data={data} />}
    </div>
  );
}
