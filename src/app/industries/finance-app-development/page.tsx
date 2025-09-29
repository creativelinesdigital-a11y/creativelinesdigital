
import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Mobile Banking & Payments",
        description: "Develop secure and intuitive mobile banking apps that allow users to manage accounts, transfer funds, pay bills, and make contactless payments.",
        imageId: "industry-finance-1"
    },
    {
        title: "Investment & Trading Platforms",
        description: "Build high-performance trading platforms for stocks, crypto, and other assets, complete with real-time data, advanced charting, and order management.",
        imageId: "industry-finance-2"
    },
    {
        title: "Robo-Advisors & Wealth Management",
        description: "Create AI-powered robo-advisory platforms that provide automated, algorithm-driven investment advice and portfolio management.",
        imageId: "industry-finance-3"
    },
    {
        title: "Insurtech & Policy Management",
        description: "Modernize the insurance industry with apps for purchasing policies, managing claims, and assessing risk using telematics and AI.",
        imageId: "industry-finance-4"
    },
];

export default function FinanceAppDevelopment() {
  const image = PlaceHolderImages.find(img => img.id === 'industry-finance');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Finance App Development"
        description="Build the future of finance with our secure, scalable, and compliant FinTech solutions. We create innovative applications for banking, investment, insurance, and beyond."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                The financial services industry is being redefined by technology. Creative Lines Digital is at the forefront of this FinTech revolution, building secure and innovative applications that empower financial institutions and their customers.
            </p>
            <p className="text-muted-foreground">
                We have deep expertise in developing solutions for mobile banking, payment processing, investment platforms, and insurance technology (Insurtech). Our team prioritizes security, compliance, and user experience to deliver products that are not only powerful but also trustworthy.
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
    
