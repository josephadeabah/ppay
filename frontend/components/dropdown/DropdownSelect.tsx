import React from "react";

interface DropdownSelectProps {
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  options,
  selectedValue,
  onChange,
  placeholder,
}) => {
  return (
    <select
      className="w-full border border-gray-300 bg-white p-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
      value={selectedValue}
      onChange={onChange}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownSelect;
