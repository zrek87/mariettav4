import React from "react";
import Image from "next/image";
import backgroundImage from "../../../public/images/Fe.png";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Features: React.FC = () => {
  const t = useTranslations("homepage.features");

  return (
    <div className="relative -mx-8 -mt-8">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
      </div>

      <div className="absolute inset-0 bg-mar opacity-30 z-10" />
      <div className="relative px-4 sm:px-8 max-w-screen-xl mx-auto z-20">
        <div className="pt-28 pb-20 px-4 flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col items-center lg:items-start">
            <span className="bg-black inline-block my-5 pl-4 pr-2 py-1 text-white border-l-8 border-mar font-bold text-base">
              {t("highlightText")}
            </span>
            <h1 className="text-4xl text-black font-extrabold max-w-sm mb-20">
              {t("title")}
            </h1>
            <div>
              <Link
                href="/somfy"
                className="px-8 py-3 text-sm sm:text-base bg-mar text-white font-bold rounded shadow transition duration-300 hover:text-gray-100 focus:shadow-outline"
              >
                {t("buttonText")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
