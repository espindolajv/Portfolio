import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Schibsted_Grotesk } from 'next/font/google';
import { ContextProvider } from "@/context/context";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// ${geistSans.variable} ${geistMono.variable}

const grotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900']
})

export const metadata: Metadata = {
  title: "João Victor",
  description: "Desenvolvedor Fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <ContextProvider>
        <body
          className={`${grotesk.className} subpixel-antialiased overflow-x-hidden`}
        >
          {children}
        </body>
      </ContextProvider>
    </html>
  );
}
