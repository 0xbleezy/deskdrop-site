import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.thedeskdrop.com' }],
        destination: 'https://thedeskdrop.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
