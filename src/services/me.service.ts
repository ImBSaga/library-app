import { api } from '@/lib/api/axiosInstance';
import type {
  GetMeResponse,
  GetMeReviewsRequest,
  GetMeReviewsResponse,
} from '@/types/Me.type';

const prefix = '/api/me';

// Get Me
export async function getMe() {
  const res = await api.get<GetMeResponse>(`${prefix}`);
  return res.data;
}

// Get Me Reviews
export async function getMeReviews(params: GetMeReviewsRequest) {
  const res = await api.get<GetMeReviewsResponse>(`${prefix}/reviews`, {
    params,
  });
  return res.data;
}
