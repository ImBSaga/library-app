import { api } from '@/lib/api/axiosInstance';
import type {
  GetRecommendBooksResponse,
  GetRecommendBooksRequest,
} from '@/types/Books.type';

const prefix = '/api/books';

// Get Recommend Books
export async function getRecommendBooks(params?: GetRecommendBooksRequest) {
  const res = await api.get<GetRecommendBooksResponse>(`${prefix}/recommend`, {
    params,
  });
  return res.data;
}
