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

const renderRestrictedItem = (icon: JSX.Element, title: string) => (
  <div
    className={twMerge(
      "flex items-center justify-between px-0.5",
      "relative cursor-not-allowed opacity-50",
    )}
  >
    <div className="flex items-center gap-1 p-2">
      {icon}
      <span>{title}</span>
    </div>
    <HiOutlineLockClosed className="my-1 ml-2 h-5 w-5 text-gray-950" />
    <div className="absolute inset-0 bg-gray-50/50 backdrop-blur-xl dark:bg-gray-700/50" />
  </div>
);

const RenderRestrictedItemComponent = () => {
  return (
    <>
      {renderRestrictedItem(
        <HiOutlineChartPie className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Dashboard",
      )}
      {renderRestrictedItem(
        <BiNotepad className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Report Data",
      )}

      {renderRestrictedItem(
        <HiOutlineFastForward className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Assess",
      )}
      {renderRestrictedItem(
        <HiOutlineUser className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Members",
      )}
      {renderRestrictedItem(
        <HiOutlineGlobe className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "BenchMarks",
      )}
      {renderRestrictedItem(
        <HiOutlineOfficeBuilding className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Companies",
      )}
      {renderRestrictedItem(
        <BiStats className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Pay Trends",
      )}
      {renderRestrictedItem(
        <HiOutlineTrendingUp className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Inflation",
      )}
      {renderRestrictedItem(
        <HiOutlineCalculator className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Pay Equity Analyzer",
      )}
      {renderRestrictedItem(
        <HiOutlineDocumentReport className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Compliance",
      )}
      {renderRestrictedItem(
        <HiOutlineDownload className="my-1 h-6 w-6 text-gray-950 dark:text-gray-100" />,
        "Download",
      )}
    </>
  );
};

export default RenderRestrictedItemComponent;
