import { EmployeeData } from "@/types/payaid.data";
import { useState } from "react";

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
    <div className="flex h-screen w-full flex-col items-center justify-center rounded border border-dashed border-gray-300 p-6 dark:border-gray-600">
      <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
        Please upload a CSV file containing employee data to analyze.
      </h2>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <label className="w-full cursor-pointer sm:w-auto">
          <input
            type="file"
            accept=".csv"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="flex items-center justify-center rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition-all duration-150 hover:bg-blue-600">
            Choose CSV File
          </div>
        </label>
        {file && (
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {file.name}
          </span>
        )}
      </div>
      {/* Example file */}
      <a
        href="/employeeData.csv"
        download="/employeeData.csv"
        className="flex items-center text-sm text-gray-600 hover:underline"
      >
        Download Example CSV
      </a>

      <button
        onClick={handleUpload}
        className="mt-6 w-full rounded-lg bg-green-500 px-6 py-2 font-medium text-white shadow-sm transition-all duration-150 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-400 sm:w-auto"
      >
        Upload & Extract
      </button>
    </div>
  );
};

export default UploadData;
