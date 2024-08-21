// UploadData.tsx

import { useState } from "react";

// Define the type for the CSV data
interface EmployeeData {
  [key: string]: string;
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
  seniorityLevel: string; // Newly added field
}

// Utility function to parse CSV
export const parseCSV = (file: File): Promise<EmployeeData[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const lines = text.split("\n");
      const headers = lines[0].split(",");
      const data = lines.slice(1).map((line) => {
        const values = line.split(",");
        return headers.reduce((obj, header, index) => {
          obj[header] = values[index];
          return obj;
        }, {} as EmployeeData);
      });
      resolve(data);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  });
};

const UploadData = ({
  onDataExtracted,
}: {
  onDataExtracted: (data: EmployeeData[]) => void;
}) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    try {
      const data = await parseCSV(file);
      onDataExtracted(data);
    } catch (error) {
      console.error("Error parsing CSV file", error);
    }
  };

  return (
    <div className="upload-container">
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        className="mt-4 bg-blue-500 p-2 text-white"
      >
        Upload & Extract
      </button>
    </div>
  );
};

export default UploadData;
