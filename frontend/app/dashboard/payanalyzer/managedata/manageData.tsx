import ExportButton from "@/app/dashboard/payanalyzer/exportbutton/ExportButton";
import ModalComponent from "@/components/modal/ModalComponent";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";

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
  seniorityLevel: string;
  educationLevelPoints: string;
  companySizePoints: string;
  [key: string]: string;
}

const ManagementComponent = ({
  initialData,
}: {
  initialData: EmployeeData[];
}) => {
  const [data, setData] = useState<EmployeeData[]>(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRowIndex, setEditingRowIndex] = useState<number | null>(null);
  const [editingData, setEditingData] = useState<EmployeeData | null>(null);

  const openModal = (rowIndex: number) => {
    setEditingRowIndex(rowIndex);
    setEditingData(data[rowIndex]); // Set the entire row for editing
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingRowIndex(null);
    setEditingData(null);
  };

  const saveChanges = () => {
    if (editingRowIndex !== null && editingData) {
      const updatedData = [...data];
      updatedData[editingRowIndex] = editingData;
      setData(updatedData);
      closeModal();
    }
  };

  const handleInputChange = (field: string, value: string) => {
    if (editingData) {
      setEditingData({ ...editingData, [field]: value });
    }
  };

  const headers = Object.keys(data[0] || {});

  return (
    <div>
      <div className="flex w-full items-center justify-between rounded-sm border border-dashed border-gray-300 p-6 dark:border-gray-600">
        <div>
          <h2 className="text-xl font-bold">Manage Data</h2>
        </div>
        <div>
          <ExportButton data={data} />
        </div>
      </div>
      <div className="overflow-x-auto [&::-moz-scrollbar-thumb]:rounded-full [&::-moz-scrollbar-thumb]:bg-gray-200 [&::-moz-scrollbar-track]:m-1 [&::-moz-scrollbar]:w-2 [&::-ms-scrollbar-thumb]:rounded-full [&::-ms-scrollbar-thumb]:bg-gray-200 [&::-ms-scrollbar-track]:m-1 [&::-ms-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:m-1 [&::-webkit-scrollbar]:w-2">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              {headers.map((header) => (
                <th key={header} className="border px-4 py-2">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header) => (
                  <td key={header} className="relative border px-4 py-2">
                    <div className="flex items-center justify-between">
                      <span>{row[header]}</span>
                      {header === "employeeId" && row[header] && (
                        <button
                          className="absolute right-2 top-2 text-blue-500 hover:text-blue-700"
                          onClick={() => openModal(rowIndex)}
                        >
                          <AiOutlineEdit className="h-5 w-5" />
                          <span className="sr-only">Edit</span>
                        </button>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for editing */}
      <ModalComponent
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Edit Employee Data"
      >
        {editingData && (
          <div className="grid gap-4">
            {headers.map((header) => (
              <div key={header}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {header}
                </label>
                <input
                  type="text"
                  value={editingData[header]}
                  onChange={(e) => handleInputChange(header, e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white"
                />
              </div>
            ))}
          </div>
        )}
        <div className="mt-4 flex items-center justify-end">
          <button
            className="w-full max-w-sm rounded bg-blue-700 px-4 py-2 text-white dark:bg-gray-950"
            onClick={saveChanges}
          >
            Save
          </button>
        </div>
      </ModalComponent>
    </div>
  );
};

export default ManagementComponent;
