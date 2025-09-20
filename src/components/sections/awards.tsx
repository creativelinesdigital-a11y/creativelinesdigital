'use client';
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { awards } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay"

const AwardsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Awards & <span className="gradient-text">Accomplishments</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We're proud of the recognition we've received for our commitment to excellence and innovation in the digital space.
          </p>
        </div>
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                  delay: 2000,
                }),
            ]}
            className="w-full"
        >
          <CarouselContent>
            {awards.map((award) => (
              <CarouselItem key={award.id} className="md:basis-1/3 lg:basis-1/5">
                <div className="p-1">
                  <Card className="flex items-center justify-center p-6 h-40 bg-secondary border-none shadow-none">
                    <div className="relative w-full h-20">
                      <Image
                        src={award.imageUrl}
                        alt={award.alt}
                        fill
                        className="object-contain"
                        data-ai-hint={award.imageHint}
                      />
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default AwardsSection;
