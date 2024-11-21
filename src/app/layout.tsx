import type { Metadata } from "next";
import "./globals.css";
import { ContextProvider } from "@/context/context";

export const metadata: Metadata = {
  title: "João Victor | Portfolio",
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
        {children}
      </ContextProvider>
    </html>
  );
}