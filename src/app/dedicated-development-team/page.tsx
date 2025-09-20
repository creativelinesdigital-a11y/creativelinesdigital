import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Full Project Ownership",
        description: "Your dedicated team works exclusively on your project, ensuring deep focus, commitment, and alignment with your long-term vision.",
        imageId: "service-dedicated-team-1"
    },
    {
        title: "Handpicked Expertise",
        description: "We assemble a team with the precise skills and experience your project requires, from front-end and back-end developers to UI/UX designers and QA engineers.",
        imageId: "service-dedicated-team-2"
    },
    {
        title: "Complete Transparency and Control",
        description: "You have full control over the development process, with direct communication, regular reporting, and complete transparency into the team's progress.",
        imageId: "service-dedicated-team-3"
    },
    {
        title: "Scalability and Flexibility",
        description: "Easily scale your team up or down based on project demands, ensuring you always have the right resources at the right time.",
        imageId: "service-dedicated-team-4"
    },
];

export default function DedicatedDevelopmentTeam() {
  const image = PlaceHolderImages.find(img => img.id === 'service-dedicated-team');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Dedicated Development Team"
        description="Build your vision with a handpicked team of experts committed to your success. Our dedicated development team model provides a full-fledged, scalable, and efficient solution for your long-term projects."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                When your project requires long-term commitment and a deep understanding of your business domain, a dedicated development team is the perfect solution. Binate Digital provides a hand-selected team of professionals who act as a remote extension of your own, fully integrated and aligned with your goals.
            </p>
            <p className="text-muted-foreground">
                This model gives you access to a stable, scalable, and highly skilled team without the complexities of in-house recruitment and management. We handle the administrative overhead, while you get a team that is 100% focused on bringing your product to life, from initial concept to launch and beyond.
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
