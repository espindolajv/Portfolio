'use client'

import { useMyContext } from "@/context/context";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


export function Navbar() {
    const { color, handleColor } = useMyContext()
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
                    onClick={handleColor}
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
    )
}