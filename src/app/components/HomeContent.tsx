import Image from "next/image";
import { Navbar } from "./Navbar";
import { TechSection } from "./TechSection";
import photoMe from '../../../public/PhotoMe.jpg'
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

export function HomeContent() {

    return (
        <div className="h-screen w-full flex flex-col items-center py-8" id="home-section">
            <div className="w-full xl:px-36 flex xl:justify-end justify-center">
                <Navbar />
            </div>
            <div className="flex-1 flex justify-center items-center px-10 lg:px-72 sm:px-24 gap-20">
                <div className="w-1/2 h-2/3 rounded-xl xl:flex hidden justify-center items-center">
                    <Image src={photoMe} alt="Joao Victor Macedo" className="rounded-3xl" height={450} />
                </div>

                <div className="flex flex-col gap-12 xl:w-1/2 sm:w-full text-start justify-center items-center">
                    <div className="flex flex-col gap-3">
                        <h2 className="lg:text-4xl text-3xl font-semibold">Olá, sou João Victor Macedo e esse é meu Portfólio.</h2>
                        <h3 className="lg:text-2xl text-xl italic">Desenvolvedor FullStack</h3>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="lg:text-xl text-base">Desenvolvedor full-stack, com uma forte paixão por tecnologia e inovação. Ao longo da minha formação, desenvolvi habilidades sólidas tanto no front-end quanto no back-end.</p>

                        <div className="w-full flex gap-4">
                            <a
                                href='https://drive.google.com/uc?export=download&id=1n20LCBWYWo-vViOZGPy-ORZsutz9oQF_'
                                className="sm:h-[68px] h-[50px] sm:w-[68px] w-[50px] sm:hover:w-[155px] bg-glass sm:p-4 p-2 rounded-full flex gap-2 items-center font-semibold group transition-all duration-300 relative text-nowrap"
                            >
                                <MdOutlineFileDownload className="text-[34px] group-hover:animate-bounce" />
                                <span className="absolute left-[58px] group-hover:text-lg text-[0px] duration-300 hidden sm:flex">Baixar CV</span>
                            </a>
                            <Link
                                href={'https://www.linkedin.com/in/joaoespmacedo/'}
                                target="_blank"
                                className="sm:h-[68px] h-[50px] sm:w-[68px] w-[50px] sm:hover:w-[155px] bg-glass sm:p-4 p-2 rounded-full flex gap-2 items-center font-semibold group transition-all duration-300 relative sm:justify-start justify-center"
                            >
                                <FaLinkedin className="sm:text-[34px] text-[28px]" />
                                <span className="absolute left-[58px] group-hover:text-lg text-[0px] duration-300 hidden sm:flex">Linkedin</span>
                            </Link>
                            <Link
                                href={'https://github.com/espindolajv'}
                                target="_blank"
                                className="sm:h-[68px] h-[50px] sm:w-[68px] w-[50px] sm:hover:w-[155px] bg-glass sm:p-4 p-2 rounded-full flex gap-2 items-center font-semibold group transition-all duration-300 relative sm:justify-start justify-center"
                            >
                                <FaGithub className="sm:text-[34px] text-[28px]" />
                                <span className="absolute left-[58px] group-hover:text-lg text-[0px] duration-300 hidden sm:flex">Github</span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full sm:hidden">
                <TechSection />
            </div>
        </div>
    )
}