import { BiLogoTypescript } from "react-icons/bi";
import { BsStripe } from "react-icons/bs";
import { FaNodeJs, FaReact, FaGitAlt, FaDocker, FaFigma } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql, SiPrisma, SiPusher, SiReactquery, SiShadcnui, SiZod } from "react-icons/si";

export const stacks = [
    {
        name: 'Prisma',
        logo: <SiPrisma />
    },
    {
        name: 'TypeScript',
        logo: <BiLogoTypescript />
    },
    {
        name: 'NodeJS',
        logo: <FaNodeJs />
    },
    {
        name: 'NextJs',
        logo: <RiNextjsFill />
    },
    {
        name: 'React',
        logo: <FaReact />
    },
    {
        name: 'React Query',
        logo: <SiReactquery />
    },
    {
        name: 'JavaScript',
        logo: <RiJavascriptFill />
    },
    {
        name: 'TailwindCss',
        logo: <RiTailwindCssFill />
    },
    {
        name: 'Shadcn/ui',
        logo: <SiShadcnui />
    },
    {
        name: 'Git',
        logo: <FaGitAlt />
    },
    {
        name: 'Docker',
        logo: <FaDocker />
    },
    {
        name: 'Figma',
        logo: <FaFigma />
    },
    {
        name: 'Zod',
        logo: <SiZod />
    },
    {
        name: 'Stripe',
        logo: <BsStripe />
    },
    {
        name: 'PostgreSQL',
        logo: <SiPostgresql />
    },
    {
        name: 'Pusher',
        logo: <SiPusher />
    }

]

export function LogoBrand({ name }: { name: string }) {
    const logo = stacks.find(obj => obj.name.toLowerCase() === name.toLowerCase())

    return (
        <div
            className="relative group flex flex-col justify-center items-center"
            aria-label={logo?.name}
        >
            <div className='text-3xl h-14 w-14 rounded-xl flex flex-col gap-1 justify-center items-center duration-300'>
                <div className="transition-transform transform group-hover:scale-110 duration-300 ">
                    {logo?.logo}
                </div>
                <p className="opacity-0 group-hover:opacity-100 text-xs font-semibold capitalize rounded-md group-hover:flex duration-300">{logo?.name}</p>
            </div>
        </div>
    )
}

