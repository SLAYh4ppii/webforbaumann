// @ts-check

const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const config = {
  env: {
    _next_intl_trailing_slash: '', // Add this to resolve the warning
  },
};

module.exports = withNextIntl(config);