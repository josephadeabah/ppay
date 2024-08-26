import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import React, { ReactNode } from "react";

interface BlurPopoverProps {
  backdrop?: "opaque" | "blur" | "transparent";
  triggerLabel: ReactNode;
  triggerVariant?: "flat" | "default" | "solid" | "ghost" | "shadow" | "light";
  triggerColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error";
  content: ReactNode;
  triggerClassName?: string; // Tailwind class for the trigger
  contentClassName?: string; // Tailwind class for the popover content
}

export const BlurPopover: React.FC<BlurPopoverProps> = ({
  backdrop = "blur",
  triggerLabel,
  triggerVariant = "default",
  triggerColor = "default",
  content,
  triggerClassName = "", // Default to an empty string
  contentClassName = "", // Default to an empty string
}) => {
  return (
    <Popover showArrow offset={10} placement="bottom" backdrop={backdrop}>
      <PopoverTrigger className={`rounded-full ${triggerClassName}`}>
        <div
          className={`text-md flex items-center justify-center p-1 ${
            triggerVariant === "default" ? "bg-gray-200" : ""
          } ${triggerClassName}`} // Apply custom Tailwind classes
        >
          {triggerLabel}
        </div>
      </PopoverTrigger>
      <PopoverContent
        className={`w-[240px] bg-white text-black dark:bg-gray-800 dark:text-white ${contentClassName}`} // Apply custom Tailwind classes
      >
        {content}
      </PopoverContent>
    </Popover>
  );
};
