import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Custom E-commerce Storefronts",
        description: "Create a unique and compelling online shopping experience with a custom-built e-commerce website that reflects your brand and engages your customers.",
        imageId: "industry-ecommerce-1"
    },
    {
        title: "Personalization & Recommendation Engines",
        description: "Increase sales and customer loyalty with AI-powered personalization that delivers tailored product recommendations, offers, and content.",
        imageId: "industry-ecommerce-2"
    },
    {
        title: "Mobile Commerce (m-commerce) Apps",
        description: "Reach your customers on their favorite device with a beautiful and user-friendly mobile app for iOS and Android, optimized for conversion.",
        imageId: "industry-ecommerce-3"
    },
    {
        title: "Point of Sale (POS) & Retail Solutions",
        description: "Bridge the gap between your online and offline stores with integrated POS systems, inventory management, and customer loyalty programs.",
        imageId: "industry-ecommerce-4"
    },
];

export default function EcommerceAndRetail() {
  const image = PlaceHolderImages.find(img => img.id === 'industry-ecommerce');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="E-commerce & Retail"
        description="Build and grow your retail business with our comprehensive e-commerce solutions. We create engaging online stores, mobile apps, and in-store technology that drive sales and customer loyalty."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                The retail landscape has been transformed by e-commerce. To succeed, businesses need a robust digital presence that provides a seamless and personalized shopping experience. Binate Digital builds high-performance e-commerce solutions that help retailers thrive in this competitive market.
            </p>
            <p className="text-muted-foreground">
                We offer end-to-end services, from designing and developing beautiful online storefronts to building mobile commerce apps and integrating in-store technologies. Our focus is on creating solutions that are not only visually appealing but also scalable, secure, and optimized for conversion.
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
    