'use client';

import { useQuery } from '@tanstack/react-query';

// Types
import type {
  GetAllBooksRequest,
  GetAllBooksResponse,
} from '@/types/Books.type';

// Service
import { getAllBooks, getRecommendBooks } from '@/services/books.service';

export const useBooks = (params?: GetAllBooksRequest) => {
  // Recommend Books
  const {
    data: recommendResponse,
    isLoading: isLoadingRecommend,
    error: recommendError,
    isError: isRecommendError,
  } = useQuery({
    queryKey: ['recommend-books'],
    queryFn: () =>
      getRecommendBooks({
        by: 'rating',
        limit: 10,
      }),
    staleTime: 1000 * 60 * 5,
  });

  // All Books
  const {
    data: booksResponse,
    isLoading: isLoadingBooks,
    error: booksError,
    isError: isBooksError,
  } = useQuery<GetAllBooksResponse>({
    queryKey: ['books', params],
    queryFn: () => getAllBooks(params),
    staleTime: 1000 * 30,
  });

  return {
    // Recommended books
    recommendBooks: recommendResponse?.data?.books ?? [],
    isLoadingRecommend,
    recommendError: isRecommendError ? recommendError : null,

    // All books
    allBooks: booksResponse?.data?.books ?? [],
    pagination: booksResponse?.data?.pagination,
    isLoadingBooks,
    booksError: isBooksError ? booksError : null,

    // States
    isLoading: isLoadingBooks || isLoadingRecommend,
    hasError: isBooksError || isRecommendError,
  };
};
