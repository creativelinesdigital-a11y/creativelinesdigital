import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "Full Project Ownership",
        description: "Your dedicated team works exclusively on your project, ensuring deep focus, commitment, and alignment with your long-term vision."
    },
    {
        title: "Handpicked Expertise",
        description: "We assemble a team with the precise skills and experience your project requires, from front-end and back-end developers to UI/UX designers and QA engineers."
    },
    {
        title: "Complete Transparency and Control",
        description: "You have full control over the development process, with direct communication, regular reporting, and complete transparency into the team's progress."
    },
    {
        title: "Scalability and Flexibility",
        description: "Easily scale your team up or down based on project demands, ensuring you always have the right resources at the right time."
    },
];

export default function DedicatedDevelopmentTeam() {
  const image = PlaceHolderImages.find(img => img.id === 'service-dedicated-team');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Dedicated Development Team"
        description="Build your vision with a handpicked team of experts committed to your success. Our dedicated development team model provides a full-fledged, scalable, and efficient solution for your long-term projects."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                When your project requires long-term commitment and a deep understanding of your business domain, a dedicated development team is the perfect solution. Binate Digital provides a hand-selected team of professionals who act as a remote extension of your own, fully integrated and aligned with your goals.
            </p>
            <p className="text-muted-foreground">
                This model gives you access to a stable, scalable, and highly skilled team without the complexities of in-house recruitment and management. We handle the administrative overhead, while you get a team that is 100% focused on bringing your product to life, from initial concept to launch and beyond.
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
