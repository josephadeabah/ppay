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
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import TableOperators from "../tableoperators/TableOperators";
import { dataColumns } from "./columns";

const DataTable = ({ data }: { data: EmployeeData[] }) => {
  const table = useReactTable({
    data,
    columns: dataColumns,
    getCoreRowModel: getCoreRowModel(),
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
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
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
