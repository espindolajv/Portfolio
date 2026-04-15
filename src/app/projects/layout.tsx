import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projetos",
    description:
        "Arquivo de projetos de João Victor Macedo: apps, mobile e landing pages. Matchmania, Evolue, Plann, Petzone, Thaís Alves, Dra. Jaqueline Roque e STW Digital.",
    alternates: { canonical: "/projects" },
    openGraph: {
        title: "Projetos · João Victor Macedo",
        description:
            "Arquivo completo: apps, mobile e landing pages construídos do design à entrega.",
        url: "/projects",
        type: "website",
    },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
