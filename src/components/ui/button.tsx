import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva('text-md font-bold rounded-[100px]', {
  variants: {
    variant: {
      default: 'bg-primary-500 text-neutral-25 hover:bg-primary-500/90',
      secondary:
        'border border-neutral-300 text-neutral-950 hover:bg-neutral-300/80',
    },
    size: {
      default: 'h-12 w-[163px] has-[>svg]:px-3',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
