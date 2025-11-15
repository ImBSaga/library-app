'use client';

import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className='fixed top-0 z-50 w-full'>
      <div className='flex-between custom-container h-16 md:h-21'>
        <Image
          src='/icons/icon-logo.svg'
          alt='logo'
          width={28}
          height={28}
          className='h-7 w-7 md:h-10 md:w-10'
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
            className='h-6 w-6 md:h-7 md:w-7'
          />

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

          <Image
            src='/images/image-avatar-placeholder.png'
            alt='user'
            width={24}
            height={24}
            onClick={() => setOpen(!open)}
            className='h-6 w-6 cursor-pointer md:h-7 md:w-7'
          />
        </div>
      </div>

      <div
        className={`fixed top-16 z-40 w-full bg-white ${
          open ? 'block' : 'hidden'
        }`}
      >
        <div className='flex items-center gap-2'>
          <div>
            <p>Login</p>
          </div>
          <div>
            <a href='/register'>Register</a>
          </div>
        </div>

        <div>
          <p>Profile</p>
          <p>Borrowed List</p>
          <p>Reviews</p>
          <p>Logout</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
