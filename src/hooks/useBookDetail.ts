'use client';

import { useState, useEffect } from 'react';

// Types
import type { BookDetail } from '@/types/Books.type';

// Service
import { getBookDetail } from '@/services/books.service';

export const useBookDetail = (id: number) => {
  // States
  const [book, setBook] = useState<BookDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch Book Detail
  const fetchBookDetail = async () => {
    setLoading(true);
    try {
      const data = await getBookDetail(id);
      setBook(data.data);
    } catch {
      setError('Failed to fetch book detail');
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchBookDetail();
  }, [id]);

  return {
    book,
    loading,
    error,
  };
};
