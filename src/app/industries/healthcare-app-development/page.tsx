import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Telemedicine & Virtual Care",
        description: "Connect patients and providers with secure and HIPAA-compliant video consultations, remote monitoring, and virtual waiting rooms.",
        imageId: "industry-healthcare-1"
    },
    {
        title: "EHR/EMR & Practice Management",
        description: "Streamline clinical workflows with custom Electronic Health Record (EHR) systems and practice management software for scheduling, billing, and reporting.",
        imageId: "industry-healthcare-2"
    },
    {
        title: "mHealth & Patient Engagement Apps",
        description: "Empower patients to take control of their health with mobile apps for medication reminders, symptom tracking, fitness monitoring, and educational content.",
        imageId: "industry-healthcare-3"
    },
    {
        title: "Medical AI & Data Analytics",
        description: "Unlock insights from clinical data with AI-powered diagnostic tools, predictive analytics for disease outbreaks, and population health management platforms.",
        imageId: "industry-healthcare-4"
    },
];

export default function HealthcareAppDevelopment() {
  const image = PlaceHolderImages.find(img => img.id === 'industry-healthcare');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Healthcare App Development"
        description="Improve patient outcomes and streamline clinical workflows with our secure, compliant, and innovative healthcare software solutions. We build technology that saves lives."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Technology is revolutionizing healthcare, offering new ways to deliver care, manage data, and engage patients. Binate Digital is a trusted partner for healthcare organizations, developing custom software that meets the industry's strict security and regulatory requirements.
            </p>
            <p className="text-muted-foreground">
                We specialize in creating HIPAA-compliant applications for telemedicine, practice management, patient engagement, and medical data analytics. Our team understands the complexities of the healthcare industry and is committed to building solutions that improve efficiency, reduce costs, and enhance the quality of care.
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
    