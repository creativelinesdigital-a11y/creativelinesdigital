
import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Open-Source Power",
        description: "Build cross-platform apps with a single codebase using web technologies you already know and love. Our Ionic developers create high-quality experiences for iOS, Android, and the web.",
        imageId: "hire-dev-feature-1"
    },
    {
        title: "Seamless UI/UX",
        description: "Ionic's extensive library of UI components allows our developers to craft beautiful, platform-consistent user interfaces that feel native to each device, ensuring a great user experience.",
        imageId: "hire-dev-feature-2"
    },
    {
        title: "Access to Native APIs",
        description: "Go beyond the web. Our Ionic developers can easily access native device features like the camera, GPS, and file system, creating feature-rich applications that stand out.",
        imageId: "hire-dev-feature-3"
    },
    {
        title: "Cost and Time Efficiency",
        description: "By using one codebase for all platforms, you significantly reduce development and maintenance time. Hire our Ionic experts to get your app to market faster and more affordably.",
        imageId: "hire-dev-feature-4"
    },
];

export default function HireIonicDevelopers() {
  const image = PlaceHolderImages.find(img => img.id === 'hire-ionic');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Hire Ionic Developers"
        description="Create powerful cross-platform mobile, web, and desktop apps with our expert Ionic developers. We use the power of web technologies to build high-quality, performant applications."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Transform your web development team into a mobile app powerhouse with Ionic. Creative Lines Digital provides skilled Ionic developers who can build fast, reliable, and engaging cross-platform applications using your existing web technology stack.
            </p>
            <p className="text-muted-foreground">
                Our developers are proficient in Angular, React, or Vue and leverage the Ionic framework to deliver a single, high-quality application that runs everywhere. Hire our team to create a cost-effective and scalable mobile solution for your business.
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
    
