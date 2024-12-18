// Common types used across the application
export interface Service {
  icon: React.ComponentType;
  title: string;
  description: string;
  features: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
}

export interface NewsletterData {
  email: string;
}