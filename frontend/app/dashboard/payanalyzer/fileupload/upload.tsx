// upload.tsx

import DataTable from "@/app/dashboard/payanalyzer/datatable/DataTable";
import UploadData from "@/app/dashboard/payanalyzer/fileupload/UploadData";
import { useState } from "react";

// Define the type for the CSV data
interface EmployeeData {
  employeeId: string;
  name: string;
  gender: string;
  ethnicity: string;
  jobTitle: string;
  department: string;
  location: string;
  baseSalary: string;
  bonus: string;
  stockOptions: string;
  yearsOfExperience: string;
  performancePoints: string;
  marketRate: string;
  industryPoints: string;
  departmentPoints: string;
  seniorityLevels: string;
  educationLevelPoints: string;
  companySizePoints: string;
}

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
