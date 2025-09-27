
import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function FigmaWorkshopPage() {
  const image = PlaceHolderImages.find(img => img.id === 'blog-1');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Figma Workshop Session"
        description="Designing digital experiences that are easy to use is of utmost importance. A workshop conducted by Creative Lines Digital was exclusively dedicated to enhancing the understanding of Figma."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8 text-lg text-muted-foreground">
            <p>
                At Creative Lines Digital, we believe that great design is the cornerstone of any successful digital product. To empower our team and uphold our commitment to excellence, we recently conducted an intensive workshop focused entirely on Figma, the collaborative interface design tool that is revolutionizing the industry.
            </p>
            <p>
                The session was designed to cater to all skill levels, from beginners to advanced users. Our goal was to foster a deeper understanding of Figma's powerful features, including component libraries, auto layout, prototyping, and real-time collaboration. By mastering these tools, our team can create more consistent, scalable, and user-friendly designs with greater efficiency.
            </p>
            <h3 className="text-2xl font-semibold text-foreground">Key Takeaways from the Workshop</h3>
            <ul className="space-y-4 list-disc list-inside">
                <li>
                    <strong>Streamlined Collaboration:</strong> We explored how Figma's real-time collaboration features can break down silos between designers, developers, and project managers, leading to a more integrated and efficient workflow.
                </li>
                <li>
                    <strong>Building a Robust Design System:</strong> A significant portion of the workshop was dedicated to creating and maintaining a robust design system. This ensures brand consistency across all digital touchpoints and accelerates the design process.
                </li>
                <li>
                    <strong>Advanced Prototyping:</strong> Participants learned how to create complex, interactive prototypes that closely mimic the final user experience, allowing for more effective user testing and stakeholder feedback.
                </li>
            </ul>
            <p>
                Investing in our team's skills is an investment in our clients' success. This Figma workshop is just one of the many ways we ensure that Creative Lines Digital remains at the forefront of digital innovation, ready to tackle any design challenge with creativity and expertise.
            </p>
        </div>
    </ServicePageLayout>
  );
}
