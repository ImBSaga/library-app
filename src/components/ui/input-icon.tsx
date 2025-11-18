import * as React from 'react';
import { cn } from '@/lib/utils';

interface InputIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  onIconClick?: () => void;
}

export function InputIcon({
  className,
  icon,
  onIconClick,
  type,
  ...props
}: InputIconProps) {
  return (
    <div
      className={cn(
        'relative w-full rounded-xl border border-neutral-300 flex items-center',
        'h-6xl py-2 px-4 gap-2 font-semibold text-text-sm md:text-text-md text-neutral-950',
        'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
    >
      <input
        type={type}
        className={cn(
          'w-full bg-transparent outline-none border-none',
          icon ? 'pr-8' : ''
        )}
        {...props}
      />

      {icon && (
        <button
          type='button'
          onClick={onIconClick}
          className='absolute right-3 flex items-center justify-center'
        >
          <div className='w-5 h-5 flex items-center justify-center'>{icon}</div>
        </button>
      )}
    </div>
  );
}
