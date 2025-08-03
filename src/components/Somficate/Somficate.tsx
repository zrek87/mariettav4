"use client";

import Image from "next/image";
import React from "react";
import { Link } from "@/i18n/routing";
import Blindsdataar from "@/hooks/Blindsdataar";
import Blindsdataen from "@/hooks/Blindsdataen";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Somficate: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("homepage.categories");
  const Blindsdata = locale === "en" ? Blindsdataen : Blindsdataar;

  return (
    <section className="py-12 px-6 relative">
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(229, 132, 17, 0) 10.79%, rgba(229, 132, 17, 0.26) 40.92%, rgba(229, 132, 17, 0) 70.35%)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-extrabold text-mar">{t("catTitle")}</h2>
        <p className="mt-2 text-lg text-black font-semibold">
          {t("catSecond")}
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination]}
        className="swiper-container min-h-[350px]"
        style={{ paddingTop: "20px", padding: "20px" }}
      >
        {Blindsdata.map((blind, index) => (
          <SwiperSlide key={index}>
            <Link href={`/blinds/${blind.id}`}>
              <div
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                style={{ height: "250px" }}
              >
                <Image
                  src={blind.image}
                  alt={blind.title}
                  fill
                  className="opacity-90 group-hover:opacity-100 transition-opacity duration-300 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 z-10">
                  <h3 className="text-xl text-white font-semibold transition-transform duration-300 group-hover:-translate-y-1">
                    {blind.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t("catword")} {blind.title.toLowerCase()}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Somficate;
