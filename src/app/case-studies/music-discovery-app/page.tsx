import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "AI-Powered Discovery Engine",
        description: "We developed a sophisticated recommendation engine that analyzes user listening habits to generate highly personalized playlists and artist suggestions, driving user engagement and retention.",
        imageId: "case-study-music-discovery-1"
    },
    {
        title: "Seamless Social Integration",
        description: "Users can connect with friends, share their favorite tracks and playlists, and see what others are listening to in real-time, creating a vibrant and interactive community within the app.",
        imageId: "case-study-music-discovery-2"
    },
    {
        title: "High-Fidelity Audio Streaming",
        description: "We engineered a robust streaming infrastructure to deliver lossless, high-fidelity audio, providing a premium listening experience for audiophiles and casual listeners alike.",
        imageId: "case-study-music-discovery-3"
    },
    {
        title: "Robust Offline Capabilities",
        description: "The app allows users to download their favorite music and playlists for offline listening, ensuring an uninterrupted experience, even without an internet connection.",
        imageId: "case-study-music-discovery-4"
    },
];

export default function MusicDiscoveryApp() {
  const image = PlaceHolderImages.find(img => img.id === 'case-study-music-discovery');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Case Study: Music Discovery App"
        description="Explore how we built an innovative music discovery platform that uses AI and social features to help users find their next favorite artist."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                A new player in the music streaming space wanted to differentiate itself by focusing on discovery. They needed an app that went beyond standard algorithms to create a truly personal and engaging experience for music lovers.
            </p>
            <p className="text-muted-foreground">
                Our team built a cross-platform mobile application centered around a powerful AI recommendation engine and deep social integration. The result was a beautiful, intuitive app that not only helps users discover new music but also connects them with a community of like-minded listeners.
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
