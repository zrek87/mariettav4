import { useTranslations } from "next-intl";
import Image from "next/image";

const images = [
  "/partners/1.png",
  "/partners/2.png",
  "/partners/3.png",
  "/partners/4.png",
  "/partners/5.png",
  "/partners/6.png",
  "/partners/7.jpg",
  "/partners/8.png",
  "/partners/9.png",
  "/partners/10.webp",
  "/partners/12.png",
  "/partners/13.png",
  "/partners/14.png",
  "/partners/15.png",
  "/partners/16.svg",
  "/partners/17.png",
  "/partners/18.png",
  "/partners/19.png",
  "/partners/20.png",
  "/partners/21.png",
  "/partners/22.png",
];

const Cloud = () => {
  const t = useTranslations("homepage.Cloud");
  return (
    <section className="py-10 bg-slate-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight">
            {t("Titlecloud")}
          </h2>
        </div>

        <div className="grid items-center max-w-6xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16">
          {images.map((src, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                className="object-contain w-full h-12 mx-auto transition-transform duration-300 hover:scale-110"
                src={src}
                width={500}
                height={500}
                alt={`Partner logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cloud;
