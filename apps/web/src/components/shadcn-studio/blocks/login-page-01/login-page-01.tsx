import { Button } from '@repo/shared/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/shared/components/card';
import { Separator } from '@repo/shared/components/separator';

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
            <CardTitle className="mb-1.5 text-2xl">Sign in to Shadcn Studio</CardTitle>
            <CardDescription className="text-base">
              Ship Faster and Focus on Growth.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground mb-6">
            Login with{' '}
            <a className="text-card-foreground hover:underline" href="#">
              Magic Link
            </a>
          </p>

          {/* Quick Login Buttons */}
          <div className="mb-6 flex flex-wrap gap-4 sm:gap-6">
            <Button className="grow" variant="outline">
              Login as User
            </Button>
            <Button className="grow" variant="outline">
              Login as Admin
            </Button>
          </div>

          {/* Login Form */}
          <div className="space-y-4">
            <LoginForm />

            <p className="text-muted-foreground text-center">
              New on our platform?{' '}
              <a className="text-card-foreground hover:underline" href="#">
                Create an account
              </a>
            </p>

            <div className="flex items-center gap-4">
              <Separator className="flex-1" />
              <p>or</p>
              <Separator className="flex-1" />
            </div>

            <Button asChild className="w-full" variant="ghost">
              <a href="#">Sign in with google</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
