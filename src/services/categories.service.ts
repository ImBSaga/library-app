import { api } from '@/lib/api/axiosInstance';
import type { GetCategoriesResponse } from '@/types/Categories.type';

const prefix = '/api/categories';

// Get Categories
export async function getCategories() {
  const res = await api.get<GetCategoriesResponse>(`${prefix}`);
  return res.data;
}
