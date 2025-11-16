'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/providers/AuthProvider';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { logout, user } = useAuth();

  const handleBagClick = () => {
    router.push('/cart');
  };

  return (
    <header className='fixed top-0 z-50 w-full'>
      <div className='flex-between custom-container h-16 md:h-21'>
        <Image
          src='/icons/icon-logo.svg'
          alt='logo'
          width={28}
          height={28}
          className='h-7 w-7 md:h-10 md:w-10'
          loading='eager'
        />

        <div className='flex items-center gap-2'>
          <div className={`flex ${searchOpen ? 'block' : 'hidden'}`}>
            <div className='flex items-center gap-2'>
              <Image
                src='/icons/icon-search.svg'
                alt='search'
                width={24}
                height={24}
                className='h-6 w-6 md:h-7 md:w-7'
              />
              <input
                type='text'
                placeholder='Search'
                className='h-6 w-6 md:h-7 md:w-7'
              />
            </div>

            <Image
              src='/icons/icon-x.svg'
              alt='x'
              width={24}
              height={24}
              onClick={() => setSearchOpen(false)}
              className='h-6 w-6 cursor-pointer md:h-7 md:w-7'
            />
          </div>
          <Image
            src='/icons/icon-search.svg'
            alt='search'
            width={24}
            height={24}
            onClick={() => setSearchOpen(true)}
            className={`h-6 w-6 cursor-pointer md:h-7 md:w-7 ${
              searchOpen ? 'hidden' : 'block'
            }`}
          />

          <Image
            src='/icons/icon-bag.svg'
            alt='bag'
            width={24}
            height={24}
            onClick={() => handleBagClick()}
            className='h-6 w-6 md:h-7 md:w-7'
          />

          {user ? (
            <Image
              src='/images/image-avatar-placeholder.png'
              alt='user'
              width={24}
              height={24}
              onClick={() => setOpen(!open)}
              className='h-6 w-6 cursor-pointer md:h-7 md:w-7'
            />
          ) : (
            <>
              {' '}
              <Image
                src='/icons/icon-x.svg'
                alt='x'
                width={24}
                height={24}
                onClick={() => setOpen(false)}
                className={`h-6 w-6 md:h-7 md:w-7 cursor-pointer ${
                  open ? 'block' : 'hidden'
                }`}
              />
              <Image
                src='/icons/icon-menu.svg'
                alt='menu'
                width={24}
                height={24}
                onClick={() => setOpen(true)}
                className={`h-6 w-6 md:h-7 md:w-7 cursor-pointer ${
                  open ? 'hidden' : 'block'
                }`}
              />
            </>
          )}
        </div>
      </div>

      <div
        className={`fixed top-16 z-40 w-full bg-white ${
          open ? 'block' : 'hidden'
        }`}
      >
        {user ? (
          <div className='flex flex-col gap-2'>
            <Link href='/me?tab=profile'>Profile</Link>
            <Link href='/me?tab=borrowed-list'>Borrowed List</Link>
            <Link href='/me?tab=reviews'>Reviews</Link>
            <Button onClick={logout}>Logout</Button>
          </div>
        ) : (
          <div className='flex gap-2'>
            <Link
              className='cursor-pointer border border-black p-2 '
              href='/login'
            >
              Login
            </Link>
            <Link
              className='cursor-pointer border border-black p-2 '
              href='/register'
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
