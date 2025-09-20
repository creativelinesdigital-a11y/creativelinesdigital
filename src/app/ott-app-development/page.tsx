import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "Cross-Platform Compatibility",
        description: "We build OTT applications that deliver a seamless experience across a wide range of devices, including smart TVs, mobile phones, tablets, and web browsers."
    },
    {
        title: "Secure Video Streaming",
        description: "Our solutions include robust DRM and content protection to secure your valuable video assets and prevent unauthorized access."
    },
    {
        title: "Monetization Models",
        description: "We integrate various monetization strategies, including subscription-based (SVOD), transaction-based (TVOD), and ad-supported (AVOD) models."
    },
    {
        title: "Scalable Cloud Infrastructure",
        description: "Leveraging powerful cloud platforms, we ensure your OTT service can handle high traffic loads and scale effortlessly as your audience grows."
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

            <div className="grid md:grid-cols-2 gap-8 pt-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                        <CheckCircle2 className="h-8 w-8 text-primary mr-4 mt-1 shrink-0" />
                        <div>
                            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </ServicePageLayout>
  );
}
