// dashboard/layout.tsx
"use client";

import ErrorBoundary from "@/components/ErrorBoundary"; // Import the ErrorBoundary
import { useSidebarContext } from "@/context/SidebarContext";
import { Suspense, type FC, type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import Loading from "./loading";
import { DashboardNavbar } from "./navbar";
import { DashboardSidebar } from "./sidebar";

const DashboardLayout: FC<PropsWithChildren> = function ({ children }) {
  const { isCollapsed } = useSidebarContext();

  return (
    <>
      <DashboardNavbar />
      <div className="mt-16 flex items-start">
        <DashboardSidebar />
        <div
          id="main-content"
          className={twMerge(
            "relative h-full w-full overflow-y-auto bg-gray-50 transition-all duration-300 ease-in-out dark:bg-gray-900",
            isCollapsed ? "lg:ml-[4.5rem]" : "lg:ml-64",
          )}
        >
          <ErrorBoundary>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
