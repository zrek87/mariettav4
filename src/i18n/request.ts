import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale: "en" | "ar" = (await requestLocale) as "en" | "ar";  

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale as "en" | "ar"; 
  }

  return {
    locale,
    messages: (await import(`../../langs/${locale}.json`)).default,
  };
});
