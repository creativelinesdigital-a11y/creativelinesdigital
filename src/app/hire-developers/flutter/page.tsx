
import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Expert Cross-Platform Development",
        description: "Our Flutter developers build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase, saving you time and money while reaching a wider audience.",
        imageId: "hire-dev-feature-1"
    },
    {
        title: "Expressive and Flexible UI",
        description: "Leverage Flutter's rich set of customizable widgets to create stunning, high-performance user interfaces that deliver a native-like experience on any platform.",
        imageId: "hire-dev-feature-2"
    },
    {
        title: "Fast Development and Hot Reload",
        description: "Accelerate your development cycle with Flutter's hot reload feature. Our developers can instantly view changes, experiment with UI, and fix bugs in record time.",
        imageId: "hire-dev-feature-3"
    },
    {
        title: "Access to a Skilled Talent Pool",
        description: "We provide vetted Flutter experts who are proficient in Dart and modern development practices, ensuring your project is built with clean, maintainable, and scalable code.",
        imageId: "hire-dev-feature-4"
    },
];

export default function HireFlutterDevelopers() {
  const image = PlaceHolderImages.find(img => img.id === 'hire-flutter');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Hire Flutter Developers"
        description="Build beautiful, high-performance cross-platform applications with our expert Flutter developers. Get the speed, flexibility, and stunning UI your project deserves."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Harness the power of Google's UI toolkit with Creative Lines Digital's dedicated Flutter developers. We build visually appealing and fast-performing apps for any screen from a single codebase, reducing complexity and accelerating your time to market.
            </p>
            <p className="text-muted-foreground">
                Our team of Flutter experts is adept at creating complex, customized applications that feel native on both iOS and Android. By hiring our developers, you gain access to top-tier talent that can turn your vision into a reality, delivering a product that is both beautiful and robust.
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
    
