"use client";
import { useSidebarContext } from "@/context/SidebarContext";
import { Tooltip } from "@nextui-org/react";
import { Sidebar } from "flowbite-react";
import Link from "next/link";
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
      "text-sm text-gray-800 rounded-none",
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
        <Link href="/dashboard" passHref suppressHydrationWarning>
          <Sidebar.Item
            icon={() => (
              <HiOutlineChartPie className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
            )}
            className={getItemClass("/dashboard")}
          >
            Dashboard
          </Sidebar.Item>
        </Link>
        <Link href="/dashboard/reportpay" passHref suppressHydrationWarning>
          <Sidebar.Item
            icon={() => (
              <BiNotepad className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
            )}
            className={getItemClass("/dashboard/reportpay")}
          >
            Report Data
          </Sidebar.Item>
        </Link>
        <Link href="/dashboard/compare" passHref suppressHydrationWarning>
          <Sidebar.Item
            icon={() => (
              <HiOutlineFastForward className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
            )}
            className={getItemClass("/dashboard/compare")}
          >
            Assess
          </Sidebar.Item>
        </Link>
        <Link href="/dashboard/users" passHref suppressHydrationWarning>
          <Sidebar.Item
            icon={() => (
              <HiOutlineUser className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
            )}
            className={getItemClass("/dashboard/users")}
          >
            Members
          </Sidebar.Item>
        </Link>
        <Link href="/dashboard/benchmark" passHref suppressHydrationWarning>
          <Sidebar.Item
            icon={() => (
              <HiOutlineGlobe className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
            )}
            className={getItemClass("/dashboard/benchmark")}
          >
            BenchMarks
          </Sidebar.Item>
        </Link>
        <Link href="/dashboard/companies" passHref suppressHydrationWarning>
          <Sidebar.Item
            icon={() => (
              <HiOutlineOfficeBuilding className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
            )}
            className={getItemClass("/dashboard/companies")}
          >
            Companies
          </Sidebar.Item>
        </Link>
        <Link href="/dashboard/trendanalysis" passHref suppressHydrationWarning>
          <Sidebar.Item
            icon={() => (
              <BiStats className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
            )}
            className={getItemClass("/dashboard/trendanalysis")}
          >
            Pay Trends
          </Sidebar.Item>
        </Link>
        <Link href="/dashboard/inflation" passHref suppressHydrationWarning>
          <Sidebar.Item
            icon={() => (
              <HiOutlineTrendingUp className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
            )}
            className={getItemClass("/dashboard/inflation")}
          >
            Inflation
          </Sidebar.Item>
        </Link>
        <Link
          href="/dashboard/equityanalyzer"
          passHref
          suppressHydrationWarning
        >
          <Sidebar.Item
            icon={() => (
              <HiOutlineCalculator className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
            )}
            className={getItemClass("/dashboard/equityanalyzer")}
          >
            Pay Equity Analyzer
          </Sidebar.Item>
        </Link>
        <Link href="/dashboard/compliance" passHref suppressHydrationWarning>
          <Sidebar.Item
            icon={() => (
              <HiOutlineDocumentReport className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
            )}
            className={getItemClass("/dashboard/compliance")}
          >
            Compliance
          </Sidebar.Item>
        </Link>
        <Link href="/dashboard/download" passHref suppressHydrationWarning>
          <Sidebar.Item
            icon={() => (
              <HiOutlineDownload className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
            )}
            className={getItemClass("/dashboard/download")}
          >
            Download
          </Sidebar.Item>
        </Link>
        <Link href="/dashboard/upgrade" passHref suppressHydrationWarning>
          <Sidebar.Item
            icon={() => (
              <HiOutlineCash className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
            )}
            className={getItemClass("/dashboard/upgrade")}
          >
            Upgrade to Pro
          </Sidebar.Item>
        </Link>
        <Tooltip
          color="primary"
          placement="bottom-end"
          content="Admin Welcome!"
          className="bg-gray-950 text-sm text-white"
        >
          {user?.admin && (
            <Link href="/dashboard/admin" passHref suppressHydrationWarning>
              <Sidebar.Item
                icon={() => (
                  <BiWrench className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
                )}
                className={getItemClass("/dashboard/admin")}
              >
                Administration
              </Sidebar.Item>
            </Link>
          )}
        </Tooltip>
      </Sidebar.ItemGroup>
    </Sidebar>
  );
};
