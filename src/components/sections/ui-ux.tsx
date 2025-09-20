import Image from "next/image";
import { uiUxFeatures } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { ContactButton } from "../contact-button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

const UiUxSection = () => {
    const image = PlaceHolderImages.find(img => img.id === 'uiux-1');

    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Custom <span className="gradient-text">UI/UX Design and Development</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 text-lg">
                        Just like appearance is one of the first things people notice, the user interface is the first thing noticed by visitors. At Binate Digital, we understand the importance of making a great first impression.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="space-y-8">
                        {uiUxFeatures.slice(0, 2).map((feature, index) => (
                            <div key={index} className="flex gap-4 items-start text-right lg:text-left">
                                <div className="text-right">
                                    <h4 className="font-semibold text-lg">{feature.title}</h4>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                                <CheckCircle className="h-10 w-10 text-primary shrink-0"/>
                            </div>
                        ))}
                    </div>
                    
                    <div className="relative h-[500px] w-full max-w-xs mx-auto">
                       {image && (
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-contain"
                                data-ai-hint={image.imageHint}
                            />
                        )}
                    </div>

                    <div className="space-y-8">
                         {uiUxFeatures.slice(2, 4).map((feature, index) => (
                            <div key={index} className="flex gap-4 items-start text-left">
                                <CheckCircle className="h-10 w-10 text-primary shrink-0"/>
                                <div>
                                    <h4 className="font-semibold text-lg">{feature.title}</h4>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                 <div className="text-center mt-12">
                    <ContactButton size="lg" />
                </div>
            </div>
        </section>
    );
}

export default UiUxSection;
