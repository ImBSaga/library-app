'use client';

import { useState, useEffect } from 'react';

// Types
import type { Category } from '@/types/Categories.type';

// Service
import { getCategories } from '@/services/categories.service';

export const useCategories = () => {
  // States
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const data = await getCategories();
      setCategories(data.data.categories);
    } catch {
      setError('Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
    error,
  };
};
