/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Strict Mode on
  experimental: {
    reactRefresh: true, // ✅ Fast Refresh enable
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig; // ✅ Use `export default` instead of `module.exports`
