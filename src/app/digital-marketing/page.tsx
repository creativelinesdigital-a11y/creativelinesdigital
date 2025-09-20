import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Search Engine Optimization (SEO)",
        description: "Improve your website's visibility on search engines and attract high-quality organic traffic with our proven SEO strategies.",
        imageId: "service-digital-marketing-1"
    },
    {
        title: "Pay-Per-Click (PPC) Advertising",
        description: "Get instant results with targeted PPC campaigns on platforms like Google Ads and social media. We manage your budget to maximize ROI.",
        imageId: "service-digital-marketing-2"
    },
    {
        title: "Content Marketing",
        description: "Engage your audience and build authority with high-quality blog posts, articles, videos, and other content tailored to your brand.",
        imageId: "service-digital-marketing-3"
    },
    {
        title: "Social Media Marketing",
        description: "Build a strong community and drive engagement with strategic social media campaigns across all relevant platforms.",
        imageId: "service-digital-marketing-4"
    },
];

export default function DigitalMarketing() {
  const image = PlaceHolderImages.find(img => img.id === 'service-digital-marketing');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Digital Marketing"
        description="Connect with your audience and grow your business with our comprehensive digital marketing services. We create data-driven strategies to enhance your online presence and achieve your marketing goals."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                In a digital-first world, a strong online presence is essential for business growth. Binate Digital offers a full suite of digital marketing services designed to help you reach your target audience, generate leads, and increase revenue.
            </p>
            <p className="text-muted-foreground">
                Our team of marketing experts works with you to develop a tailored strategy that aligns with your business objectives. From SEO and PPC to content and social media marketing, we use a multi-channel approach to build your brand, engage your customers, and deliver measurable results.
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
