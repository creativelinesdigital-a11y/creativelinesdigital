import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ContactButton } from "@/components/contact-button";
import { Mail, Phone } from "lucide-react";

export default function ContactUsPage() {
  const image = PlaceHolderImages.find(img => img.id === 'page-contact-us');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Contact Us"
        description="We're here to help. Reach out to us with your questions, project ideas, or partnership inquiries."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-12">
            <div className="text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Have an Idea?</h3>
                <p className="text-lg text-muted-foreground mb-6">Click the button below to share your project details and our team will get back to you shortly.</p>
                <ContactButton size="lg" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-lg">
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-foreground">Email Us</h3>
                    <a href="mailto:info@binatedigital.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary">
                        <Mail className="h-6 w-6" />
                        <span>info@binatedigital.com</span>
                    </a>
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-foreground">Call Us</h3>
                    <a href="tel:856-243-6180" className="flex items-center gap-4 text-muted-foreground hover:text-primary">
                        <Phone className="h-6 w-6" />
                        <span>856-243-6180</span>
                    </a>
                    <a href="tel:713-405-3098" className="flex items-center gap-4 text-muted-foreground hover:text-primary">
                        <Phone className="h-6 w-6" />
                        <span>713-405-3098</span>
                    </a>
                </div>
            </div>
        </div>
    </ServicePageLayout>
  );
}
