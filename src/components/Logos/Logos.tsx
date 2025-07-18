"use client";

import Image from "next/image";
import { Logoslist } from "./Logoslist";
import { useEffect, useRef } from "react";

export default function Logos(): JSX.Element {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const scrollInterval = 30; // milliseconds between scroll updates

    const autoScroll = () => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed;

        // Reset to beginning when reaching the end
        if (
          scrollPosition >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }
    };

    const intervalId = setInterval(autoScroll, scrollInterval);

    // Pause auto-scroll on hover
    const handleMouseEnter = () => clearInterval(intervalId);
    const handleMouseLeave = () => {
      const newIntervalId = setInterval(autoScroll, scrollInterval);
      return () => clearInterval(newIntervalId);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 lg:px-12">
        {/* Horizontal scrollable container */}
        <div className="relative">
          {/* Gradient overlay for smooth fade effect */}
          <div className="absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          {/* Scrollable logos container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide"
          >
            {Logoslist.map((pl) => (
              <div
                key={pl.path}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <Image
                  className="h-12 w-auto object-contain transition duration-300 hover:scale-105"
                  src={pl.path}
                  alt={pl.alt}
                  width={158}
                  height={48}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
