'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/providers/AuthProvider';
import { useSearch } from '@/providers/SearchProvider';
import { useRouter } from 'next/navigation';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { logout, user } = useAuth();
  const { search, setSearch } = useSearch();

  const handleBagClick = () => {
    router.push('/cart');
  };

  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12,13,13,0', 'rgba(12,13,13,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <>
      <motion.header
        className={`fixed top-0 z-50 w-full flex-between py-3 px-4 md:py-4.75 md:px-30 ${
          searchOpen ? 'gap-4' : ''
        }`}
        style={{
          background,
          backdropFilter: backdropBlur,
        }}
      >
        <Link href='/' className='flex items-center gap-3.75'>
          <Image
            src='/icons/icon-logo.svg'
            alt='logo'
            width={40}
            height={40}
            className='md:hidden'
            loading='eager'
          />
          <div className='relative hidden md:block w-[155px] h-[42px]'>
            <Image
              src='/icons/icon-logo-text.svg'
              alt='logo'
              fill
              loading='eager'
            />
          </div>
        </Link>

        {/* Mobile */}
        <div
          className={`flex items-center gap-4 md:hidden ${
            searchOpen ? 'flex-1' : ''
          }`}
        >
          {/* Open Search */}
          {searchOpen ? (
            <div className='flex flex-1 rounded-full border py-1.75 px-3 gap-1.5 bg-white border-neutral-300'>
              <div className='flex items-center gap-2 flex-1'>
                <Image
                  src='/icons/icon-search.svg'
                  alt='search'
                  width={24}
                  height={24}
                  className='cursor-pointer'
                />
                <input
                  type='text'
                  placeholder='Search'
                  className='flex-1'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          ) : (
            <>
              {/* Close Search */}
              <Image
                src='/icons/icon-search.svg'
                alt='search'
                width={24}
                height={24}
                onClick={() => setSearchOpen(true)}
                className={`cursor-pointer ${searchOpen ? 'hidden' : 'block'}`}
              />

              <Image
                src='/icons/icon-bag.svg'
                alt='bag'
                width={28}
                height={28}
                onClick={() => handleBagClick()}
                className='cursor-pointer'
              />

              {user ? (
                <Image
                  src='/images/image-avatar-placeholder.png'
                  alt='user'
                  width={40}
                  height={40}
                  onClick={() => setOpen(!open)}
                  className='cursor-pointer'
                />
              ) : (
                <>
                  <Image
                    src='/icons/icon-x.svg'
                    alt='x'
                    width={24}
                    height={24}
                    onClick={() => setOpen(false)}
                    className={`cursor-pointer ${open ? 'block' : 'hidden'}`}
                  />
                  <Image
                    src='/icons/icon-menu.svg'
                    alt='menu'
                    width={24}
                    height={24}
                    onClick={() => setOpen(true)}
                    className={`cursor-pointer ${open ? 'hidden' : 'block'}`}
                  />
                </>
              )}
            </>
          )}
        </div>
        <div className={`${searchOpen ? 'block ' : 'hidden'}`}>
          <Image
            src='/icons/icon-x.svg'
            alt='x'
            width={24}
            height={24}
            onClick={() => setSearchOpen(false)}
            className='h-6 w-6 cursor-pointer md:h-7 md:w-7'
          />
        </div>

        {/* Desktop */}
        {user && (
          <div className='hidden md:flex w-full max-w-125 rounded-full border py-2.25 px-3 gap-1.5 bg-white border-neutral-300'>
            <div className='flex items-center gap-2 w-full '>
              <Image
                src='/icons/icon-search.svg'
                alt='search'
                width={20}
                height={20}
                className='cursor-pointer'
              />
              <input
                type='text'
                placeholder='Search Book'
                className='w-full '
              />
            </div>
          </div>
        )}
        <div className='hidden md:flex gap-4'>
          {user ? (
            <div className='flex gap-6 items-center'>
              <Image
                src='/icons/icon-bag.svg'
                alt='bag'
                width={32}
                height={32}
                onClick={() => handleBagClick()}
                className='cursor-pointer'
              />

              <div
                className='flex  gap-4 items-center'
                onClick={() => setOpen(!open)}
              >
                <Image
                  src='/images/image-avatar-placeholder.png'
                  alt='user'
                  width={48}
                  height={48}
                  className='cursor-pointer'
                />
                <h2 className='text-lg font-semibold text-neutral-950'>
                  {user?.name}
                </h2>
                <Image
                  src='/icons/icon-chev-down.svg'
                  alt='user'
                  width={24}
                  height={24}
                  className='cursor-pointer'
                />

                {/* Desktop Menu */}
                <div
                  className={`fixed top-18.5  z-40 w-full max-w-46 bg-white hidden gap-3  justify-end ${
                    open ? 'md:block' : 'hidden'
                  }`}
                >
                  <div className='flex flex-col p-4 border rounded-2xl w-full gap-4 font-text-sm font-semibold text-neutral-950'>
                    <Link href='/me?tab=profile'>Profile</Link>
                    <Link href='/me?tab=borrowed-list'>Borrowed List</Link>
                    <Link href='/me?tab=reviews'>Reviews</Link>
                    <div
                      onClick={logout}
                      className=' text-[#EE1D52] cursor-pointer'
                    >
                      Logout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Button onClick={() => router.push('/login')} variant='secondary'>
                Login
              </Button>
              <Button
                onClick={() => router.push('/register')}
                variant='default'
              >
                Register
              </Button>
            </>
          )}
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 z-40 w-full bg-white px-6 flex gap-3 md:hidden ${
          open ? 'block' : 'hidden'
        }`}
      >
        {user ? (
          <div className='flex flex-col p-4 border rounded-2xl w-full gap-4 font-text-sm font-semibold text-neutral-950'>
            <Link href='/me?tab=profile'>Profile</Link>
            <Link href='/me?tab=borrowed-list'>Borrowed List</Link>
            <Link href='/me?tab=reviews'>Reviews</Link>
            <div onClick={logout} className=' text-[#EE1D52] cursor-pointer'>
              Logout
            </div>
          </div>
        ) : (
          <>
            <Button
              className='w-full h-10'
              onClick={() => router.push('/login')}
              variant='secondary'
            >
              Login
            </Button>
            <Button
              className='w-full h-10'
              onClick={() => router.push('/register')}
              variant='default'
            >
              Register
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
