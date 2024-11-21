import { useMyContext } from "@/context/context";

export function Footer() {
    const { color } = useMyContext()

    return (
        <footer className="w-full px-10 lg:px-24 flex flex-col gap-4 py-4 justify-center items-center">
            <div className={`${color ? 'bg-zinc-800/10' : 'bg-glass'} w-full h-0.5 rounded-full`} />

            <div>
                <p className="font-medium text-xs opacity-30">©2024 Joao Macedo. Todos os direitos reservados</p>
            </div>
        </footer>
    )
}