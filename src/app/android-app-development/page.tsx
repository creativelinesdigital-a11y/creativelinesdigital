
import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Native Performance",
        description: "Leverage the full power of the Android platform. Our native apps are fast, responsive, and provide a seamless user experience that is optimized for Android devices.",
        imageId: "service-android-1"
    },
    {
        title: "Scalable Architecture",
        description: "We build apps with a robust and scalable architecture, ensuring they can grow with your user base and adapt to future Android updates and features.",
        imageId: "service-android-2"
    },
    {
        title: "Broad Device Compatibility",
        description: "Our team rigorously tests your app across a wide range of Android devices, screen sizes, and OS versions to ensure a consistent and reliable experience for all users.",
        imageId: "service-android-3"
    },
    {
        title: "Engaging User Experiences",
        description: "We design intuitive and visually appealing user interfaces that follow Google's Material Design guidelines, resulting in apps that users love to use.",
        imageId: "service-android-4"
    },
];

export default function AndroidAppDevelopment() {
  const image = PlaceHolderImages.find(img => img.id === 'service-android');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Android App Development"
        description="Reach the world's largest mobile audience with a high-performance, feature-rich, and user-friendly Android application. We build custom Android apps that deliver results."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                With billions of active users, Android offers an unparalleled opportunity to connect with a global audience. Creative Lines Digital specializes in creating custom Android applications that are tailored to your unique business needs, from concept and design to development and deployment on the Google Play Store.
            </p>
            <p className="text-muted-foreground">
                Our team of expert Android developers utilizes the latest technologies and best practices to build secure, scalable, and engaging applications. We focus on delivering a flawless user experience that not only looks great but also performs exceptionally, helping you to achieve your business objectives and stand out in a crowded market.
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
