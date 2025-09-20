import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Modern & Concise Code",
        description: "Kotlin's modern syntax allows us to write clean, concise, and readable code. This leads to faster development cycles and apps that are easier to maintain and update.",
        imageId: "service-kotlin-1"
    },
    {
        title: "Seamless Java Interoperability",
        description: "Kotlin is 100% interoperable with Java, allowing us to leverage existing Java libraries and frameworks while building modern, robust applications.",
        imageId: "service-kotlin-2"
    },
    {
        title: "Less Code, Fewer Bugs",
        description: "With its expressive syntax, Kotlin requires significantly less boilerplate code compared to Java, which reduces the likelihood of errors and makes your app more reliable.",
        imageId: "service-kotlin-3"
    },
    {
        title: "Enhanced Security & Reliability",
        description: "Kotlin's null safety features are built into the language, helping to eliminate null pointer exceptions—one of the most common causes of app crashes.",
        imageId: "service-kotlin-4"
    },
];

export default function KotlinAppDevelopment() {
  const image = PlaceHolderImages.find(img => img.id === 'service-kotlin');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Kotlin App Development"
        description="Build powerful, modern, and reliable Android apps with Kotlin, Google's preferred language for Android development. We create high-performance apps that are built to last."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                As Google's officially supported language for Android development, Kotlin offers a modern and powerful alternative to Java. Binate Digital harnesses the full potential of Kotlin to build fast, secure, and cutting-edge Android applications that provide an exceptional user experience.
            </p>
            <p className="text-muted-foreground">
                Our Kotlin developers are experts in leveraging the language's advanced features, such as null safety and coroutines, to create more stable and performant apps. By choosing Kotlin, you are investing in a future-proof technology that ensures your application is maintainable, scalable, and ready for what's next in the world of Android.
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
