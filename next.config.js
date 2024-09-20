/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['dcorp.dev'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dcorp.dev',
        port: '',
        pathname: '/metadata/image/**',
      },
    ],
  },
  compiler: {
    styledComponents: true
  },
  output: 'standalone',
}

module.exports = nextConfig
