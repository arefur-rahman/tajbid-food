"use client";

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

function Hero() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [activeSlide, setActiveSlide] = React.useState(0);
    const carouselBanners = [
        {
            src: "/black_seed_oil.jpeg",
            alt: "Tajbid black seed oil special offer",
        },
        {
            src: "/mustard_honey.jpg",
            alt: "Tajbid mustard flower honey special offer",
        },
    ];

    React.useEffect(() => {
        if (!api) return;

        const updateActiveSlide = () => {
            setActiveSlide(api.selectedScrollSnap());
        };

        updateActiveSlide();
        api.on("select", updateActiveSlide);

        return () => {
            api.off("select", updateActiveSlide);
        };
    }, [api]);

    React.useEffect(() => {
        if (!api) return;

        const autoplay = window.setInterval(() => {
            if (document.visibilityState === "visible") {
                api.scrollNext();
            }
        }, 5000);

        return () => {
            window.clearInterval(autoplay);
        };
    }, [api]);

    return (
        <section className="px-4 py-5 sm:px-6 lg:px-8 lg:py-2">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                <div className="flex min-h-0 flex-col lg:col-span-8">
                    <Carousel
                        setApi={setApi}
                        opts={{ loop: true }}
                        className="group flex h-full flex-col"
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white shadow-xl shadow-primary/10">
                            <CarouselContent className="ml-0">
                                {carouselBanners.map((banner) => (
                                    <CarouselItem
                                        key={banner.src}
                                        className="pl-0"
                                    >
                                        <div className="relative aspect-1632/656 w-full">
                                            <Image
                                                src={banner.src}
                                                alt={banner.alt}
                                                fill
                                                priority={
                                                    banner.src ===
                                                    carouselBanners[0].src
                                                }
                                                sizes="(max-width: 1024px) 100vw, 66vw"
                                                className="object-cover"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious
                                aria-label="Previous offer"
                                className="left-3 border-white/70 bg-white/90 text-primary opacity-0 shadow-md transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 disabled:opacity-0"
                            />
                            <CarouselNext
                                aria-label="Next offer"
                                className="right-3 border-white/70 bg-white/90 text-primary opacity-0 shadow-md transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 disabled:opacity-0"
                            />
                        </div>
                        <div className="mt-3 flex items-center justify-end px-1 mr-3">
                            <div
                                className="flex items-center gap-2"
                                aria-label="Choose an offer"
                            >
                                {carouselBanners.map((banner, index) => (
                                    <button
                                        key={banner.src}
                                        type="button"
                                        aria-label={`Show offer ${index + 1}`}
                                        aria-current={activeSlide === index}
                                        onClick={() => api?.scrollTo(index)}
                                        className={cn(
                                            "h-2 rounded-full bg-primary/25 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                                            activeSlide === index
                                                ? "w-8 bg-primary"
                                                : "w-2",
                                        )}
                                    />
                                ))}
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/70 bg-white shadow-xl shadow-primary/10 lg:col-span-4">
                    <Image
                        src="/square_banner.jpeg"
                        alt="Tajbid kodu oil special offer"
                        fill
                        sizes="(max-width: 1024px) 100vw, 34vw"
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
