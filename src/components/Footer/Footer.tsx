import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FooterLinks } from "./Footerdata";

export default function Footer(): JSX.Element {
  const t = useTranslations("homepage.footer");

  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <Image
              alt=""
              src="/images/logo.png"
              className="h-8 w-auto"
              width={100}
              height={100}
            />
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              {t("companyDescription")}
            </p>
          </div>

          <div>
            <p className="text-sm text-mar uppercase font-semibold tracking-widest">
              {t("aboutTitle")}
            </p>
            <ul className="mt-6 space-y-4">
              {FooterLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex text-base text-black transition-all duration-200 hover:text-mar focus:text-mar"
                  >
                    {t(`links.company.${index}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-mar uppercase">
              {t("helpTitle")}
            </p>
            <ul className="mt-6 space-y-4">
              {FooterLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex text-base text-black transition-all duration-200 hover:text-mar focus:text-mar"
                  >
                    {t(`links.products.${index}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-mar uppercase">
              {t("followUsTitle")}
            </p>
            <ul className="mt-6 space-y-4">
              {FooterLinks.followUs.map((link, index) => (
                <li
                  key={index}
                  className="mb-2 flex sm:flex-row flex-col items-center text-black justify-center gap-3 md:justify-start hover:text-mar"
                >
                  {link.icon && <span className="text-xl">{link.icon}</span>}
                  <a href={link.href} className="">
                    {t(`links.followUs.${index}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />
        <p className="text-sm text-center text-gray-600">{t("copyright")}</p>
      </div>
    </section>
  );
}
