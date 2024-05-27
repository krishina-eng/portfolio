const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["res.cloudinary.com", "media.dev.to"],
  },
  basePath: "/portflio",
};

module.exports = nextConfig;
