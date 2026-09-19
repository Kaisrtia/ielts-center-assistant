import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import { CourseHero } from "@/components/courses/CourseHero";
import { CourseSyllabus } from "@/components/courses/CourseSyllabus";
import { CourseDetails } from "@/components/courses/CourseDetails";

// Generate static params for the 5 known courses
export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const course = courses.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-zinc-950">
      <main>
        <CourseHero 
          title={course.title}
          targetScores={course.targetScores}
          duration={course.duration}
          audience={course.audience}
        />
        
        <CourseSyllabus syllabus={course.syllabus} />
        
        <CourseDetails 
          testing={course.testing}
          audience={course.audience}
          tuition={course.tuition}
        />

      </main>
    </div>
  );
}
