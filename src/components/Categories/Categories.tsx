import Image, { StaticImageData } from "next/image";
import pt1 from "../../../public/images/s7.jpg";
import pt2 from "../../../public/images/mm.jpg";
import pt3 from "../../../public/images/s5.jpeg";
import { useTranslations } from "next-intl";

export function Categories() {
  const t = useTranslations("categoriesSection");
  return (
    <div className="container mx-auto">
      <section className="max-h-[680px] sm:max-h-[480px] flex flex-col sm:flex-row gap-6 px-8 sm:px-36">
        <div className="relative overflow-hidden">
          <Image
            src={pt1}
            alt="icon"
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer h-[390px] w-full sm:h-[550px] sm:w-[600px]"
            width={500}
            height={0}
          />
        </div>

        <div className=" w-full sm:w-1/2 flex flex-col gap-6">
          <GridItem image={pt2} />
          <GridItem image={pt3} />
        </div>
      </section>
    </div>
  );
}

interface LayoutProps {
  image: StaticImageData;
}

function GridItem({ image }: LayoutProps): JSX.Element {
  return (
    <div className="h-[180px] sm:h-[280px] relative overflow-hidden">
      <Image
        src={image}
        alt="icon"
        width={500}
        height={500}
        className="h-[180px] sm:h-[245px] transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"
      />
    </div>
  );
}
