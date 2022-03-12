const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true,
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development',
      runtimeCaching,
      buildExcludes: [/middleware-manifest.json$/],
      scope: '/',
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
  }),
);