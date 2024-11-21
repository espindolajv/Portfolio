import { useEffect, useState } from "react";
import { PetzoneContent } from "./PetzoneContent";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Circle } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { PlannContent } from "./PlannContent";


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
        <section className="w-full p-8 flex flex-col items-center justify-center gap-20 relative xl:py-32 py-12" id='project-section'>
            <div className="flex flex-col items-center">
                <h2 className="font-semibold sm:text-3xl text-2xl">Meus Projetos</h2>
                <h3 className="sm:text-xl text-lg italic opacity-70">My projects</h3>
            </div>

            <div className="flex flex-col gap-3 items-center justify-center w-full overflow-x-hidden">
                <Carousel
                    opts={{
                        align: "center",
                        loop: true
                    }}
                    plugins={[Autoplay({ delay: 10000 })]}
                    setApi={setApi}
                    className="xl:max-w-[1300px]"
                >
                    <CarouselContent>

                        <CarouselItem>
                            <PetzoneContent />
                        </CarouselItem>

                        <CarouselItem>
                            <PlannContent />
                        </CarouselItem>

                        <CarouselItem >
                            <PetzoneContent />
                        </CarouselItem>

                    </CarouselContent>

                    <CarouselPrevious
                        className="size-10 bg-glass border-transparent absolute top-1/2 left-10 hover:bg-white/50 sm:flex hidden"
                    />
                    <CarouselNext
                        className="size-10 bg-glass border-transparent absolute top-1/2 right-10 hover:bg-white/50 sm:flex hidden"
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