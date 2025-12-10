"use client";
import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Link } from "@/i18n/routing";
import { FaCheck } from "react-icons/fa";
import Blindsdataar from "@/hooks/Blindsdataar";
import Blindsdataen from "@/hooks/Blindsdataen";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Blinds({ params }: PageProps) {
  const locale = useLocale();
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const t = useTranslations("blindpage");
  const Blindsdata = locale === "en" ? Blindsdataen : Blindsdataar;

  const [id, setId] = React.useState<string | null>(null);

  // Unwrap the params promise
  React.useEffect(() => {
    params.then(({ id }) => {
      setId(id);
    });
  }, [params]);

  function getBlindsById(id: number) {
    return Blindsdata.find((blind) => blind.id === id);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  if (!id) return <p>Loading...</p>;

  const blindsInfo = getBlindsById(Number(id));

  if (!blindsInfo) return <p>Blind not found.</p>;

  return (
    <div ref={ref} className={inView ? "bb" : "aa"}>
      {blindsInfo ? (
        <div className="overflow-x-hidden">
          <motion.section
            className="relative w-full h-screen bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black opacity-70 z-10" />
            <Image
              src={blindsInfo.background}
              alt="Roller Blinds"
              fill
              className="absolute inset-0 object-cover"
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-center z-20 px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              <motion.h1
                className="text-white sm:text-7xl text-4xl font-semibold leading-tight"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                {blindsInfo.title}
              </motion.h1>
            </motion.div>
          </motion.section>

          <div className="relative bg-slate-100 overflow-hidden py-20">
            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center mb-20"
              >
                <h1 className="text-6xl font-extrabold leading-tight mb-6 tracking-tight text-mar">
                  {t("Header")}
                </h1>
                <p className="text-xl sm:text-xl max-w-3xl mx-auto text-black">
                  {blindsInfo.description}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                <div className="space-y-6">
                  <h2 className="sm:text-4xl text-2xl text-center font-semibold text-slate-600 mb-8">
                    {t("keysTitle")} {blindsInfo.name}
                  </h2>
                  <ul className="space-y-5 text-lg text-slate-600 font-bold">
                    {blindsInfo.features.map((fe, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex items-center gap-3"
                      >
                        <span className="text-mar text-xl">
                          <FaCheck />
                        </span>

                        <p className="text-black">{fe}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-lg overflow-hidden shadow-xl"
                >
                  <motion.img
                    src={blindsInfo.image}
                    alt={blindsInfo.name}
                    className="object-cover w-full h-[400px] md:h-[500px] rounded-lg transform transition duration-500 ease-in-out"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black opacity-50"
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <section className="py-24 bg-slate-400 text-black text-center">
            <motion.h2
              className="text-4xl font-semibold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.7 }}
            >
              {t("readymsg")}
            </motion.h2>
            <motion.p
              className="text-lg mb-8 opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.7 }}
            >
              {t("readySecond")}
            </motion.p>
            <motion.div
              className="inline-block px-10 py-4 bg-white text-black font-semibold text-lg rounded-lg transition-all transform hover:bg-mar hover:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.7 }}
            >
              <Link href="/contact" className="-m-1.5 p-1.5">
                {t("contact")}
              </Link>
            </motion.div>
          </section>
        </div>
      ) : (
        <span>Error not found</span>
      )}
    </div>
  );
}
