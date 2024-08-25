import { useElementSize } from "@mantine/hooks";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React from "react";
import { MutableRefObject, useImperativeHandle } from "react";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Button } from "@nextui-org/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

enum Direction {
  LEFT = -1,
  RIGHT = 1,
}

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    showButtons?: true;
    scrollDistance?: number;
  }
>(
  (
    { className, children, showButtons = false, scrollDistance, ...props },
    ref,
  ) => {
    const {
      ref: scrollAreaRef,
    }: { ref: MutableRefObject<HTMLDivElement | null> } =
      useElementSize<HTMLDivElement>();
    useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
      ref,
      () => scrollAreaRef.current,
    );

    return (
      <div className="relative">
        <ScrollAreaPrimitive.Root
          className={twMerge("relative overflow-hidden", className)}
          {...props}
        >
          <ScrollAreaViewport ref={scrollAreaRef}>
            {children}
          </ScrollAreaViewport>
          <ScrollBar />
          <ScrollAreaPrimitive.Corner />
        </ScrollAreaPrimitive.Root>
        {showButtons && (
          <ScrollButtons ref={scrollAreaRef} scrollDistance={scrollDistance} />
        )}
      </div>
    );
  },
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollAreaViewport = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Viewport>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Viewport
    ref={ref}
    className={twMerge(
      'h-full w-full scroll-smooth rounded-[inherit] [&:has(*_div[data-state="visible"])]:pb-2.5',
      className,
    )}
    {...props}
  >
    {children}
  </ScrollAreaPrimitive.Viewport>
));
ScrollAreaViewport.displayName = ScrollAreaPrimitive.Viewport.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={twMerge(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-px",
      orientation === "horizontal" &&
        "h-2.5 w-full flex-col border-t border-t-transparent p-px",
      className,
    )}
    {...props}
  >
    <ScrollBarThumb />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

const ScrollBarThumb = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaThumb>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaThumb>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaThumb
    ref={ref}
    className={twMerge(
      "relative flex-1 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700",
      className,
    )}
    {...props}
  />
));
ScrollBarThumb.displayName = ScrollAreaPrimitive.ScrollAreaThumb.displayName;

const ScrollButtons = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & { scrollDistance?: number }
>(({ className, scrollDistance, ...props }, ref) => {
  const scrollAreaRef = ref as MutableRefObject<HTMLDivElement | null>;
  const scrollPosition = useScrollPosition({ el: scrollAreaRef?.current });

  if (!scrollAreaRef.current) return null;
  const { clientWidth, scrollWidth } = scrollAreaRef.current;
  const scrollAmount = scrollDistance ?? scrollWidth * 0.1;

  if (scrollWidth === clientWidth) return null;

  const scroll = (direction: Direction) =>
    scrollAreaRef.current?.scrollBy(scrollAmount * direction, 0);

  return (
    <div
      className={twMerge(
        "pointer-events-none absolute -left-8 -right-8 top-0 hidden h-full justify-between bg-gradient-to-r from-transparent via-gray-100 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-gray-800 dark:to-transparent sm:flex",
        className,
      )}
      style={{ "--PADDING": "2rem" } as React.CSSProperties}
      {...props}
    >
      <ScrollButton
        direction={Direction.LEFT}
        scrollPosition={scrollPosition}
        scrollWidth={scrollWidth}
        clientWidth={clientWidth}
        onClick={scroll}
      />
      <ScrollButton
        direction={Direction.RIGHT}
        scrollPosition={scrollPosition}
        scrollWidth={scrollWidth}
        clientWidth={clientWidth}
        onClick={scroll}
      />
    </div>
  );
});
ScrollButtons.displayName = "ScrollButtons";

interface ScrollButtonProps {
  direction: Direction;
  scrollPosition: number;
  scrollWidth: number;
  clientWidth: number;
  onClick: (direction: Direction) => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
  direction,
  scrollPosition,
  scrollWidth,
  clientWidth,
  onClick,
}) => {
  const isLeft = direction === Direction.LEFT;

  return (
    <Button
      className={twMerge(
        "pointer-events-auto sticky top-1/2 translate-y-1/2 shadow-lg",
        isLeft ? "left-4" : "right-4", // Fixes the conditional class merging
        (isLeft
          ? scrollPosition === 0
          : scrollWidth - (scrollPosition + clientWidth) === 0) && "invisible", // Conditional invisibility
      )}
      onClick={() => onClick(direction)}
      data-testid={`scroll-${isLeft ? "left" : "right"}-btn`}
    >
      <span className="sr-only">Scroll {isLeft ? "left" : "right"}</span>
      {isLeft ? (
        <HiChevronLeft className="h-5 w-5" />
      ) : (
        <HiChevronRight className="h-5 w-5" />
      )}
    </Button>
  );
};

export {
  ScrollArea,
  ScrollAreaViewport,
  ScrollBar,
  ScrollBarThumb,
  ScrollButtons,
};
