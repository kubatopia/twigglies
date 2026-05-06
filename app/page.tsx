import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import IdeaSection from "@/components/sections/IdeaSection";
import OriginSection from "@/components/sections/OriginSection";
import CtaSection from "@/components/sections/CtaSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <IdeaSection />
        <OriginSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
