'use client'

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HomeContent({ handle, color }: { handle: () => void, color: boolean }) {
    const [classScroll, setClassScroll] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setClassScroll('bg-glass-darker')
            } else {
                setClassScroll('')
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div className="h-screen w-full flex flex-col items-center py-8 px-32"  id="home-section">
            <div className="w-full flex justify-end">
                <nav className={`${classScroll} flex px-2 py-2 font-medium justify-end items-center gap-3 rounded-full fixed z-50 duration-300`}>
                    <Link href={'#home-section'} className={`px-3 py-1 ${color ? 'hover:bg-white/70' : 'hover:bg-black/40'} rounded-full duration-300`}>
                        Início
                    </Link>
                    <Link href={'#project-section'} className={`px-3 py-1 ${color ? 'hover:bg-white/70' : 'hover:bg-black/40'} rounded-full duration-300`}>
                        Meus Projetos
                    </Link>
                    <Link href={'#aboutme-section'} className={`px-3 py-1 ${color ? 'hover:bg-white/70' : 'hover:bg-black/40'} rounded-full duration-300`}>
                        Sobre mim
                    </Link>
                    <Link href={''} className={`px-3 py-1 ${color ? 'hover:bg-white/70' : 'hover:bg-black/40'} rounded-full duration-300`}>
                        Contato
                    </Link>
                    <button
                        onClick={handle}
                        className={`p-1.5 rounded-full cursor-pointer ${color ? 'hover:bg-white/70' : 'hover:bg-black/40'} duration-300`}
                    >
                        {
                            color ?
                                <Sun className="size-5 animate-fade-in" strokeWidth={2.8} /> :
                                <Moon className="size-5 animate-fade-in" strokeWidth={2.8} />
                        }
                    </button>
                </nav>
            </div>

            <section className="flex h-full justify-end items-center px-44">
                <div className="flex flex-col gap-12 w-1/2">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-4xl font-semibold">Olá, sou João Victor Macedo e esse é meu Portfólio.</h2>
                        <h3 className="text-2xl italic">Programador FullStack Júnior</h3>
                    </div>
                    <p className="text-xl">Um programador júnior fullstack possui habilidades tanto no desenvolvimento frontend quanto backend. Ele deve conhecer linguagens como HTML, CSS e JavaScript para criar interfaces de usuário atraentes e funcionais.</p>
                </div>
            </section>
        </div>
    )
}