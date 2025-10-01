
import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Native Performance, JavaScript Agility",
        description: "Our React Native developers use their JavaScript expertise to build apps with native-like performance. Enjoy the 'learn once, write anywhere' paradigm to create a consistent experience on iOS and Android.",
        imageId: "hire-dev-feature-1"
    },
    {
        title: "Large Ecosystem and Community",
        description: "Leverage the vast ecosystem of libraries and tools from the React community. Our developers can integrate features and solve problems faster, leading to a more efficient development process.",
        imageId: "hire-dev-feature-2"
    },
    {
        title: "Cost-Effective Code Reusability",
        description: "Share up to 90% of your codebase between iOS and Android. Hiring our React Native developers means you can reduce development time and costs without sacrificing quality.",
        imageId: "hire-dev-feature-3"
    },
    {
        title: "Proven Expertise and Reliability",
        description: "Trust in developers who have a proven track record of building successful React Native apps. We provide talent that understands the nuances of mobile development and delivers reliable, high-quality products.",
        imageId: "hire-dev-feature-4"
    },
];

export default function HireReactNativeDevelopers() {
  const image = PlaceHolderImages.find(img => img.id === 'hire-react-native'); // ✅ fixed here
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Hire React Native Developers"
        description="Leverage the power of React to build native mobile apps for iOS and Android. Our expert React Native developers create high-quality, performant apps from a single JavaScript codebase."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Go to market faster on both iOS and Android with a single app. Creative Lines Digital's React Native developers use their deep knowledge of the React ecosystem to build robust, scalable, and feature-rich mobile applications that your users will love.
            </p>
            <p className="text-muted-foreground">
                We provide seasoned developers who can seamlessly join your team, whether you're a startup looking to build your first MVP or an enterprise needing to scale your mobile presence. Hire our React Native experts to benefit from faster development cycles and a cost-effective solution.
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
    
