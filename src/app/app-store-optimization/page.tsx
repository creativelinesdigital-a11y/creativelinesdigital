import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Keyword Optimization",
        description: "Boost app visibility with targeted and trending keywords. We research and implement strategies that align with user search behavior. This helps your app rank higher and reach more potential users.",
        imageId: "service-aso-1"
    },
    {
        title: "High-Quality Creatives",
        description: "Optimize icons, screenshots, and videos to attract more downloads. Engaging visuals create a strong first impression and improve conversion rates. This drives both installs and brand recognition.",
        imageId: "service-aso-2"
    },
    {
        title: "Better App Rankings",
        description: "Improve your position in app stores with proven ASO strategies. From metadata updates to review management, we cover all aspects. A higher rank means more organic traffic and installs.",
        imageId: "service-aso-3"
    },
    {
        title: "Increased Conversions",
        description: "Turn impressions into installs through optimized descriptions and reviews. We highlight your app’s strengths to maximize downloads. Every element is refined to deliver measurable results.",
        imageId: "service-aso-4"
    },
];

export default function AppStoreOptimization() {
  const image = PlaceHolderImages.find(img => img.id === 'service-aso');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="App Store Optimization (ASO)"
        description="Increase your app's visibility and drive organic downloads with our expert App Store Optimization services. We help you rank higher, convert more users, and stand out in a crowded marketplace."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Having a great app is only half the battle. To succeed, your app needs to be discoverable. App Store Optimization (ASO) is the key to improving your app's visibility in the Apple App Store and Google Play Store, leading to increased organic downloads from high-quality users.
            </p>
            <p className="text-muted-foreground">
                At Creative Lines Digital, our ASO experts use a data-driven approach to enhance your app's presence. We analyze your market, competitors, and target audience to develop a comprehensive strategy that covers all aspects of your app store listing, driving sustainable growth and maximizing your return on investment.
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
