
import { BookCheck, ExternalLink, Layers, Package } from 'lucide-react';
import { LogoBrand } from './LogoBrand';
import { PlannBlock } from './PlannBlock';
import Link from 'next/link';
import { useMyContext } from '@/context/context';

export function PlannContent() {
    const { color } = useMyContext()

    return (
        <>
            <div className="p-8 sm:flex hidden flex-col items-center sm:scale-75 lg:scale-100">
                <div className="h-[600px] w-[1050px] flex items-center justify-center gap-3">
                    <div className="w-2/3 h-full flex flex-col gap-3">
                        <div className="h-1/2 flex gap-3">
                            <div className="h-full w-1/2 bg-glass overflow-hidden px-8 py-6 rounded-2xl hover:scale-110 duration-300 hover:z-40">
                                <div className='text-wrap w-full flex flex-col gap-3'>
                                    <BookCheck />
                                    <div className='flex flex-col gap-8'>
                                        <div className='flex flex-col gap-2'>
                                            <h3 className='text-xl font-semibold'>Plann.io</h3>
                                            <p className='opacity-70 text-sm text-semibold'>Software desenvolvido para organizar suas tarefas, atividades e objetivos de forma simples e intuitiva, ajudando a aumentar a produtividade e o foco. Permite que os usuários criem listas personalizadas, definam prioridades, acompanhem o progresso e até mesmo criem grupos ou times.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full w-1/2 bg-glass overflow-hidden px-8 py-6 rounded-2xl hover:scale-110 duration-300 hover:z-40">
                                <div className='text-wrap w-full flex flex-col gap-3'>
                                    <Layers />
                                    <div className='flex flex-col'>
                                        <div className='flex flex-col gap-4'>
                                            <div className='flex flex-col gap-2'>
                                                <h3 className='text-xl font-semibold'>Stacks</h3>
                                                <p className='opacity-70 text-sm text-semibold'>Tecnologias usadas no desenvolvimento do projeto.</p>
                                            </div>

                                            <div className='py-2 grid grid-cols-4 gap-1 px-2'>
                                                <LogoBrand name='React' />
                                                <LogoBrand name='nextjs' />
                                                <LogoBrand name='typescript' />
                                                <LogoBrand name='nodejs' />
                                                <LogoBrand name='Prisma' />
                                                <LogoBrand name='firebase' />
                                                <LogoBrand name='Zod' />
                                                <LogoBrand name='tailwindcss' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-1/2 bg-glass overflow-hidden px-8 py-6 rounded-2xl hover:scale-110 duration-300 hover:z-40">
                            <div className='text-wrap w-full flex flex-col gap-3'>
                                <Package />
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='text-xl font-semibold'>Sobre o projeto</h3>
                                        <p className='opacity-70 text-sm text-semibold'>Este projeto foi idealizado para oferecer uma ferramenta completa de organização e colaboração, ajudando os usuários a gerenciar suas tarefas e objetivos de forma eficiente. Ele permite criar grupos ou times, promovendo uma gestão coletiva das atividades, onde as responsabilidades podem ser compartilhadas e monitoradas de forma clara. O sistema visa simplificar a organização do dia a dia, proporcionando uma experiência de usuário fluida e flexível, adaptável tanto para uso pessoal quanto para equipes.</p>
                                    </div>
                                    <div className='flex gap-2 w-full items-end justify-end'>
                                        <Link
                                            href={'https://github.com/espindolajv/app-plann'}
                                            target="_blank"
                                            className={`flex gap-1.5 items-center px-4 py-1 ${color ? 'bg-zinc-800 text-zinc-100' : 'bg-zinc-200 text-zinc-950'} rounded-lg  font-bold hover:scale-110 duration-300`}
                                        >
                                            Github
                                            <ExternalLink className='size-4' strokeWidth={3} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-1/3 bg-glass relative overflow-hidden px-8 py-6 rounded-2xl hover:scale-110 duration-300 hover:z-40">
                        <div className='text-wrap flex flex-col gap-3'>
                            <Package />
                            <div>
                                <h3 className='text-xl font-semibold'>Serviços</h3>
                                <p className='opacity-70 text-sm text-semibold'>Criação de tarefas com opção de prioridades e criação de times/grupos de tarefas.</p>
                            </div>
                        </div>
                        <div className='absolute h-[400px] w-[710px] rounded-xl left-7 bottom-10 shadow-lg bg-white flex gap-9'>
                            {/* <Image src={dashboardPagePetzone} alt='Home Page Petzone' fill className='rounded-lg' /> */}
                            <PlannBlock />
                        </div>
                    </div>
                </div>

                <div className='hidden transition-transform duration-300 transform hover:scale-x-125 bg-blue-500 w-32 h-32'></div>
                <label htmlFor="check" className='hidden h-10 w-20 rounded-full bg-white relative'>
                    <input type="checkbox" className='sr-only peer' id='check' />
                    <span className='h-6 w-6 rounded-full bg-blue-600 absolute top-1.5 left-1.5 transition-all peer-checked:bg-red-500 peer-checked:left-12 duration-300'></span>
                </label>
            </div>

            <div className='p-8 flex justify-center items-center w-full sm:hidden'>
                <Link
                    href={'https://github.com/espindolajv/app-plann'}
                    target="_blank"
                    className='h-[500px] w-80 bg-glass rounded-xl p-8 flex overflow-hidden relative hover:scale-110 transition-all duration-300'
                >
                    <div className='flex flex-col gap-4'>
                        <div className='w-full flex flex-col gap-2'>
                            <h3 className='font-semibold text-2xl'>Plann.io</h3>
                            <p className='text-sm font-semibold opacity-85'>Software desenvolvido para organizar suas tarefas, atividades e objetivos de forma simples e intuitiva!</p>
                        </div>
                    </div>
                    <div className='absolute h-[400px] w-[710px] rounded-lg left-8 -bottom-16 shadow-lg bg-white flex gap-9'>
                        {/* <Image src={dashboardPagePetzone} alt='Home Page Petzone' fill className='rounded-lg' /> */}
                        <PlannBlock />
                    </div>

                    <ExternalLink className='absolute top-5 right-5 size-[18px]' />
                </Link>
            </div>
        </>
    )
}