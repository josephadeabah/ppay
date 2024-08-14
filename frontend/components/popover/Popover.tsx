// components/BlurPopover.tsx
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import React, { ReactNode } from "react";

interface BlurPopoverProps {
  backdrop?: "opaque" | "blur" | "transparent";
  triggerLabel: ReactNode; // Change from string to ReactNode
  triggerVariant?: "flat" | "default" | "solid" | "ghost" | "shadow" | "light";
  triggerColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error";
  content: ReactNode;
}

export const BlurPopover: React.FC<BlurPopoverProps> = ({
  backdrop = "blur",
  triggerLabel,
  triggerVariant = "default",
  triggerColor = "default",
  content,
}) => {
  return (
    <Popover showArrow offset={10} placement="bottom" backdrop={backdrop}>
      <PopoverTrigger className="rounded-full">
        <div
          className={`text-md flex items-center justify-center p-1 ${
            triggerVariant === "default" ? "bg-gray-200" : ""
          }`}
        >
          {triggerLabel}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] bg-white text-black dark:bg-gray-800 dark:text-white">
        {content}
      </PopoverContent>
    </Popover>
  );
};
