'use client';
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-md">
                <h3 className="text-base font-semibold uppercase text-primary tracking-wider">Testimonials</h3>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                    Hear From Our <span className="gradient-text">Esteemed Clients</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                    Our clients' success stories are the best measure of our own. Discover why businesses trust Binate Digital to bring their visions to life.
                </p>
            </div>
            <div className="relative">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                    {testimonials.map((testimonial) => (
                        <CarouselItem key={testimonial.id}>
                        <div className="p-1">
                            <Card className="shadow-lg">
                            <CardContent className="p-6 md:p-8 space-y-6">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground text-base md:text-lg italic">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-4 pt-4 border-t">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden">
                                        <Image
                                            src={testimonial.avatarUrl}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={testimonial.imageHint}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">{testimonial.name}</p>
                                        <p className="text-muted-foreground">{testimonial.company}</p>
                                    </div>
                                </div>
                            </CardContent>
                            </Card>
                        </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2" />
                </Carousel>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
