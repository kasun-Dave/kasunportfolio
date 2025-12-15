/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/kavindu-portfolio',
  assetPrefix: '/kavindu-portfolio/',
}

module.exports = nextConfig
