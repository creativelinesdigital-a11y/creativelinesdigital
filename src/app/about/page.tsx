import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const image = PlaceHolderImages.find(img => img.id === 'page-about');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="About Creative Lines Digital"
        description="We are a global digital transformation company that masters the best mobile app and web development solutions. Trust our expertise with any and every digital solution you require."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8 text-lg text-muted-foreground">
            <p>
                In today's rapidly evolving digital landscape, businesses face increasing pressure to stay ahead of the curve. To succeed, companies must innovate and adapt, yet many struggle to dedicate the necessary resources to fully realize their potential.
            </p>
            <p>
                Creative Lines Digital offers the solution. As a leading global digital tech company, we specialize in crafting innovative digital experiences that drive transformation. From strategy and design to development and deployment, our team works with you to deliver solutions tailored to your business objectives.
            </p>
            <p>
                Whether you're looking to optimize operations, enhance customer engagement, or leverage emerging technologies, we provide the expertise to turn your vision into reality. Our commitment to quality, innovation, and client success has made us a trusted partner for businesses worldwide.
            </p>
        </div>
    </ServicePageLayout>
  );
}
