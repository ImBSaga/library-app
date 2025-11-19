import { Author } from '@/types/Books.type';
import Image from 'next/image';

export default function AuthorsCard({
  author,
  authorBookCount,
  setSelectedAuthor,
}: {
  author: Author;
  authorBookCount: Record<number, number>;
  setSelectedAuthor: (author: { id: number; name: string }) => void;
}) {
  return (
    <div
      key={author.id}
      onClick={() =>
        setSelectedAuthor({
          id: author.id,
          name: author.name,
        })
      }
      className='cursor-pointer flex rounded-[12px] p-3 md:p-4 shadow-[0px_0px_20px_0px_#CBCACA40] items-center gap-4 '
    >
      <div className='shrink-0 w-15 h-15 md:w-20.25 md:h-20.25 rounded-full bg-accent-yellow flex items-center justify-center'>
        No Picture
      </div>

      <div className='flex flex-col gap-0.5'>
        <h3 className='text-text-md text-neutral-900 font-bold md:text-text-lg'>
          {author.name}
        </h3>
        <div className='flex gap-1.5 items-center'>
          <Image
            src={'/icons/icon-book.svg'}
            alt={'icon-book'}
            width={16}
            height={16}
            className='w-4 h-4'
          />
          <p className='text-text-sm md:text-text-md font-medium text-neutral-950'>
            {authorBookCount[author.id]} books
          </p>
        </div>
      </div>
    </div>
  );
}
