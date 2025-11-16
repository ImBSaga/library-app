'use client';

import { useLoans } from '@/hooks/useLoans';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function BorrowedListTab() {
  const router = useRouter();
  const { loans, isLoadingLoans, hasError, isReturningLoan, returnLoan } =
    useLoans();

  if (isLoadingLoans) return <p>Loading Loans...</p>;
  if (hasError || !loans) return <p>Failed to load loans.</p>;

  const handleGiveReview = () => {
    router.push(`/me?tab=reviews`);
  };

  return (
    <div className='space-y-2'>
      {loans?.loans.map((loan) => (
        <div key={loan.id}>
          <p>Book: {loan.book.title}</p>
          {loan.book.coverImage && (
            <p>Image URL: {loan.book.coverImage?.url}</p>
          )}
          <p>Borrowed: {loan.borrowedAt}</p>
          <p>Due: {loan.dueAt}</p>
          <p>Status: {loan.status}</p>
          {loan.returnedAt && <p>Returned: {loan.returnedAt}</p>}

          {loan.status === 'BORROWED' ? (
            <Button
              onClick={() => returnLoan(loan.id)}
              disabled={isReturningLoan}
            >
              Return Book
            </Button>
          ) : (
            <Button onClick={() => handleGiveReview()}>Give Review</Button>
          )}
        </div>
      ))}
    </div>
  );
}
