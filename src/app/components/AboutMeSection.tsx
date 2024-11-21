import { Award, GraduationCap } from "lucide-react";
import { DropDown } from "./Dropdown";
import { useMyContext } from "@/context/context";
import { MdOutlineFileDownload } from "react-icons/md";

export function AboutMeSection() {
    const { color } = useMyContext()

    return (
        <section className="w-full flex flex-col justify-center items-center px-10 lg:px-72 sm:px-24 gap-20 xl:py-0 py-12" id="aboutme-section">
            <div className="flex flex-col items-center">
                <h2 className="font-semibold sm:text-3xl text-2xl">Sobre mim</h2>
                <h3 className="sm:text-xl text-lg italic opacity-70">About me</h3>
            </div>

            <div className="flex xl:gap-28 justify-center items-center">
                <div className="w-1/2 h-[500px] bg-glass rounded-3xl xl:flex hidden">

                </div>

                <div className="xl:w-1/2 w-full flex flex-col gap-6">
                    <h3 className="sm:text-xl text-lg font-bold">Sou João Victor,</h3>


                    <p className="sm:text-lg text-base opacity-100">
                        Desenvolvedor full-stack de 21 anos, prestes a me formar em Análise e Desenvolvimento de Sistemas, com uma forte paixão por tecnologia e inovação. Ao longo da minha formação, desenvolvi habilidades sólidas tanto no front-end quanto no back-end, criando interfaces de usuário dinâmicas e intuitivas com <strong>React, Angular, JavaScript, TypeScript, Next.js, Sass e Tailwind CSS</strong>, além de construir soluções robustas em <strong>Node.js e C#</strong>.
                    </p>


                    <p className="sm:text-lg text-base opacity-100">
                        Com experiência prática em bancos de dados <strong>SQL e NoSQL, Docker, AWS e ferramentas de CI/CD</strong>, tenho um forte entendimento sobre as necessidades de deploy, escalabilidade e performance. Também sou proficiente em <strong>Figma</strong>, e conhecimentos em <strong>UX/UI Design</strong>, colaborando com equipes para criar interfaces que atendem tanto às necessidades dos usuários quanto aos requisitos técnicos.
                    </p>


                    <div className="flex w-full">
                        <button className="flex gap-1 justify-center items-center w-full sm:w-auto bg-glass px-4 py-2 text-lg font-semibold rounded-lg hover:bg-white/30 hover:scale-110 duration-300 hover:z-40 group"><MdOutlineFileDownload className="text-2xl group-hover:animate-bounce duration-300" />Baixar CV</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center w-full">
                <div className="w-full px-2">
                    <DropDown height="200" title="Carreira" subtitle='Career' style="" width="w-[350px]">
                        <div className="w-full flex flex-col 2xl:flex-row gap-6">
                            <div className="2xl:w-1/2 w-full bg-glass rounded-2xl p-7 flex flex-col justify-start gap-3 relative hover:scale-110 duration-300 hover:z-40">
                                <div className="w-full">
                                    <div className="w-full flex justify-between gap-2">
                                        <h3 className="sm:text-lg text-base font-bold">Estagiário de TI</h3>
                                    </div>
                                    <p className="sm:text-base text-sm font-semibold opacity-80">ISCON</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className={`${color ? 'bg-zinc-200' : 'bg-black/50'} p-2 rounded-md`}>
                                        <p className="sm:text-base text-sm font-semibold">Jan/22</p>
                                    </div>

                                    <div className={`${color ? 'bg-zinc-200' : 'bg-black/50'} p-2 rounded-md`}>
                                        <p className="sm:text-base text-sm font-semibold">Fev/24</p>
                                    </div>
                                </div>

                                <div className="w-full sm:text-base text-sm opacity-80 font-semibold">
                                    <p>Responsável pelo desenvolvimento e manutenção de páginas web com HTML, CSS, JavaScript e React, além de APIs com TypeScript e C#. Possui experiência com tecnologias Microsoft e plataforma Azure. Especializado em design de interfaces e UX/UI utilizando Figma, e em fornecer suporte eficiente para melhorar a experiência do usuário.</p>
                                </div>
                            </div>

                            <div className="2xl:w-1/2 w-full bg-glass rounded-2xl p-7 flex flex-col justify-start gap-3 relative hover:scale-110 duration-300 hover:z-40">
                                <div className="w-full">
                                    <div className="w-full flex justify-between">
                                        <h3 className="sm:text-lg text-base font-bold">Freelancer</h3>
                                    </div>
                                    <p className="sm:text-base text-sm font-semibold opacity-80">Desenvolvedor Web</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className={`${color ? 'bg-zinc-200' : 'bg-black/50'} p-2 rounded-md`}>
                                        <p className="sm:text-base text-sm font-semibold">Fev/24</p>
                                    </div>

                                    <div className={`${color ? 'bg-zinc-200' : 'bg-black/50'} p-2 rounded-md`}>
                                        <p className="sm:text-base text-sm font-semibold">Atualmente</p>
                                    </div>
                                </div>

                                <div className="w-full sm:text-base text-sm opacity-80 font-semibold">
                                    <p>Freelancer em tecnologias como JavaScript, React, Angular Node.js, TypeScript e C#, desenvolvendo aplicações web escaláveis, integração de APIs, e design de interfaces focadas em UX/UI.</p>
                                </div>
                            </div>
                        </div>
                    </DropDown>
                </div>

                <div className="w-full px-2">
                    <DropDown height="200" title="Formações" subtitle='Qualifications' style="" width="w-[300px]">
                        <div className="w-full flex flex-col 2xl:flex-row gap-6">
                            <div className="2xl:w-1/2 w-full bg-glass rounded-2xl p-7 flex flex-col justify-center gap-3 relative hover:scale-110 duration-300 hover:z-40">
                                <div className="w-full">
                                    <div className="w-full flex justify-between gap-2">
                                        <h3 className="sm:text-lg text-base font-bold">Análise e Desenvolvimento de Sistemas</h3>
                                        <GraduationCap className="sm:opacity-80 opacity-0" />
                                    </div>
                                    <p className="sm:text-base text-sm font-semibold opacity-80">Ensino Superior</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className={`${color ? 'bg-zinc-200' : 'bg-black/50'} p-2 rounded-md`}>
                                        <p className="sm:text-base text-sm font-semibold">Ago/25</p>
                                    </div>

                                    <div className={`${color ? 'bg-zinc-200' : 'bg-black/50'} p-2 rounded-md`}>
                                        <p className="sm:text-base text-sm font-semibold">CEUB</p>
                                    </div>


                                </div>
                            </div>

                            <div className="2xl:w-1/2 w-full bg-glass rounded-2xl p-7 flex flex-col justify-center gap-3 relative hover:scale-110 duration-300 hover:z-40">
                                <div className="w-full">
                                    <div className="w-full flex justify-between">
                                        <h3 className="sm:text-lg text-base font-bold">Desenvolvedor FullStack</h3>
                                        <Award className="sm:opacity-80 opacity-0" />
                                    </div>
                                    <p className="sm:text-base text-sm font-semibold opacity-80">Curso profissionalizante</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className={`${color ? 'bg-zinc-200' : 'bg-black/50'} p-2 rounded-md`}>
                                        <p className="sm:text-base text-sm font-semibold">Out/24</p>
                                    </div>

                                    <div className={`${color ? 'bg-zinc-200' : 'bg-black/50'} p-2 rounded-md`}>
                                        <p className="sm:text-base text-sm font-semibold">OneBitCode</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </DropDown>
                </div>

                <div className="w-full flex flex-col gap-6 px-2">
                    <DropDown style="flex flex-col gap-4" height="450" title="Cursos" subtitle='Courses' width="w-52">
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 sm:text-lg text-base">
                            <p>HTML e CSS</p>
                            <p>OneBitCode - 2022</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 sm:text-lg text-base">
                            <p>Sass</p>
                            <p>OneBitCode - 2022</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 sm:text-lg text-base">
                            <p>Git e Github</p>
                            <p>OneBitCode - 2022</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 sm:text-lg text-base">
                            <p>JavaScript</p>
                            <p>OneBitCode - 2022</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 sm:text-lg text-base">
                            <p>TypeScript</p>
                            <p>OneBitCode - 2022</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 sm:text-lg text-base">
                            <p>NodeJs</p>
                            <p>OneBitCode - 2023</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 sm:text-lg text-base">
                            <p>React</p>
                            <p>OneBitCode - 2023</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 sm:text-lg text-base">
                            <p>Angular</p>
                            <p>OneBitCode - 2023</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 sm:text-lg text-base">
                            <p>NextJs</p>
                            <p>OneBitCode - 2023</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 sm:text-lg text-base">
                            <p>Docker</p>
                            <p>OneBitCode - 2024</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 sm:text-lg text-base">
                            <p>Linux</p>
                            <p>Udemy - 2023</p>
                        </div>
                    </DropDown>
                </div>
            </div>
        </section>
    )
}