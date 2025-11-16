'use client';

import { useQuery } from '@tanstack/react-query';

// Types
import type { GetMyLoansResponse } from '@/types/Loans.type';

// Service
import { getMyLoans } from '@/services/loans.service';

export const useLoans = () => {
  // Loans
  const {
    data: loansResponse,
    isLoading: isLoadingLoans,
    error: loansError,
    isError: isLoansError,
  } = useQuery<GetMyLoansResponse>({
    queryKey: ['loans'],
    queryFn: () => getMyLoans(),
    staleTime: 1000 * 60 * 5,
  });
  const loans = loansResponse?.data;

  return {
    // Loans
    loans,
    isLoadingLoans,
    loansError: isLoansError ? loansError : null,

    // States
    isLoading: isLoadingLoans,
    hasError: isLoansError,
  };
};
