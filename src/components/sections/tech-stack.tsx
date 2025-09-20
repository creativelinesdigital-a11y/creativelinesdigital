import Image from "next/image";
import { Card } from "@/components/ui/card";
import { techStack } from "@/lib/data";

const TechStackSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our vetted developers are proficient in utilizing the latest tools and technologies, ensuring that your project is executed with the utmost efficiency.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {techStack.map((tech) => (
            <Card key={tech.id} className="p-4 flex flex-col items-center justify-center gap-2 w-28 h-28 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-10 h-10">
                <Image
                  src={tech.imageUrl}
                  alt={tech.name}
                  fill
                  className="object-contain"
                  data-ai-hint={tech.imageHint}
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{tech.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
