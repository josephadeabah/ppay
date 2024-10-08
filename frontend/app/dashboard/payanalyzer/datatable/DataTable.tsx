"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table/Table";
import { EmployeeData } from "@/types/payaid.data";
import { SortingIndicator } from "@/utils/sorting.utils";
import {
  ColumnSort,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import TableOperators from "../tableoperators/TableOperators";
import { dataColumns } from "./columns";

const DataTable = ({ data }: { data: EmployeeData[] }) => {
  const [sorting, setSorting] = React.useState<ColumnSort[]>([]);

  const table = useReactTable({
    data,
    columns: dataColumns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="w-full overflow-x-auto px-1">
      <h2 className="mb-4 text-xl font-bold">Table Visualization</h2>
      <TableOperators />
      {data.length > 0 ? (
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={`group relative cursor-pointer border ${
                      header.column.getCanSort()
                        ? "pointer-events-auto"
                        : "pointer-events-none"
                    }`}
                    onClick={
                      header.column.getCanSort()
                        ? header.column.getToggleSortingHandler()
                        : undefined
                    }
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    <SortingIndicator column={header.column} />
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="border">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default DataTable;
