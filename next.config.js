/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  /** @TODO trailingSlash가 필요한가? */
  // trailingSlash: true,
  experimental: {
    appDir: true,
  },
  output: "export",
};

module.exports = nextConfig;
