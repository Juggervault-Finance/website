/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  generateBuildId: async () => {
    // Generate a simple build ID
    return `build-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  },
};

module.exports = nextConfig;
