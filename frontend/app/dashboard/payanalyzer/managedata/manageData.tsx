import DropdownSelect from "@/components/dropdown/DropdownSelect";
import ModalComponent from "@/components/modal/ModalComponent";
import { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";

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
  const [editingColumnKey, setEditingColumnKey] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const optionsByColumn: { [key: string]: { value: string; label: string }[] } =
    {
      ethnicity: [
        { value: "asian", label: "Asian" },
        { value: "black", label: "Black" },
        { value: "white", label: "White" },
      ],
      jobTitle: [
        { value: "developer", label: "Developer" },
        { value: "designer", label: "Designer" },
        { value: "manager", label: "Manager" },
      ],
      department: [
        { value: "engineering", label: "Engineering" },
        { value: "marketing", label: "Marketing" },
        { value: "hr", label: "HR" },
      ],
      location: [
        { value: "new_york", label: "New York" },
        { value: "san_francisco", label: "San Francisco" },
        { value: "los_angeles", label: "Los Angeles" },
      ],
      seniorityLevel: [
        { value: "junior", label: "Junior" },
        { value: "mid", label: "Mid" },
        { value: "senior", label: "Senior" },
      ],
    };

  const openModal = (
    rowIndex: number,
    columnKey: string,
    currentValue: string,
  ) => {
    setEditingRowIndex(rowIndex);
    setEditingColumnKey(columnKey);
    setSelectedValue(currentValue);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingRowIndex(null);
    setEditingColumnKey(null);
  };

  const saveChanges = () => {
    if (editingRowIndex !== null && editingColumnKey) {
      const updatedData = [...data];
      updatedData[editingRowIndex] = {
        ...updatedData[editingRowIndex],
        [editingColumnKey]: selectedValue,
      };
      setData(updatedData);
      closeModal();
    }
  };

  const headers = Object.keys(data[0] || {});

  return (
    <div>
      <h1>Manage Data</h1>
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
                  <td key={header} className="border px-4 py-2">
                    {header === "ethnicity" ||
                    header === "jobTitle" ||
                    header === "department" ||
                    header === "location" ||
                    header === "seniorityLevel" ? (
                      <>
                        {row[header]}{" "}
                        <button
                          className="text-blue-500 hover:text-blue-700"
                          onClick={() =>
                            openModal(rowIndex, header, row[header])
                          }
                        >
                          <HiOutlinePencil className="inline h-5 w-5" />
                        </button>
                      </>
                    ) : (
                      row[header]
                    )}
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
        title="Edit Value"
      >
        {editingColumnKey && (
          <DropdownSelect
            options={optionsByColumn[editingColumnKey]}
            selectedValue={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            placeholder={`Select ${editingColumnKey}`}
          />
        )}
        <div className="mt-4 flex justify-end">
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white"
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
