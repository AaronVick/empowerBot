/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    LLAMA_API: process.env.LLAMA_API,
  },
  // Added settings for page handling
  pageExtensions: ['js', 'jsx'],
  trailingSlash: false,
  // Ensure pages directory is properly handled
  experimental: {
    appDir: false
  }
};

module.exports = nextConfig;