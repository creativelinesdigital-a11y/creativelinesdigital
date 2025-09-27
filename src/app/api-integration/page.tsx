import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Custom API Development",
        description: "We build tailored APIs that expose your business data and functionality in a secure, reliable, and scalable way, enabling new products and services.",
        imageId: "service-api-integration-1"
    },
    {
        title: "Third-Party Integrations",
        description: "Seamlessly connect your applications with popular third-party services, from payment gateways and social media to CRMs and marketing automation platforms.",
        imageId: "service-api-integration-2"
    },
    {
        title: "Data Synchronization",
        description: "Ensure consistency across your entire software ecosystem. We implement robust data synchronization solutions that keep your information up-to-date in real-time.",
        imageId: "service-api-integration-3"
    },
    {
        title: "API Management & Security",
        description: "We provide comprehensive API management services, including documentation, versioning, monitoring, and security to ensure your APIs are high-performing and protected.",
        imageId: "service-api-integration-4"
    },
];

export default function ApiIntegration() {
  const image = PlaceHolderImages.find(img => img.id === 'service-api-integration');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="API Integration Services"
        description="Connect your applications, automate workflows, and unlock new capabilities with our expert API integration and development services. We build the bridges that make your software work together."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                In today's interconnected digital world, no application is an island. API (Application Programming Interface) integration is the key to unlocking the full potential of your software by enabling different systems to communicate, share data, and automate processes.
            </p>
            <p className="text-muted-foreground">
                Binate Digital specializes in creating seamless and robust API integrations. Whether you need to connect to a third-party service, build a custom API for your own product, or orchestrate complex workflows between multiple applications, our team has the expertise to deliver a solution that is both powerful and reliable.
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

    