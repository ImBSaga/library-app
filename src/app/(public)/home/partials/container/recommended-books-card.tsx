import Link from 'next/link';
import { RecommendBooks } from '@/types/Books.type';

export default function RecommendedBooksCard({
  book,
  setSelectedAuthor,
}: {
  book: RecommendBooks;
  setSelectedAuthor: (author: { id: number; name: string }) => void;
}) {
  return (
    <Link
      href={`/books/${book.id}`}
      className='cursor-pointer flex flex-col shadow-[0px_0px_20px_0px_#CBCACA40]'
    >
      <div className='w-43 h-64.5 md:w-full md:h-84 bg-amber-100 rounded-t-[12px]'>
        No Picture
      </div>

      <div className='rounded-b-[12px] p-3 md:p-4 gap-0.5 md:gap-1'>
        <h3 className='text-text-sm text-neutral-900 font-bold md:text-text-lg'>
          {book.title}
        </h3>

        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setSelectedAuthor({
              id: book.author.id,
              name: book.author.name,
            });
          }}
          className='cursor-pointer'
        >
          <p className='text-text-sm md:text-text-md font-medium text-neutral-700'>
            {book.author.name}
          </p>
        </div>
      </div>
    </Link>
  );
}
