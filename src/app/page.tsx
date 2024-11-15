'use client'

import { HomeContent } from "./components/HomeContent";
import { CarouselSection } from "./components/CarouselSection";
import { TechSection } from "./components/TechSection";
import { AboutMeSection } from "./components/AboutMeSection";
import { useMyContext } from "@/context/context";

export default function Home() {
  const { color } = useMyContext()

  return (
    <main className={`${color ? "bg-light-gradient text-zinc-900" : "bg-dark-gradient text-white"} duration-300 bg-color-pattern`}>
      <HomeContent  />
      <div className="flex flex-col gap-32">
        <TechSection />
        <CarouselSection />
        <AboutMeSection />
      </div>
    </main>
  );
}
