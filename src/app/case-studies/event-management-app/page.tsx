import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Seamless Event Registration",
        description: "We implemented a user-friendly registration flow that allows attendees to sign up for events, choose sessions, and make payments in just a few taps, boosting conversion rates.",
        imageId: "case-study-event-management-1"
    },
    {
        title: "Interactive Engagement Tools",
        description: "To enhance attendee participation, we integrated live polling, Q&A sessions, and real-time feedback mechanisms directly into the app, fostering a dynamic and engaging event atmosphere.",
        imageId: "case-study-event-management-2"
    },
    {
        title: "Personalized Attendee Networking",
        description: "Our solution included an AI-powered networking module that suggested relevant connections to attendees based on their profiles, interests, and session attendance, facilitating meaningful interactions.",
        imageId: "case-study-event-management-3"
    },
    {
        title: "Actionable Post-Event Analytics",
        description: "We built a comprehensive analytics dashboard for organizers, providing deep insights into attendee behavior, session popularity, and overall event ROI, enabling data-driven decisions for future events.",
        imageId: "case-study-event-management-4"
    },
];

export default function EventManagementApp() {
  const image = PlaceHolderImages.find(img => img.id === 'case-study-event-management');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Case Study: Event Management App"
        description="Discover how we developed a comprehensive event management platform that streamlined operations, boosted attendee engagement, and provided valuable data insights for a leading event organizer."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                A major event management company approached us with the challenge of creating a mobile-first platform to manage their portfolio of large-scale conferences. They needed a solution that could handle everything from registration and ticketing to live engagement and post-event analytics, all while providing a seamless experience for thousands of attendees.
            </p>
            <p className="text-muted-foreground">
                Our team developed a robust, scalable, and intuitive application that transformed their event operations. By focusing on user-centric design and powerful backend functionality, we delivered a platform that not only met their complex requirements but also delighted their users and provided a significant return on investment.
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
