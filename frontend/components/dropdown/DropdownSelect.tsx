import React from "react";
import { twMerge } from "tailwind-merge";

interface DropdownSelectProps {
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  className?: string; // Optional className prop
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  options,
  selectedValue,
  onChange,
  placeholder,
  className = "", // Default to an empty string if not provided
}) => {
  return (
    <select
      className={twMerge(
        "w-full border border-gray-300 bg-white p-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200",
        className,
      )}
      value={selectedValue}
      onChange={onChange}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownSelect;
