'use client';

import { Button } from '@repo/shared/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/shared/components/card';
import { Separator } from '@repo/shared/components/separator';
import { authClient } from '@repo/shared/lib/auth-client';
import Link from 'next/link';

import AuthBackgroundShape from '@/assets/svg/auth-background-shape';
import LoginForm from '@/components/shadcn-studio/blocks/login-page-01/login-form';
import Logo from '@/components/shadcn-studio/logo';

const Login = () => {
  return (
    <div className="relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="absolute">
        <AuthBackgroundShape />
      </div>

      <Card className="z-1 w-full border-none shadow-md sm:max-w-lg">
        <CardHeader className="gap-6">
          <Logo className="gap-3" />

          <div>
            <CardTitle className="mb-1.5 text-2xl">Sign in</CardTitle>
            <CardDescription className="text-base">
              Enter your credentials to continue.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <LoginForm />

            <p className="text-muted-foreground text-center">
              Don&apos;t have an account?{' '}
              <Link className="text-card-foreground hover:underline" href="/signup">
                Create an account
              </Link>
            </p>

            <div className="flex items-center gap-4">
              <Separator className="flex-1" />
              <p>or</p>
              <Separator className="flex-1" />
            </div>

            <Button
              className="w-full"
              onClick={() =>
                authClient.signIn.social({
                  callbackURL: '/',
                  provider: 'google',
                })
              }
              variant="outline"
            >
              Sign in with Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
