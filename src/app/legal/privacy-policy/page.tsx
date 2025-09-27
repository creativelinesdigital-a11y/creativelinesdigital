import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function PrivacyPolicyPage() {
  const image = PlaceHolderImages.find(img => img.id === 'page-privacy-policy');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Privacy Policy"
        description="Your privacy is important to us. It is Creative Lines Digital's policy to respect your privacy regarding any information we may collect from you across our website."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-6 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">1. Information we collect</h2>
            <p>
                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">2. How we use your information</h2>
            <p>
                We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">3. Security</h2>
            <p>
                The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground">4. Links to other sites</h2>
            <p>
                Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">5. Changes to this policy</h2>
            <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

             <p className="pt-4">
                This policy is effective as of 1st January 2024. If you have any questions about how we handle user data and personal information, feel free to contact us.
            </p>
        </div>
    </ServicePageLayout>
  );
}
