import { Hero } from "../components/home/Hero";
import { Stats } from "../components/home/Stats";
import { Instructors } from "../components/home/Instructors";
import { Courses } from "../components/home/Courses";
import { Testimonials } from "../components/home/Testimonials";
import { BlogPreview } from "../components/home/BlogPreview";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-x-hidden transition-colors duration-300">
      <main>
        <Hero />
        <Stats />
        <Instructors />
        <Courses />
        <Testimonials />
        <BlogPreview />
      </main>
    </div>
  );
}
