import Image from 'next/image';

export default function Hero() {
  return (
    <section className='flex flex-col gap-2 items-center'>
      <div
        className='relative overflow-hidden w-full max-w-[1200px] rounded-2xl'
        style={{
          height: 'clamp(8.25rem, 35vw, 27.5625rem)',
        }}
      >
        <Image
          src='/images/image-hero-booky.png'
          alt='hero-image'
          fill
          className='object-cover'
        />
      </div>

      <div className='flex justify-center gap-1'>
        <div className='bg-primary-500 w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full'></div>
        <div className='bg-neutral-300 w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full'></div>
        <div className='bg-neutral-300 w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full'></div>
      </div>
    </section>
  );
}
