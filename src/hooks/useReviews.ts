'use client';

import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// Types
import type { CreateUpdateReviewRequest } from '@/types/Reviews.type';

// Service
import { createUpdateReview, deleteReview } from '@/services/reviews.service';

export const useReviews = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  // Create / Update Reviews
  const { mutate: createReviewMutation, isPending: isCreatingReview } =
    useMutation({
      mutationFn: (data: CreateUpdateReviewRequest) => createUpdateReview(data),
      onSuccess: () => {
        alert('Thank you for your review !');
        queryClient.invalidateQueries({ queryKey: ['reviews'] });
        router.push('/me?tab=reviews');
      },
      onError: () => {
        alert('Failed to create review.');
      },
    });

  // Delete Reviews
  const { mutate: deleteReviewMutation, isPending: isDeletingReview } =
    useMutation({
      mutationFn: (id: number) => deleteReview(id),
      onSuccess: () => {
        alert('Review successfully deleted !');
        queryClient.invalidateQueries({ queryKey: ['reviews'] });
        router.push('/me?tab=reviews');
      },
      onError: () => {
        alert('Failed to delete review.');
      },
    });

  return {
    // Create / Update Reviews
    createReview: createReviewMutation,
    isCreatingReview,

    // Delete Reviews
    deleteReview: deleteReviewMutation,
    isDeletingReview,

    // States
    isLoading: isCreatingReview || isDeletingReview,
    hasError: isCreatingReview || isDeletingReview,
  };
};
