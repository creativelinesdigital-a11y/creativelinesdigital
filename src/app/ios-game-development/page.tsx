import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Optimized for Apple Hardware",
        description: "We build games that take full advantage of the powerful hardware in iPhones and iPads, delivering smooth performance and stunning graphics on the Metal API.",
        imageId: "service-ios-game-1"
    },
    {
        title: "App Store & Game Center Integration",
        description: "Engage and retain players with leaderboards, achievements, and multiplayer functionality through seamless Game Center integration. We handle the full App Store submission process.",
        imageId: "service-ios-game-2"
    },
    {
        title: "Effective Monetization",
        description: "We help you build a sustainable business around your game by implementing effective monetization strategies, including in-app purchases, subscriptions, and ad integrations.",
        imageId: "service-ios-game-3"
    },
    {
        title: "Universal App Experiences",
        description: "Create a single app that provides a tailored experience for both iPhone and iPad. We design adaptive user interfaces that look and feel great on any screen size.",
        imageId: "service-ios-game-4"
    },
];

export default function IosGameDevelopment() {
  const image = PlaceHolderImages.find(img => img.id === 'service-ios-game');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="iOS Game Development"
        description="Tap into the lucrative iOS gaming market with a polished, high-performance game for iPhone and iPad. We create engaging games that climb the App Store charts."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                The Apple App Store is a vibrant and profitable ecosystem for game developers. Binate Digital has extensive experience creating successful iOS games that capture the attention of players and generate revenue. We understand the nuances of the platform and what it takes to build a chart-topping hit.
            </p>
            <p className="text-muted-foreground">
                Our team of iOS game developers uses native technologies like Swift and SpriteKit, as well as powerful engines like Unity and Unreal, to build games that are perfectly optimized for Apple's hardware. We guide you through every step, from initial concept to a successful launch on the App Store, ensuring your game is polished, performant, and fun to play.
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
