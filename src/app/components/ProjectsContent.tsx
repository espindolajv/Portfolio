
import { Cat, Layers, Package } from 'lucide-react';
import dashboardPagePetzone from '../../../public/Petzone_Dashboard.png'
import Image from "next/image";
import { LogoBrand } from './LogoBrand';

export function ProjectsContent() {
    return (
        <>
            <div className="p-8 flex flex-col items-center">
                <div className="h-[600px] w-[1050px] flex items-center justify-center gap-3">
                    <div className="w-2/3 h-full flex flex-col gap-3">
                        <div className="h-1/2 flex gap-3">
                            <div className="h-full w-1/2 bg-glass overflow-hidden px-8 py-6 rounded-2xl hover:scale-110 duration-300 hover:z-40">
                                <div className='text-wrap w-full flex flex-col gap-3'>
                                    <Cat />
                                    <div className='flex flex-col gap-8'>
                                        <div className='flex flex-col gap-2'>
                                            <h3 className='text-xl font-semibold'>Petzone</h3>
                                            <p className='opacity-70 text-sm text-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, repudiandae.</p>
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
                                                <p className='opacity-70 text-sm text-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
                                        <p className='opacity-70 text-sm text-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos sunt itaque doloremque quae a natus quibusdam animi facere aspernatur nam sit, exercitationem deleniti fugit consequatur quidem tempora aut atque maxime voluptas praesentium molestias architecto! Molestiae veniam expedita quia, id ad mollitia ipsa in nulla. Dicta repellendus in magni ullam eligendi. Molestiae porro ipsum, fugiat sequi et consectetur aliquam necessitatibus veritatis.</p>
                                    </div>
                                    <div className='flex gap-2 w-full items-end justify-end'>
                                        <button className='px-4 py-1 bg-zinc-800 rounded-lg text-white font-bold hover:shadow-xl duration-300'>Documentação</button>
                                        <button className='px-4 py-1 bg-brand-5 rounded-lg text-zinc-950 font-bold hover:shadow-xl duration-300'>Github</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-1/3 bg-glass relative overflow-hidden px-8 py-6 rounded-2xl hover:scale-110 duration-300 hover:z-40">
                        <div className='text-wrap w-1/2 flex flex-col gap-3'>
                            <Package />
                            <div>
                                <h3 className='text-xl font-semibold'>Serviços</h3>
                                <p className='opacity-70 text-sm text-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className='absolute h-[400px] w-[710px] rounded-md left-7 bottom-10 shadow-lg'>
                            <Image src={dashboardPagePetzone} alt='Home Page Petzone' fill className='rounded-lg' />
                        </div>
                    </div>
                </div>

                <div className='hidden transition-transform duration-300 transform hover:scale-x-125 bg-blue-500 w-32 h-32'></div>
                <label htmlFor="check" className='hidden h-10 w-20 rounded-full bg-white relative'>
                    <input type="checkbox" className='sr-only peer' id='check' />
                    <span className='h-6 w-6 rounded-full bg-blue-600 absolute top-1.5 left-1.5 transition-all peer-checked:bg-red-500 peer-checked:left-12 duration-300'></span>
                </label>
            </div>
        </>
    )
}