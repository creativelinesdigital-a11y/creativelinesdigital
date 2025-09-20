import Image from "next/image";
import { ContactButton } from "@/components/contact-button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CtaSection = () => {
    const image = PlaceHolderImages.find(img => img.id === 'cta-1');

  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden min-h-[400px] flex items-center">
            {image && (
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
          <div className="relative z-10 p-8 md:p-16 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              For The Perfect <br />
              <span className="text-accent">Digital Software Solution</span>
            </h2>
            <p className="text-lg text-white/80 mb-8">
              We craft tailored digital software solutions that drive success and innovation.
            </p>
            <ContactButton size="lg" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
