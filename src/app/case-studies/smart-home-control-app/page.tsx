import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Unified Device Control",
        description: "We created a central dashboard that allows users to control all their smart home devices—lights, thermostats, locks, and cameras—from a single, intuitive interface.",
        imageId: "case-study-smart-home-1"
    },
    {
        title: "Intelligent Automation",
        description: "Users can create custom 'scenes' and automations, like a 'Good Morning' routine that raises the blinds and starts the coffee maker, bringing true intelligence to the home.",
        imageId: "case-study-smart-home-2"
    },
    {
        title: "Remote Access and Security",
        description: "The app provides secure remote access, allowing users to monitor their home, receive security alerts, and control devices from anywhere in the world.",
        imageId: "case-study-smart-home-3"
    },
    {
        title: "Voice Assistant Integration",
        description: "We seamlessly integrated with popular voice assistants like Amazon Alexa and Google Assistant, enabling hands-free control of the entire smart home ecosystem.",
        imageId: "case-study-smart-home-4"
    },
];

export default function SmartHomeControlApp() {
  const image = PlaceHolderImages.find(img => img.id === 'case-study-smart-home');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Case Study: Smart Home Control App"
        description="Discover how we built a unified and intuitive smart home application that brings together control of lighting, climate, security, and entertainment into one seamless experience."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                A leading smart home hardware manufacturer needed a flagship application to unite their diverse range of products. Their goal was to replace multiple, disconnected apps with a single, elegant solution that made managing a smart home effortless and enjoyable for users.
            </p>
            <p className="text-muted-foreground">
                Our team designed and developed a cross-platform application that serves as the central hub for the user's smart home. By focusing on a clean user interface, powerful automation capabilities, and rock-solid reliability, we delivered an app that significantly improved the customer experience and strengthened the client's brand.
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
