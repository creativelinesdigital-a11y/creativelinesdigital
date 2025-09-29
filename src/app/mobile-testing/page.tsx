
import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Comprehensive Functional Testing",
        description: "We verify every feature of your mobile app works as intended, ensuring a bug-free experience for your users across all supported devices and operating systems.",
        imageId: "service-mobile-testing-1"
    },
    {
        title: "Usability and UX Testing",
        description: "Go beyond functionality. We assess your app's user experience to ensure it is intuitive, engaging, and easy to navigate, leading to higher user satisfaction and retention.",
        imageId: "service-mobile-testing-2"
    },
    {
        title: "Performance and Load Testing",
        description: "Our team tests your app's performance under various network conditions and user loads to ensure it is fast, responsive, and reliable, even at peak usage.",
        imageId: "service-mobile-testing-3"
    },
    {
        title: "Mobile Automation Testing",
        description: "We implement robust test automation frameworks to accelerate testing cycles, improve accuracy, and enable continuous integration and delivery for faster releases.",
        imageId: "service-mobile-testing-4"
    },
];

export default function MobileTesting() {
  const image = PlaceHolderImages.find(img => img.id === 'service-mobile-testing');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Mobile App Testing"
        description="Deliver a flawless mobile experience with our comprehensive mobile app testing services. We ensure your app is functional, performant, and user-friendly on every device."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                In the competitive mobile app market, a single bug or a poor user experience can lead to uninstalls and negative reviews. Creative Lines Digital's dedicated mobile testing services help you launch with confidence, ensuring your app meets the highest standards of quality.
            </p>
            <p className="text-muted-foreground">
                Our QA experts test your app on a wide range of real devices and simulators, covering different screen sizes, operating system versions, and network conditions. We combine manual and automated testing to provide thorough coverage, from functionality and performance to security and usability, guaranteeing a polished final product.
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
