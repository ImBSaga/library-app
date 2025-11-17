import { api } from '@/lib/api/axiosInstance';
import type {
  CreateUpdateReviewRequest,
  CreateUpdateReviewResponse,
  DeleteReviewResponse,
} from '@/types/Reviews.type';

const prefix = '/api/reviews';

// Create / Update Reviews
export async function createUpdateReview(data: CreateUpdateReviewRequest) {
  const res = await api.post<CreateUpdateReviewResponse>(`${prefix}`, data);
  return res.data;
}

// Delete Reviews
export async function deleteReview(id: number) {
  const res = await api.delete<DeleteReviewResponse>(`${prefix}/${id}`);
  return res.data;
}
