import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Palette, Scaling, UserCheck, Zap } from "lucide-react";
import { webDevFeatures } from "@/lib/data";

const iconMap = {
    Palette,
    Scaling,
    UserCheck,
    Zap,
};

const WebDevSection = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Custom <span className="gradient-text">Website Development</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 text-lg">
                        We create bespoke, scalable websites designed to align perfectly with your brand and business objectives. Empower your digital strategy with innovative features and a seamless user experience.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {webDevFeatures.map((feature, index) => {
                        const Icon = iconMap[feature.icon as keyof typeof iconMap];
                        return (
                            <Card key={index} className="p-6 flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <div className="shrink-0">
                                    <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center">
                                        {Icon && <Icon size={32} />}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WebDevSection;
