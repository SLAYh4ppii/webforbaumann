const nextIntlConfig = require('./next-intl.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: nextIntlConfig.locales,
    defaultLocale: nextIntlConfig.defaultLocale,
  },
};

module.exports = nextConfig;