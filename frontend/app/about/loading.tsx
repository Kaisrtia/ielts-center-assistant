import { Skeleton } from "@/components/ui/skeleton";

export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-zinc-950 pt-24">
      
      {/* Intro Section Skeleton */}
      <section className="container mx-auto px-4 max-w-6xl pt-12 md:pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Skeleton className="h-12 w-3/4 rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-4 w-full bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-4 w-5/6 bg-zinc-200 dark:bg-zinc-800" />
            </div>
            <Skeleton className="h-24 w-full rounded-xl bg-zinc-100 dark:bg-zinc-900 mt-6" />
          </div>
          <div className="relative aspect-[4/5] md:aspect-square">
            <Skeleton className="w-full h-full rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
          </div>
        </div>
      </section>

      {/* Timeline Skeleton */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-center mb-16">
            <Skeleton className="h-12 w-64 rounded-xl bg-zinc-100 dark:bg-zinc-800" />
          </div>
          <div className="space-y-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-center">
                <Skeleton className="h-32 w-full md:w-1/2 rounded-xl bg-zinc-50 dark:bg-zinc-800" />
                <Skeleton className="h-32 w-full md:w-1/2 rounded-xl bg-zinc-50 dark:bg-zinc-800 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Grid Skeleton */}
      <section className="py-20 bg-[#fafafa] dark:bg-zinc-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-center mb-16">
            <Skeleton className="h-12 w-64 rounded-xl bg-zinc-200 dark:bg-zinc-800" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className={`rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 ${i === 0 || i === 3 ? 'md:col-span-2' : ''} ${i === 0 ? 'h-[300px]' : 'h-[250px]'}`} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
