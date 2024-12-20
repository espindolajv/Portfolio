'use client'

import { HomeContent } from "./components/HomeContent";
import { CarouselSection } from "./components/CarouselSection";
import { TechSection } from "./components/TechSection";
import { AboutMeSection } from "./components/AboutMeSection";
import { Schibsted_Grotesk } from 'next/font/google';
import { useMyContext } from "@/context/context";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

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
        <div className="flex flex-col xl:gap-32 gap-20">
          <div className="w-full hidden sm:flex">
            <TechSection />
          </div>
          <CarouselSection />
          <AboutMeSection />
          <div className="flex flex-col gap-0">
            <ContactSection />
            <Footer />
          </div>
        </div>
      </main>
    </body>
  );
}
