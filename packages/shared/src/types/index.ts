import { z } from 'zod';

// --- User ---

export const UserSchema = z.object({
  createdAt: z.coerce.date(),
  email: z.email(),
  id: z.string(),
  name: z.string(),
});

export type User = z.infer<typeof UserSchema>;

// --- API Response ---

export const apiResponseSchema = <T extends z.ZodType>(dataSchema: T) =>
  z.object({
    data: dataSchema,
    message: z.string().optional(),
    success: z.boolean(),
  });

export type ApiResponse<T> = { data: T; message?: string; success: boolean };

// --- Health ---

export const HealthResponseSchema = z.object({
  status: z.string(),
  timestamp: z.string(),
});

export type HealthResponse = z.infer<typeof HealthResponseSchema>;
