import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-zinc-950 pt-24">
      {/* Header Section Skeleton */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-12 md:pt-20 pb-8">
        <div className="text-center mb-10 max-w-3xl mx-auto flex flex-col items-center">
          <Skeleton className="h-14 w-64 md:w-96 rounded-xl bg-zinc-200 dark:bg-zinc-800 mb-6" />
          <Skeleton className="h-16 w-full rounded-lg bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </section>

      {/* Blog Grid Skeleton */}
      <section className="bg-white dark:bg-zinc-900 py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Toolbar Skeleton (Search & Categories) */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between">
            <Skeleton className="h-14 w-full md:w-80 rounded-2xl bg-zinc-100 dark:bg-zinc-800" />
            <div className="flex gap-2 w-full md:w-auto overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-10 w-24 rounded-full bg-zinc-100 dark:bg-zinc-800 shrink-0" />
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
                <Skeleton className="w-full aspect-[4/3] rounded-none bg-zinc-100 dark:bg-zinc-800" />
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <Skeleton className="h-4 w-32 bg-zinc-100 dark:bg-zinc-800" />
                  <Skeleton className="h-12 w-full bg-zinc-100 dark:bg-zinc-800" />
                  <Skeleton className="h-20 w-full bg-zinc-100 dark:bg-zinc-800" />
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
                    <Skeleton className="h-4 w-24 bg-zinc-100 dark:bg-zinc-800" />
                    <Skeleton className="h-4 w-20 bg-zinc-100 dark:bg-zinc-800" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
