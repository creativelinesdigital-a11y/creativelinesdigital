
import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Access to Top Talent",
        description: "Hire IT professionals with proven skills across multiple technologies. From developers to project managers, we provide the right talent for your needs. Every candidate is vetted for quality and expertise.",
        imageId: "service-it-staffing-1"
    },
    {
        title: "Quick Onboarding",
        description: "Rapidly deploy the right experts without lengthy recruitment cycles. Our streamlined process ensures minimal downtime and immediate productivity. You save time and effort while starting projects faster.",
        imageId: "service-it-staffing-2"
    },
    {
        title: "Flexible Engagements",
        description: "Choose short-term, long-term, or project-based staffing as needed. We adapt our services to match your project scope and timeline. This flexibility keeps your costs optimized and projects efficient.",
        imageId: "service-it-staffing-3"
    },
    {
        title: "Reduced Hiring Risk",
        description: "We match vetted candidates to your exact technical requirements. This reduces the risk of mismatched skills or poor performance. You get reliable professionals who deliver consistent results.",
        imageId: "service-it-staffing-4"
    },
];

export default function ItStaffingServices() {
  const image = PlaceHolderImages.find(img => img.id === 'service-it-staffing');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="IT Staffing Services"
        description="Find the right talent to drive your organization forward. Our IT staffing services connect you with skilled professionals who can help you build, manage, and optimize your technology landscape."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Finding the right IT talent is more critical than ever. Creative Lines Digital's IT staffing services are designed to help you navigate the competitive tech landscape and secure the professionals you need to succeed. Whether you're looking for temporary support or a permanent addition to your team, we have the expertise to connect you with the best candidates.
            </p>
            <p className="text-muted-foreground">
                We take the time to understand your company culture, technical needs, and project goals to ensure a perfect fit. Our goal is to build long-term partnerships by providing staffing solutions that contribute directly to your business's growth and innovation.
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
