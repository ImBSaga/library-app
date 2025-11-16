// app/cart/page.tsx
'use client';

import Header from '@/components/container/Header';

export default function CartPage() {
  return (
    <>
      <Header />
      <main className='flex flex-col pt-20'>
        <h1>My Cart</h1>
      </main>
    </>
  );
}
