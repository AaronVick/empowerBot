/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    LLAMA_API: process.env.LLAMA_API,
  },
};

module.exports = nextConfig;
