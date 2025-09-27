import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import TechStackSection from "@/components/sections/tech-stack";

export default function TechnologiesPage() {
  const image = PlaceHolderImages.find(img => img.id === 'page-technologies');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Our Technologies"
        description="We leverage a powerful and modern tech stack to build robust, scalable, and innovative digital solutions. Our developers are proficient in the latest tools to ensure your project's success."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="py-16 md:py-24 bg-background">
            <TechStackSection />
        </div>
    </ServicePageLayout>
  );
}
