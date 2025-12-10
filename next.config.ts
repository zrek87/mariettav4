import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  //Disable ESLint during build
  // Disable TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Override next-intl's turbo experimental config that's invalid in Next.js 16
  experimental: {},
};

export default withNextIntl(nextConfig);
