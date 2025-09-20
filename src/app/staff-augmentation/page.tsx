import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "Access to Specialized Talent",
        description: "Quickly fill skill gaps in your team by tapping into our global network of pre-vetted, expert developers, designers, and project managers."
    },
    {
        title: "Flexible Engagement Models",
        description: "Whether you need one developer for a short-term project or a full team for long-term collaboration, our flexible models adapt to your needs."
    },
    {
        title: "Cost-Effective Solution",
        description: "Avoid the high costs and long processes of traditional recruitment. With staff augmentation, you only pay for the expertise you need, when you need it."
    },
    {
        title: "Seamless Integration",
        description: "Our professionals are skilled at quickly integrating with your existing team, adopting your workflows and communication channels for a smooth collaboration."
    },
];

export default function StaffAugmentation() {
  const image = PlaceHolderImages.find(img => img.id === 'service-staff-augmentation');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Staff Augmentation"
        description="Scale your team with top-tier talent on demand. Our staff augmentation services provide the flexibility and expertise you need to accelerate your projects and achieve your business goals."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                In today's fast-paced market, having the right team is crucial for success. However, finding, hiring, and retaining top talent can be a significant challenge. Binate Digital's Staff Augmentation services offer a flexible and efficient solution, allowing you to seamlessly extend your in-house team with our skilled professionals.
            </p>
            <p className="text-muted-foreground">
                We provide the experts you need to fill skill gaps, manage fluctuating workloads, and drive your projects forward without the overheads of permanent hires. Our developers and specialists become a part of your team, working under your direction and aligning with your company's culture and objectives.
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
