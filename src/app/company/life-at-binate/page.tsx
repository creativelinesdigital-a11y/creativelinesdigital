import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function LifeAtBinatePage() {
  const image = PlaceHolderImages.find(img => img.id === 'page-life-at-binate');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Life at Creative Lines Digital"
        description="Discover the vibrant culture, talented people, and exciting opportunities that make Creative Lines Digital a great place to work."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8 text-lg text-muted-foreground">
            <p>
                At Creative Lines Digital, we believe that our people are our greatest asset. We've cultivated a collaborative and inclusive environment where creativity, innovation, and learning are at the core of everything we do. Our team is a diverse group of passionate thinkers, creators, and problem-solvers dedicated to pushing the boundaries of digital technology.
            </p>
            <p>
                We foster a culture of continuous growth, providing our team with the resources and opportunities they need to develop their skills and advance their careers. From regular workshops and training sessions to challenging projects for global clients, life at Creative Lines Digital is a journey of professional and personal development.
            </p>
            <p>
                Join us and be part of a team that's not just building software, but shaping the future of digital interaction.
            </p>
        </div>
    </ServicePageLayout>
  );
}
