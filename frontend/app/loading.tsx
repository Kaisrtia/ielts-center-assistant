import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-20">
      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden bg-white dark:bg-zinc-950 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Skeleton */}
            <div className="space-y-8 max-w-2xl">
              <div className="space-y-4">
                <Skeleton className="h-14 lg:h-20 w-[90%] rounded-xl bg-zinc-100 dark:bg-zinc-900" />
                <Skeleton className="h-14 lg:h-20 w-[70%] rounded-xl bg-zinc-100 dark:bg-zinc-900" />
              </div>
              <Skeleton className="h-20 w-[85%] rounded-lg bg-zinc-100 dark:bg-zinc-900" />
              <div className="flex flex-wrap gap-4 pt-4">
                <Skeleton className="h-14 w-40 rounded bg-zinc-100 dark:bg-zinc-900" />
                <Skeleton className="h-14 w-40 rounded bg-zinc-100 dark:bg-zinc-900" />
              </div>
            </div>

            {/* Right Image/Cards Skeleton */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <Skeleton className="absolute w-[80%] h-[70%] rounded-3xl bg-zinc-100 dark:bg-zinc-900 rotate-6 right-0" />
              <Skeleton className="absolute w-[80%] h-[70%] rounded-3xl bg-zinc-200 dark:bg-zinc-800 -rotate-3 left-0" />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
