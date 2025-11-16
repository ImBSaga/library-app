import { api } from '@/lib/api/axiosInstance';
import type { GetMeResponse } from '@/types/Me.type';

const prefix = '/api/me';

// Get Me
export async function getMe() {
  const res = await api.get<GetMeResponse>(`${prefix}`);
  return res.data;
}
