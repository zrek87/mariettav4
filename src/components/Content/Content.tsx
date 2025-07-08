"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from 'next-intl';

export default function Content() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const t = useTranslations('homepage.content');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.2,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="sm:mt-14 mt-0 relative w-full h-[100vh] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/c1.jpg')" }}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: inView ? 1 : 0.5 }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/zebra.jpg')" }}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: inView ? 1 : 0.5 }}
        transition={{ duration: 1.5 }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40"></div>

      <motion.div
        className="absolute left-0 w-1/2 h-full flex flex-col items-center text-center justify-center p-10 text-white z-10 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 1 }}
      >
        <h2 className="sm:text-5xl text-2xl font-bold text-white">{t('missionTitle')}</h2>
        <motion.p
          className="text-xs font-semibold sm:text-lg max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {t('missionText')}
        </motion.p>

        <motion.div
          className="absolute top-10 right-20 h-12 w-12 bg-white opacity-60 rounded-full"
          animate={{
            y: [0, 20, 0],
            transition: { duration: 5, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 h-20 w-20 bg-gray-500 opacity-40 rounded-full"
          animate={{
            x: [0, -20, 0],
            transition: { duration: 7, repeat: Infinity },
          }}
        />
      </motion.div>

      <motion.div
        className="absolute right-0 w-1/2 h-full flex flex-col items-center text-center justify-center p-10 text-white z-10 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 1 }}
      >
        <h2 className="sm:text-5xl text-2xl font-bold text-white">{t('visionTitle')}</h2>
        <motion.p
          className="text-xs font-semibold sm:text-lg max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {t('visionText')}
        </motion.p>

        <motion.div
          className="absolute bottom-10 right-16 h-16 w-16 bg-yellow-500 opacity-70 rounded-full"
          animate={{
            y: [0, -20, 0],
            transition: { duration: 4, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute top-20 left-16 h-10 w-10 bg-pink-400 opacity-50 rounded-full"
          animate={{
            x: [0, 15, 0],
            transition: { duration: 6, repeat: Infinity },
          }}
        />
      </motion.div>
    </div>
  );
}
