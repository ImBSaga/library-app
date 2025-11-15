import Link from 'next/link';

// Shadcn
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Hooks
import { useRegister } from '@/hooks/useAuth';

const RegisterForm = () => {
  const { form, onSubmit, isPending, isError, error, isSuccess } =
    useRegister();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Name */}
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Your name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder='you@example.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder='********' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder='********' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button type='submit' className='w-full' disabled={isPending}>
          {isPending ? 'Registering...' : 'Register'}
        </Button>

        {/* Login link */}

        <p>
          Already have an account? <Link href='/login'>Login</Link>
        </p>

        {/* Status */}
        {isError && (
          <p className='text-red-500 text-sm'>{(error as Error)?.message}</p>
        )}
        {isSuccess && (
          <p className='text-green-600 text-sm'>Registered successfully!</p>
        )}
      </form>
    </Form>
  );
};

export default RegisterForm;
