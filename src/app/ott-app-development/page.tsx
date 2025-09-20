import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Multi-Platform Reach",
        description: "Deliver engaging content across Android, iOS, Smart TVs, and web apps. We build apps optimized for every platform, ensuring seamless user experiences. Reach wider audiences without compromising quality.",
        imageId: "service-ott-development-1"
    },
    {
        title: "Scalable Solutions",
        description: "Handle large audiences with high-performance, cloud-ready OTT platforms. Our solutions are built to support millions of users with smooth streaming. As your audience grows, your app grows with it.",
        imageId: "service-ott-development-2"
    },
    {
        title: "Personalized Experiences",
        description: "Integrate features like recommendations, profiles, and advanced search. Personalization increases user engagement and keeps viewers coming back. Enhance retention with customized content journeys.",
        imageId: "service-ott-development-3"
    },
    {
        title: "Secure Streaming",
        description: "Ensure data protection and content security with advanced encryption. We implement DRM and authentication systems to safeguard your content. Your users enjoy a safe and reliable streaming experience.",
        imageId: "service-ott-development-4"
    },
];

export default function OttAppDevelopment() {
  const image = PlaceHolderImages.find(img => img.id === 'service-ott-development');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="OTT App Development"
        description="Launch your own video streaming service with our end-to-end OTT app development solutions. We create powerful, scalable, and engaging platforms for content creators and media companies."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                The world of media is rapidly shifting to over-the-top (OTT) streaming. Binate Digital helps you capitalize on this trend by developing custom OTT platforms that allow you to deliver your video content directly to your audience, anytime, anywhere.
            </p>
            <p className="text-muted-foreground">
                From live streaming to video-on-demand (VOD), we build feature-rich applications with exceptional user experiences. Our team handles everything from backend infrastructure and content management systems to front-end applications for all major platforms, giving you a complete, market-ready solution.
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
