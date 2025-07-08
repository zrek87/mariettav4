'use client'
import ProductDisplay from "@/components/Productcard/ProductDisplay";
import Detailscard from "@/components/Somfy/Detailscard";
import AboutSomfy from "@/components/Somfy/ImageText";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import Image from "next/image";

export default function Page() {
  const t = useTranslations('somfyPage');
  const nextSectionRef = useRef<HTMLDivElement | null>(null);
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="product-display-background">
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-gradient-to-tr from-mar via-mar to-yellow-400 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 left-20 w-[200px] h-[200px] bg-gradient-to-bl from-blue-500 to-mar rounded-full opacity-60 blur-2xl animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-center px-6 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-shrink-0 w-full md:w-2/3 lg:w-1/2"
          >
            <div className="relative">
              <Image
                src="/images/somfybg.avif"
                alt="Somfy page"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg shadow-2xl object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -top-8 -right-8 bg-mar text-gray-900 px-4 py-2 rounded-full font-semibold text-sm shadow-md"
              >
                {t('heroSection.badge')}
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center ltr:md:text-left rtl:md:text-right max-w-lg mt-10 md:mt-0"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {t('heroSection.titleP1')} <span className="text-slate-400">{t('heroSection.titleP2')}</span> <br />
              {t('heroSection.titleP3')} <span className="text-yellow-500">{t('heroSection.titleP4')}</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300">
              {t('heroSection.description')}
            </p>
            <motion.a
              onClick={scrollToNextSection}
              className="underline underline-offset-8 flex flex-col items-center gap-5 mt-6 inline-block text-yellow-400 text-3xl font-semibold hover:text-yellow-500 cursor-pointer"
              transition={{ duration: 0.3 }}
            >
              {t('heroSection.discoverbtn')} <FaArrowCircleDown className="animate-bounce" />
            </motion.a>
          </motion.div>
        </div>

        <div className="absolute -top-20 right-10 w-[250px] h-[250px] bg-gradient-to-tl from-pink-500 via-mar to-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      </div>
      <section className="pt-12 bg-white">

        <AboutSomfy
          title={t('aboutSection.title')}
          content={[
            t('aboutSection.content1'),
            t('aboutSection.content2'),
            t('aboutSection.content3')
          ]}
          imageUrl="/images/somfy-expert.jpg"
        />
      </section>
      <Detailscard />
      <section className="pt-8 bg-white">
        <div ref={nextSectionRef}>
          <ProductDisplay />
        </div>
      </section>
    </div>
  );
}
