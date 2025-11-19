'use client';

import Image from 'next/image';
import LoginForm from './partials/login-form';

export default function LoginPage() {
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
          Login
        </h3>
        <p className='text-text-sm font-semibold text-neutral-700 md:text-text-md'>
          Sign in to manage your library account.
        </p>
      </div>

      <LoginForm />
    </main>
  );
}
