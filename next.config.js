/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['i.imgur.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;

// https://cloud.appwrite.io/v1/storage/buckets/664ee2c700218932abbc/files/666c51f5001471e7184d/view?project=65c0d05506e3ce1df2dc&mode=admin