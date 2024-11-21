import { Navbar } from "./Navbar";
import { TechSection } from "./TechSection";

export function HomeContent() {

    return (
        <div className="h-screen w-full flex flex-col items-center py-8" id="home-section">
            <div className="w-full xl:px-36 flex xl:justify-end justify-center">
                <Navbar />
            </div>
            <div className="flex-1 flex justify-center items-center px-10 lg:px-72 sm:px-24 gap-20">
                <div className="w-1/2 h-2/3 bg-glass rounded-xl xl:flex hidden" />

                <div className="flex flex-col gap-12 xl:w-1/2 sm:w-full text-start justify-center items-center">
                    <div className="flex flex-col gap-3">
                        <h2 className="lg:text-4xl text-3xl font-semibold">Olá, sou João Victor Macedo e esse é meu Portfólio.</h2>
                        <h3 className="lg:text-2xl text-xl italic">Desenvolvedor FullStack</h3>
                    </div>
                    <p className="lg:text-xl text-base">Um programador júnior fullstack possui habilidades tanto no desenvolvimento frontend quanto backend. Ele deve conhecer linguagens como HTML, CSS e JavaScript para criar interfaces de usuário atraentes e funcionais.</p>
                </div>
            </div>
            <div className="w-full sm:hidden">
                <TechSection />
            </div>
        </div>
    )
}