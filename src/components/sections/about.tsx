import Image from "next/image";
import { ContactButton } from "@/components/contact-button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const AboutSection = () => {
    const image = PlaceHolderImages.find(img => img.id === 'about-1');

    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-80 md:h-full w-full">
                        {image && (
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-cover rounded-lg shadow-lg"
                                data-ai-hint={image.imageHint}
                            />
                        )}
                         <div className="absolute -bottom-4 -right-4 -top-4 -left-4 border-2 border-primary rounded-lg -z-10 transform rotate-[-2deg]"></div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Empowering Digital Transformation: <span className="gradient-text">Global Solutions for a Competitive World</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            In today's rapidly evolving digital landscape, businesses face increasing pressure to stay ahead of the curve. To succeed, companies must innovate and adapt, yet many struggle to dedicate the necessary resources to fully realize their potential.
                        </p>
                        <p className="text-muted-foreground">
                            Creative Lines Digital offers the solution. As a leading global digital tech company, we specialize in crafting innovative digital experiences that drive transformation. From strategy and design to development and deployment, our team works with you to deliver solutions tailored to your business objectives. Whether you're looking to optimize operations, enhance customer engagement, or leverage emerging technologies, we provide the expertise to turn your vision into reality.
                        </p>
                        <div className="pt-4">
                            <ContactButton size="lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
