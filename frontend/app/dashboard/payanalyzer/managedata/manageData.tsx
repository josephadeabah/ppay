import ExportButton from "@/app/dashboard/payanalyzer/exportbutton/ExportButton";
import ModalComponent from "@/components/modal/ModalComponent";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table/Table";
import { EmployeeData } from "@/types/payaid.data";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { HiOutlineUserAdd } from "react-icons/hi";
import { TbFlag } from "react-icons/tb";
import ExportPdfButton from "../exportbutton/ExportPDFButton";

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
      <div className="flex w-full flex-col items-start justify-between gap-4 rounded-sm border border-dashed border-gray-300 p-2 dark:border-gray-600 sm:flex-row sm:items-center sm:gap-0">
        <div>
          <h2 className="text-xl font-bold">Manage Data</h2>
        </div>
        <div className="flex w-full flex-col items-start gap-2 sm:w-auto sm:flex-row sm:items-center">
          {/* Add user to Flag Button */}
          <button
            data-tip="Allow users to flag or mark specific rows for follow-up or further review."
            className="flex w-full items-center gap-1 rounded-md bg-slate-100 p-2 shadow-sm sm:w-auto"
          >
            <TbFlag className="h-4 w-4" />
            <span className="text-sm sm:inline">Add Flagger</span>
          </button>
          {/* Add Viewer Button */}
          <button
            data-tip="Scan the data for potential issues or trends."
            className="flex w-full items-center gap-1 rounded-md bg-slate-100 p-2 shadow-sm sm:w-auto"
          >
            <HiOutlineUserAdd className="h-4 w-4" />
            <span className="text-sm sm:inline">Add Viewer</span>
          </button>
          {/* Export Button */}
          <ExportButton data={data} />
          <ExportPdfButton data={data} />
        </div>
      </div>

      {/* Table Component */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <tr>
              {headers.map((header) => (
                <TableHead key={header} className="border px-4 py-2">
                  {header}
                </TableHead>
              ))}
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={row.employeeId}>
                {headers.map((header) => (
                  <TableCell key={header} className="relative border px-4 py-2">
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
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
