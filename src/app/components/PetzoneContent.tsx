
import { Cat, ExternalLink, Layers, Package } from 'lucide-react';
import { LogoBrand } from './LogoBrand';
import { PetzoneBlock } from './PetzoneBlock';
import Link from 'next/link';
import { useMyContext } from '@/context/context';

export function PetzoneContent() {
    const { color } = useMyContext()

    return (
        <>
            <div className="p-8 sm:flex hidden flex-col items-center sm:scale-75 lg:scale-100">
                <div className="h-[600px] w-[1050px] flex items-center justify-center gap-3">
                    <div className="w-2/3 h-full flex flex-col gap-3">
                        <div className="h-1/2 flex gap-3">
                            <div className="h-full w-1/2 bg-glass overflow-hidden px-8 py-6 rounded-2xl hover:scale-110 duration-300 hover:z-40">
                                <div className='text-wrap w-full flex flex-col gap-3'>
                                    <Cat />
                                    <div className='flex flex-col gap-8'>
                                        <div className='flex flex-col gap-2'>
                                            <h3 className='text-xl font-semibold'>Petzone</h3>
                                            <p className='opacity-70 text-sm text-semibold'>O PetZone é uma plataforma que facilita o cuidado e acompanhamento da saúde dos pets. Os donos podem registrar seus animais, acessar o histórico médico e agendar consultas com veterinários, promovendo uma gestão eficiente e organizada da saúde animal.</p>
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
                                                <LogoBrand name='postgresql' />
                                                <LogoBrand name='Zod' />
                                                <LogoBrand name='pusher' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-1/2 bg-glass overflow-hidden px-8 py-6 rounded-2xl hover:scale-110 duration-300 hover:z-40">
                            <div className='text-wrap w-full flex flex-col gap-3'>
                                <Package />
                                <div className='flex flex-col gap-8'>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='text-xl font-semibold'>Sobre o projeto</h3>
                                        <p className='opacity-70 text-sm text-semibold'>O PetZone é um projeto universitário desenvolvido para facilitar o cuidado e acompanhamento da saúde dos pets. A plataforma permite que os donos registrem seus pets, acessem o histórico médico e agendem consultas com veterinários cadastrados. O objetivo é proporcionar uma gestão mais eficiente da saúde animal, promovendo uma comunicação direta e organizada entre donos e profissionais.</p>
                                    </div>
                                    <div className='flex gap-2 w-full items-end justify-end'>
                                        <Link
                                            href={'https://github.com/luizjoliverceub/Petzone/tree/alter-pid-4'}
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
                                <p className='opacity-70 text-sm text-semibold'>Interação via chat, criação de carterinha de saúde, agendamento de consultas e muito mais!</p>
                            </div>
                        </div>
                        <div className='absolute h-[400px] w-[710px] rounded-lg left-7 bottom-10 shadow-lg bg-white flex gap-9'>
                            {/* <Image src={dashboardPagePetzone} alt='Home Page Petzone' fill className='rounded-lg' /> */}
                            <PetzoneBlock />
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
                    href={'https://github.com/luizjoliverceub/Petzone/tree/alter-pid-4'}
                    target="_blank"
                    className='h-[500px] w-80 bg-glass rounded-xl p-8 flex overflow-hidden relative hover:scale-110 transition-all duration-300'
                >
                    <div className='flex flex-col gap-4'>
                        <div className='w-full flex flex-col gap-2'>
                            <h3 className='font-semibold text-2xl'>Petzone</h3>
                            <p className='text-sm font-semibold opacity-85'>Software desenvolvido com o objetivo de facilitar os cuidados médicos do seu amiguinho!</p>
                        </div>
                    </div>
                    <div className='absolute h-[400px] w-[710px] rounded-lg left-8 -bottom-16 shadow-lg bg-white flex gap-9'>
                        {/* <Image src={dashboardPagePetzone} alt='Home Page Petzone' fill className='rounded-lg' /> */}
                        <PetzoneBlock />
                    </div>

                    <ExternalLink className='absolute top-5 right-5 size-[18px]' />
                </Link>
            </div>
        </>
    )
}