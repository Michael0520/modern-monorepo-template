import { SidebarProvider } from '@repo/shared/components/sidebar';
import type { CSSProperties, ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider
      defaultOpen
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
        } as CSSProperties
      }
    >
      {children}
    </SidebarProvider>
  );
}
