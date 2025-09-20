import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "Keyword Research and Optimization",
        description: "We identify and target high-value keywords to improve your app's search rankings and attract relevant users."
    },
    {
        title: "Compelling App Listings",
        description: "From the app icon and title to screenshots and descriptions, we optimize every element of your store listing to maximize conversions."
    },
    {
        title: "Ratings and Reviews Management",
        description: "We help you implement strategies to encourage positive reviews and effectively manage user feedback to build a strong reputation."
    },
    {
        title: "Performance Analytics and Reporting",
        description: "We continuously monitor your app's performance, providing detailed analytics and insights to refine your ASO strategy over time."
    },
];

export default function AppStoreOptimization() {
  const image = PlaceHolderImages.find(img => img.id === 'service-aso');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="App Store Optimization (ASO)"
        description="Increase your app's visibility and drive organic downloads with our expert App Store Optimization services. We help you rank higher, convert more users, and stand out in a crowded marketplace."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Having a great app is only half the battle. To succeed, your app needs to be discoverable. App Store Optimization (ASO) is the key to improving your app's visibility in the Apple App Store and Google Play Store, leading to increased organic downloads from high-quality users.
            </p>
            <p className="text-muted-foreground">
                At Binate Digital, our ASO experts use a data-driven approach to enhance your app's presence. We analyze your market, competitors, and target audience to develop a comprehensive strategy that covers all aspects of your app store listing, driving sustainable growth and maximizing your return on investment.
            </p>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                        <CheckCircle2 className="h-8 w-8 text-primary mr-4 mt-1 shrink-0" />
                        <div>
                            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </ServicePageLayout>
  );
}
