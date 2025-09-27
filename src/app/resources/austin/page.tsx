
import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { footerData } from "@/lib/data";

export default function AustinPage() {
  const image = PlaceHolderImages.find(img => img.id === 'page-austin');
  const austinLocation = footerData.locations.find(loc => loc.city.includes("Austin"));

  if (!image || !austinLocation) return null;

  return (
    <ServicePageLayout
        title="Our Austin, TX Office"
        description="Creative Lines Digital is proud to be part of the vibrant tech community in Austin, Texas."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8 text-lg text-muted-foreground">
            <p>
                Our Austin office is strategically located in the heart of one of America's fastest-growing tech hubs. This presence allows us to serve our clients in the region with a local touch while leveraging our global talent network.
            </p>
            <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Location</h3>
                <p className="text-xl font-medium text-foreground">{austinLocation.city}</p>
            </div>
            <p>
                Whether you're a startup looking to make your mark or an established enterprise seeking to innovate, our Austin team is ready to partner with you to achieve your digital ambitions.
            </p>
        </div>
    </ServicePageLayout>
  );
}

    