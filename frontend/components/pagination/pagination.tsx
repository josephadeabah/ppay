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
      className="flex justify-center space-x-2 overflow-hidden py-4"
      initialPage={currentPage}
      total={total}
      onChange={(page: number | React.FormEvent<HTMLLIElement>) =>
        setCurrentPage(page as number)
      }
      showControls
      renderItem={(props: PaginationItemRenderProps) => {
        const isActive = props.page === currentPage;
        const { key, ...restProps } = props;

        return (
          <PaginationItem
            key={key}
            {...restProps}
            className={`focus:outline-none ${
              isActive
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-gray-300 shadow-sm dark:from-purple-500 dark:to-blue-600"
                : "bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            } mx-2 transform rounded-full px-5 py-3 transition-all duration-300 ease-in-out hover:scale-105`}
          />
        );
      }}
    />
  );
};

export default PaginationComponent;
