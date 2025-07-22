'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { api } from '@/lib/api';
import { getCSRF } from '@/lib/auth';
import { Button } from '@/app/(auth)/components/ui/button';
import { Input } from '@/app/(auth)/components/ui/input';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});


export default function LoginPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });
  const { login } = useAuthStore();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      await getCSRF();

      const res = await api.post('/login', data);
      console.log('Login API response:', res.data);

      const loginData = res.data?.data;
      if (!loginData) {
        throw new Error("Invalid login response: missing 'data'");
      }

      const { user, token, role } = loginData;
      login({ user, token, role });
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Login error:', error.response?.data || error.message);
    }
  };

  const handleCancel = () => {
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto mt-20 p-4 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <div className="space-y-2">
        <Input type="email" placeholder="Email" {...register('email')} />
        {formState.errors.email && <p className="text-red-500">{formState.errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <Input type="password" placeholder="Password" {...register('password')} />
        {formState.errors.password && <p className="text-red-500">{formState.errors.password.message}</p>}
      </div>
      <Button type="submit">Login</Button>
      <Button variant="outline" onClick={handleCancel}>Cancel</Button>
    </form>

  );
}
