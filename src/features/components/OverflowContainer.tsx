import { useMeasure } from "@reactuses/core";
import {
  useRef,
  useState,
  useLayoutEffect,
  ReactNode,
} from "react";

interface OverflowContainerProps<T> {
  items: T[];
  itemRenderer: (item: T, index: number) => ReactNode;
  gap?: number;
  buffer?: number;
  children?: ReactNode;
}

function OverflowContainer<T>({
  items,
  itemRenderer,
  gap = 8,
  buffer = 0,
  children,
}: OverflowContainerProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [{ width }] = useMeasure(containerRef);
  const [visibleCount, setVisibleCount] = useState(
    items.length
  );
  const [showAll, setShowAll] = useState(false);

  useLayoutEffect(() => {
    if (!containerRef.current || items.length === 0) return;

    let total = 0;
    let fitCount = 0;
    let buttonWidth = 94;
    for (let i = 0; i < items.length; i++) {
      const el = itemRefs.current[i];
      if (el) {
        total += el.offsetWidth + gap;
        if (total > width - (buffer + buttonWidth)) break;
        fitCount++;
      }
    }
    setVisibleCount(fitCount);
  }, [width, items, gap]);

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap items-center"
      style={{ position: "relative", gap }}
    >
      {/* Hidden measurement pass */}
      <div className="absolute invisible pointer-events-none h-0">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            style={{
              display: "inline-block",
              marginRight: gap,
            }}
          >
            {itemRenderer(item, index)}
          </div>
        ))}
      </div>

      {/* Actual visible items */}
      {(showAll ? items : items.slice(0, visibleCount)).map(
        (item, index) => itemRenderer(item, index)
      )}
      {visibleCount < items.length && (
        <button
          className="py-2 px-4 rounded-full text-main-500 cursor-pointer"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? "Show less"
            : `${items.length - visibleCount}+ More`}
        </button>
      )}
      {children}
    </div>
  );
}

export default OverflowContainer;
