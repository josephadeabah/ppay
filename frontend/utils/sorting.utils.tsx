import { Column } from "@tanstack/react-table";
import React from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

/**
 * Renders the sorting indicator for a table header.
 *
 * @param {Column} column - The column object from React Table.
 * @returns {JSX.Element} - The sorting indicator component.
 */
export const SortingIndicator: React.FC<{ column: Column<any, any> }> = ({
  column,
}) => {
  if (!column.getCanSort()) return null;

  let sortingIndicator;
  if (column.getIsSorted() === "asc") {
    sortingIndicator = (
      <FaSortUp className="text-gray-400 group-hover:text-gray-600" />
    );
  } else if (column.getIsSorted() === "desc") {
    sortingIndicator = (
      <FaSortDown className="text-gray-400 group-hover:text-gray-600" />
    );
  } else {
    sortingIndicator = (
      <FaSort className="text-gray-400 group-hover:text-gray-600" />
    );
  }

  return (
    <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
      {sortingIndicator}
    </span>
  );
};
