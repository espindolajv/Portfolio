'use client'

import { useMyContext } from "@/context/context";
import { Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [status, setStatus] = useState<string | null>(null);

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubject = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSubject(event.target.value);
    };

    const { color } = useMyContext();

    const send = async () => {
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    from: email,
                    subject
                })
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar o e-mail');
            }

            const data = await response.json();
            console.log(data);

            setStatus('Mensagem enviada com sucesso!');
        } catch (error) {
            console.error(error);
            setStatus('Falha ao enviar a mensagem.');
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        send();
        setEmail('');
        setSubject('');
    };

    return (
        <section className="w-full flex flex-col justify-center items-center px-10 lg:px-72 sm:px-24 gap-20 xl:pb-24 pb-10 pt-0" id="contact-section">
            <div className="flex flex-col items-center">
                <h2 className="font-semibold sm:text-3xl text-2xl">Contato</h2>
                <h3 className="sm:text-xl text-lg italic opacity-70">Contact</h3>
            </div>

            <div className="w-full flex gap-4 justify-center">
                <div className="flex flex-col gap-6">
                    <p className="font-semibold lg:text-lg text-base lg:text-start text-center opacity-80">
                        Entre em contato atráves do meu email <span className="underline opacity-100 font-bold text-brand-4">joao.espmacedo@gmail.com</span> ou diretamente atráves deste formulário
                    </p>
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                onChange={handleEmail}
                                value={email}
                                placeholder="Digite seu email para contato"
                                className="p-4 rounded-xl bg-glass outline-none font-medium focus:scale-110 duration-300"
                            />
                            <textarea
                                placeholder="Sua mensagem..."
                                onChange={handleSubject}
                                value={subject}
                                className="p-4 rounded-xl bg-glass outline-none font-medium resize-none h-52 focus:scale-110 duration-300"
                            />
                        </div>
                        <div className="w-full flex justify-start">
                            <button
                                type="submit"
                                disabled={email === '' || subject === ''} // Habilita o botão apenas quando ambos os campos não estiverem vazios
                                className={`flex gap-2 font-semibold lg:text-lg text-base lg:w-auto w-full justify-center items-center ${color ? 'bg-zinc-800/85 text-white' : 'bg-white text-zinc-800'} rounded-xl px-4 py-2 hover:scale-110 duration-300 ${email === '' || subject === '' ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
                            >
                                <Send className="lg:size-5 size-4" strokeWidth={2.8} />
                                Enviar
                            </button>
                        </div>
                    </form>

                    {status && (
                        <p className={`mt-4 font-semibold animate-fade-in ${status.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
                            {status}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
