import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function PartnershipsPage() {
  const image = PlaceHolderImages.find(img => img.id === 'page-partnerships');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Partnerships & Alliances"
        description="We collaborate with leading technology companies and platforms to deliver robust, integrated solutions for our clients."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8 text-lg text-muted-foreground">
            <p>
                At Creative Lines Digital, we believe in the power of collaboration. Our strategic partnerships with industry leaders in cloud computing, software development, and digital marketing enable us to extend our capabilities and provide our clients with comprehensive, state-of-the-art solutions.
            </p>
            <p>
                By aligning with technology giants and innovative platforms, we ensure that our team is always at the forefront of the latest trends and best practices. These alliances allow us to leverage proven technologies to build scalable, secure, and future-proof applications for your business.
            </p>
            <p>
                We are proud to work alongside partners who share our commitment to innovation and excellence, helping us to drive digital transformation and deliver exceptional results for our clients.
            </p>
        </div>
    </ServicePageLayout>
  );
}
