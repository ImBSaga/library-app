'use client';

import { useLoans } from '@/hooks/useLoans';

export default function BorrowedListTab() {
  const { loans, isLoadingLoans, hasError } = useLoans();

  if (isLoadingLoans) return <p>Loading Loans...</p>;
  if (hasError || !loans) return <p>Failed to load loans.</p>;

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
        </div>
      ))}
    </div>
  );
}
