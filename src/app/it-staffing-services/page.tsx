import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "Access to a Vast Talent Pool",
        description: "Our extensive network of IT professionals covers a wide range of technologies and roles, ensuring we can find the perfect match for your requirements."
    },
    {
        title: "Rigorous Vetting Process",
        description: "We conduct thorough technical assessments, background checks, and interviews to ensure you get only the most qualified and reliable candidates."
    },
    {
        title: "Flexible Hiring Options",
        description: "We offer contract, contract-to-hire, and direct placement options to provide the flexibility your business needs to grow and adapt."
    },
    {
        title: "Reduced Time-to-Hire",
        description: "Our efficient recruitment process significantly shortens the hiring cycle, allowing you to onboard new team members quickly and keep your projects on track."
    },
];

export default function ItStaffingServices() {
  const image = PlaceHolderImages.find(img => img.id === 'service-it-staffing');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="IT Staffing Services"
        description="Find the right talent to drive your organization forward. Our IT staffing services connect you with skilled professionals who can help you build, manage, and optimize your technology landscape."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Finding the right IT talent is more critical than ever. Binate Digital's IT staffing services are designed to help you navigate the competitive tech landscape and secure the professionals you need to succeed. Whether you're looking for temporary support or a permanent addition to your team, we have the expertise to connect you with the best candidates.
            </p>
            <p className="text-muted-foreground">
                We take the time to understand your company culture, technical needs, and project goals to ensure a perfect fit. Our goal is to build long-term partnerships by providing staffing solutions that contribute directly to your business's growth and innovation.
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
