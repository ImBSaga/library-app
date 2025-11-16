'use client';

import { useQuery } from '@tanstack/react-query';

// Types
import type { GetMeResponse } from '@/types/Me.type';

// Service
import { getMe } from '@/services/me.service';

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

  return {
    // Me
    me,
    isLoadingMe,
    meError: isMeError ? meError : null,

    // States
    isLoading: isLoadingMe,
    hasError: isMeError,
  };
};
