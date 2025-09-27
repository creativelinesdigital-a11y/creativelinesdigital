import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import BlogSection from "@/components/sections/blog";

export default function BlogPage() {
  const image = PlaceHolderImages.find(img => img.id === 'page-blog');
  if (!image) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <ServicePageLayout
          title="Our Blog"
          description="Stay updated with the latest industry trends, insights, and stories from our team of experts."
          imageUrl={image.imageUrl}
          imageHint={image.imageHint}
          imageAlt={image.description}
      >
          <div className="py-16 md:py-24">
            <BlogSection />
          </div>
      </ServicePageLayout>
    </div>
  );
}
