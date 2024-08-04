"use client";
import {
  Pagination,
  PaginationItemRenderProps,
  PaginationItemType,
} from "@nextui-org/react";
import cn from "classnames";
import React, { useEffect, useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

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

  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }: PaginationItemRenderProps) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          key={key}
          className={cn(
            className,
            "h-8 w-8 min-w-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300",
            { "cursor-not-allowed bg-gray-400": isActive },
          )}
          onClick={() => {
            if (currentPage < total) {
              setCurrentPage((prevPage) => {
                const newPage = prevPage + 1;
                setPage(newPage);
                return newPage;
              });
              onNext?.();
            }
          }}
          disabled={currentPage >= total}
        >
          <HiOutlineChevronRight className="text-lg" />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          key={key}
          className={cn(
            className,
            "h-8 w-8 min-w-8 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300",
            { "cursor-not-allowed bg-gray-400": isActive },
          )}
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage((prevPage) => {
                const newPage = prevPage - 1;
                setPage(newPage);
                return newPage;
              });
              onPrevious?.();
            }
          }}
          disabled={currentPage <= 1}
        >
          <HiOutlineChevronLeft className="text-lg" />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={cn(className, "text-gray-600")}>
          ...
        </button>
      );
    }

    // cursor is the default item
    return (
      <button
        ref={ref}
        key={key}
        className={cn(
          className,
          "h-8 w-8 min-w-8 rounded-full",
          isActive
            ? "bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 font-bold text-white"
            : "bg-gray-200 text-gray-600 hover:bg-gray-300",
        )}
        onClick={() => {
          setCurrentPage(value);
          setPage(value);
        }}
      >
        {value}
      </button>
    );
  };

  return (
    <Pagination
      disableCursorAnimation
      showControls
      total={total}
      initialPage={initialPage}
      className="gap-2"
      radius="full"
      renderItem={renderItem}
      variant="flat"
    />
  );
};

export default PaginationComponent;
