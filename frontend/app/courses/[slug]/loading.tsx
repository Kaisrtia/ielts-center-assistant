import { Skeleton } from "@/components/ui/skeleton";

export default function CourseLoading() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-zinc-950">
      <main>
        {/* Course Hero Skeleton */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative">
          <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
            <div className="max-w-3xl mx-auto space-y-6 flex flex-col items-center">
              <Skeleton className="h-16 w-3/4 rounded-xl bg-zinc-200 dark:bg-zinc-800" />
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-10 w-32 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Syllabus Skeleton */}
        <section className="py-20 lg:py-28 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col items-center mb-16">
              <Skeleton className="h-12 w-64 rounded-xl bg-zinc-100 dark:bg-zinc-800" />
            </div>
            <div className="max-w-4xl mx-auto">
              <Skeleton className="h-[400px] w-full rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-100 dark:border-zinc-800" />
            </div>
          </div>
        </section>

        {/* Course Details Cards Skeleton */}
        <section className="py-20 bg-[#fafafa] dark:bg-zinc-950">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-[300px] rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800" />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
