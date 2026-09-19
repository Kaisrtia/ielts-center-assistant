import { AboutHero } from "@/components/about/AboutHero";
import { FounderIntro } from "@/components/about/FounderIntro";
import { MasteryTimeline } from "@/components/about/MasteryTimeline";
import { BranchBentoGrid } from "@/components/about/BranchBentoGrid";

export const metadata = {
  title: "Về Chúng Tôi | The English Academy",
  description: "Khám phá Hệ thống Mastery 3 Giai đoạn và đội ngũ giảng viên hàng đầu tại The English Academy.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-zinc-950 pt-24 overflow-hidden">
      <AboutHero />
      <FounderIntro />
      <MasteryTimeline />
      <BranchBentoGrid />
    </main>
  );
}
