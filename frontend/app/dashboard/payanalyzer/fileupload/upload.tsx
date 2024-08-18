// pages/dashboard/upload.tsx
import DataTable from "@/app/dashboard/payanalyzer/datatable/DataTable";
import UploadData from "@/app/dashboard/payanalyzer/fileupload/UploadData";
import { useState } from "react";

// Sample CSV Data
// Employee ID,Name,Gender,Ethnicity,Job Title,Department,Location,Base Salary,Bonus,Stock Options,Years of Experience,Performance Rating
// 001,John Doe,Male,White,Software Engineer,IT,USA,100000,5000,20000,5,4
// 002,Jane Smith,Female,Asian,Project Manager,Operations,USA,95000,4000,15000,7,3
// 003,Mike Lee,Male,Asian,Data Scientist,IT,USA,120000,6000,25000,3,5
// 004,Anna Ivan,Female,White,HR Specialist,HR,USA,85000,3000,10000,4,4
// 005,Ahmed Ali,Male,Middle Eastern,Software Engineer,IT,Canada,98000,4500,18000,6,3

// Sample CSV Data 2
// gender,salary,position,experience
// Male,50000,Software Engineer,5
// Female,45000,Software Engineer,4
// Male,55000,Senior Developer,6
// Female,50000,Senior Developer,5
// Male,48000,Junior Developer,2
// Female,46000,Junior Developer,3

export default function UploadPage() {
  const [data, setData] = useState<any[]>([]);

  return (
    <div>
      <h1>Upload CSV Data</h1>
      <UploadData onDataExtracted={setData} />
      {data.length > 0 && <DataTable data={data} />}
    </div>
  );
}
