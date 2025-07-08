import { useTranslations } from "next-intl";
import Image from "next/image";
const images = [
  "/logos/1.png",
  "/logos/2.png",
  "/logos/3.png",
  "/logos/4.png",
  "/logos/5.png",
  "/logos/6.png",
  "/logos/7.png",
  "/logos/8.png",
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

        <div className="grid items-center max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-3 gap-x-10 gap-y-16">
          {images.map((src, index) => (
            <div key={index}>
              <Image
                className="object-contain w-full h-12 mx-auto"
                src={src}
                width={500}
                height={500}
                alt={`Logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cloud;
