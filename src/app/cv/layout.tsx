import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CV",
    description:
        "Currículo de João Victor Macedo — Full Stack Developer. Experiência na MV Gois, formação pelo UniCEUB, stack React/React Native/Next.js/NestJS/Node.js/TypeScript.",
    alternates: { canonical: "/cv" },
    openGraph: {
        title: "CV · João Victor Macedo",
        description:
            "Currículo completo: perfil, experiência, projetos, stack e formação.",
        url: "/cv",
        type: "profile",
    },
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
    return children;
}
