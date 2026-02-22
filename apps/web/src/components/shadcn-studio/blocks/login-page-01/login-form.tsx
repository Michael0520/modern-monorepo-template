'use client';

import { Button } from '@repo/shared/components/button';
import { Input } from '@repo/shared/components/input';
import { Label } from '@repo/shared/components/label';
import { authClient } from '@repo/shared/lib/auth-client';
import { EyeIcon, EyeOffIcon, LoaderIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginForm = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;

      const { error: signInError } = await authClient.signIn.email({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message || 'Sign in failed');
      } else {
        router.push('/');
      }
    } catch {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-destructive/10 text-destructive rounded-md px-3 py-2 text-sm">
          {error}
        </div>
      )}

      {/* Email */}
      <div className="space-y-1">
        <Label className="leading-5" htmlFor="userEmail">
          Email address*
        </Label>
        <Input
          disabled={loading}
          id="userEmail"
          name="email"
          placeholder="Enter your email address"
          required
          type="email"
        />
      </div>

      {/* Password */}
      <div className="w-full space-y-1">
        <Label className="leading-5" htmlFor="password">
          Password*
        </Label>
        <div className="relative">
          <Input
            className="pr-9"
            disabled={loading}
            id="password"
            name="password"
            placeholder="••••••••••••••••"
            required
            type={isVisible ? 'text' : 'password'}
          />
          <Button
            className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
            onClick={() => setIsVisible((prev) => !prev)}
            size="icon"
            type="button"
            variant="ghost"
          >
            {isVisible ? <EyeOffIcon /> : <EyeIcon />}
            <span className="sr-only">{isVisible ? 'Hide password' : 'Show password'}</span>
          </Button>
        </div>
      </div>

      <Button className="w-full" disabled={loading} type="submit">
        {loading ? <LoaderIcon className="animate-spin" /> : 'Sign in'}
      </Button>
    </form>
  );
};

export default LoginForm;
