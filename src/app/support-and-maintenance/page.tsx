import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "24/7 Technical Support",
        description: "Our dedicated support team is available around the clock to address any issues, ensuring your application runs smoothly and minimizing downtime for your business.",
        imageId: "service-support-maintenance-1"
    },
    {
        title: "Proactive Updates & Patches",
        description: "We stay ahead of the curve by applying regular updates, security patches, and performance enhancements to keep your software modern, secure, and efficient.",
        imageId: "service-support-maintenance-2"
    },
    {
        title: "Performance Monitoring",
        description: "We continuously monitor your application's performance, identifying and resolving potential bottlenecks before they impact your users.",
        imageId: "service-support-maintenance-3"
    },
    {
        title: "Dedicated Customer Care",
        description: "Receive personalized attention and timely responses from a team that understands your application and business goals, ensuring a long-term, successful partnership.",
        imageId: "service-support-maintenance-4"
    },
];

export default function SupportAndMaintenance() {
  const image = PlaceHolderImages.find(img => img.id === 'service-support-maintenance');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Support & Maintenance"
        description="Ensure your application remains performant, secure, and up-to-date with our reliable support and maintenance services. We keep your software running smoothly so you can focus on your business."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Launching an application is just the beginning. To ensure its long-term success, continuous support and maintenance are crucial. Binate Digital offers comprehensive support packages designed to keep your software secure, stable, and aligned with the latest technology trends.
            </p>
            <p className="text-muted-foreground">
                Our team acts as an extension of yours, providing proactive monitoring, timely updates, and rapid bug fixes. We take care of the technical details, so you can have peace of mind knowing your application is in expert hands, allowing you to focus on growth and innovation.
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

    