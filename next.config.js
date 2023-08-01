/** @type {import('next').NextConfig} */

// next.config.js
require('dotenv').config();

const nextConfig = {
  compiler: {
    styledComponents: true,
  },

  /*images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "**",
      },
    ],
  },*/

  images: {
    domains: ["res.cloudinary.com"],
  },

  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
};

module.exports = nextConfig;



