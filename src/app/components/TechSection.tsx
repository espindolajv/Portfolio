import Autoplay from "embla-carousel-autoplay";
import { stacks } from "./LogoBrand";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";


export function TechSection() {
    return (
        <section className="w-full flex justify-center items-center py-2 min-h-32">
            <Carousel
                opts={{
                    align: "center",
                    loop: true
                }}
                plugins={[Autoplay({ delay: 3000 })]}
                className="w-full"
            >
                <CarouselContent>

                    {stacks.map((item, index) => (
                        <CarouselItem key={index} className="xl:basis-1/12 basis-1/4 relative group flex flex-col justify-center items-center"
                            aria-label={item.name}
                        >
                            <div className="sm:text-5xl text-4xl rounded-xl p-2 h-20 w-20 flex items-center justify-center opacity-35 group-hover:opacity-100 duration-300 transition-transform transform group-hover:scale-125">
                                {item.logo}
                            </div>

                            <span className="opacity-0 group-hover:opacity-100 px-2 py-1 rounded-xl justify-center items-center text-sm font-semibold duration-300 animate-fade-in text-nowrap">{item.name}</span>
                        </CarouselItem>
                    ))}

                </CarouselContent>

            </Carousel>
        </section>
    )
}