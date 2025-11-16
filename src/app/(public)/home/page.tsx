'use client';

import Header from '@/components/container/Header';
import { useCategories } from '@/hooks/useCategories';
import { useBooks } from '@/hooks/useBooks';
import Link from 'next/link';
import { useState, useMemo } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

import type { GetAllBooksRequest } from '@/types/Books.type';

export default function Home() {
  // State for selected category filter
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const page = 1;
  const limit = 20;

  const params = useMemo(
    () =>
      ({
        categoryId: selectedCategory ?? undefined,
        authorId: selectedAuthor?.id ?? undefined,
        page,
        limit,
      } as GetAllBooksRequest),
    [selectedCategory, selectedAuthor, page, limit]
  );

  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();

  const {
    recommendBooks,
    allBooks,
    isLoading: booksLoading,
    hasError: booksError,
  } = useBooks(params);

  return (
    <>
      <Header />
      {selectedCategory || selectedAuthor ? (
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
              <Button variant='outline'>
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
        <main className='flex flex-col pt-20'>
          <p>Home</p>

          {/* Categories */}
          {categoriesLoading ? (
            <p>Loading categories...</p>
          ) : categoriesError ? (
            <p>Error loading categories: {categoriesError}</p>
          ) : (
            <div className='mt-4'>
              <h2 className='text-2xl font-bold mb-4'>Categories</h2>
              <div className='grid grid-cols-4 gap-4'>
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className='p-4 border rounded-lg cursor-pointer'
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Books */}
          {booksLoading ? (
            <p>Loading books...</p>
          ) : booksError ? (
            <p>Error loading books: {booksError}</p>
          ) : (
            <div className='mt-4'>
              <h2 className='text-2xl font-bold mb-4'>Books</h2>
              <div className='grid grid-cols-4 gap-4'>
                {recommendBooks.map((book) => (
                  <div
                    key={book.id}
                    className='p-4 border rounded-lg cursor-pointer flex flex-col gap-2'
                  >
                    <Link href={`/books/${book.id}`}>{book.title}</Link>
                    <div
                      onClick={() =>
                        setSelectedAuthor({
                          id: book.author.id,
                          name: book.author.name,
                        })
                      }
                      className='mt-2'
                    >
                      <h3 className='font-display-2xl'> {book.author.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      )}
    </>
  );
}
