import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "Search Engine Optimization (SEO)",
        description: "Improve your website's visibility on search engines and attract high-quality organic traffic with our proven SEO strategies."
    },
    {
        title: "Pay-Per-Click (PPC) Advertising",
        description: "Get instant results with targeted PPC campaigns on platforms like Google Ads and social media. We manage your budget to maximize ROI."
    },
    {
        title: "Content Marketing",
        description: "Engage your audience and build authority with high-quality blog posts, articles, videos, and other content tailored to your brand."
    },
    {
        title: "Social Media Marketing",
        description: "Build a strong community and drive engagement with strategic social media campaigns across all relevant platforms."
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
