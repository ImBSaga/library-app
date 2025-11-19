import { useBooks } from '@/hooks/useBooks';
import Link from 'next/link';
import RecommendedBooksCard from './container/recommended-books-card';

export default function Recommended({
  setSelectedAuthor,
}: {
  setSelectedAuthor: (author: { id: number; name: string }) => void;
}) {
  const {
    recommendBooks,
    isLoading: booksLoading,
    hasError: booksError,
  } = useBooks();

  if (booksLoading) return <p>Loading...</p>;
  if (booksError) return <p>Error loading books</p>;

  return (
    <section className='flex flex-col gap-5 md:gap-10'>
      <h2 className='text-display-xs font-bold text-neutral-950 md:text-display-lg'>
        Recommendation
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5'>
        {recommendBooks.map((book) => (
          <RecommendedBooksCard
            key={book.id}
            book={book}
            setSelectedAuthor={setSelectedAuthor}
          />
        ))}
      </div>
    </section>
  );
}
