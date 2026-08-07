import { useEffect } from "react";
import { DarkroomUIProvider } from "darkroom-ui";
import { LocaleProvider } from "@/components/LocaleProvider";
import { SiteNav } from "@/components/sections/SiteNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ThemingSection } from "@/components/sections/ThemingSection";
import { GetStartedSection } from "@/components/sections/GetStartedSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { stripHashAndScroll } from "@/scroll";

export function App() {
  useEffect(() => {
    stripHashAndScroll();
  }, []);

  return (
    <DarkroomUIProvider>
      <LocaleProvider>
        <div className="page">
          <SiteNav />
          <main>
            <HeroSection />
            <FeaturesSection />
            <ThemingSection />
            <GetStartedSection />
          </main>
          <SiteFooter />
        </div>
      </LocaleProvider>
    </DarkroomUIProvider>
  );
}
