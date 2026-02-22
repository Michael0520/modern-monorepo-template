'use client';

import { Button } from '@repo/shared/components/button';
import { Checkbox } from '@repo/shared/components/checkbox';
import { Input } from '@repo/shared/components/input';
import { Label } from '@repo/shared/components/label';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      {/* Email */}
      <div className="space-y-1">
        <Label className="leading-5" htmlFor="userEmail">
          Email address*
        </Label>
        <Input id="userEmail" placeholder="Enter your email address" type="email" />
      </div>

      {/* Password */}
      <div className="w-full space-y-1">
        <Label className="leading-5" htmlFor="password">
          Password*
        </Label>
        <div className="relative">
          <Input
            className="pr-9"
            id="password"
            placeholder="••••••••••••••••"
            type={isVisible ? 'text' : 'password'}
          />
          <Button
            className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
            onClick={() => setIsVisible((prevState) => !prevState)}
            size="icon"
            variant="ghost"
          >
            {isVisible ? <EyeOffIcon /> : <EyeIcon />}
            <span className="sr-only">{isVisible ? 'Hide password' : 'Show password'}</span>
          </Button>
        </div>
      </div>

      {/* Remember Me and Forgot Password */}
      <div className="flex items-center justify-between gap-y-2">
        <div className="flex items-center gap-3">
          <Checkbox className="size-6" id="rememberMe" />
          <Label className="text-muted-foreground" htmlFor="rememberMe">
            {' '}
            Remember Me
          </Label>
        </div>

        <a className="hover:underline" href="#">
          Forgot Password?
        </a>
      </div>

      <Button className="w-full" type="submit">
        Sign in to Shadcn Studio
      </Button>
    </form>
  );
};

export default LoginForm;
