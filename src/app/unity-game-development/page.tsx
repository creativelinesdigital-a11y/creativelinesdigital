
import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Cross-Platform Reach",
        description: "With Unity, we build games that can be deployed to over 25 different platforms, including iOS, Android, PC, and consoles, all from a single codebase.",
        imageId: "service-unity-1"
    },
    {
        title: "Rich Ecosystem",
        description: "We accelerate development by leveraging the vast Unity Asset Store, which provides a wealth of pre-built tools, assets, and extensions to bring your game to life faster.",
        imageId: "service-unity-2"
    },
    {
        title: "Versatile 2D & 3D Development",
        description: "Whether you're imagining a charming 2D platformer or a complex 3D open-world adventure, Unity provides a flexible and powerful toolset for any genre.",
        imageId: "service-unity-3"
    },
    {
        title: "High-Performance Graphics",
        description: "Unity's adaptable render pipelines allow us to create beautiful, optimized graphics that run smoothly on a wide range of hardware, from mobile phones to high-end PCs.",
        imageId: "service-unity-4"
    },
];

export default function UnityGameDevelopment() {
  const image = PlaceHolderImages.find(img => img.id === 'service-unity');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Unity Game Development"
        description="Bring your game ideas to life with the world's most popular development platform. We create engaging and successful games for mobile, PC, and console using Unity."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Unity is the engine of choice for millions of game developers around the world, and for good reason. Its flexibility, powerful features, and cross-platform capabilities make it the ideal choice for projects of any scale. At Creative Lines Digital, our seasoned Unity developers create captivating games that resonate with players.
            </p>
            <p className="text-muted-foreground">
                We specialize in creating both 2D and 3D games, leveraging Unity's rich feature set to deliver high-quality, performant, and engaging experiences. From mobile puzzle games to ambitious multi-platform RPGs, we have the skills and passion to turn your creative vision into a commercial success.
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
