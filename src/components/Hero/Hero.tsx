"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const t = useTranslations("homepage.hero");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const slides = [
    {
      id: 1,
      src: "/images/sido-12.png",
      alt: "Slide 1",
      title: t("slide1.title"),
      description: t("slide1.description"),
      buttonText: t("slide1.buttonText"),
      buttonhref: "/aboutus",
    },
    {
      id: 2,
      src: "/images/s8.jpg",
      alt: "Slide 2",
      title: t("slide2.title"),
      description: t("slide2.description"),
      buttonText: t("slide2.buttonText"),
      buttonhref: "/somfy",
    },
    {
      id: 3,
      src: "/images/s5.jpeg",
      alt: "Slide 3",
      title: t("slide3.title"),
      description: t("slide3.description"),
      buttonText: t("slide3.buttonText"),
      buttonhref: "/contact",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setAnimate(false);
      }, 500);
    }, 9000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className="absolute inset-0 transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(${
            isRTL ? currentIndex * 100 : -currentIndex * 100
          }%)`,
        }}
      >
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full h-screen relative">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="transition-opacity duration-1000 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black opacity-70 z-10" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div
          className={`transform transition-all duration-1000 ${
            animate ? "opacity-0 -translate-y-56" : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none">
            <span className="relative inline-block text-white px-4 -mx-4 py-2">
              <span className="absolute inset-0 bg-mar transform -skew-x-12 -z-10" />
              {slides[currentIndex].title}
            </span>
          </h1>
          <p className="text-lg md:text-3xl text-white font-extrabold mb-6">
            {slides[currentIndex].description}
          </p>
          <Link
            href={slides[currentIndex].buttonhref}
            className={`px-6 py-3 text-lg font-semibold text-white bg-gray-800 rounded-full hover:bg-mar-700 transition-all duration-1000 ${
              animate ? "opacity-0 translate-x-56" : "opacity-100 translate-x-0"
            }`}
          >
            {slides[currentIndex].buttonText}
          </Link>
        </div>
      </div>

      <div
        className={`absolute bottom-5 ${
          isRTL ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"
        } flex gap-4`}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            } transition-colors duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
