'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@repo/shared/components/sidebar';
import { authClient } from '@repo/shared/lib/auth-client';
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from '@tabler/icons-react';
import { type ComponentProps } from 'react';

import { NavDocuments } from '@/components/nav-documents';
import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';

const data = {
  documents: [
    {
      icon: IconDatabase,
      name: 'Data Library',
      url: '#',
    },
    {
      icon: IconReport,
      name: 'Reports',
      url: '#',
    },
    {
      icon: IconFileWord,
      name: 'Word Assistant',
      url: '#',
    },
  ],
  navClouds: [
    {
      icon: IconCamera,
      isActive: true,
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
      title: 'Capture',
      url: '#',
    },
    {
      icon: IconFileDescription,
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
      title: 'Proposal',
      url: '#',
    },
    {
      icon: IconFileAi,
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
      title: 'Prompts',
      url: '#',
    },
  ],
  navMain: [
    {
      icon: IconDashboard,
      title: 'Dashboard',
      url: '#',
    },
    {
      icon: IconListDetails,
      title: 'Lifecycle',
      url: '#',
    },
    {
      icon: IconChartBar,
      title: 'Analytics',
      url: '#',
    },
    {
      icon: IconFolder,
      title: 'Projects',
      url: '#',
    },
    {
      icon: IconUsers,
      title: 'Team',
      url: '#',
    },
  ],
  navSecondary: [
    {
      icon: IconSettings,
      title: 'Settings',
      url: '#',
    },
    {
      icon: IconHelp,
      title: 'Get Help',
      url: '#',
    },
    {
      icon: IconSearch,
      title: 'Search',
      url: '#',
    },
  ],
};

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const { data: session } = authClient.useSession();

  const user = {
    avatar: session?.user?.image || '',
    email: session?.user?.email || '',
    name: session?.user?.name || '',
  };

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">My App</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary className="mt-auto" items={data.navSecondary} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
