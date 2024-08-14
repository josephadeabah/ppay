"use client";

import * as Toast from "@radix-ui/react-toast";
import * as React from "react";

interface ToastProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description: string;
  type: "success" | "error" | "warning";
}

const ToastComponent: React.FC<ToastProps> = ({
  isOpen,
  onClose,
  title,
  description,
  type,
}) => {
  const timerRef = React.useRef<number>(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const icons = {
    success: (
      <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
        <svg
          className="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        <span className="sr-only">Check icon</span>
      </div>
    ),
    error: (
      <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500">
        <svg
          className="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
        </svg>
        <span className="sr-only">Error icon</span>
      </div>
    ),
    warning: (
      <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500">
        <svg
          className="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
        </svg>
        <span className="sr-only">Warning icon</span>
      </div>
    ),
  };

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className="flex items-center gap-4 rounded-md border border-gray-200 bg-white p-3 shadow-lg data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut dark:border-gray-700 dark:bg-gray-800"
        open={isOpen}
        onOpenChange={onClose}
      >
        {icons[type]}
        <div className="flex-1">
          <Toast.Title className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </Toast.Title>
          <Toast.Description asChild>
            <p className="text-xs text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </Toast.Description>
        </div>
      </Toast.Root>
      <Toast.Viewport className="fixed right-0 top-4 z-50 flex max-w-xs flex-col gap-2 p-4 outline-none" />
    </Toast.Provider>
  );
};

export default ToastComponent;
