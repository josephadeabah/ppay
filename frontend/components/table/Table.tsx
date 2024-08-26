import * as React from "react";

import { ScrollArea, ScrollBar } from "@/components/scrollarea/ScrollArea";
import { twMerge } from "tailwind-merge";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="w-full">
    <ScrollArea type="auto">
      <table
        ref={ref}
        className={twMerge("w-full text-sm", className)}
        {...props}
      />
      <ScrollBar className="px-1.5" orientation="horizontal" />
    </ScrollArea>
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={twMerge(
      "border-gray-200 dark:border-gray-800 [&_tr]:border-b [&_tr]:bg-gray-50 dark:[&_tr]:bg-gray-800/25",
      className,
    )}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={twMerge(
      "border-gray-200 dark:border-gray-800 [&_tr:last-child]:border-0",
      className,
    )}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={twMerge(
      "border-b border-gray-200 transition-colors even:bg-gray-50 data-[state=selected]:bg-gray-200 dark:border-gray-800 dark:even:bg-gray-800/25 data-[state=selected]:dark:bg-gray-800",
      className,
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={twMerge(
      "h-11 p-2 text-left text-xs font-medium text-gray-600 dark:text-gray-400 [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={twMerge(
      "h-[4.5rem] overflow-hidden px-2 py-2 align-middle text-sm font-medium text-gray-900 dark:text-gray-100 [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

export { Table, TableBody, TableCell, TableHead, TableHeader, TableRow };
