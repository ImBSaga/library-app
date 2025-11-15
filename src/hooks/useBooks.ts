'use client';

import { useState, useEffect } from 'react';

// Types
import type { Book } from '@/types/Books.type';

// Service
import { getRecommendBooks } from '@/services/books.service';

export const useBooks = () => {
  // States
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch Recommend Books
  const fetchRecommendBooks = async () => {
    setLoading(true);
    try {
      const data = await getRecommendBooks({
        by: 'rating',
        limit: 10,
      });
      setBooks(data.data.books);
    } catch {
      setError('Failed to fetch books');
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchRecommendBooks();
  }, []);

  return {
    books,
    loading,
    error,
  };
};
