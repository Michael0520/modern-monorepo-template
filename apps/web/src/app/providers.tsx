'use client';

import { SidebarProvider } from '@repo/shared/components/sidebar';
import { TooltipProvider } from '@repo/shared/components/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { type ReactNode, useState } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <SidebarProvider
            defaultOpen
            style={
              {
                '--sidebar-width': 'calc(var(--spacing) * 72)',
              } as React.CSSProperties
            }
          >
            {children}
          </SidebarProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
