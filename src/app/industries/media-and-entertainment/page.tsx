
import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Video Streaming (OTT) Platforms",
        description: "Launch your own Netflix-like service. We build scalable and secure OTT platforms for delivering video-on-demand (VOD) and live content to any device.",
        imageId: "industry-media-1"
    },
    {
        title: "Content Management Systems (CMS)",
        description: "Take control of your digital content with a custom CMS. We create intuitive systems that make it easy to manage, publish, and monetize your content.",
        imageId: "industry-media-2"
    },
    {
        title: "Digital Publishing & News Apps",
        description: "Engage your readers with beautiful and responsive digital magazines, newspapers, and news applications that offer a premium reading experience.",
        imageId: "industry-media-3"
    },
    {
        title: "Music & Audio Streaming",
        description: "Build the next big music or podcast platform. We develop high-fidelity audio streaming apps with features like playlists, recommendations, and offline access.",
        imageId: "industry-media-4"
    },
];

export default function MediaAndEntertainment() {
  const image = PlaceHolderImages.find(img => img.id === 'industry-media');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Media & Entertainment"
        description="Captivate audiences and monetize your content with our innovative digital solutions for the media and entertainment industry. From streaming platforms to digital publishing, we build the future of content delivery."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                The media landscape is constantly changing, with new technologies and consumer behaviors shaping the future of content. Creative Lines Digital helps media companies and content creators navigate this dynamic environment with custom digital solutions that engage audiences and drive revenue.
            </p>
            <p className="text-muted-foreground">
                We combine our deep industry knowledge with technical expertise in video streaming, content management, and mobile development to build platforms that are not only technologically advanced but also user-friendly and commercially successful.
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
    
