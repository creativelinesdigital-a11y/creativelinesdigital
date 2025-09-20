import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Manual and Automated Testing",
        description: "We offer a hybrid approach, combining meticulous manual testing with efficient automated scripts to ensure comprehensive test coverage.",
        imageId: "service-software-testing-1"
    },
    {
        title: "Performance and Load Testing",
        description: "Our team simulates real-world user traffic to identify performance bottlenecks and ensure your application is fast, stable, and scalable.",
        imageId: "service-software-testing-2"
    },
    {
        title: "Security Testing",
        description: "We conduct vulnerability assessments and penetration testing to identify and address security flaws, protecting your application and user data.",
        imageId: "service-software-testing-3"
    },
    {
        title: "Compatibility Testing",
        description: "We test your application across a wide range of browsers, operating systems, and devices to ensure a consistent and reliable user experience for everyone.",
        imageId: "service-software-testing-4"
    },
];

export default function SoftwareTesting() {
  const image = PlaceHolderImages.find(img => img.id === 'service-software-testing');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Software Testing & QA"
        description="Ensure your software is reliable, secure, and ready for your users. Our comprehensive testing and quality assurance services help you deliver a flawless digital product."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                In a competitive digital landscape, a buggy or unreliable application can be detrimental to your brand. Binate Digital's software testing and QA services are designed to identify issues, eliminate defects, and ensure your software meets the highest standards of quality before it reaches your users.
            </p>
            <p className="text-muted-foreground">
                Our dedicated team of QA engineers employs a systematic approach, using the latest tools and methodologies to conduct rigorous testing throughout the development lifecycle. From functionality and performance to security and usability, we cover all aspects to guarantee a seamless and positive user experience.
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
