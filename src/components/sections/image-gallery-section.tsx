"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { caseStudies } from "@/lib/data";
import {
  imageGalleryRefresher,
  type ImageGalleryRefresherOutput,
} from "@/ai/flows/image-gallery-refresher";
import { Skeleton } from "../ui/skeleton";
import { Wand2 } from "lucide-react";

type GalleryItem = typeof caseStudies[0];

const ImageGallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [refreshedImage, setRefreshedImage] =
    useState<ImageGalleryRefresherOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRefreshImage = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    setError(null);
    setRefreshedImage(null);

    try {
      const response = await fetch(selectedImage.imageUrl);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        const base64data = reader.result as string;
        try {
            const result = await imageGalleryRefresher({
                originalImageDataUri: base64data,
            });
            setRefreshedImage(result);
        } catch (e) {
            setError(e instanceof Error ? e.message : "Failed to refresh image.");
        } finally {
            setIsLoading(false);
        }
      };
    } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to fetch image data.");
        setIsLoading(false);
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setSelectedImage(null);
      setRefreshedImage(null);
      setError(null);
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI-Powered <span className="gradient-text">Image Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our case studies. Click on an image and use our AI tool to
            generate a fresh, new visual concept.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {caseStudies.slice(0, 4).map((item) => (
            <Dialog key={item.id} onOpenChange={handleOpenChange}>
              <DialogTrigger asChild>
                <div
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={item.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>
                  <div className="absolute inset-0 flex items-end p-4">
                    <h3 className="text-white text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>{selectedImage?.title}</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold mb-2">Original</h4>
                    <div className="relative aspect-video w-full overflow-hidden rounded-md">
                      {selectedImage && (
                        <Image
                          src={selectedImage.imageUrl}
                          alt={selectedImage.title}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">AI Refreshed</h4>
                    <div className="relative aspect-video w-full overflow-hidden rounded-md bg-muted flex items-center justify-center">
                      {isLoading && <Skeleton className="w-full h-full" />}
                      {!isLoading && refreshedImage && (
                        <Image
                          src={refreshedImage.refreshedImageDataUri}
                          alt={`AI refreshed version of ${selectedImage?.title}`}
                          fill
                          className="object-cover"
                        />
                      )}
                      {!isLoading && !refreshedImage && (
                        <div className="text-center text-muted-foreground p-4">
                           Click the button to generate an AI variation.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {error && <p className="text-destructive text-sm mt-2">{error}</p>}
                <DialogFooter>
                  <Button
                    onClick={handleRefreshImage}
                    disabled={isLoading}
                    className="w-full md:w-auto"
                  >
                    <Wand2 className="mr-2 h-4 w-4" />
                    {isLoading ? "Generating..." : "Refresh with AI"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySection;
