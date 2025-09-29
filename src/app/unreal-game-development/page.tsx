
import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Breathtaking Visuals",
        description: "Leverage Unreal Engine's cutting-edge rendering pipeline to create games with stunning, photorealistic graphics and cinematic-quality visuals that captivate players.",
        imageId: "service-unreal-1"
    },
    {
        title: "Advanced Gameplay Mechanics",
        description: "Utilize the powerful Blueprint visual scripting system and C++ to implement complex gameplay mechanics, advanced physics, and sophisticated AI systems.",
        imageId: "service-unreal-2"
    },
    {
        title: "Multiplatform Deployment",
        description: "Develop once and deploy everywhere. Unreal Engine provides a seamless workflow for releasing your game on PC, consoles, mobile, and VR platforms.",
        imageId: "service-unreal-3"
    },
    {
        title: "Scalable Open Worlds",
        description: "Build vast, immersive, and highly detailed open-world games. Unreal Engine's world-building tools are unmatched for creating expansive and performant environments.",
        imageId: "service-unreal-4"
    },
];

export default function UnrealGameDevelopment() {
  const image = PlaceHolderImages.find(img => img.id === 'service-unreal');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Unreal Engine Game Development"
        description="Create next-generation games with breathtaking visuals and unparalleled performance. We harness the power of Unreal Engine to build high-fidelity, immersive gaming experiences."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                When it comes to creating visually stunning and high-performance games, Unreal Engine stands in a class of its own. Creative Lines Digital's team of expert Unreal Engine developers specializes in pushing the boundaries of what's possible, creating AAA-quality games for PC, consoles, and mobile devices.
            </p>
            <p className="text-muted-foreground">
                We handle the entire game development lifecycle, from concept and prototyping to final release and post-launch support. Whether you're an indie developer with a unique vision or a large studio looking to scale your production, we provide the technical expertise and creative passion needed to build an unforgettable game with Unreal Engine.
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
