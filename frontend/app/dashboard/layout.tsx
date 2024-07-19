// dashboard/layout.tsx
"use client";

import { useSidebarContext } from "@/context/SidebarContext";
import type { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { DashboardSidebar } from "./sidebar";
import { DashboardNavbar } from "./navbar";

const DashboardLayout: FC<PropsWithChildren> = function ({ children }) {
  const { isCollapsed } = useSidebarContext();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <DashboardSidebar />

      <div
        className={twMerge(
          "flex-1 flex flex-col transition-all duration-300",
          isCollapsed ? "lg:ml-16" : "lg:ml-64", // Adjust according to sidebar width
        )}
      >
        {/* Navbar */}
        <DashboardNavbar />
        
        <main
          id="main-content"
          className="relative flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900"
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
