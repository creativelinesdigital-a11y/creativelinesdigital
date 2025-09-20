import React from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ContactButton } from '@/components/contact-button';
import Image from 'next/image';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  imageAlt: string;
  children: React.ReactNode;
}

export default function ServicePageLayout({
  title,
  description,
  imageUrl,
  imageHint,
  imageAlt,
  children,
}: ServicePageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow animate-in fade-in duration-500">
        <section className="relative text-white py-20 md:py-28">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            data-ai-hint={imageHint}
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative container mx-auto px-4 text-center z-10">
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
              {description}
            </p>
            <div className="mt-8">
                <ContactButton size="lg">Get Started</ContactButton>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {children}
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let us help you achieve your business goals. Contact us today to discuss your project requirements and get a free quote.
            </p>
            <ContactButton size="lg" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
