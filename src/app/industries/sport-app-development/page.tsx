import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Fan Engagement Platforms",
        description: "Create immersive experiences with live scoring, fantasy leagues, and social features that keep fans connected and engaged with their favorite teams and sports.",
        imageId: "industry-sports-1"
    },
    {
        title: "Athlete Performance Tracking",
        description: "Develop sophisticated apps that monitor, analyze, and provide insights into athlete performance using wearable technology and advanced data analytics.",
        imageId: "industry-sports-2"
    },
    {
        title: "Venue & Ticketing Solutions",
        description: "Streamline the fan experience with digital ticketing, interactive stadium maps, and in-seat ordering to make game day seamless and enjoyable.",
        imageId: "industry-sports-3"
    },
    {
        title: "Sports Media & Streaming",
        description: "Build robust platforms to deliver live games, highlights, and on-demand content to a global audience across multiple devices.",
        imageId: "industry-sports-4"
    },
];

export default function SportAppDevelopment() {
  const image = PlaceHolderImages.find(img => img.id === 'industry-sports');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Sports App Development"
        description="Revolutionize the world of sports with cutting-edge digital solutions. We build applications that enhance fan engagement, optimize athlete performance, and create new revenue streams."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                The sports industry is undergoing a massive digital transformation. From how fans consume content to how athletes train, technology is at the heart of the evolution. Binate Digital creates powerful applications that cater to the unique needs of teams, leagues, and sports organizations.
            </p>
            <p className="text-muted-foreground">
                We develop solutions that not only captivate fans but also provide a competitive edge. Our expertise in mobile apps, data analytics, and streaming technologies allows us to deliver high-impact digital products that drive growth and innovation in the sports sector.
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
    