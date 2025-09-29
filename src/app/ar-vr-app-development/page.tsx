
import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Immersive Augmented Reality",
        description: "Overlay digital information and interactive elements onto the real world. We create engaging AR experiences for retail, education, marketing, and more.",
        imageId: "service-ar-vr-1"
    },
    {
        title: "Interactive 3D Visualizations",
        description: "Allow users to explore products and environments in stunning 3D. Our AR/VR apps are perfect for architectural visualization, product demos, and interactive training.",
        imageId: "service-ar-vr-2"
    },
    {
        title: "Compelling Virtual Reality",
        description: "Transport your users to entirely new digital worlds. We build immersive VR applications for gaming, simulations, virtual tours, and collaborative workspaces.",
        imageId: "service-ar-vr-3"
    },
    {
        title: "Social & Collaborative Platforms",
        description: "Connect users in shared virtual spaces. We develop social VR and AR platforms that enable real-time interaction, collaboration, and shared experiences.",
        imageId: "service-ar-vr-4"
    },
];

export default function ArVrAppDevelopment() {
  const image = PlaceHolderImages.find(img => img.id === 'service-ar-vr');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="AR/VR App Development"
        description="Step into the future with immersive and interactive Augmented and Virtual Reality applications. We create unforgettable experiences that blur the lines between the digital and physical worlds."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Augmented Reality (AR) and Virtual Reality (VR) are transforming how we interact with technology and the world around us. Creative Lines Digital is at the forefront of this revolution, designing and developing custom AR and VR solutions that open up new possibilities for businesses and their customers.
            </p>
            <p className="text-muted-foreground">
                Whether you want to create an AR app that lets customers visualize furniture in their home, a VR training simulation for your employees, or an immersive game that captivates players, our team has the expertise to bring your vision to life. We work with the latest hardware and software to build high-performance, compelling experiences that push the boundaries of what's possible.
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
