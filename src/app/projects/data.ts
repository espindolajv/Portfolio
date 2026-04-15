import type { StaticImageData } from "next/image";
import petzoneHome from "../../../public/Petzone_Home.png";
import petzoneDashboard from "../../../public/Petzone_Dashboard.png";
import petzoneConsults from "../../../public/Petzone_Consults.png";
import petzoneVetProfile from "../../../public/Petzone_VetProfile.png";

export type ProjectCategory = "apps" | "mobile" | "landing";
export type ProjectContext = "freelance" | "personal" | "academic";

export type Project = {
    id: string;
    index: string;
    title: string;
    year: string;
    category: ProjectCategory;
    contextType: ProjectContext;
    taglineKey: string;
    descKey: string;
    stack: string[];
    href: string;
    cover: StaticImageData | null;
    gallery: StaticImageData[];
    /** CSS gradient used when cover is null */
    gradient?: string;
    /** "▸ Google Play" etc. */
    badgeKey?: string;
    /** show on home */
    featured?: boolean;
    /** 0-100. if set, shows "Em progresso · NN%" badge */
    progress?: number;
};

export const projects: Project[] = [
    {
        id: "matchmania",
        index: "01",
        title: "Matchmania",
        year: "2025",
        category: "mobile",
        contextType: "freelance",
        taglineKey: "work.p3Tagline",
        descKey: "work.p3Desc",
        stack: ["React Native", "TypeScript", "Node.js", "NestJS", "PostgreSQL"],
        href: "https://play.google.com/store/apps/details?id=com.matchmania.matchmania&hl=pt_BR",
        cover: null,
        gallery: [],
        gradient:
            "linear-gradient(135deg, #c2410c 0%, #7c2d12 50%, #0b0b0c 100%)",
        badgeKey: "work.storeBadge",
        featured: true,
    },
    {
        id: "evolue",
        index: "02",
        title: "Evolue",
        year: "2025",
        category: "apps",
        contextType: "personal",
        taglineKey: "work.p7Tagline",
        descKey: "work.p7Desc",
        stack: ["Next.js", "React", "TypeScript", "Tailwind", "Tiptap"],
        href: "https://evolue.vercel.app/",
        cover: null,
        gallery: [],
        gradient:
            "linear-gradient(135deg, #1f4d3f 0%, #2b7a5a 55%, #8dd3a8 100%)",
        featured: true,
        progress: 70,
    },
    {
        id: "plann",
        index: "03",
        title: "Plann",
        year: "2024",
        category: "apps",
        contextType: "personal",
        taglineKey: "work.p2Tagline",
        descKey: "work.p2Desc",
        stack: ["Next.js", "React", "TypeScript", "Tailwind"],
        href: "#",
        cover: null,
        gallery: [],
        gradient:
            "linear-gradient(135deg, #2b2b2b 0%, #3f3f3f 60%, #1a1a1a 100%)",
        featured: true,
        progress: 40,
    },
    {
        id: "petzone",
        index: "04",
        title: "Petzone",
        year: "2024",
        category: "apps",
        contextType: "academic",
        taglineKey: "work.p1Tagline",
        descKey: "work.p1Desc",
        stack: ["Next.js", "TypeScript", "Node.js", "Tailwind", "PostgreSQL"],
        href: "#",
        cover: petzoneHome,
        gallery: [petzoneDashboard, petzoneConsults, petzoneVetProfile],
        featured: true,
    },
    {
        id: "nutri-thais",
        index: "05",
        title: "Thaís Alves",
        year: "2024",
        category: "landing",
        contextType: "freelance",
        taglineKey: "work.p4Tagline",
        descKey: "work.p4Desc",
        stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
        href: "https://www.nutrithaisalves.com.br/",
        cover: null,
        gallery: [],
        gradient:
            "linear-gradient(135deg, #9bad8a 0%, #e9e2cf 55%, #c19a6a 100%)",
    },
    {
        id: "jaqueline-roque",
        index: "06",
        title: "Dra. Jaqueline Roque",
        year: "2024",
        category: "landing",
        contextType: "freelance",
        taglineKey: "work.p5Tagline",
        descKey: "work.p5Desc",
        stack: ["Next.js", "TypeScript", "Tailwind"],
        href: "https://www.drajaquelineroque.com/",
        cover: null,
        gallery: [],
        gradient:
            "linear-gradient(135deg, #f1d6d1 0%, #d9a594 55%, #8d5a4d 100%)",
    },
    {
        id: "stw-digital",
        index: "07",
        title: "STW Digital",
        year: "2025",
        category: "landing",
        contextType: "freelance",
        taglineKey: "work.p6Tagline",
        descKey: "work.p6Desc",
        stack: ["Next.js", "TypeScript", "Tailwind"],
        href: "https://www.stwdigital.com.br/",
        cover: null,
        gallery: [],
        gradient:
            "linear-gradient(135deg, #0f1a3d 0%, #2a3f7a 55%, #6b7cb3 100%)",
    },
];
