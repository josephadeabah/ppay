import { AiOutlineScan } from "react-icons/ai";
import { FiGitMerge } from "react-icons/fi";
import { HiOutlineChartPie } from "react-icons/hi";
import { MdOutlineCompareArrows } from "react-icons/md";

const TableOperators = () => {
  return (
    <div className="flex w-full items-center justify-between rounded border border-dashed border-gray-300 p-2 dark:border-gray-600">
      <div className="flex w-full flex-wrap justify-end gap-2 text-xs">
        {/* Scan Button */}
        <button
          data-tip="Scan the data for potential issues or trends. Visually mark or color-code rows where discrepancies or significant differences are detected."
          className="flex w-full items-center gap-1 rounded-sm bg-slate-100 p-2 shadow-sm sm:w-auto"
        >
          <AiOutlineScan className="h-4 w-4 text-blue-500" />
          <span className="hidden sm:inline">Scan</span>
        </button>

        {/* Aggregate Button */}
        <button
          data-tip="Perform aggregate calculations like average, median, or sum for columns such as salaries or bonuses."
          className="flex w-full items-center gap-1 rounded-sm bg-slate-100 p-2 shadow-sm sm:w-auto"
        >
          <HiOutlineChartPie className="h-4 w-4 text-yellow-500" />
          <span className="hidden sm:inline">Aggregate</span>
        </button>

        {/* Compare Button */}
        <button
          data-tip="Compare multiple rows of data to analyze differences in salary, bonus, or other compensation components."
          className="flex w-full items-center gap-1 rounded-sm bg-slate-100 p-2 shadow-sm sm:w-auto"
        >
          <MdOutlineCompareArrows className="h-4 w-4 text-red-500" />
          <span className="hidden sm:inline">Compare</span>
        </button>
        {/* Merge Button */}
        <button
          data-tip="Combine data from multiple sources or datasets, such as merging salary data with performance metrics."
          className="flex w-full items-center gap-1 rounded-sm bg-slate-100 p-2 shadow-sm sm:w-auto"
        >
          <FiGitMerge className="h-4 w-4 text-indigo-500" />
          <span className="hidden sm:inline">Merge</span>
        </button>
      </div>
    </div>
  );
};

export default TableOperators;
