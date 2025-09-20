'use server';

/**
 * @fileOverview Refreshes images in the image gallery using AI-generated variations.
 *
 * - imageGalleryRefresher - A function that takes an image data URI and generates an AI-refreshed version.
 * - ImageGalleryRefresherInput - The input type for the imageGalleryRefresher function.
 * - ImageGalleryRefresherOutput - The return type for the imageGalleryRefresher function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImageGalleryRefresherInputSchema = z.object({
  originalImageDataUri: z
    .string()
    .describe(
      "The original image's data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ImageGalleryRefresherInput = z.infer<
  typeof ImageGalleryRefresherInputSchema
>;

const ImageGalleryRefresherOutputSchema = z.object({
  refreshedImageDataUri: z
    .string()
    .describe(
      'The AI-refreshed version of the image, as a data URI with MIME type and Base64 encoding.'
    ),
});
export type ImageGalleryRefresherOutput = z.infer<
  typeof ImageGalleryRefresherOutputSchema
>;

export async function imageGalleryRefresher(
  input: ImageGalleryRefresherInput
): Promise<ImageGalleryRefresherOutput> {
  return imageGalleryRefresherFlow(input);
}

const imageGalleryRefresherFlow = ai.defineFlow(
  {
    name: 'imageGalleryRefresherFlow',
    inputSchema: ImageGalleryRefresherInputSchema,
    outputSchema: ImageGalleryRefresherOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.5-flash-image-preview',
      prompt: [
        {media: {url: input.originalImageDataUri}},
        {text: 'Generate a modern and engaging variation of this image.'},
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media?.url) {
      throw new Error('No refreshed image was generated.');
    }

    return {refreshedImageDataUri: media.url};
  }
);
