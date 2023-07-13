/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    API_BASEURL: process.env.API_BASEURL,
  },
  output: "export",
  trailingSlash: true,
};
module.exports = nextConfig;
