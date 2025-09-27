import ServicePageLayout from "@/components/layout/service-page-layout";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const features = [
    {
        title: "Secure Bank Aggregation",
        description: "We integrated a secure, open banking API to allow users to connect all their bank accounts and credit cards in one place, providing a holistic view of their financial health.",
        imageId: "case-study-finance-tracking-1"
    },
    {
        title: "Intelligent Spending Insights",
        description: "Our app automatically categorizes transactions and provides users with easy-to-understand reports and visualizations, helping them see exactly where their money is going.",
        imageId: "case-study-finance-tracking-2"
    },
    {
        title: "Proactive Budgeting Tools",
        description: "Users can set custom budgets for different spending categories. The app sends proactive alerts when they are nearing their limits, empowering them to stay on track with their financial goals.",
        imageId: "case-study-finance-tracking-3"
    },
    {
        title: "Smart Bill Reminders",
        description: "We built a feature that automatically identifies recurring bills and sends timely reminders to users, helping them avoid late fees and manage their cash flow more effectively.",
        imageId: "case-study-finance-tracking-4"
    },
];

export default function FinanceTrackingApp() {
  const image = PlaceHolderImages.find(img => img.id === 'case-study-finance-tracking');
  if (!image) return null;

  return (
    <ServicePageLayout
        title="Case Study: Personal Finance Tracking App"
        description="See how we created a smart, secure, and user-friendly personal finance app that helps users take control of their spending, budgeting, and financial goals."
        imageUrl={image.imageUrl}
        imageHint={image.imageHint}
        imageAlt={image.description}
    >
        <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
                A FinTech startup came to us with a vision to create a personal finance app that was both powerful and simple to use. Their goal was to empower users to understand their spending habits, create effective budgets, and achieve their financial goals without the complexity of traditional finance software.
            </p>
            <p className="text-muted-foreground">
                We developed a native mobile application that prioritized security, simplicity, and actionable insights. By leveraging modern technologies like open banking and machine learning, we delivered an app that provides real value to its users, helping them to build better financial futures.
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
