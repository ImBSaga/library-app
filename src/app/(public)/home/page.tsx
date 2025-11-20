'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { useSearch } from '@/providers/SearchProvider';

// Hooks
import { useCategories } from '@/hooks/useCategories';
import { useBooks } from '@/hooks/useBooks';
import { useAuthors } from '@/hooks/useAuthors';
import type { GetAllBooksRequest } from '@/types/Books.type';

// Components
import Header from '@/components/container/Header';
import Hero from './partials/hero';
import Categories from './partials/categories';
import Recommended from './partials/recommended';
import Authors from './partials/authors';
import Footer from '@/components/container/Footer';

// Shadcn
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export default function Home() {
  // State for selected category filter
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const { search } = useSearch();

  const page = 1;
  const limit = 20;

  const params = useMemo(
    () =>
      ({
        q: search,
        categoryId: selectedCategory ?? undefined,
        authorId: selectedAuthor?.id ?? undefined,
        page,
        limit,
      } as GetAllBooksRequest),
    [selectedCategory, selectedAuthor, page, limit, search]
  );

  const { categories } = useCategories();

  const { allBooks, recommendBooks } = useBooks(params);

  const { authors } = useAuthors();

  const authorBookCount = recommendBooks.reduce((acc, book) => {
    const authorId = book.author.id;
    acc[authorId] = (acc[authorId] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  return (
    <>
      <Header />
      {selectedCategory || selectedAuthor || search ? (
        <main className='flex flex-col pt-20'>
          {selectedAuthor && (
            <div className='mb-4'>
              <p>Author id: {selectedAuthor.id}</p>
              <p>Author name: {selectedAuthor.name}</p>
            </div>
          )}

          <h2 className='text-2xl font-bold mb-4'>Book List</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='default'>
                {selectedCategory
                  ? categories.find((c) => c.id === selectedCategory)?.name
                  : 'Categories'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {allBooks.length === 0 ? (
            <p>No books found</p>
          ) : (
            <div className='grid grid-cols-4 gap-4'>
              {allBooks.map((book) => (
                <Link
                  href={`/books/${book.id}`}
                  key={book.id}
                  className='p-4 border rounded-lg cursor-pointer'
                >
                  {book.title}
                </Link>
              ))}
            </div>
          )}
        </main>
      ) : (
        <main className='flex flex-col pt-20 px-4 md:px-0 gap-6 max-w-[1200px] mx-auto'>
          {/* Hero Section */}
          <Hero />

          {/* Categories Section */}
          <Categories setSelectedCategory={setSelectedCategory} />

          {/* Recommended Books Section */}
          <Recommended
            books={recommendBooks}
            setSelectedAuthor={setSelectedAuthor}
          />

          {/* Authors Section */}
          <Authors
            authorBookCount={authorBookCount}
            authors={authors}
            setSelectedAuthor={setSelectedAuthor}
          />
        </main>
      )}
      <div className='h-4 md:h-29'></div>
      <Footer />
    </>
  );
}
