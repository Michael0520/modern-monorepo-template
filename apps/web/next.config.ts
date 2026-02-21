import { resolve } from 'node:path';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        destination: 'http://localhost:3000/api/:path*',
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
