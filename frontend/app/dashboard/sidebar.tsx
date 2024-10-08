"use client";
import SidebarLoadingSkeleton from "@/components/sidebarloader/SidebarLoadingSkeleton";
import { useSidebarContext } from "@/context/SidebarContext";
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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

  if (loading) {
    return (
      <div className="w-[0.5rem]">
        <SidebarLoadingSkeleton />
      </div>
    );
  }

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
        "fixed inset-y-0 left-0 z-20 mt-14 flex h-full shrink-0 flex-col  duration-75 dark:border-gray-700 lg:flex",
        isCollapsed && "hidden w-16",
      )}
    >
      <Sidebar.ItemGroup>
        {!user && (
          <>
            <Sidebar.Item
              as={Link}
              href="/dashboard"
              icon={() => (
                <HiOutlineChartPie className="my-1 h-6 w-6 text-stone-500 dark:text-gray-100" />
              )}
              className={getItemClass("/dashboard")}
            >
              Dashboard
            </Sidebar.Item>

            <Sidebar.Item
              as={Link}
              href="/dashboard/reportpay"
              icon={() => (
                <BiNotepad className="my-1 h-6 w-6 text-stone-500 dark:text-gray-100" />
              )}
              className={getItemClass("/dashboard/reportpay")}
            >
              Report Data
            </Sidebar.Item>

            <Sidebar.Item
              as={Link}
              href="/dashboard/compare"
              icon={() => (
                <HiOutlineFastForward className="my-1 h-6 w-6 text-stone-500 dark:text-gray-100" />
              )}
              className={getItemClass("/dashboard/compare")}
            >
              Assess
            </Sidebar.Item>

            <Sidebar.Item
              as={Link}
              href="/dashboard/users"
              icon={() => (
                <HiOutlineUser className="my-1 h-6 w-6 text-stone-500 dark:text-gray-100" />
              )}
              className={getItemClass("/dashboard/users")}
            >
              Members
            </Sidebar.Item>

            <Sidebar.Item
              as={Link}
              href="/dashboard/benchmark"
              icon={() => (
                <HiOutlineGlobe className="my-1 h-6 w-6 text-stone-500 dark:text-gray-100" />
              )}
              className={getItemClass("/dashboard/benchmark")}
            >
              BenchMarks
            </Sidebar.Item>

            <Sidebar.Item
              as={Link}
              href="/dashboard/companies"
              icon={() => (
                <HiOutlineOfficeBuilding className="my-1 h-6 w-6 text-stone-500 dark:text-gray-100" />
              )}
              className={getItemClass("/dashboard/companies")}
            >
              Companies
            </Sidebar.Item>

            <Sidebar.Item
              as={Link}
              href="/dashboard/trendanalysis"
              icon={() => (
                <BiStats className="my-1 h-6 w-6 text-stone-500 dark:text-gray-100" />
              )}
              className={getItemClass("/dashboard/trendanalysis")}
            >
              Pay Trends
            </Sidebar.Item>

            <Sidebar.Item
              as={Link}
              href="/dashboard/inflation"
              icon={() => (
                <HiOutlineTrendingUp className="my-1 h-6 w-6 text-stone-500 dark:text-gray-100" />
              )}
              className={getItemClass("/dashboard/inflation")}
            >
              Inflation
            </Sidebar.Item>

            <Sidebar.Item
              as={Link}
              href="/dashboard/payanalyzer"
              icon={() => (
                <HiOutlineCalculator className="my-1 h-6 w-6 text-stone-500 dark:text-gray-100" />
              )}
              className={getItemClass("/dashboard/payanalyzer")}
            >
              PayAid
            </Sidebar.Item>

            <Sidebar.Item
              as={Link}
              href="/dashboard/compliance"
              icon={() => (
                <HiOutlineDocumentReport className="my-1 h-6 w-6 text-stone-500 dark:text-gray-100" />
              )}
              className={getItemClass("/dashboard/compliance")}
            >
              Compliance
            </Sidebar.Item>

            <Sidebar.Item
              as={Link}
              href="/dashboard/download"
              icon={() => (
                <HiOutlineDownload className="my-1 h-6 w-6 text-stone-500 dark:text-gray-100" />
              )}
              className={getItemClass("/dashboard/download")}
            >
              Download
            </Sidebar.Item>
          </>
        )}
        {/* Restricted Items */}
        {/* {!user && <RenderRestrictedItemComponent isCollapsed={isCollapsed} />} */}
        <Sidebar.Item
          as={Link}
          href="/dashboard/upgrade"
          icon={() => (
            <HiOutlineCash className="my-1 h-6 w-6 text-stone-500 dark:text-gray-100" />
          )}
          className={getItemClass("/dashboard/upgrade")}
        >
          Upgrade to Pro
        </Sidebar.Item>

        {user?.admin && (
          <Sidebar.Item
            as={Link}
            href="/dashboard/admin"
            icon={() => (
              <BiWrench className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />
            )}
            className={getItemClass("/dashboard/admin")}
          >
            Administration
          </Sidebar.Item>
        )}
      </Sidebar.ItemGroup>
    </Sidebar>
  );
};
