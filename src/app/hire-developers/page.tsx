
import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Vetted, Top-Tier Talent",
        description: "Gain access to our pool of pre-vetted, highly skilled developers. We rigorously assess every candidate to ensure they possess the technical expertise and problem-solving skills your project demands.",
        imageId: "hire-dev-feature-1"
    },
    {
        title: "Flexible Engagement Models",
        description: "Choose the hiring model that best suits your needs, from individual developers to full teams. Our flexible arrangements allow you to scale your workforce up or down as your project requirements evolve.",
        imageId: "hire-dev-feature-2"
    },
    {
        title: "Seamless Integration",
        description: "Our developers are experts at integrating into existing teams and workflows. They quickly adapt to your company culture and development processes, ensuring a smooth and productive collaboration.",
        imageId: "hire-dev-feature-3"
    },
    {
        title: "Dedicated to Your Success",
        description: "We provide developers who are not just coders, but partners in your success. They are committed to understanding your goals and delivering high-quality solutions that drive business value.",
        imageId: "hire-dev-feature-4"
    },
];

export default function HireDevelopers() {
  const image = PlaceHolderImages.find(img => img.id === 'hire-developers');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Hire Dedicated Developers"
        description="Build your dream team with our elite developers. We provide top-tier, vetted talent to help you scale your projects, accelerate development, and achieve your business goals."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Finding and retaining top development talent is one of the biggest challenges in the tech industry. Creative Lines Digital solves this by connecting you with our pool of world-class developers, available to join your team and start contributing from day one.
            </p>
            <p className="text-muted-foreground">
                Whether you need to fill a specific skill gap, scale your team for a new project, or build a long-term development powerhouse, our 'Hire Developers' service provides the flexibility and expertise you need. We handle the recruitment and vetting, so you can focus on building great products.
            </p>

            <div className="space-y-16 pt-12">
                {features.map((feature, index) => {
                    const featureImage = PlaceHolderImages.find(img => img.id === feature.imageId);
                    const isReversed = index % 2 !== 0;
                    return (
                        <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                            <div className={`relative h-80 w-full ${isReversed ? 'md:order-last' : ''}`}>
                                {featureImage && (
                                    <Image
                                        src={featureImage.imageUrl}
                                        alt={featureImage.description}
                                        fill
                                        className="object-cover rounded-lg shadow-lg"
                                        data-ai-hint={featureImage.imageHint}
                                    />
                                )}
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-2xl">{feature.title}</h3>
                                <p className="text-muted-foreground text-lg">{feature.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </ServicePageLayout>
  );
}
    
