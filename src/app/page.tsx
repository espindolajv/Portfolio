'use client'

import { HomeContent } from "./components/HomeContent";
import { CarouselSection } from "./components/CarouselSection";
import { TechSection } from "./components/TechSection";
import { AboutMeSection } from "./components/AboutMeSection";
import { Schibsted_Grotesk } from 'next/font/google';
import { useMyContext } from "@/context/context";

const grotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900']
})

export default function Home() {
  const { color } = useMyContext()

  return (
    <body
      className={`${grotesk.className} subpixel-antialiased overflow-x-hidden ${color ? 'bg-zinc-100 text-zinc-800' : 'bg-zinc-800 text-white'}`}
    >
      <main className={`duration-300`}>
        <HomeContent />
        <div className="flex flex-col gap-32">
          <TechSection />
          <CarouselSection />
          <AboutMeSection />
        </div>
      </main>
    </body>
  );
}
