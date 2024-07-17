import { useSidebarContext } from "@/context/SidebarContext";
import { Sidebar } from "flowbite-react";
import type { FC } from "react";
import { BiBuoy, BiNotepad } from "react-icons/bi";
import {
  HiOutlineCash,
  HiOutlineChartPie,
  HiOutlineCollection,
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
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiOutlineChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiNotepad}>
            Report Pay
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineFastForward}>
            Compare
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineUser}>
            Anonymous
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineGlobe}>
            BenchMarks
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineTrendingUp}>
            Trends
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineTrendingDown}>
            Inflation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineDocumentReport}>
            Compliance
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiOutlineCollection}>
            Activity
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineDownload}>
            Download
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiOutlineCash}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
