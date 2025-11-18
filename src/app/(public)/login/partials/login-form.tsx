import Link from 'next/link';
import { useState } from 'react';

// Shadcn
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Eye, EyeOff } from 'lucide-react';

// Hooks
import { useLogin } from '@/hooks/useAuth';
import { InputIcon } from '@/components/ui/input-icon';
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isPending,
    isError,
    error,
    isSuccess,
    form,
  } = useLogin();

  const [showPassword, setShowPassword] = useState(false);
  return (
    <Form {...form}>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <FormField
          name='email'
          render={() => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='you@example.com'
                  {...register('email')}
                />
              </FormControl>
              <FormMessage>{errors.email?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          name='password'
          render={() => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <InputIcon
                  type={showPassword ? 'text' : 'password'}
                  placeholder='••••••••'
                  icon={showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  onIconClick={() => setShowPassword((prev) => !prev)}
                  {...register('password')}
                />
              </FormControl>
              <FormMessage>{errors.password?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button type='submit' className='w-full' disabled={isPending}>
          {isPending ? 'Logging in...' : 'Login'}
        </Button>

        {/* Register */}
        <div className='flex-center gap-1 text-text-sm font-semibold text-neutral-950 md:text-text-md'>
          <p>Don't have an account?</p>
          <Link href='/register' className='text-primary-500'>
            Register
          </Link>
        </div>

        {/* Status messages */}
        {isError && (
          <p className='text-red-500 text-sm mt-2'>
            {(error as Error)?.message}
          </p>
        )}
        {isSuccess && (
          <p className='text-green-600 text-sm mt-2'>Login successful!</p>
        )}
      </form>
    </Form>
  );
};

export default LoginForm;
