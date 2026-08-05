"use client";

import { DarkroomUIProvider } from "darkroom-ui";
import { SiteNav } from "@/components/sections/SiteNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ThemingSection } from "@/components/sections/ThemingSection";
import { GetStartedSection } from "@/components/sections/GetStartedSection";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function HomePage() {
  return (
    <DarkroomUIProvider>
      <div className="shell">
        <SiteNav />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ThemingSection />
          <GetStartedSection />
        </main>
        <SiteFooter />
      </div>
    </DarkroomUIProvider>
  );
}
