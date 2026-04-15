'use client'

import { useMyContext } from "@/context/context";
import { Nav } from "./components/redesign/Nav";
import { Hero } from "./components/redesign/Hero";
import { Work } from "./components/redesign/Work";
import { Stack } from "./components/redesign/Stack";
import { About } from "./components/redesign/About";
import { Contact } from "./components/redesign/Contact";
import { Footer } from "./components/redesign/Footer";

export default function Home() {
  const { color } = useMyContext();

  return (
    <body
      className={`grain overflow-x-hidden ${color ? "theme-light" : ""}`}
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <Nav />
      <main>
        <Hero />
        <Work />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </body>
  );
}
