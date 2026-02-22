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
import SignupForm from '@/components/shadcn-studio/blocks/login-page-01/signup-form';
import Logo from '@/components/shadcn-studio/logo';

export default function SignupPage() {
  return (
    <div className="relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="absolute">
        <AuthBackgroundShape />
      </div>

      <Card className="z-1 w-full border-none shadow-md sm:max-w-lg">
        <CardHeader className="gap-6">
          <Logo className="gap-3" />

          <div>
            <CardTitle className="mb-1.5 text-2xl">Create an account</CardTitle>
            <CardDescription className="text-base">
              Enter your details to get started.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <SignupForm />

            <p className="text-muted-foreground text-center">
              Already have an account?{' '}
              <Link className="text-card-foreground hover:underline" href="/login">
                Sign in
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
              Sign up with Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
