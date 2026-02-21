'use client';

import { Badge } from '@repo/shared/components/badge';
import { useHealth } from '@repo/shared/hooks/use-api';

export function ServerStatus() {
  const { data, isError, isPending } = useHealth();

  if (isPending) {
    return <Badge variant="outline">Checking...</Badge>;
  }

  if (isError) {
    return <Badge variant="destructive">Server Offline</Badge>;
  }

  return (
    <Badge variant="secondary">{data.status === 'ok' ? 'Server Online' : 'Server Error'}</Badge>
  );
}
