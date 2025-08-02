"use client";

import Image from "next/image";
import { Logoslist, type LogoItem } from "./Logoslist";
import { useMemo } from "react";

interface LogosProps {
  direction?: "ltr" | "rtl";
  speed?: number; // Animation duration in seconds
}

export default function Logos({
  direction = "ltr",
  speed = 20,
}: LogosProps): JSX.Element {
  // Memoize duplicated logos to prevent recreation on every render
  const duplicatedLogos = useMemo(() => [...Logoslist, ...Logoslist], []);

  const animationClass =
    direction === "rtl" ? "animate-logo-scroll-rtl" : "animate-logo-scroll";

  return (
    <section
      className="bg-white py-12"
      aria-label="Partner logos"
      role="region"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-12">
        {/* Horizontal scrolling container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div
            className="absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Infinite scrolling logos */}
          <div
            className={`flex gap-8 ${animationClass}`}
            style={
              { "--animation-duration": `${speed}s` } as React.CSSProperties
            }
            aria-live="polite"
            aria-label={`Scrolling partner logos ${
              direction === "rtl" ? "right to left" : "left to right"
            }`}
          >
            {duplicatedLogos.map((logo: LogoItem, index: number) => (
              <div
                key={`${logo.path}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <Image
                  className="h-12 w-auto object-contain transition duration-300 hover:scale-105 focus:scale-105"
                  src={logo.path}
                  alt={logo.alt}
                  width={158}
                  height={48}
                  loading="lazy"
                  title={logo.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
