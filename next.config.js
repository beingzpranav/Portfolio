const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['http://192.168.56.1:3000', 'http://localhost:3000'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig; 