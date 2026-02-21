import { useQuery } from '@tanstack/react-query';

import { apiFetch } from '../lib/api-client';
import { apiResponseSchema, HealthResponseSchema, UserSchema } from '../types';

export function useUsers() {
  return useQuery({
    queryFn: () => apiFetch('/api/users', apiResponseSchema(UserSchema.array())),
    queryKey: ['users'],
  });
}

export function useHealth() {
  return useQuery({
    queryFn: () => apiFetch('/api/health', HealthResponseSchema),
    queryKey: ['health'],
  });
}
