import { Toaster } from '@repo/shared/components/sonner';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Providers } from './providers';

import '@/index.css';

export const metadata: Metadata = {
  title: 'Modern Monorepo',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
