"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Zoom() {
  const controls = useAnimationControls();
  const t = useTranslations("homepage.zoom");

  useEffect(() => {
    controls.start({
      scale: [1, 1.1],
      transition: { duration: 5, repeat: Infinity, repeatType: "mirror" },
    });
  }, [controls]);

  return (
    <div className="relative h-72 overflow-hidden">
      <motion.div
        animate={controls}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/s1.jpg')" }}
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white space-y-4">
        <h1 className="sm:text-4xl text-3xl font-bold text-center">
          {t("title")}
        </h1>
        <p className="sm:text-lg text-lg max-w-5xl text-center">
          {t("description")}
        </p>
        <Link
          href="/somfy"
          className="mt-6 px-6 py-3 bg-black text-mar rounded-lg text-lg font-semibold transition-transform duration-300 hover:scale-110"
        >
          {t("buttonText")}
        </Link>
      </div>
    </div>
  );
}
