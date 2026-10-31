import type { StaticImageData } from "next/image";
import petzoneHome from "../../../public/Petzone_Home.png";
import petzoneDashboard from "../../../public/Petzone_Dashboard.png";
import petzoneConsults from "../../../public/Petzone_Consults.png";
import petzoneVetProfile from "../../../public/Petzone_VetProfile.png";
import thaisCover from "../../../public/projects/nutri-thais-cover.jpg";
import thais1 from "../../../public/projects/nutri-thais-1.jpg";
import thais2 from "../../../public/projects/nutri-thais-2.jpg";
import thais3 from "../../../public/projects/nutri-thais-3.jpg";
import jaquelineCover from "../../../public/projects/jaqueline-roque-cover.jpg";
import jaqueline1 from "../../../public/projects/jaqueline-roque-1.jpg";
import jaqueline2 from "../../../public/projects/jaqueline-roque-2.jpg";
import jaqueline3 from "../../../public/projects/jaqueline-roque-3.jpg";
import brieffyCover from "../../../public/projects/brieffy-cover.jpg";
import brieffy1 from "../../../public/projects/brieffy-1.jpg";
import brieffy2 from "../../../public/projects/brieffy-2.jpg";
import brieffy3 from "../../../public/projects/brieffy-3.jpg";
import moriniCover from "../../../public/projects/morini-cover.jpg";
import morini1 from "../../../public/projects/morini-1.jpg";
import morini2 from "../../../public/projects/morini-2.jpg";
import morini3 from "../../../public/projects/morini-3.jpg";
import chaveiroCover from "../../../public/projects/chaveiro-fp-cover.jpg";
import chaveiro1 from "../../../public/projects/chaveiro-fp-1.jpg";
import chaveiro2 from "../../../public/projects/chaveiro-fp-2.jpg";
import chaveiro3 from "../../../public/projects/chaveiro-fp-3.jpg";
import raEndoCover from "../../../public/projects/ra-endodontia-cover.jpg";
import raEndo1 from "../../../public/projects/ra-endodontia-1.jpg";
import raEndo2 from "../../../public/projects/ra-endodontia-2.jpg";
import raEndo3 from "../../../public/projects/ra-endodontia-3.jpg";
import pabloCover from "../../../public/projects/pablo-amoroso-cover.jpg";
import pablo1 from "../../../public/projects/pablo-amoroso-1.jpg";
import pablo2 from "../../../public/projects/pablo-amoroso-2.jpg";
import pablo3 from "../../../public/projects/pablo-amoroso-3.jpg";

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
        id: "brieffy",
        index: "08",
        title: "brieffy",
        year: "2026",
        category: "apps",
        contextType: "personal",
        taglineKey: "work.p8Tagline",
        descKey: "work.p8Desc",
        stack: ["Next.js", "React", "Tailwind"],
        href: "https://brieffy.app/",
        cover: brieffyCover,
        gallery: [brieffy1, brieffy2, brieffy3],
    },
    {
        id: "morini",
        index: "09",
        title: "Morini Industrial",
        year: "2026",
        category: "apps",
        contextType: "freelance",
        taglineKey: "work.p9Tagline",
        descKey: "work.p9Desc",
        stack: ["React", "React Router", "TanStack Query", "Tailwind"],
        href: "https://moriniindustrial.com.br/",
        cover: moriniCover,
        gallery: [morini1, morini2, morini3],
    },
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
        id: "ra-endodontia",
        index: "11",
        title: "R.A. Endodontia",
        year: "2026",
        category: "landing",
        contextType: "freelance",
        taglineKey: "work.p11Tagline",
        descKey: "work.p11Desc",
        stack: ["Next.js", "React", "Tailwind"],
        href: "https://www.raendodontia.com.br/",
        cover: raEndoCover,
        gallery: [raEndo1, raEndo2, raEndo3],
    },
    {
        id: "pablo-amoroso",
        index: "12",
        title: "Dr. Pablo Amoroso",
        year: "2026",
        category: "landing",
        contextType: "freelance",
        taglineKey: "work.p12Tagline",
        descKey: "work.p12Desc",
        stack: ["Next.js", "React", "Tailwind"],
        href: "https://www.drpabloamoroso.com.br/",
        cover: pabloCover,
        gallery: [pablo1, pablo2, pablo3],
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
        cover: thaisCover,
        gallery: [thais1, thais2, thais3],
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
        cover: jaquelineCover,
        gallery: [jaqueline1, jaqueline2, jaqueline3],
        gradient:
            "linear-gradient(135deg, #f1d6d1 0%, #d9a594 55%, #8d5a4d 100%)",
    },
    {
        id: "chaveiro-fp",
        index: "10",
        title: "Chaveiro FP",
        year: "2026",
        category: "landing",
        contextType: "freelance",
        taglineKey: "work.p10Tagline",
        descKey: "work.p10Desc",
        stack: ["Next.js", "React", "Tailwind"],
        href: "https://www.chaveirofp.com.br/",
        cover: chaveiroCover,
        gallery: [chaveiro1, chaveiro2, chaveiro3],
    },
];
