import { useMyContext } from "@/context/context";
import { Send } from "lucide-react";

export function ContactSection() {
    const { color } = useMyContext()

    return (
        <section className="w-full flex flex-col justify-center items-center px-10 lg:px-72 sm:px-24 gap-20 xl:pb-24 pb-10 pt-0" id="contact-section">
            <div className="flex flex-col items-center">
                <h2 className="font-semibold sm:text-3xl text-2xl">Contato</h2>
                <h3 className="sm:text-xl text-lg italic opacity-70">Contact</h3>
            </div>

            <div className="w-full flex gap-4 justify-center">
                <div className="flex flex-col gap-6">
                    <p className="font-semibold lg:text-lg text-base lg:text-start text-center opacity-80">Entre em contato atráves do meu email <span className="underline opacity-100 font-bold text-brand-4">joao.espmacedo@gmail.com</span> ou diretamente atráves deste formulário</p>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-3">
                            <input type="text" placeholder="Digite seu email para contato" className="p-4 rounded-xl bg-glass outline-none font-medium focus:scale-110 duration-300" />
                            <textarea placeholder="Sua mensagem..." className="p-4 rounded-xl bg-glass outline-none font-medium resize-none h-52 focus:scale-110 duration-300" />
                        </div>
                        <div className="w-full flex justify-start">
                            <button className={`flex gap-2 font-semibold lg:text-lg text-base lg:w-auto w-full justify-center items-center ${color ? 'bg-zinc-800/85 text-white' : 'bg-white text-zinc-800'} rounded-xl px-4 py-2 hover:scale-110 duration-300`}><Send className="lg:size-5 size-4" strokeWidth={2.8} /> Enviar </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}