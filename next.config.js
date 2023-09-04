/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
  output: "export",
};

module.exports = nextConfig;
