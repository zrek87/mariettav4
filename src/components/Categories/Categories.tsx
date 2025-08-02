import Image, { StaticImageData } from "next/image";
import pt1 from "../../../public/images/sido-2.jpg";
import pt2 from "../../../public/images/sido-1.jpg";
import pt3 from "../../../public/images/sido-4.jpg";
import { useTranslations } from "next-intl";

export function Categories() {
  const t = useTranslations("categoriesSection");
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-32">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Main Category Card */}
        <div className="lg:col-span-2">
          <CategoryCard
            image={pt1}
            title={t("title1")}
            description={t("description1")}
            isMain={true}
          />
        </div>

        {/* Side Category Cards */}
        <div className="space-y-6 lg:space-y-8">
          <CategoryCard
            image={pt2}
            title={t("title2")}
            description={t("description2")}
            isMain={false}
          />
          <CategoryCard
            image={pt3}
            title={t("title3")}
            description={t("description3")}
            isMain={false}
          />
        </div>
      </section>
    </div>
  );
}

interface CategoryCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  isMain: boolean;
}

function CategoryCard({
  image,
  title,
  description,
  isMain,
}: CategoryCardProps): JSX.Element {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out">
      <div
        className={`relative ${
          isMain ? "h-[400px] lg:h-[500px]" : "h-[200px] lg:h-[240px]"
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-fill transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
      </div>
    </div>
  );
}
