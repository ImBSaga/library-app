'use client';

import { useState, useEffect } from 'react';

// Types
import type { Author } from '@/types/Authors.type';

// Service
import { getAuthors } from '@/services/authors.service';

export const useAuthors = () => {
  // States
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch authors
  const fetchAuthors = async () => {
    setLoading(true);
    try {
      const data = await getAuthors();
      setAuthors(data.data.authors);
    } catch {
      setError('Failed to fetch authors');
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchAuthors();
  }, []);

  return {
    authors,
    loading,
    error,
  };
};
