import { House, MessageCircle, PawPrint, Activity, Newspaper } from "lucide-react";
import { ButtonNav } from "./ButtonNav";

export function PetzoneBlock() {
    return (
        <>
            <div className='w-[255px] h-full bg-[#0F1431] px-4 pb-4 pt-7 text-2xl flex flex-col gap-11 rounded-tl-lg rounded-bl-lg'>
                <div className='px-4 cursor-default'>
                    <h3 className='text-[#4D98FF] font-semibold'>Petzone</h3>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <ButtonNav
                        title="Inicio"
                        icon={House}
                        first
                    />

                    <ButtonNav
                        title="Mensagens"
                        icon={MessageCircle}
                        isChat
                    />

                    <ButtonNav
                        title="Meus Pets"
                        icon={PawPrint}
                    />

                    <ButtonNav
                        title="Consultas"
                        icon={Activity}
                    />

                    <ButtonNav
                        title="Noticias e Dicas"
                        icon={Newspaper}
                    />
                </div>
            </div>

            <div className="py-7 flex flex-col gap-6 cursor-default">
                <h2 className="text-[#0F1431] font-bold text-4xl">Bem vindo</h2>
                <div className="h-36 w-20 bg-zinc-200 rounded-xl p-3">
                    <h3 className="font-semibold text-zinc-800">Mensagens</h3>
                </div>
                <div className="h-36 w-20 bg-zinc-200 rounded-xl p-3">
                    <h3 className="font-semibold text-zinc-800">Consultas</h3>
                </div>
            </div>
        </>
    )
}