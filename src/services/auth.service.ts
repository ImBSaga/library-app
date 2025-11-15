import { api } from '@/lib/api/axiosInstance';

// Types
import type { LoginResponse, RegisterResponse } from '@/types/Auth.type';
import type {
  LoginTypes,
  RegisterTypes,
} from '@/lib/validation/auth.validation';

const prefix = '/api/auth';

// Register
export const registerService = async (
  data: RegisterTypes
): Promise<RegisterResponse> => {
  const res = await api.post<RegisterResponse>(`${prefix}/register`, data);
  return res.data;
};

// Login
export const loginService = async (
  data: LoginTypes
): Promise<LoginResponse> => {
  const res = await api.post<LoginResponse>(`${prefix}/login`, data);
  return res.data;
};
