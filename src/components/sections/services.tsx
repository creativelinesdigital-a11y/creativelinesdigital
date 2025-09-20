import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, DollarSign, Rocket, Shield, Scaling, Focus } from "lucide-react";
import { services } from "@/lib/data";
import { ContactButton } from "../contact-button";

const iconMap = {
    Code,
    DollarSign,
    Rocket,
    Shield,
    Scaling,
    Focus,
};

const ServicesSection = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Custom <span className="gradient-text">Mobile App Development</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 text-lg">
                        We specialize in custom software development that empowers businesses to streamline operations and enhance user engagement. Our expert team crafts tailored solutions to meet your unique needs and drive your digital success.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon as keyof typeof iconMap];
                        return (
                            <Card key={index} className="text-center p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                        {Icon && <Icon size={32} />}
                                    </div>
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardDescription className="px-4">
                                    {service.description}
                                </CardDescription>
                            </Card>
                        );
                    })}
                </div>
                <div className="text-center mt-12">
                    <ContactButton size="lg" />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
