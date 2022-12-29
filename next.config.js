/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    domain: 'https://hackmol.tech',
  },
}

module.exports = nextConfig
