export interface User {
  createdAt: Date;
  email: string;
  id: string;
  name: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}
