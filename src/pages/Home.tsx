import { BarChart2, Brain, Rocket } from 'lucide-react';
import { Hero } from '../components/sections/Hero';
import { FeatureGrid } from '../components/sections/FeatureGrid';
import { CTASection } from '../components/sections/CTASection';
import { PageLayout } from '../components/layout/PageLayout';

const features = [
  {
    icon: Brain,
    title: 'Expert Analysis',
    description: 'In-depth analysis of your business needs and market opportunities',
  },
  {
    icon: BarChart2,
    title: 'Data-Driven Strategy',
    description: 'Strategic planning backed by comprehensive market research',
  },
  {
    icon: Rocket,
    title: 'Innovation Focus',
    description: 'Cutting-edge solutions to keep you ahead of the competition',
  },
];

export function Home() {
  return (
    <PageLayout>
      <Hero
        title="Transform Your Vision with Expert Consultation"
        description="Strategic solutions for sustainable growth and innovation"
        ctaText="Get Started"
        ctaLink="/quote"
        backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
      />

      <FeatureGrid
        title="Why Choose ConsultHasha?"
        subtitle="We deliver exceptional results through our comprehensive approach"
        features={features}
      />

      <CTASection
        title="Ready to Transform Your Vision?"
        description="Let's work together to achieve your business goals and create lasting success"
        ctaText="Contact Us Today"
        ctaLink="/contact"
      />
    </PageLayout>
  );
}