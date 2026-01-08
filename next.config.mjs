/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable source maps which might be causing the generate error
  productionBrowserSourceMaps: false,
  // Webpack configuration for Yarn PnP
  webpack: (config, { isServer }) => {
    return config;
  },
};

export default nextConfig;
