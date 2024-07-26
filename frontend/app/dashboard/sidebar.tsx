// dashboard/sidebar.tsx
import { useSidebarContext } from "@/context/SidebarContext";
import { Sidebar } from "flowbite-react";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import { BiBuoy, BiNotepad } from "react-icons/bi";
import {
  HiOutlineCalculator,
  HiOutlineCash,
  HiOutlineChartPie,
  HiOutlineChat,
  // HiOutlineDocumentAdd,
  HiOutlineDocumentReport,
  HiOutlineDownload,
  HiOutlineFastForward,
  HiOutlineGlobe,
  HiOutlineTrendingDown,
  HiOutlineTrendingUp,
  HiOutlineUser,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export const DashboardSidebar: FC = function () {
  const { isCollapsed } = useSidebarContext();
  const pathname = usePathname(); // Get the current pathname

  const getItemClass = (href: string) =>
    twMerge(
      "text-sm rounded-none",
      pathname === href ? "bg-gray-100 dark:bg-gray-700" : "", // Apply bg-gray-200 if the item is active
    );

  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      collapsed={isCollapsed}
      id="sidebar"
      className={twMerge(
        "fixed inset-y-0 left-0 z-20 mt-16 flex h-full shrink-0 flex-col border-r border-gray-200 duration-75 dark:border-gray-700 lg:flex",
        isCollapsed && "hidden w-16",
      )}
    >
      <Sidebar.ItemGroup>
        <Sidebar.Item
          href="/dashboard"
          icon={HiOutlineChartPie}
          className={getItemClass("/dashboard")}
        >
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item
          href="/dashboard/reportpay"
          icon={BiNotepad}
          className={getItemClass("/dashboard/reportpay")}
        >
          Report Data
        </Sidebar.Item>
        <Sidebar.Item
          href="/dashboard/compare"
          icon={HiOutlineFastForward}
          className={getItemClass("/dashboard/compare")}
        >
          Compare
        </Sidebar.Item>
        <Sidebar.Item
          href="/dashboard/users"
          icon={HiOutlineUser}
          className={getItemClass("/dashboard/users")}
        >
          Members
        </Sidebar.Item>
        <Sidebar.Item
          href="/dashboard/benchmark"
          icon={HiOutlineGlobe}
          className={getItemClass("/dashboard/benchmarks")}
        >
          BenchMarks
        </Sidebar.Item>
        <Sidebar.Item
          href="/dashboard/trendanalysis"
          icon={HiOutlineTrendingUp}
          className={getItemClass("/dashboard/trends")}
        >
          Pay Trends
        </Sidebar.Item>
        <Sidebar.Item
          href="/dashboard/inflation"
          icon={HiOutlineTrendingDown}
          className={getItemClass("/dashboard/inflation")}
        >
          Inflation
        </Sidebar.Item>
        <Sidebar.Item
          href="/dashboard/equityanalyzer"
          icon={HiOutlineCalculator}
          className={getItemClass("/dashboard/equityanalyzer")}
        >
          Pay Equity Analyzer
        </Sidebar.Item>
        <Sidebar.Item
          href="/dashboard/compliance"
          icon={HiOutlineDocumentReport}
          className={getItemClass("/dashboard/compliance")}
        >
          Compliance
        </Sidebar.Item>
        <Sidebar.Item
          href="/dashboard/dialogue"
          icon={HiOutlineChat}
          className={getItemClass("/dashboard/dialogue")}
        >
          Dialogue
        </Sidebar.Item>
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <Sidebar.Item
          href="/dashboard/download"
          icon={HiOutlineDownload}
          className={getItemClass("/dashboard/download")}
        >
          Download
        </Sidebar.Item>
        <Sidebar.Item
          href="/dashboard/upgrade"
          icon={HiOutlineCash}
          className={getItemClass("/dashboard/upgrade")}
        >
          Upgrade to Pro
        </Sidebar.Item>
        {/* <Sidebar.Item
          href="/dashboard/admin"
          icon={HiOutlineDocumentAdd}
          className={getItemClass("/dashboard/admin")}
        >
          Administration
        </Sidebar.Item> */}
        <Sidebar.Item
          href="https://pnpmmedia.com/journal"
          icon={BiBuoy}
          className={getItemClass("https://pnpmmedia.com/journal")}
        >
          Help
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar>
  );
};
