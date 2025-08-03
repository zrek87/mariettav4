"use client";
import { Dialog, DialogPanel, Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import { HiBars3, HiChevronDown, HiXMark } from "react-icons/hi2";
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

export const categories = [
  { key: "cat1", href: "1" },
  { key: "cat2", href: "2" },
  { key: "cat3", href: "3" },
  { key: "cat4", href: "4" },
  { key: "cat5", href: "5" },
];

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

const Navibar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("homepage.navbar");
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white backdrop-blur-md shadow-lg sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 flex justify-center px-4 py-2">
        <p className="text-xs sm:text-sm text-gray-300">
          <strong className="font-bold text-white tracking-wide">
            {t("strongTop")}
          </strong>{" "}
          {t("normalTop")}
        </p>
      </div>

      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between  gap-5 pt-3 pb-2 lg:px-8"
      >
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 transform transition-transform duration-300 hover:scale-105"
            >
              <Image
                alt="Logo"
                src="/images/logo.png"
                className="h-8 w-auto"
                width={200}
                height={200}
              />
              <div className="flex flex-col items-start leading-none pl-2 border-l border-gray-300">
                <p
                  className="text-[11px] md:text-[12px] font-semibold tracking-wider uppercase leading-tight"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #CCAC00, #CC8400)" /* Golden yellow to Orange */,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent" /* Fallback */,
                  }}
                >
                  {t("logoLine1")}
                </p>
                <p
                  className="text-[10px] md:text-[11px] font-semibold tracking-wider uppercase mt-0.5 leading-tight"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #CCAC00, #CC8400)" /* Golden yellow to Orange */,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent" /* Fallback */,
                  }}
                >
                  {t("logoLine2")}
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {/* Home Link */}
            <Link
              key="link1"
              href="/"
              className="uppercase text-sm font-semibold pb-2 text-gray-700 hover:text-orange-600 transition-all duration-300 relative group"
            >
              {t("link1")}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>

            {/* Categories Dropdown */}
            <div
              className="relative inline-block text-left pb-2"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="uppercase text-sm font-semibold text-gray-700 hover:text-orange-600 inline-flex items-center gap-1 transition-all duration-300 group">
                    {t("dropdown")}
                    <HiChevronDown
                      className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  show={open}
                  as="div"
                  enter="transition ease-out duration-300"
                  enterFrom="opacity-0 translate-y-2 scale-95"
                  enterTo="opacity-100 translate-y-0 scale-100"
                  leave="transition ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 scale-100"
                  leaveTo="opacity-0 translate-y-2 scale-95"
                >
                  <Menu.Items className="absolute z-20 w-64 origin-top-right rounded-2xl bg-white backdrop-blur-xl shadow-2xl ring-1 ring-gray-200/50 focus:outline-none transform-gpu animate-fade-in-up p-2">
                    <div className="space-y-1">
                      {categories.map((cat) => (
                        <Menu.Item key={cat.key} as="div">
                          {({ active }) => (
                            <Link
                              href={`/categories/${cat.href}`}
                              className={classNames(
                                "flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 transform hover:scale-[1.02]",
                                active
                                  ? "bg-[#E58411] text-white shadow-lg shadow-[#E58411]/40"
                                  : "text-gray-800 hover:bg-gray-100 hover:text-gray-900"
                              )}
                            >
                              <span
                                className={classNames(
                                  "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold",
                                  active
                                    ? "bg-white/30 border border-white/50"
                                    : "bg-gray-200 text-gray-600"
                                )}
                              >
                                {cat.key.slice(-1)}
                              </span>
                              <span className="text-sm font-medium">
                                {t(cat.key)}
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            {/* Other Navigation Links */}
            {navigation.slice(1).map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="uppercase text-sm font-semibold pb-2 text-gray-700 hover:text-orange-600 transition-all duration-300 relative group"
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </div>
        </div>
        {/* Language Switcher */}
        <div className="hidden lg:flex">
          <Link
            href={pathname}
            locale={locale === "ar" ? "en" : "ar"}
            className="flex items-center gap-3 text-sm font-semibold text-black hover:text-yellow-300 transition-colors duration-300 group"
          >
            <Image
              alt={locale === "ar" ? "English" : "Arabic"}
              src={locale === "ar" ? "/logos/en.png" : "/logos/ar.jpg"}
              width={35}
              height={34}
              quality={100}
              priority
              className=" shadow-lg group-hover:ring-2  group-hover:scale-110 transition-all duration-300 object-cover"
              sizes="(max-width: 768px) 40px, 84px"
            />
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              {locale === "ar" ? "English" : "العربية"}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors duration-200"
          >
            <HiBars3 className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-40 bg-black/50" />
        <DialogPanel className="fixed right-0 top-0 z-50 w-3/4 max-w-sm bg-white/95 backdrop-blur-lg p-6 shadow-2xl h-full overflow-y-auto transform transition-transform duration-300 ease-out data-[closed]:translate-x-full">
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image
                alt="Logo"
                src="/images/logo.png"
                className="h-9 w-auto"
                width={200}
                height={200}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors duration-200"
            >
              <HiXMark className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-orange-50 hover:text-orange-700 transition-colors duration-200"
              >
                {t(item.key)}
              </Link>
            ))}

            {/* Mobile Categories */}
            <div className="border-t pt-4 mt-4">
              <p className="text-sm font-semibold text-gray-600 mb-3">
                {" "}
                {t("dropdown")}
              </p>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.key}
                    href={cat.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-700 transition-colors duration-200"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-semibold">
                      {/* You can replace this with a proper icon component like Heroicons */}
                      {cat.key.slice(-1)}
                    </span>
                    {t(cat.key)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Language Switcher */}
            <div className="border-t pt-4 mt-4">
              <Link
                href={pathname}
                locale={locale === "ar" ? "en" : "ar"}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-base font-medium text-gray-700 hover:text-orange-700 transition-colors duration-200"
              >
                <Image
                  alt={locale === "ar" ? "English" : "Arabic"}
                  src={locale === "ar" ? "/logos/en.png" : "/logos/ar.jpg"}
                  width={32}
                  height={32}
                  className="rounded-full shadow-sm"
                />
                {locale === "ar" ? "English" : "العربية"}
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navibar;
