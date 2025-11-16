'use client';

import { useBookDetail } from '@/hooks/useBookDetail';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useLoans } from '@/hooks/useLoans';

export default function BookDetailPage() {
  const { id } = useParams();
  const { createLoan } = useLoans();
  const { book, loading, error } = useBookDetail(Number(id));

  if (loading) return <p>Loading book...</p>;
  if (error || !book) return <p>Failed to load book.</p>;

  const handleBorrow = () => {
    createLoan({
      bookId: Number(id),
      days: 7,
    });
  };

  return (
    <main className='flex flex-col pt-20'>
      <div>
        <h1>Judul Buku: {book?.title}</h1>
        <p>Deskripsi Buku: {book?.description}</p>
        <p>Penulis: {book?.author.name}</p>
      </div>

      <Button onClick={handleBorrow}>Borrow Book for 7 days</Button>
    </main>
  );
}
