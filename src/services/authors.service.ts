import { api } from '@/lib/api/axiosInstance';
import type { GetAuthorsResponse } from '@/types/Authors.type';

const prefix = '/api/authors';

// Get Authors
export async function getAuthors() {
  const res = await api.get<GetAuthorsResponse>(`${prefix}`);
  return res.data;
}
