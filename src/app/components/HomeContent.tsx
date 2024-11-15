import { Navbar } from "./Navbar";

export function HomeContent() {

    return (
        <div className="h-screen w-full flex flex-col items-center py-8 px-32"  id="home-section">
            <Navbar />
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