import type { Author } from '@/types/Books.type';
import AuthorsCard from './container/authors-card';

export default function Authors({
  setSelectedAuthor,
  authorBookCount,
  authors,
}: {
  setSelectedAuthor: (author: { id: number; name: string }) => void;
  authorBookCount: Record<number, number>;
  authors: Author[];
}) {
  return (
    <section className='flex flex-col gap-6 md:gap-10'>
      <h2 className='text-display-xs font-bold text-neutral-950 md:text-display-lg'>
        Popular Authors
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5'>
        {authors.map((author) => (
          <AuthorsCard
            key={author.id}
            author={author}
            authorBookCount={authorBookCount}
            setSelectedAuthor={setSelectedAuthor}
          />
        ))}
      </div>
    </section>
  );
}
