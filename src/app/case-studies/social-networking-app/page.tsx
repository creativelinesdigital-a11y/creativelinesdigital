import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Rich User Profiles",
        description: "We designed customizable user profiles that allow individuals to showcase their personality, interests, and content, fostering a strong sense of identity within the community.",
        imageId: "case-study-social-networking-1"
    },
    {
        title: "Real-Time Messaging",
        description: "A robust, real-time chat system was built to facilitate seamless one-on-one and group conversations, complete with media sharing and read receipts.",
        imageId: "case-study-social-networking-2"
    },
    {
        title: "Engaging Content Feeds",
        description: "The core of the app is an algorithmic content feed that surfaces relevant posts, photos, and videos, keeping users engaged and connected to the community.",
        imageId: "case-study-social-networking-3"
    },
    {
        title: "Community Event Planning",
        description: "We integrated a feature that allows users to create, discover, and RSVP to local events, turning online connections into real-world interactions.",
        imageId: "case-study-social-networking-4"
    },
];

export default function SocialNetworkingApp() {
  const image = PlaceHolderImages.find(img => img.id === 'case-study-social-networking');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Case Study: Social Networking App"
        description="Learn how we developed a scalable and engaging social networking platform designed to connect people with shared interests and build vibrant communities."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                A startup envisioned a new kind of social network focused on connecting people through shared hobbies and passions. They needed a platform that was scalable, secure, and offered a rich set of features to encourage interaction and community building.
            </p>
            <p className="text-muted-foreground">
                We built a complete social networking ecosystem from the ground up, including native iOS and Android apps and a powerful backend. Our solution was designed to handle a large, active user base while providing an intuitive and enjoyable user experience that keeps people coming back.
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
