import { Award, GraduationCap } from "lucide-react";
import { DropDown } from "./Dropdown";

export function AboutMeSection() {
    return (
        <section className="w-full flex flex-col justify-center items-center px-72 gap-20 py-32" id="aboutme-section">
            <div className="flex flex-col items-center">
                <h2 className="font-semibold text-3xl">Sobre mim</h2>
                <h3 className="text-xl italic opacity-70">About me</h3>
            </div>

            <div className="flex gap-28 justify-center items-center">
                <div className="w-1/2 h-[500px] bg-glass rounded-3xl">

                </div>

                <div className="w-1/2 flex flex-col gap-6">
                    <h3 className="text-xl font-bold">Sou João Victor,</h3>


                    <p className="text-lg opacity-100">
                        Desenvolvedor full-stack de 21 anos, prestes a me formar em Análise e Desenvolvimento de Sistemas, com uma forte paixão por tecnologia e inovação. Ao longo da minha formação, desenvolvi habilidades sólidas tanto no front-end quanto no back-end, criando interfaces de usuário dinâmicas e intuitivas com <strong>React, TypeScript, Next.js, Sass e Tailwind CSS</strong>, além de construir soluções robustas em <strong>Node.js, C#</strong>.
                    </p>


                    <p className="text-lg opacity-100">
                        Com experiência prática em bancos de dados <strong>SQL e NoSQL, Docker, AWS e ferramentas de CI/CD</strong>, tenho um forte entendimento sobre as necessidades de deploy, escalabilidade e performance. Também sou proficiente em <strong>Figma</strong>, e conhecimentos em <strong>UX/UI Design</strong>, colaborando com equipes para criar interfaces que atendem tanto às necessidades dos usuários quanto aos requisitos técnicos.
                    </p>


                    <div className="flex">
                        <button className="bg-glass px-4 py-2 text-lg font-semibold rounded-lg hover:bg-white/30  hover:scale-110 duration-300 hover:z-40">Baixar CV</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center w-full">
                <div className="w-full px-2">
                    <DropDown height="200" title="Formações" subtitle='Qualifications' style="" width="w-[300px]">
                        <div className="w-full flex gap-6">
                            <div className="w-1/2 h-40 bg-glass rounded-2xl p-8 flex flex-col gap-3 relative hover:scale-110 duration-300 hover:z-40">
                                <div>
                                    <h3 className="text-lg font-bold">Análise e Desenvolvimento de Sistemas</h3>
                                    <p className="font-semibold opacity-80">Ensino Superior</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="bg-black/50 p-2 rounded-md">
                                        <p className="font-semibold">Ago/25</p>
                                    </div>

                                    <div className="bg-black/50 p-2 rounded-md">
                                        <p className="font-semibold">CEUB</p>
                                    </div>

                                    <GraduationCap className="absolute right-8 top-8 opacity-80" />
                                </div>
                            </div>

                            <div className="w-1/2 h-40 bg-glass rounded-2xl p-8 flex flex-col gap-3 relative hover:scale-110 duration-300 hover:z-40">
                                <div>
                                    <h3 className="text-lg font-bold">Desenvolvedor FullStack</h3>
                                    <p className="font-semibold opacity-80">Curso profissionalizante</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="bg-black/50 p-2 rounded-md">
                                        <p className="font-semibold">Out/24</p>
                                    </div>

                                    <div className="bg-black/50 p-2 rounded-md">
                                        <p className="font-semibold">OneBitCode</p>
                                    </div>

                                    <Award className="absolute right-8 top-8 opacity-80" />
                                </div>
                            </div>
                        </div>
                    </DropDown>
                </div>

                <div className="w-full flex flex-col gap-6 px-2">
                    <DropDown style="flex flex-col gap-4" height="450" title="Cursos" subtitle='Courses' width="w-52">
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 text-lg">
                            <p>HTML e CSS</p>
                            <p>OneBitCode - 2022</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 text-lg">
                            <p>Sass</p>
                            <p>OneBitCode - 2022</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 text-lg">
                            <p>Git e Github</p>
                            <p>OneBitCode - 2022</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 text-lg">
                            <p>JavaScript</p>
                            <p>OneBitCode - 2022</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 text-lg">
                            <p>TypeScript</p>
                            <p>OneBitCode - 2022</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 text-lg">
                            <p>NodeJs</p>
                            <p>OneBitCode - 2023</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 text-lg">
                            <p>React</p>
                            <p>OneBitCode - 2023</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 text-lg">
                            <p>NextJs</p>
                            <p>OneBitCode - 2023</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 text-lg">
                            <p>Docker</p>
                            <p>OneBitCode - 2024</p>
                        </div>
                        <div className="w-full flex justify-between items-center font-semibold opacity-70 hover:opacity-100 duration-300 text-lg">
                            <p>Linux</p>
                            <p>Udemy - 2023</p>
                        </div>
                    </DropDown>
                </div>
            </div>
        </section>
    )
}