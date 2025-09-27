import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Single Codebase, Multiple Platforms",
        description: "We write one codebase that runs on both iOS and Android. This approach saves time and resources, ensuring consistency across all devices without compromising quality.",
        imageId: "service-cross-platform-1"
    },
    {
        title: "Cost-Effective Development",
        description: "Reduce your development and maintenance costs significantly. Building a single app for two platforms means fewer developers, faster updates, and a lower total cost of ownership.",
        imageId: "service-cross-platform-2"
    },
    {
        title: "Wider Audience Reach",
        description: "Launch on the Apple App Store and Google Play Store simultaneously. Reach the entire mobile market from day one and maximize your app's visibility and user acquisition.",
        imageId: "service-cross-platform-3"
    },
    {
        title: "Simplified Maintenance & Updates",
        description: "Rolling out new features, updates, and bug fixes is faster and easier with a unified codebase. Maintain brand and functionality consistency across all platforms with ease.",
        imageId: "service-cross-platform-4"
    },
];

export default function CrossPlatformApps() {
  const image = PlaceHolderImages.find(img => img.id === 'service-cross-platform');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Cross-Platform App Development"
        description="Reach a wider audience faster and more efficiently. We build high-quality apps for both iOS and Android from a single codebase using modern frameworks like React Native and Flutter."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                In a world dominated by both iOS and Android, cross-platform development offers a strategic advantage. Creative Lines Digital creates beautiful, high-performance mobile apps that run seamlessly on both platforms, allowing you to save time, reduce costs, and reach your entire target market with a single product.
            </p>
            <p className="text-muted-foreground">
                Our developers are experts in leading cross-platform frameworks like React Native and Flutter. We craft applications that provide a native-like look, feel, and performance, ensuring your users have a top-tier experience, regardless of their device. From initial design to deployment, we deliver a unified and efficient development process.
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
