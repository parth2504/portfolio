/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Disable experimental features that might cause issues
  experimental: {
    // Optimize CSS and package imports for better performance
    optimizeCss: false, // Disable CSS optimization that was causing issues
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
