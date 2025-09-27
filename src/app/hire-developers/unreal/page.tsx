import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Photorealistic Graphics Experts",
        description: "Our Unreal Engine developers are masters of creating breathtaking, cinematic visuals. Hire our team to build games and experiences that push the boundaries of graphical fidelity.",
        imageId: "hire-dev-feature-1"
    },
    {
        title: "Complex Gameplay and AI Programming",
        description: "We provide developers proficient in both C++ and Blueprints, capable of implementing complex gameplay mechanics, advanced physics, and sophisticated AI systems for your project.",
        imageId: "hire-dev-feature-2"
    },
    {
        title: "Multi-Platform Development Specialists",
        description: "From PC and consoles to mobile and VR, our Unreal developers have the experience to deploy your project across a wide range of platforms, maximizing your reach.",
        imageId: "hire-dev-feature-3"
    },
    {
        title: "Vetted and Passionate Game Developers",
        description: "Hire developers who are not just coders, but passionate gamers and creators. We provide talent that is dedicated to building high-quality, immersive, and unforgettable experiences.",
        imageId: "hire-dev-feature-4"
    },
];

export default function HireUnrealDevelopers() {
  const image = PlaceHolderImages.find(img => img.id === 'hire-unreal');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Hire Unreal Engine Developers"
        description="Create next-generation games and real-time 3D experiences. Our expert Unreal Engine developers harness the power of the world's most advanced real-time 3D creation tool."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Bring your most ambitious creative visions to life with Binate Digital's elite Unreal Engine developers. Whether you're building a AAA game, a cinematic experience, or a real-time architectural visualization, we provide the specialized talent you need to succeed.
            </p>
            <p className="text-muted-foreground">
                Our developers are experts in C++, Blueprints, and the full suite of Unreal Engine's powerful features. By hiring our team, you gain access to a pool of passionate and skilled professionals who can deliver stunning visuals, complex gameplay, and unparalleled performance.
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
    