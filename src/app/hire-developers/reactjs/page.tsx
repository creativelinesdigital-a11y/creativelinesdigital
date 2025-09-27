import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Component-Based Architecture",
        description: "Our ReactJS developers build interactive UIs with encapsulated components that manage their own state. This approach leads to more predictable and maintainable codebases.",
        imageId: "hire-dev-feature-1"
    },
    {
        title: "High-Performance Web Applications",
        description: "Leverage the virtual DOM for faster rendering and a smoother user experience. Our developers are experts at optimizing React applications for maximum performance.",
        imageId: "hire-dev-feature-2"
    },
    {
        title: "Vast and Mature Ecosystem",
        description: "Benefit from the extensive React ecosystem. We utilize a rich collection of libraries and tools to accelerate development and build feature-rich, modern web applications.",
        imageId: "hire-dev-feature-3"
    },
    {
        title: "Skilled and Passionate Experts",
        description: "Hire developers who are passionate about building exceptional user interfaces. Our ReactJS experts stay up-to-date with the latest trends and best practices to deliver cutting-edge solutions.",
        imageId: "hire-dev-feature-4"
    },
];

export default function HireReactJSDevelopers() {
  const image = PlaceHolderImages.find(img => img.id === 'hire-reactjs');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Hire ReactJS Developers"
        description="Build fast, scalable, and dynamic web applications with our expert ReactJS developers. We create exceptional user interfaces that will delight your users and grow your business."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Create engaging and interactive user experiences with the most popular JavaScript library for building UIs. Binate Digital's team of dedicated ReactJS developers has the expertise to build everything from single-page applications to complex enterprise-grade frontends.
            </p>
            <p className="text-muted-foreground">
                We provide developers who are masters of the React ecosystem, including state management with Redux, routing with React Router, and modern tooling. By hiring our ReactJS experts, you ensure your project is built on a solid, performant, and scalable foundation.
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
    