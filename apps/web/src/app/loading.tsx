import { Skeleton } from '@repo/shared/components/skeleton';

export default function Loading() {
  return (
    <div className="flex min-h-svh">
      {/* Sidebar skeleton */}
      <div className="hidden w-64 border-r p-4 md:block">
        <Skeleton className="mb-6 h-8 w-32" />
        <div className="space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton className="h-8 w-full" key={i} />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Header skeleton */}
        <div className="flex h-14 items-center gap-4 border-b px-4 lg:px-6">
          <Skeleton className="h-6 w-6 md:hidden" />
          <Skeleton className="h-5 w-24" />
          <div className="ml-auto flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>

        {/* Content skeleton */}
        <div className="flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
          {/* Cards grid */}
          <div className="grid gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div className="rounded-xl border p-6" key={i}>
                <Skeleton className="mb-2 h-4 w-24" />
                <Skeleton className="mb-1 h-8 w-32" />
                <Skeleton className="h-3 w-20" />
              </div>
            ))}
          </div>

          {/* Chart skeleton */}
          <div className="px-4 lg:px-6">
            <div className="rounded-xl border p-6">
              <Skeleton className="mb-4 h-5 w-40" />
              <Skeleton className="h-64 w-full" />
            </div>
          </div>

          {/* Table skeleton */}
          <div className="px-4 lg:px-6">
            <div className="rounded-xl border p-4">
              <div className="mb-4 flex items-center gap-2">
                <Skeleton className="h-8 w-64" />
                <Skeleton className="ml-auto h-8 w-24" />
              </div>
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton className="h-10 w-full" key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
