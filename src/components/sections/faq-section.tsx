
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  generateFaq,
  type FAQGenerationOutput,
} from "@/ai/flows/faq-generation";
import { Wand2 } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const FaqSection = () => {
  const [faq, setFaq] = useState<FAQGenerationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateFaq = async () => {
    setIsLoading(true);
    setError(null);
    setFaq(null);

    const websiteContent = `
    Empowering Digital Transformation: Global Solutions for a Competitive World. 
    Creative Lines Digital offers the solution. As a leading global digital tech company, we specialize in crafting innovative digital experiences that drive transformation. From strategy and design to development and deployment, our team works with you to deliver solutions tailored to your business objectives.
    Custom Mobile App Development: We specialize in custom software development that empowers businesses to streamline operations and enhance user engagement.
    UI/UX Design: Our UI design approach merges creativity with functionality. We create visually stunning interfaces that not only look great but are easy to navigate.
    Custom Website Development: We create bespoke, scalable websites designed to align perfectly with your brand and business objectives.
    Mobile Game Development: We craft unique mobile gaming experiences, combining innovative storytelling and cutting-edge technology.
    `;

    try {
      const result = await generateFaq({ websiteContent });
      setFaq(result);
    } catch (e) {
      setError(e instanceof Error ? e.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently <span className="gradient-text">Asked Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Have questions? We've got answers. Or let our AI generate some for you based on our services.
          </p>
          <Button onClick={handleGenerateFaq} disabled={isLoading}>
            <Wand2 className="mr-2 h-4 w-4" />
            {isLoading ? "Generating..." : "Generate FAQs with AI"}
          </Button>
        </div>

        {isLoading && (
            <div className="max-w-3xl mx-auto space-y-4">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="border rounded-lg p-4 space-y-2">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                    </div>
                ))}
            </div>
        )}

        {error && <p className="text-center text-destructive">{error}</p>}

        {faq && faq.faqItems.length > 0 && (
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faq.faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </section>
  );
};

export default FaqSection;
