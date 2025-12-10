import type { Metadata } from "next";
import "../globals.css";
import Navibar from "@/components/Navibar/Navibar";
import Footer from "@/components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Marietta",
  description: "Marietta company for blinds",
};

type Params = { locale: string }; // Define the correct type for params

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>; // Ensure params is of type Promise<Params>
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // Replace `as any` with `as string` to avoid using `any`
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navibar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
