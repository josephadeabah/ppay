import { BiNotepad, BiStats } from "react-icons/bi";
import {
  HiOutlineCalculator,
  HiOutlineChartPie,
  HiOutlineDocumentReport,
  HiOutlineDownload,
  HiOutlineFastForward,
  HiOutlineGlobe,
  HiOutlineLockClosed,
  HiOutlineOfficeBuilding,
  HiOutlineTrendingUp,
  HiOutlineUser,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

const renderRestrictedItem = (
  icon: JSX.Element,
  title: string,
  isCollapsed: boolean,
) => (
  <div
    className={twMerge(
      "flex items-center justify-between px-0.5",
      "relative cursor-not-allowed opacity-50",
      isCollapsed ? "flex-col gap-0" : "gap-1",
    )}
  >
    <div
      className={twMerge(
        "flex items-center p-2",
        isCollapsed ? "flex-col" : "gap-2",
      )}
    >
      {icon}
      {!isCollapsed && <div className="text-sm">{title}</div>}
    </div>
    {!isCollapsed && (
      <HiOutlineLockClosed className="my-1 ml-2 h-5 w-5 text-gray-950" />
    )}
    <div className="absolute inset-0 bg-gray-50/50 backdrop-blur-xl dark:bg-gray-700/50" />
  </div>
);

const RenderRestrictedItemComponent = ({
  isCollapsed,
}: {
  isCollapsed: boolean;
}) => {
  return (
    <>
      {renderRestrictedItem(
        <HiOutlineChartPie className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Dashboard",
        isCollapsed,
      )}
      {renderRestrictedItem(
        <BiNotepad className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Report Data",
        isCollapsed,
      )}
      {renderRestrictedItem(
        <HiOutlineFastForward className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Assess",
        isCollapsed,
      )}
      {renderRestrictedItem(
        <HiOutlineUser className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Members",
        isCollapsed,
      )}
      {renderRestrictedItem(
        <HiOutlineGlobe className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "BenchMarks",
        isCollapsed,
      )}
      {renderRestrictedItem(
        <HiOutlineOfficeBuilding className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Companies",
        isCollapsed,
      )}
      {renderRestrictedItem(
        <BiStats className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Pay Trends",
        isCollapsed,
      )}
      {renderRestrictedItem(
        <HiOutlineTrendingUp className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Inflation",
        isCollapsed,
      )}
      {renderRestrictedItem(
        <HiOutlineCalculator className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Pay Analyzer",
        isCollapsed,
      )}
      {renderRestrictedItem(
        <HiOutlineDocumentReport className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Compliance",
        isCollapsed,
      )}
      {renderRestrictedItem(
        <HiOutlineDownload className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Download",
        isCollapsed,
      )}
    </>
  );
};

export default RenderRestrictedItemComponent;
