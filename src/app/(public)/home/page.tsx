'use client';

import Header from './partials/header';
import { useCategories } from '@/hooks/useCategories';
import { useBooks } from '@/hooks/useBooks';

export default function Home() {
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();
  const { books, loading: booksLoading, error: booksError } = useBooks();

  return (
    <>
      <Header />
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
                <div key={category.id} className='p-4 border rounded-lg'>
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
              {books.map((book) => (
                <div key={book.id} className='p-4 border rounded-lg'>
                  {book.title}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
