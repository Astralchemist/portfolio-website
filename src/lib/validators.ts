import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(1000),
});

export const QuoteFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string(),
  message: z.string().min(10).max(1000),
});

export const NewsletterSchema = z.object({
  email: z.string().email(),
});