import type { AllBooks } from '@/types/Books.type';
import RecommendedBooksCard from './container/recommended-books-card';

export default function AllBooks({
  setSelectedAuthor,
  books,
}: {
  setSelectedAuthor: (author: { id: number; name: string }) => void;
  books: AllBooks[];
}) {
  return (
    <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5'>
      {books.map((book) => (
        <RecommendedBooksCard
          key={book.id}
          book={book}
          setSelectedAuthor={setSelectedAuthor}
        />
      ))}
    </section>
  );
}
