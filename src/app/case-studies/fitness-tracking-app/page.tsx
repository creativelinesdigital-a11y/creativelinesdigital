import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Multi-Activity GPS Tracking",
        description: "The app provides precise GPS tracking for a wide range of activities, from running and cycling to hiking and swimming, complete with detailed maps and performance metrics.",
        imageId: "case-study-fitness-tracking-1"
    },
    {
        title: "Comprehensive Nutrition Logging",
        description: "We integrated a massive food database and barcode scanner to make it easy for users to log their meals and track their calories, macros, and nutrient intake.",
        imageId: "case-study-fitness-tracking-2"
    },
    {
        title: "Wearable Device Synchronization",
        description: "Our solution seamlessly syncs with popular fitness trackers and smartwatches, automatically importing workout data and providing a complete picture of the user's activity.",
        imageId: "case-study-fitness-tracking-3"
    },
    {
        title: "Social Motivation and Challenges",
        description: "To keep users motivated, we built a social feed where they can share their progress, join community challenges, and cheer on their friends' achievements.",
        imageId: "case-study-fitness-tracking-4"
    },
];

export default function FitnessTrackingApp() {
  const image = PlaceHolderImages.find(img => img.id === 'case-study-fitness-tracking');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Case Study: Fitness Tracking App"
        description="Learn how we created an all-in-one fitness and nutrition tracking app that empowers users to achieve their health goals through data-driven insights and community motivation."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                A health and wellness brand wanted to create a holistic fitness application that combined workout tracking, nutrition logging, and social motivation. The goal was to build a single platform that could guide users on every step of their health journey.
            </p>
            <p className="text-muted-foreground">
                We developed a feature-rich native app that provides a seamless and encouraging user experience. By integrating GPS tracking, a comprehensive food database, wearable device sync, and social features, we created a powerful tool that helps users stay committed to their fitness goals and live healthier lives.
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
