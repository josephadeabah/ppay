import React from "react";
import { Tooltip } from "react-tooltip";

interface ProgressBarProps {
  firstProgress: number;
  secondProgress: number;
  thirdProgress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  firstProgress,
  secondProgress,
  thirdProgress,
}) => {
  return (
    <div className="mx-auto w-[300px]">
      {/* Progress labels */}
      <div className="flex items-center justify-between text-sm font-bold">
        <span
          className="text-[9px] text-red-500"
          data-tooltip-id="performance-tooltip"
          data-tooltip-content={`Performance: ${Math.round(firstProgress)}%`}
        >
          {`${Math.round(firstProgress)}%`}
        </span>
        <span
          className="text-[9px] text-yellow-500"
          data-tooltip-id="manager-tooltip"
          data-tooltip-content={`Manager Rating: ${Math.round(secondProgress)}%`}
        >
          {`${Math.round(secondProgress)}%`}
        </span>
        <span
          className="text-[9px] text-green-500"
          data-tooltip-id="employee-tooltip"
          data-tooltip-content={`Employee Rating: ${Math.round(thirdProgress)}%`}
        >
          {`${Math.round(thirdProgress)}%`}
        </span>
      </div>

      {/* Combined Progress bar */}
      <div className="flex h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full bg-red-600"
          style={{ width: `${firstProgress}%` }}
          data-tooltip-id="performance-tooltip"
          data-tooltip-content={`Performance: ${Math.round(firstProgress)}%`}
        ></div>
        <div
          className="h-full bg-yellow-100"
          style={{ width: `${secondProgress}%` }}
          data-tooltip-id="manager-tooltip"
          data-tooltip-content={`Manager Rating: ${Math.round(secondProgress)}%`}
        ></div>
        <div
          className="h-full bg-green-400"
          style={{ width: `${thirdProgress}%` }}
          data-tooltip-id="employee-tooltip"
          data-tooltip-content={`Employee Rating: ${Math.round(thirdProgress)}%`}
        ></div>
      </div>

      {/* Tooltip instances */}
      <Tooltip id="performance-tooltip" />
      <Tooltip id="manager-tooltip" />
      <Tooltip id="employee-tooltip" />
    </div>
  );
};

export default ProgressBar;
