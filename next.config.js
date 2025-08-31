/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // Remove static export for development
  // output: 'export',
  trailingSlash: false,
  basePath: '',
}

module.exports = nextConfig