import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint for build
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

export default withNextIntl(nextConfig);
