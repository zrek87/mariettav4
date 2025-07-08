import { IoDiamondOutline } from "react-icons/io5";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Whyus(): JSX.Element {
  const t = useTranslations("homepage.whyus");

  const items = [
    {
      id: 1,
      icon: <IoDiamondOutline className="text-4xl" />,
      title: t("items.0.title"),
      description: t("items.0.description"),
    },
    {
      id: 2,
      icon: <FaHandshakeSimple className="text-4xl" />,
      title: t("items.1.title"),
      description: t("items.1.description"),
    },
    {
      id: 3,
      icon: <FaLightbulb className="text-4xl" />,
      title: t("items.2.title"),
      description: t("items.2.description"),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
            {t("title")}
          </h2>
        </div>
        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4"
            >
              <div className="bg-slate-100 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto">
                <div className="text-mar">{item.icon}</div>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                {item.title}
              </h4>
              <p className="text-base font-normal text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
