import Image from "next/image";
import { ContactButton } from "@/components/contact-button";
import { CheckCircle2 } from "lucide-react";
import { gameDevFeatures } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const GameDevSection = () => {
    const image = PlaceHolderImages.find(img => img.id === 'game-dev-1');

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Mobile <span className="gradient-text">Game Development</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            We craft unique mobile gaming experiences, combining innovative storytelling and cutting-edge technology to deliver unforgettable entertainment. Our team is dedicated to pushing the boundaries of mobile gameplay, ensuring every game is a standout adventure.
                        </p>
                        <ul className="space-y-4">
                            {gameDevFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">{feature.title}</h4>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4">
                            <ContactButton size="lg" />
                        </div>
                    </div>
                     <div className="relative h-96 w-full">
                        {image && (
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-cover rounded-lg shadow-lg"
                                data-ai-hint={image.imageHint}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameDevSection;
