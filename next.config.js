/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['http://192.168.56.1:3000', 'http://localhost:3000'],
  images: {
    domains: ['placehold.co'],
  },
};

module.exports = nextConfig; 