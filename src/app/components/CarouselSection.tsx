import { useEffect, useState } from "react";
import { ProjectsContent } from "./ProjectsContent";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Circle } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";


export function CarouselSection() {
    const [api, setApi] = useState<CarouselApi | undefined>(undefined);  // Para armazenar a API do carrossel
    const [current, setCurrent] = useState(1);  // Para armazenar o slide atual

    // Atualiza o índice do slide quando o carrossel seleciona um novo
    useEffect(() => {
        if (api) {
            setCurrent(api.selectedScrollSnap() + 1);  // Índice do slide atual (1-based)

            api.on("select", () => {
                setCurrent(api.selectedScrollSnap() + 1);  // Atualiza o slide atual quando o usuário navega
            });
        }
    }, [api]);

    return (
        <section className="w-full p-8 flex flex-col items-center gap-20 relative py-32" id='project-section'>
            <div className="flex flex-col items-center">
                <h2 className="font-semibold text-3xl">Meus Projetos</h2>
                <h3 className="text-xl italic">My projects</h3>
            </div>

            <div className="flex flex-col gap-3 items-center justify-center">
                <Carousel
                    opts={{
                        align: "center",
                        loop: true
                    }}
                    plugins={[Autoplay({ delay: 10000 })]}
                    setApi={setApi}
                >
                    <CarouselContent>

                        <CarouselItem >
                            <ProjectsContent />
                        </CarouselItem>

                        <CarouselItem className="mx-32">
                            <ProjectsContent />
                        </CarouselItem>

                        <CarouselItem >
                            <ProjectsContent />
                        </CarouselItem>

                    </CarouselContent>

                    <CarouselPrevious
                        className="size-10 bg-glass border-transparent absolute top-1/2 left-1/3 hover:bg-white/50"
                    />
                    <CarouselNext
                        className="size-10 bg-glass border-transparent absolute top-1/2 right-1/3 hover:bg-white/50"
                    />
                </Carousel>

                <div className="flex gap-4">
                    <Circle className={`size-3.5 ${current === 1 ? '' : 'opacity-25'} duration-300`} strokeWidth={3}/>
                    <Circle className={`size-3.5 ${current === 2 ? '' : 'opacity-25'} duration-300`} strokeWidth={3}/>
                    <Circle className={`size-3.5 ${current === 3 ? '' : 'opacity-25'} duration-300`} strokeWidth={3}/>                    
                </div>
            </div>

        </section>
    )
}