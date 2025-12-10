import Image from "next/image";
import backgroundImage from "../../../../../public/images/banner.jpg";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Stats from "@/components/Stats/Stats";
import Cloud from "@/components/Cloud/Cloud";
import Zoom from "@/components/Zoom/Zoom";
import Content from "@/components/Content/Content";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("homepage.aboutPage");
  const slogans: string[] = [
    t("slogan1"),
    t("slogan2"),
    t("slogan3"),
    t("slogan4"),
    t("slogan5"),
  ];

  return (
    <main className="bg-white overflow-hidden">
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

        <div className="absolute inset-0 bg-mar opacity-60 z-10" />
        <div className="relative px-4 sm:px-8 max-w-screen-xl mx-auto z-20">
          <div className="pt-28 pb-20 px-4 flex flex-col lg:flex-row justify-center items-center">
            <span className="text-3xl font-semibold text-white">
              {t("mainHeading")}
            </span>
          </div>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center py-32">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:gap-10 px-4">
          <div className="relative md:w-1/2 flex justify-center md:justify-end mb-24 md:mb-0">
            <div className="relative w-72 h-96 md:w-80 md:h-[26rem] lg:w-96 lg:h-[28rem]">
              <Image
                src="/images/sido-5.jpg"
                alt="Living Room"
                fill
                className="rounded-lg shadow-lg object-fill"
              />
            </div>
            <div className="absolute bottom-0 left-12 rtl:right-12 w-48 h-64 md:w-52 md:h-72 lg:w-56 lg:h-80 transform translate-y-1/4 md:translate-y-1/3 shadow-lg">
              <Image
                src="/images/sido-6.png"
                alt="Door"
                fill
                className="rounded-lg object-fill"
              />
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col space-y-5">
            <h2 className="text-mar font-semibold text-xl">
              {t("sectionLabel")}
            </h2>
            <h1 className="text-4xl font-semibold text-gray-800">
              {t("title")}
            </h1>
            <p className="text-gray-500 font-semibold">{t("description")}</p>

            <ul className="space-y-2">
              {slogans.map((slogan, index) => (
                <li key={index} className="flex items-center">
                  <BsFillCheckCircleFill className="text-yellow-500 text-lg mr-2" />
                  <span className="text-gray-700">{slogan}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Content />
      <Stats />
      <Cloud />
      <Zoom />
    </main>
  );
}
