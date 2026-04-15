import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/context/context";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "João Victor Macedo — Full Stack Developer",
  description: "Portfólio de João Victor Macedo. Full Stack Developer especializado em React, React Native, NestJS, Node.js e TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${mono.variable} ${sans.variable}`}>
      <ContextProvider>{children}</ContextProvider>
    </html>
  );
}
