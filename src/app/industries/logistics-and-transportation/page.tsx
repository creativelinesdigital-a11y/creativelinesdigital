
import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Fleet Management Systems",
        description: "Optimize your fleet operations with real-time vehicle tracking, maintenance scheduling, fuel management, and driver behavior monitoring.",
        imageId: "industry-logistics-1"
    },
    {
        title: "Warehouse Management Systems (WMS)",
        description: "Improve efficiency and accuracy in your warehouse with our custom WMS solutions, featuring inventory management, order processing, and automated workflows.",
        imageId: "industry-logistics-2"
    },
    {
        title: "Supply Chain & Route Optimization",
        description: "Reduce costs and delivery times with AI-powered route planning and supply chain optimization software that adapts to real-world conditions.",
        imageId: "industry-logistics-3"
    },
    {
        title: "Last-Mile Delivery Solutions",
        description: "Enhance the final step of the delivery process with apps for drivers, real-time tracking for customers, and proof-of-delivery confirmation.",
        imageId: "industry-logistics-4"
    },
];

export default function LogisticsAndTransportation() {
  const image = PlaceHolderImages.find(img => img.id === 'industry-logistics');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Logistics & Transportation"
        description="Drive efficiency and visibility across your supply chain with our intelligent software solutions. We build custom applications that optimize logistics and transportation operations."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                In the complex world of logistics and transportation, efficiency is everything. Creative Lines Digital develops custom software that provides the visibility and control you need to streamline your operations, reduce costs, and exceed customer expectations.
            </p>
            <p className="text-muted-foreground">
                From fleet and warehouse management to supply chain optimization and last-mile delivery, our solutions are tailored to meet the unique challenges of your business. We leverage technologies like IoT, AI, and mobile to build robust and scalable systems that deliver a real return on investment.
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
    
