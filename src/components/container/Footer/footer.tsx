import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='border-t px-4 py-10 flex flex-col gap-4 md:gap-10 bg-white border-neutral-300 md:py-37.5 md:px-20 items-center'>
      <div className='flex items-center flex-col gap-4 md:gap-5.5'>
        <div className='relative block w-[142px] h-[42px] md:w-[155px] md:h-[42px]'>
          <Image
            src='/icons/icon-logo-text.svg'
            alt='logo'
            fill
            loading='eager'
          />
        </div>
        <p className='text-text-sm md:text-text-md font-semibold text-neutral-950 text-center'>
          Discover inspiring stories & timeless knowledge, ready to borrow
          anytime. Explore online or visit our nearest library branch.
        </p>
      </div>
      <div className='flex flex-col gap-5'>
        <p className='text-text-md font-semibold text-neutral-950 text-center'>
          Follow on Social Media
        </p>
        <div className='flex gap-3'>
          <Image
            src='/icons/icon-facebook.svg'
            alt='facebook'
            width={40}
            height={40}
          />
          <Image
            src='/icons/icon-instagram.svg'
            alt='instagram'
            width={40}
            height={40}
          />
          <Image
            src='/icons/icon-linkedin.svg'
            alt='linkedin'
            width={40}
            height={40}
          />
          <Image
            src='/icons/icon-tiktok.svg'
            alt='tiktok'
            width={40}
            height={40}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
