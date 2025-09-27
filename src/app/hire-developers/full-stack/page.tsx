import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "End-to-End Development Expertise",
        description: "Our full-stack developers handle everything from frontend UI to backend logic and database management. Get a complete, cohesive solution from a single, versatile expert.",
        imageId: "hire-dev-feature-1"
    },
    {
        title: "Versatile Technology Proficiency",
        description: "We provide developers skilled in a wide range of technologies, including NodeJS, Python, React, Angular, and various database systems. Whatever your stack, we have the talent for it.",
        imageId: "hire-dev-feature-2"
    },
    {
        title: "Faster Problem-Solving",
        description: "Full-stack developers can troubleshoot issues across the entire application, leading to faster resolutions and less downtime. They see the big picture and understand how all the parts connect.",
        imageId: "hire-dev-feature-3"
    },
    {
        title: "Cost-Effective and Efficient",
        description: "Hiring a single full-stack developer can be more cost-effective than hiring separate frontend and backend specialists. Streamline communication and accelerate your project timeline.",
        imageId: "hire-dev-feature-4"
    },
];

export default function HireFullStackDevelopers() {
  const image = PlaceHolderImages.find(img => img.id === 'hire-full-stack');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Hire Full-Stack Developers"
        description="Build robust, end-to-end web applications with our expert full-stack developers. We provide versatile talent that can master both the frontend and backend to deliver a complete solution."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Simplify your development process and accelerate your timeline by hiring our expert full-stack developers. Binate Digital provides versatile professionals who are proficient in both client-side and server-side technologies, capable of taking your project from concept to completion.
            </p>
            <p className="text-muted-foreground">
                Our full-stack developers have a holistic understanding of the entire development process, enabling them to build seamless, well-integrated applications. Whether you need to build a new product from scratch or maintain an existing one, our experts provide the comprehensive skills you need.
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
    