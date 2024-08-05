"use client";
import {
  Pagination,
  PaginationItem,
  PaginationItemRenderProps,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

interface PaginationComponentProps {
  total: number;
  initialPage: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  total,
  initialPage,
  onPageChange = () => {}, // Default to a no-op function
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  return (
    <Pagination
      className="overflow-hidden"
      initialPage={currentPage}
      total={total}
      onChange={(page: number | React.FormEvent<HTMLLIElement>) =>
        setCurrentPage(page as number)
      }
      showControls
      renderItem={(props: PaginationItemRenderProps) => {
        const isActive = props.page === currentPage;

        return (
          <PaginationItem
            {...props}
            className={`focus:outline-none ${
              isActive
                ? "bg-blue-600 text-white dark:bg-gray-950 dark:text-gray-700"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } mx-1 rounded-md px-4 py-2 transition-colors duration-200`}
          />
        );
      }}
    />
  );
};

export default PaginationComponent;
