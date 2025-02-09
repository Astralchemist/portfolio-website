import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BarChart2, Brain, Rocket, ArrowRight, CheckCircle, Users } from 'lucide-react';

// NavBar component
function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg dark:bg-gray-900/80' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ConsultHasha
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <Link
              href="/quote"
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero component
interface HeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

function Hero({ title, description, ctaText, ctaLink }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-900/40 dark:to-purple-900/40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {description}
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href={ctaLink}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg inline-flex items-center space-x-2"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

// FeatureGrid component
interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

interface FeatureGridProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

function FeatureGrid({ title, subtitle, features }: FeatureGridProps) {
  return (
    <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {React.createElement(feature.icon, {
                  className: 'w-8 h-8 text-blue-600 dark:text-blue-400',
                })}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats component
function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold">500+</div>
            <div className="text-blue-100">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">98%</div>
            <div className="text-blue-100">Client Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">50+</div>
            <div className="text-blue-100">Expert Consultants</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTASection component
interface CTASectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

function CTASection({ title, description, ctaText, ctaLink }: CTASectionProps) {
  return (
    <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{description}</p>
          <Link
            href={ctaLink}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg inline-flex items-center space-x-2"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Main Home component
export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'Strategic Consulting',
      description: 'Expert analysis and actionable insights to drive your business forward with confidence.',
    },
    {
      icon: BarChart2,
      title: 'Data Analytics',
      description: 'Transform raw data into meaningful insights with our advanced analytics solutions.',
    },
    {
      icon: Users,
      title: 'Team Excellence',
      description: 'Access our network of industry experts and specialized consultants for your unique needs.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavBar />
      <Hero
        title="Elevate Your Business Strategy"
        description="Partner with industry experts to transform challenges into opportunities. We deliver data-driven solutions that drive sustainable growth and innovation."
        ctaText="Schedule a Consultation"
        ctaLink="/quote"
      />
      <FeatureGrid
        title="Why Partner With Us?"
        subtitle="Leverage our expertise to achieve your business objectives"
        features={features}
      />
      <Stats />
      <CTASection
        title="Ready to Transform Your Business?"
        description="Let's collaborate to build innovative solutions tailored to your business."
        ctaText="Get Started"
        ctaLink="/quote"
      />
    </div>
  );
}
