import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function TermsAndConditionsPage() {
  const image = PlaceHolderImages.find(img => img.id === 'page-terms-conditions');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Terms & Conditions"
        description="Please read these terms and conditions carefully before using Our Service."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-6 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
            <p>
                Welcome to Creative Lines Digital. These Terms and Conditions govern your use of our website and services. By accessing or using the service, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">2. Intellectual Property</h2>
            <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Creative Lines Digital and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Creative Lines Digital.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">3. Limitation of Liability</h2>
            <p>
                In no event shall Creative Lines Digital, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">4. Governing Law</h2>
            <p>
                These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which our company is registered, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">5. Changes</h2>
            <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
            </p>

            <p className="pt-4">
                If you have any questions about these Terms, please contact us.
            </p>
        </div>
    </ServicePageLayout>
  );
}
