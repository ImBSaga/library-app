'use client';

import { useQuery } from '@tanstack/react-query';

// Types
import type { GetMeResponse, GetMeReviewsResponse } from '@/types/Me.type';

// Service
import { getMe, getMeReviews } from '@/services/me.service';

export const useMe = () => {
  // Me
  const {
    data: meResponse,
    isLoading: isLoadingMe,
    error: meError,
    isError: isMeError,
  } = useQuery<GetMeResponse>({
    queryKey: ['me'],
    queryFn: () => getMe(),
    staleTime: 1000 * 60 * 5,
  });
  const me = meResponse?.data;

  // Reviews
  const {
    data: reviewsResponse,
    isLoading: isLoadingReviews,
    error: reviewsError,
    isError: isReviewsError,
  } = useQuery<GetMeReviewsResponse>({
    queryKey: ['reviews'],
    queryFn: () => getMeReviews({ page: 1, limit: 20 }),
    staleTime: 1000 * 60 * 5,
  });
  const reviews = reviewsResponse?.data;

  return {
    // Me
    me,
    isLoadingMe,
    meError: isMeError ? meError : null,

    // Reviews
    reviews,
    isLoadingReviews,
    reviewsError: isReviewsError ? reviewsError : null,

    // States
    isLoading: isLoadingMe,
    hasError: isMeError,
  };
};
