/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/kasunportfolio',
  assetPrefix: '/kasunportfolio/',
}

module.exports = nextConfig
