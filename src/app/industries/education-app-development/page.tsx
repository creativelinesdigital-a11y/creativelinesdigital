import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "E-learning & Virtual Classrooms",
        description: "Create engaging and interactive online learning experiences with live video classes, collaborative whiteboards, and content sharing.",
        imageId: "industry-education-1"
    },
    {
        title: "Learning Management Systems (LMS)",
        description: "Build custom LMS platforms to manage courses, track student progress, administer assessments, and issue certifications for corporate and academic use.",
        imageId: "industry-education-2"
    },
    {
        title: "Gamified & Adaptive Learning",
        description: "Make learning fun and effective with educational games, personalized learning paths, and adaptive assessments that cater to individual student needs.",
        imageId: "industry-education-3"
    },
    {
        title: "Student Information Systems (SIS)",
        description: "Streamline school administration with a centralized system for managing student data, admissions, enrollment, attendance, and grades.",
        imageId: "industry-education-4"
    },
];

export default function EducationAppDevelopment() {
  const image = PlaceHolderImages.find(img => img.id === 'industry-education');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Education App Development"
        description="Transform learning and teaching with our innovative EdTech solutions. We build engaging e-learning platforms, virtual classrooms, and management systems for the modern educational landscape."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                Education is evolving, and technology is playing a central role in shaping its future. Binate Digital develops custom EdTech solutions that enhance the learning experience for students and provide powerful tools for educators and institutions.
            </p>
            <p className="text-muted-foreground">
                From interactive e-learning platforms and virtual classrooms to comprehensive Learning Management Systems (LMS), our applications are designed to be engaging, accessible, and effective. We partner with schools, universities, and corporate training departments to create technology that empowers learning.
            </p>

            <div className="space-y-16 pt-12">
                {features.map((feature, index) => {
                    const featureImage = PlaceHolderImages.find(img => img.id === feature.imageId);
                    const isReversed = index % 2 !== 0;
                    return (
                        <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                            <div className={`relative h-80 w-full ${isReversed ? 'md:order-last' : ''}`}>
                                {featureImage && (
                                    <Image
                                        src={featureImage.imageUrl}
                                        alt={featureImage.description}
                                        fill
                                        className="object-cover rounded-lg shadow-lg"
                                        data-ai-hint={featureImage.imageHint}
                                    />
                                )}
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-2xl">{feature.title}</h3>
                                <p className="text-muted-foreground text-lg">{feature.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </ServicePageLayout>
  );
}
    