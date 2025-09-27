import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Full Ownership",
        description: "A team exclusively focused on your project, aligned with your business goals. Enjoy complete control over tasks, priorities, and delivery. This ensures the team works with your vision at the center.",
        imageId: "service-dedicated-team-1"
    },
    {
        title: "Seamless Collaboration",
        description: "Work directly with developers as an extension of your in-house staff. Communication flows smoothly, enabling better coordination and faster decision-making. It feels like having your own remote team.",
        imageId: "service-dedicated-team-2"
    },
    {
        title: "Transparent Process",
        description: "Get full visibility of progress, timelines, and resources at every stage. We keep you informed through regular updates and reports. This transparency builds trust and keeps projects on track.",
        imageId: "service-dedicated-team-3"
    },
    {
        title: "Long-Term Partnership",
        description: "Build a reliable development team committed to your ongoing success. Our teams adapt as your business grows, ensuring long-term value. This partnership is designed to deliver sustainable results.",
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
                When your project requires long-term commitment and a deep understanding of your business domain, a dedicated development team is the perfect solution. Creative Lines Digital provides a hand-selected team of professionals who act as a remote extension of your own, fully integrated and aligned with your goals.
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
