import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { caseStudies } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudiesPage() {
  const image = PlaceHolderImages.find(img => img.id === 'page-case-studies');
  if (!image) return null;

  return (
    <ServicePageLayout
      title="Our Success Stories"
      description="Explore how we've helped businesses like yours achieve their goals with our innovative digital solutions. Our case studies showcase our commitment to excellence and client success."
      imageUrl={image.imageUrl}
      imageHint={image.imageHint}
      imageAlt={image.description}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((item) => (
          <Link href="#" key={item.id}>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={item.imageHint}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
              <div className="absolute inset-0 flex items-end p-4">
                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </ServicePageLayout>
  );
}
