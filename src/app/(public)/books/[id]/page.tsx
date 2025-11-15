'use client';

import { useBookDetail } from '@/hooks/useBookDetail';
import { useParams } from 'next/navigation';

export default function BookDetailPage() {
  const { id } = useParams();
  const { book, loading, error } = useBookDetail(Number(id));
  return (
    <main className='flex flex-col pt-20'>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h1>{book?.title}</h1>
          <p>{book?.description}</p>
        </div>
      )}
    </main>
  );
}
