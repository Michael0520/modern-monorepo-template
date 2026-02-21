'use client';

import { SidebarProvider } from '@repo/shared/components/sidebar';
import { TooltipProvider } from '@repo/shared/components/tooltip';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
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
  );
}
