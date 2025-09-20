"use client";

import { useEffect, useState } from "react";
import { ContactButton } from "@/components/contact-button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroPhrases = [
  "We Build <span class='gradient-text'>Products</span> & Relationships",
  "We Create <span class='gradient-text'>Technology</span> & Impact",
  "We Deliver <span class='gradient-text'>Projects</span> & Experiences",
  "Building Solutions That <span class='gradient-text'>Work</span> & Wow"
];

const TypedEffect = () => {
    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const handleTyping = () => {
            const currentPhrase = heroPhrases[phraseIndex];
            const fullText = new DOMParser().parseFromString(currentPhrase, "text/html").body.textContent || "";
            
            setText(current => {
                const currentHtml = new DOMParser().parseFromString(current, "text/html").body.textContent || "";
                
                if (isDeleting) {
                    if (currentHtml === "") {
                        setIsDeleting(false);
                        setPhraseIndex(prev => (prev + 1) % heroPhrases.length);
                        return "";
                    }
                    return currentPhrase.substring(0, current.length - 1);
                } else {
                    if (currentHtml === fullText) {
                        // Pause before deleting
                        setTimeout(() => setIsDeleting(true), 2000);
                        return currentPhrase;
                    }
                    return currentPhrase.substring(0, current.length + 1);
                }
            });
        };

        const typingSpeed = isDeleting ? 50 : 100;
        const timer = setTimeout(handleTyping, typingSpeed);
        
        return () => clearTimeout(timer);
    }, [text, isDeleting, phraseIndex]);

    return (
        <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight min-h-[144px] md:min-h-[192px]"
            dangerouslySetInnerHTML={{ __html: text + "&nbsp;" }}
        />
    );
};

const HeroSection = () => {
    const image = PlaceHolderImages.find(img => img.id === 'hero-1');

    return (
        <section className="relative text-white py-24 md:py-32 lg:py-40">
            {image && (
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={image.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative container mx-auto px-4 text-center z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-lg md:text-xl font-semibold mb-4 tracking-wider uppercase text-white/80">
                        Global Leader in Digital Technology Solutions
                    </h2>
                    <TypedEffect />
                    <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-white/90">
                        Empowering innovation through cutting-edge digital solutions that connect, inspire, and transform businesses worldwide.
                    </p>
                    <div className="mt-10">
                        <ContactButton size="lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
