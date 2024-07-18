import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        isOpen ? "flex" : "hidden"
      } fixed left-0 right-0 top-0 z-50 h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50`}
    >
      <div className="relative max-h-full w-full max-w-2xl p-4">
        {/* Modal content */}
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              type="button"
              className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="space-y-4 p-4 md:p-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
