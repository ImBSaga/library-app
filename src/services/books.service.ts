import { api } from '@/lib/api/axiosInstance';
import type {
  GetRecommendBooksResponse,
  GetRecommendBooksRequest,
  GetBookDetailResponse,
  GetAllBooksResponse,
  GetAllBooksRequest,
} from '@/types/Books.type';

const prefix = '/api/books';

// Get Recommend Books
export async function getRecommendBooks(params?: GetRecommendBooksRequest) {
  const res = await api.get<GetRecommendBooksResponse>(`${prefix}/recommend`, {
    params,
  });
  return res.data;
}

// Get Book Detail
export async function getBookDetail(id: number) {
  const res = await api.get<GetBookDetailResponse>(`${prefix}/${id}`);
  return res.data;
}

// Get All Books
export async function getAllBooks(params?: GetAllBooksRequest) {
  const res = await api.get<GetAllBooksResponse>(`${prefix}`, {
    params,
  });
  return res.data;
}
