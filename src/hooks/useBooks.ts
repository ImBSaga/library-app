// 'use client';

// import { useState, useEffect } from 'react';

// // Types
// import type { RecommendBooks, AllBooks } from '@/types/Books.type';

// // Service
// import { getBooks, getRecommendBooks } from '@/services/books.service';

// export const useBooks = () => {
//   // States
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Recommend Books
//   const [recommendBooks, setRecommendBooks] = useState<RecommendBooks[]>([]);

//   // Books
//   const [books, setBooks] = useState<AllBooks[]>([]);

//   // Fetch Recommend Books
//   const fetchRecommendBooks = async () => {
//     setLoading(true);
//     try {
//       const data = await getRecommendBooks({
//         by: 'rating',
//         limit: 10,
//       });
//       setRecommendBooks(data.data.books);
//     } catch {
//       setError('Failed to fetch recommend books');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch Books
//   const fetchBooks = async () => {
//     setLoading(true);
//     try {
//       const data = await getBooks();
//       setBooks(data.data.books);
//     } catch {
//       setError('Failed to fetch books');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Initial load
//   useEffect(() => {
//     fetchRecommendBooks();
//     fetchBooks();
//   }, []);

//   return {
//     books,
//     recommendBooks,
//     loading,
//     error,
//   };
// };

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
