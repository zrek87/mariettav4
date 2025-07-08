"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const navigation = [
  { key: "link1", href: "/", current: false },
  { key: "link2", href: "/somfy", current: false },
  { key: "link3", href: "/aboutus", current: false },
  { key: "link4", href: "/contact", current: false },
];

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

const Navibar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("homepage.navbar");

  return (
    <header className="bg-white">
      <div className="bg-black relative isolate flex items-center justify-center gap-x-6 overflow-hidden px-6 py-3 sm:px-3.5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-xs sm:text-base text-gray-400">
            <strong className="font-semibold text-white">
              {t("strongTop")}
            </strong>
            {t("normalTop")}
          </p>
        </div>
      </div>

      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-28"
      >
        {/* Logo (Desktop) */}
        <div className="flex pr-8 items-center">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              alt="Logo"
              src="/images/logo.png"
              className="h-10 w-auto"
              width={400}
              height={400}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <HiBars3 aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-5">
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={classNames(
                "transform transition-all duration-500 text-black hover:underline hover:underline-offset-8 hover:text-mar",
                "rounded-md px-3 py-2 uppercase text-gray-500 text-base font-medium"
              )}
            >
              {t(item.key)}
            </Link>
          ))}
        </div>

        {/* Language Switcher */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={pathname}
            locale={locale === "ar" ? "en" : "ar"}
            className="text-sm/6 font-semibold text-gray-900 flex items-center gap-3"
          >
            <Image
              alt=""
              src={`${locale === "ar" ? "/logos/en.png" : "/logos/ar.jpg"}`}
              className="h-[28px] w-[28px] rounded-full"
              width={400}
              height={400}
            />
            <span className="text-base">
              {locale === "ar" ? "English" : "العربية"}
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          {/* Logo (Mobile) */}
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                alt="Logo"
                src="/images/logo.png"
                className="h-8 w-auto"
                width={400}
                height={400}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <HiXMark aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-mar">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={classNames(
                      "text-black hover:bg-mar hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </div>

              {/* Mobile Language Switcher */}
              <div className="py-6">
                <Link
                  href={pathname}
                  locale={locale === "ar" ? "en" : "ar"}
                  className="text-sm/6 font-semibold text-gray-900 flex items-center gap-3"
                >
                  <Image
                    alt=""
                    src={`${
                      locale === "ar" ? "/logos/en.png" : "/logos/ar.jpg"
                    }`}
                    className="h-[28px] w-[28px] rounded-full"
                    width={400}
                    height={400}
                  />
                  <span className="text-base">
                    {locale === "ar" ? "English" : "العربية"}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navibar;
