'use client';

import { useRouter } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Types
import type { GetMyLoansResponse, CreateLoanRequest } from '@/types/Loans.type';

// Service
import { getMyLoans, createLoan, returnLoan } from '@/services/loans.service';

export const useLoans = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

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

  // Create Loan
  const { mutate: createLoanMutation, isPending: isCreatingLoan } = useMutation(
    {
      mutationFn: (data: CreateLoanRequest) => createLoan(data),
      onSuccess: () => {
        alert('Book successfully borrowed for 7 days !');
        queryClient.invalidateQueries({ queryKey: ['loans'] });
        router.push('/me?tab=borrowed-list');
      },
      onError: () => {
        alert('Failed to borrow book.');
      },
    }
  );

  // Return Loan
  const { mutate: returnLoanMutation, isPending: isReturningLoan } =
    useMutation({
      mutationFn: (id: number) => returnLoan(id),
      onSuccess: () => {
        alert('Book successfully returned !');
        queryClient.invalidateQueries({ queryKey: ['loans'] });
        router.push('/me?tab=borrowed-list');
      },
      onError: () => {
        alert('Failed to return book.');
      },
    });

  return {
    // Loans
    loans,
    isLoadingLoans,
    loansError: isLoansError ? loansError : null,

    // Create Loan
    createLoan: createLoanMutation,
    isCreatingLoan,

    // Return Loan
    returnLoan: returnLoanMutation,
    isReturningLoan,

    // States
    isLoading: isLoadingLoans,
    hasError: isLoansError,
  };
};
