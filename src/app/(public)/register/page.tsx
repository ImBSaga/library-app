'use client';

import Image from 'next/image';
import RegisterForm from './partials/register-form';

export default function RegisterPage() {
  return (
    <main className='flex flex-col justify-center min-h-screen w-[80vw] max-w-[400px] gap-5 overflow-auto mx-auto'>
      <div className='relative w-[121.79px] h-[33px]'>
        <Image
          src='/icons/icon-logo-text.svg'
          alt='logo'
          fill
          loading='eager'
        />
      </div>

      <div className='flex flex-col gap-0.5 md:gap-2'>
        <h3 className='text-display-xs font-bold text-neutral-950 md:text-display-sm'>
          Register
        </h3>
        <p className='text-text-sm font-semibold text-neutral-700 md:text-text-md'>
          Create your account to start borrowing books.
        </p>
      </div>

      <RegisterForm />
    </main>
  );
}
