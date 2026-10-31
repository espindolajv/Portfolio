'use client'

import { Shell } from "./components/v3/Shell";
import { Hero } from "./components/v3/Hero";
import { Work } from "./components/v3/Work";
import { About } from "./components/v3/About";
import { Stack } from "./components/v3/Stack";
import { Contact } from "./components/v3/Contact";

export default function Home() {
  return (
    <Shell>
      <Hero />
      <Work />
      <About />
      <Stack />
      <Contact />
    </Shell>
  );
}
