import { Button } from '@repo/shared/components/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="grid min-h-svh grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center px-4 py-8 text-center">
        <h2 className="mb-6 text-5xl font-semibold">Whoops!</h2>
        <h3 className="mb-1.5 text-3xl font-semibold">Page not found</h3>
        <p className="text-muted-foreground mb-6 max-w-sm">
          The page you&apos;re looking for doesn&apos;t exist. We suggest you go back to home.
        </p>
        <Button asChild className="rounded-lg text-base" size="lg">
          <Link href="/">Back to home page</Link>
        </Button>
      </div>

      {/* Right Section: Illustration */}
      <div className="relative max-h-screen w-full p-2 max-lg:hidden">
        <div className="h-full w-full rounded-2xl bg-black" />
        <Image
          alt="404 illustration"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          height={407}
          src="/404.png"
          style={{ height: 'clamp(260px, 25vw, 406px)', width: 'auto' }}
          width={704}
        />
      </div>
    </div>
  );
}
