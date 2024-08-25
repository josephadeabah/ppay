import { useEffect, useState } from "react";

export const useScrollPosition = ({ el }: { el: Element | null }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!el) return;

    const updatePosition = () => setScrollPosition(el.scrollLeft);

    el.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => el.removeEventListener("scroll", updatePosition);
  }, [el]);

  return scrollPosition;
};
