/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
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
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "https://www.google.com/",
      "upload.wikimedia.org",
      "res.cloudinary.com/",
    ],
  },
};

module.exports = nextConfig;
