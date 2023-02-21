/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    POSTMARK_API_TOKEN: process.env.POSTMARK_API_TOKEN,
  }
}

module.exports = nextConfig
