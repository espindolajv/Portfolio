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
                        Desenvolvedor full-stack de 23 anos, formado em Análise e Desenvolvimento de Sistemas pelo UniCEUB, com forte paixão por tecnologia e inovação. Ao longo da minha trajetória, desenvolvi habilidades sólidas tanto no front-end quanto no back-end, criando interfaces de usuário dinâmicas e intuitivas com <strong>React, React Native, Angular, JavaScript, TypeScript, Next.js, Sass e Tailwind CSS</strong>, além de construir soluções robustas com <strong>Node.js, Nest.js e C# (.NET)</strong>.
                    </p>


                    <p className="sm:text-lg text-base opacity-100">
                        Com experiência prática em bancos de dados <strong>SQL e NoSQL, Docker, AWS e ferramentas de CI/CD</strong>, tenho um forte entendimento sobre as necessidades de deploy, escalabilidade e performance. Também sou proficiente em <strong>Figma</strong>, e conhecimentos em <strong>UX/UI Design</strong>, colaborando com equipes para criar interfaces que atendem tanto às necessidades dos usuários quanto aos requisitos técnicos.
                    </p>


                    <div className="flex w-full">
                        <a
                            href='https://drive.google.com/uc?export=download&id=1n20LCBWYWo-vViOZGPy-ORZsutz9oQF_'
                            className="flex gap-1 justify-center items-center w-full sm:w-auto bg-glass px-4 py-2 text-lg font-semibold rounded-lg hover:bg-white/30 hover:scale-110 duration-300 hover:z-40 group"
                        >
                            <MdOutlineFileDownload className="text-2xl group-hover:animate-bounce duration-300" />
                            Baixar CV
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center w-full">
                <div className="w-full px-2">
                    <DropDown height="200" title="Carreira" subtitle='Career' style="" width="w-[350px]">
                        <div className="w-full flex flex-col gap-6">
                            <div className="w-full bg-glass rounded-2xl p-7 flex flex-col justify-start gap-3 relative hover:scale-110 duration-300 hover:z-40">
                                <div className="w-full">
                                    <div className="w-full flex justify-between gap-2">
                                        <h3 className="sm:text-lg text-base font-bold">Estagiário de TI</h3>
                                    </div>
                                    <p className="sm:text-base text-sm font-semibold opacity-80">Instituto Superior CONAMAD</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className={`${color ? 'bg-zinc-200' : 'bg-black/50'} p-2 rounded-md`}>
                                        <p className="sm:text-base text-sm font-semibold">Jan/23</p>
                                    </div>

                                    <div className={`${color ? 'bg-zinc-200' : 'bg-black/50'} p-2 rounded-md`}>
                                        <p className="sm:text-base text-sm font-semibold">Dez/23</p>
                                    </div>
                                </div>

                                <div className="w-full sm:text-base text-sm opacity-80 font-semibold">
                                    <p>Responsável pela manutenção de sites, sistemas, diretórios, planilhas e infraestrutura, administração de tecnologias Microsoft e utilização da plataforma Azure. Atuação em gerenciamento de processos, análise de dados e suporte ao usuário.</p>
                                </div>
                            </div>

                            <div className="w-full bg-glass rounded-2xl p-7 flex flex-col justify-start gap-3 relative hover:scale-110 duration-300 hover:z-40">
                                <div className="w-full">
                                    <div className="w-full flex justify-between">
                                        <h3 className="sm:text-lg text-base font-bold">Desenvolvedor Fullstack Jr</h3>
                                    </div>
                                    <p className="sm:text-base text-sm font-semibold opacity-80">MV Gois</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className={`${color ? 'bg-zinc-200' : 'bg-black/50'} p-2 rounded-md`}>
                                        <p className="sm:text-base text-sm font-semibold">Jun/24</p>
                                    </div>

                                    <div className={`${color ? 'bg-zinc-200' : 'bg-black/50'} p-2 rounded-md`}>
                                        <p className="sm:text-base text-sm font-semibold">Jan/26</p>
                                    </div>
                                </div>

                                <div className="w-full sm:text-base text-sm opacity-80 font-semibold">
                                    <p>
                                        Atuei no desenvolvimento de aplicações web e mobile, contribuindo diretamente para a criação de funcionalidades e melhorias que otimizam a experiência do usuário e a eficiência dos projetos. Entre minhas principais entregas, destaco:
                                    </p>
                                    <ul className="list-disc pl-5 mt-2">
                                        <li>Implementação de funcionalidades com React, React Native, Node.js, Nest.js, Next.js e Vite;</li>
                                        <li>Otimização de performance e escalabilidade em aplicações fullstack;</li>
                                        <li>Refatoração de código legado, elevando a legibilidade e reduzindo a ocorrência de bugs;</li>
                                        <li>Criação de testes automatizados com Jest, Vitest e Cypress, assegurando qualidade e confiabilidade;</li>
                                        <li>Participação ativa em times multidisciplinares, alinhando soluções técnicas aos objetivos do negócio.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="w-full bg-glass rounded-2xl p-7 flex flex-col justify-start gap-3 relative hover:scale-110 duration-300 hover:z-40">
                                <div className="w-full">
                                    <div className="w-full flex justify-between">
                                        <h3 className="sm:text-lg text-base font-bold">Desenvolvedor Fullstack Pleno</h3>
                                    </div>
                                    <p className="sm:text-base text-sm font-semibold opacity-80">MV Gois</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className={`${color ? 'bg-zinc-200' : 'bg-black/50'} p-2 rounded-md`}>
                                        <p className="sm:text-base text-sm font-semibold">Fev/26</p>
                                    </div>

                                    <div className={`${color ? 'bg-zinc-200' : 'bg-black/50'} p-2 rounded-md`}>
                                        <p className="sm:text-base text-sm font-semibold">Atualmente</p>
                                    </div>
                                </div>

                                <div className="w-full sm:text-base text-sm opacity-80 font-semibold">
                                    <p>
                                        Atuo de forma autônoma e estratégica no desenvolvimento e evolução de aplicações web e mobile, contribuindo diretamente para decisões de arquitetura, boas práticas e escalabilidade. Entre minhas principais responsabilidades e realizações:
                                    </p>
                                    <ul className="list-disc pl-5 mt-2">
                                        <li>Definição e implementação de soluções escaláveis com React, React Native, Node.js, Nest.js, Next.js e Vite;</li>
                                        <li>Participação ativa nas decisões de arquitetura e design de software, com foco em performance, segurança e manutenibilidade;</li>
                                        <li>Orientação técnica e suporte a desenvolvedores juniores, promovendo boas práticas e padronização de código;</li>
                                        <li>Integração de processos de CI/CD, testes automatizados e monitoramento para otimizar o ciclo de entrega;</li>
                                        <li>Liderança em refatorações estruturais e evoluções tecnológicas, garantindo qualidade e longevidade dos projetos;</li>
                                        <li>Colaboração com stakeholders e equipes multidisciplinares, alinhando prioridades técnicas e estratégicas.</li>
                                    </ul>
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
                                        <p className="sm:text-base text-sm font-semibold">Dez/23</p>
                                    </div>

                                    <div className={`${color ? 'bg-zinc-200' : 'bg-black/50'} p-2 rounded-md`}>
                                        <p className="sm:text-base text-sm font-semibold">UniCEUB</p>
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