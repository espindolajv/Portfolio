'use client'

import { useState } from "react";
import { HomeContent } from "./components/HomeContent";
import { CarouselSection } from "./components/CarouselSection";
import { TechSection } from "./components/TechSection";
import { AboutMeSection } from "./components/AboutMeSection";

export default function Home() {
  const [color, setColor] = useState(false)

  const handleColor = () => {
    setColor(!color)
  }

  return (
    <main className={`${color ? "bg-gradient-color-light text-zinc-900" : "bg-gradient-color-mesh text-white"} duration-300  bg-color-pattern`}>
      <HomeContent handle={handleColor} color={color} />
      <div className="flex flex-col gap-32">
        <TechSection />
        <CarouselSection />
        <AboutMeSection />
      </div>
    </main>
  );
}
