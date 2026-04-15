import type { Metadata, Viewport } from "next";
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://joaovictormacedo.dev");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "João Victor Macedo — Full Stack Developer",
    template: "%s · João Victor Macedo",
  },
  description:
    "Portfólio de João Victor Macedo — Full Stack Developer em Brasília. Apps e landing pages com React, React Native, Next.js, NestJS, Node.js e TypeScript. Projetos: Matchmania, Evolue, Petzone e landings de freelance.",
  applicationName: "João Victor Macedo",
  authors: [{ name: "João Victor Macedo", url: "https://linkedin.com/in/joaoespmacedo" }],
  creator: "João Victor Macedo",
  publisher: "João Victor Macedo",
  keywords: [
    "João Victor Macedo",
    "João Victor Espindola",
    "Full Stack Developer",
    "Desenvolvedor Full Stack",
    "React",
    "React Native",
    "Next.js",
    "NestJS",
    "Node.js",
    "TypeScript",
    "Portfólio",
    "Brasília",
    "Freelancer",
    "Matchmania",
    "Evolue",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en-US": "/",
      "es-ES": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US", "es_ES"],
    url: siteUrl,
    siteName: "João Victor Macedo",
    title: "João Victor Macedo — Full Stack Developer",
    description:
      "Full Stack Developer. Apps, mobile e landings com React, React Native, Next.js, NestJS e TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "João Victor Macedo — Full Stack Developer",
    description:
      "Full Stack Developer. Apps, mobile e landings com React, React Native, Next.js, NestJS e TypeScript.",
    creator: "@joaoespmacedo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: "João Victor Macedo",
      alternateName: "João Victor Espindola",
      jobTitle: "Full Stack Developer",
      description:
        "Desenvolvedor Full Stack especializado em React, React Native, NestJS, Node.js e TypeScript.",
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      email: "mailto:joao.espmacedo@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brasília",
        addressRegion: "DF",
        addressCountry: "BR",
      },
      knowsLanguage: ["pt-BR", "en", "es"],
      sameAs: [
        "https://linkedin.com/in/joaoespmacedo",
        "https://github.com/espindolajv",
      ],
      knowsAbout: [
        "React",
        "React Native",
        "Next.js",
        "NestJS",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "AWS",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "João Victor Macedo — Portfolio",
      description:
        "Portfólio de João Victor Macedo — Full Stack Developer.",
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteUrl}#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${mono.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <ContextProvider>{children}</ContextProvider>
    </html>
  );
}
