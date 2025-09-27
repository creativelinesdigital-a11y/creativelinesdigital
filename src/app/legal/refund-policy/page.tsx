import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function RefundPolicyPage() {
  const image = PlaceHolderImages.find(img => img.id === 'page-refund-policy');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Refund Policy"
        description="Our policy on refunds for services provided by Creative Lines Digital."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-6 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">1. General Policy</h2>
            <p>
                At Creative Lines Digital, we strive to ensure our clients are satisfied with our services. Our refund policy is designed to be transparent and fair. Due to the nature of digital services, refunds are handled on a case-by-case basis.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">2. Project-Based Services</h2>
            <p>
                For project-based work, payments are typically made in milestones. A refund of the most recent milestone payment may be considered if there is a clear failure to deliver the agreed-upon services. No refunds will be issued for previously approved and completed milestones.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">3. Subscription Services</h2>
            <p>
                For any monthly or subscription-based services, you may cancel at any time. However, refunds for partial months or unused services are not provided. Your access to the service will continue until the end of the current billing period.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">4. How to Request a Refund</h2>
            <p>
                To request a refund, please contact our support team with your project details and a clear explanation of the issue. We will review your request and respond within 7-10 business days.
            </p>
            
            <p className="pt-4">
                Creative Lines Digital reserves the right to modify this refund policy at any time. Any changes will be posted on this page.
            </p>
        </div>
    </ServicePageLayout>
  );
}
