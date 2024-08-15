"use client";
import { useSidebarContext } from "@/context/SidebarContext";
import { Tooltip } from "@nextui-org/react";
import { Sidebar } from "flowbite-react";
import Link from "next/link"; // Import Link from Next.js
import { usePathname } from "next/navigation";
import { useEffect, useState, type FC } from "react";
import { BiNotepad, BiStats, BiWrench } from "react-icons/bi";
import {
  HiOutlineCalculator,
  HiOutlineCash,
  HiOutlineChartPie,
  HiOutlineDocumentReport,
  HiOutlineDownload,
  HiOutlineFastForward,
  HiOutlineGlobe,
  HiOutlineOfficeBuilding,
  HiOutlineTrendingUp,
  HiOutlineUser,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export const DashboardSidebar: FC = function () {
  const { isCollapsed } = useSidebarContext();
  const pathname = usePathname();

  const [user, setUser] = useState<{ email?: string; admin?: boolean } | null>(
    null,
  );
  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    if (tokenString) {
      try {
        const token = JSON.parse(tokenString);
        setUser(token.user);
      } catch (error) {
        console.error("Failed to parse token from local storage:", error);
      }
    }
  }, []);

  const getItemClass = (href: string) =>
    twMerge(
      "text-sm text-gray-800 rounded-none flex items-center gap-2 py-1.5 px-2 my-1",
      pathname === href ? "bg-gray-100 dark:bg-gray-700" : "",
    );

  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      collapsed={isCollapsed}
      id="sidebar"
      className={twMerge(
        "fixed inset-y-0 left-0 z-20 mt-14 flex h-full shrink-0 flex-col border-r border-t-0 border-gray-200 duration-75 dark:border-gray-700 lg:flex",
        isCollapsed && "hidden w-16",
      )}
    >
      <Sidebar.ItemGroup>
        <Link href="/dashboard" className={getItemClass("/dashboard")}>
          <HiOutlineChartPie className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
          Dashboard
        </Link>
        <Link
          href="/dashboard/reportpay"
          className={getItemClass("/dashboard/reportpay")}
        >
          <BiNotepad className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
          Report Data
        </Link>
        <Link
          href="/dashboard/compare"
          className={getItemClass("/dashboard/compare")}
        >
          <HiOutlineFastForward className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
          Assess
        </Link>
        <Link
          href="/dashboard/users"
          className={getItemClass("/dashboard/users")}
        >
          <HiOutlineUser className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
          Members
        </Link>
        <Link
          href="/dashboard/benchmark"
          className={getItemClass("/dashboard/benchmark")}
        >
          <HiOutlineGlobe className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
          BenchMarks
        </Link>
        <Link
          href="/dashboard/companies"
          className={getItemClass("/dashboard/companies")}
        >
          <HiOutlineOfficeBuilding className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
          Companies
        </Link>
        <Link
          href="/dashboard/trendanalysis"
          className={getItemClass("/dashboard/trendanalysis")}
        >
          <BiStats className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
          Pay Trends
        </Link>
        <Link
          href="/dashboard/inflation"
          className={getItemClass("/dashboard/inflation")}
        >
          <HiOutlineTrendingUp className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
          Inflation
        </Link>
        <Link
          href="/dashboard/equityanalyzer"
          className={getItemClass("/dashboard/equityanalyzer")}
        >
          <HiOutlineCalculator className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
          Pay Equity Analyzer
        </Link>
        <Link
          href="/dashboard/compliance"
          className={getItemClass("/dashboard/compliance")}
        >
          <HiOutlineDocumentReport className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
          Compliance
        </Link>
        <Link
          href="/dashboard/download"
          className={getItemClass("/dashboard/download")}
        >
          <HiOutlineDownload className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
          Download
        </Link>
        <Link
          href="/dashboard/upgrade"
          className={getItemClass("/dashboard/upgrade")}
        >
          <HiOutlineCash className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
          Upgrade to Pro
        </Link>
        <Tooltip
          color="primary"
          placement="bottom-end"
          content="Admin Welcome!"
          className="bg-gray-950 text-sm text-white"
        >
          {user?.admin && (
            <Link
              href="/dashboard/admin"
              className={getItemClass("/dashboard/admin")}
            >
              <BiWrench className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
              Administration
            </Link>
          )}
        </Tooltip>
      </Sidebar.ItemGroup>
    </Sidebar>
  );
};
