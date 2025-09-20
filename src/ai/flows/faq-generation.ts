// faq-generation.ts
'use server';

/**
 * @fileOverview Generates FAQs for a given website content.
 *
 * - generateFaq - A function that generates FAQs.
 * - FAQGenerationInput - The input type for the generateFaq function.
 * - FAQGenerationOutput - The return type for the generateFaq function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FAQGenerationInputSchema = z.object({
  websiteContent: z
    .string()
    .describe('The content of the website to generate FAQs for.'),
});
export type FAQGenerationInput = z.infer<typeof FAQGenerationInputSchema>;

const FAQGenerationOutputSchema = z.object({
  faqItems: z.array(
    z.object({
      question: z.string().describe('The frequently asked question.'),
      answer: z.string().describe('The answer to the frequently asked question.'),
    })
  ).describe('An array of frequently asked questions and their answers.'),
});
export type FAQGenerationOutput = z.infer<typeof FAQGenerationOutputSchema>;

export async function generateFaq(input: FAQGenerationInput): Promise<FAQGenerationOutput> {
  return faqGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'faqGenerationPrompt',
  input: {schema: FAQGenerationInputSchema},
  output: {schema: FAQGenerationOutputSchema},
  prompt: `You are an expert in understanding website content and generating relevant FAQs.

  Given the following website content, generate a list of frequently asked questions and their answers.

  Website Content:
  {{websiteContent}}

  Ensure the questions are relevant and the answers are concise and informative.
  The questions and answers should be tailored to the content, and assume the perspective of a site visitor looking for specific details.
  Format the output as a JSON array of objects, where each object has a "question" and "answer" field.

  `, 
});

const faqGenerationFlow = ai.defineFlow(
  {
    name: 'faqGenerationFlow',
    inputSchema: FAQGenerationInputSchema,
    outputSchema: FAQGenerationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
