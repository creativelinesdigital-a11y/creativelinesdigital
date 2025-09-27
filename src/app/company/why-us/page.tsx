import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function WhyUsPage() {
  const image = PlaceHolderImages.find(img => img.id === 'page-why-us');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Why Choose Creative Lines Digital?"
        description="Discover the key differentiators that make us the right partner for your digital transformation journey."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8 text-lg text-muted-foreground">
            <h3 className="text-2xl font-semibold text-foreground">A Partner in Your Success</h3>
            <p>
                We're more than just a vendor; we're your strategic partner. We invest time in understanding your business, your goals, and your challenges to deliver solutions that provide real, measurable value. Our success is tied to yours.
            </p>
            <h3 className="text-2xl font-semibold text-foreground">Global Talent, Local Presence</h3>
            <p>
                With a global team of vetted experts and offices in key locations worldwide, we offer the best of both worlds: access to a diverse, top-tier talent pool and the personalized attention of a local team.
            </p>
            <h3 className="text-2xl font-semibold text-foreground">Unwavering Commitment to Quality</h3>
            <p>
                Quality is at the heart of everything we do. From our rigorous development processes and thorough QA testing to our transparent project management, we are committed to delivering excellence in every project, on time and on budget.
            </p>
        </div>
    </ServicePageLayout>
  );
}
