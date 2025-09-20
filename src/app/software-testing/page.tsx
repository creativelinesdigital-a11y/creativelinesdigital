import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "Manual and Automated Testing",
        description: "We offer a hybrid approach, combining meticulous manual testing with efficient automated scripts to ensure comprehensive test coverage."
    },
    {
        title: "Performance and Load Testing",
        description: "Our team simulates real-world user traffic to identify performance bottlenecks and ensure your application is fast, stable, and scalable."
    },
    {
        title: "Security Testing",
        description: "We conduct vulnerability assessments and penetration testing to identify and address security flaws, protecting your application and user data."
    },
    {
        title: "Compatibility Testing",
        description: "We test your application across a wide range of browsers, operating systems, and devices to ensure a consistent and reliable user experience for everyone."
    },
];

export default function SoftwareTesting() {
  const image = PlaceHolderImages.find(img => img.id === 'service-software-testing');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Software Testing & QA"
        description="Ensure your software is reliable, secure, and ready for your users. Our comprehensive testing and quality assurance services help you deliver a flawless digital product."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                In a competitive digital landscape, a buggy or unreliable application can be detrimental to your brand. Binate Digital's software testing and QA services are designed to identify issues, eliminate defects, and ensure your software meets the highest standards of quality before it reaches your users.
            </p>
            <p className="text-muted-foreground">
                Our dedicated team of QA engineers employs a systematic approach, using the latest tools and methodologies to conduct rigorous testing throughout the development lifecycle. From functionality and performance to security and usability, we cover all aspects to guarantee a seamless and positive user experience.
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
