import { resolve } from 'node:path';

import type { NextConfig } from 'next';

const apiUrl = process.env.API_URL || 'http://localhost:3000';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        destination: `${apiUrl}/api/:path*`,
        source: '/api/:path*',
      },
    ];
  },
  transpilePackages: ['@repo/shared'],
  turbopack: {
    root: resolve(import.meta.dirname, '../..'),
  },
};

export default nextConfig;
