import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Custom Theme and Plugin Development",
        description: "Our WordPress developers go beyond templates. We build custom themes and plugins tailored to your brand and business needs, giving you a unique and powerful online presence.",
        imageId: "hire-dev-feature-1"
    },
    {
        title: "Scalable and Secure Solutions",
        description: "We build WordPress sites with scalability and security at their core. From e-commerce stores to enterprise websites, our developers ensure your site is robust, secure, and ready for growth.",
        imageId: "hire-dev-feature-2"
    },
    {
        title: "SEO and Performance Optimization",
        description: "A beautiful site is useless if no one can find it. Our developers are experts in WordPress SEO and performance optimization, ensuring your site ranks high and loads fast.",
        imageId: "hire-dev-feature-3"
    },
    {
        title: "Experienced and Reliable Experts",
        description: "Hire developers who have a deep understanding of the WordPress ecosystem. We provide reliable experts who can manage everything from complex integrations to ongoing maintenance.",
        imageId: "hire-dev-feature-4"
    },
];

export default function HireWordpressDevelopers() {
  const image = PlaceHolderImages.find(img => img.id === 'hire-wordpress');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Hire WordPress Developers"
        description="Unlock the full potential of the world's most popular CMS. Our expert WordPress developers build custom, scalable, and high-performance websites that drive results."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Power your online presence with a custom WordPress solution from Binate Digital. Our dedicated WordPress developers create more than just websites; they build digital experiences that are tailored to your business objectives, from corporate sites to complex e-commerce platforms.
            </p>
            <p className="text-muted-foreground">
                We provide experts who understand the ins and outs of the WordPress platform, including custom theme development, plugin creation, and performance optimization. Hire our team to build a website that is not only visually stunning but also secure, scalable, and easy to manage.
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
    