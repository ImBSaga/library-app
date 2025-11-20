import RecommendedBooksCard from './container/recommended-books-card';
import type { RecommendBooks } from '@/types/Books.type';

export default function Recommended({
  setSelectedAuthor,
  books,
}: {
  setSelectedAuthor: (author: { id: number; name: string }) => void;
  books: RecommendBooks[];
}) {
  return (
    <section className='flex flex-col gap-5 md:gap-10'>
      <h2 className='text-display-xs font-bold text-neutral-950 md:text-display-lg'>
        Recommendation
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5'>
        {books.map((book) => (
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
