import {
  BarChart2,
  Brain,
  Building2,
  Code2,
  Globe,
  HardHat,
  LineChart,
  Users2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import React from 'react';

const services = [
  {
    icon: Brain,
    title: 'Company Consulting',
    description:
      'Comprehensive consulting solutions for enterprises of all sizes',
    features: [
      'Strategic Planning',
      'Process Optimization',
      'Change Management',
      'Growth Strategy',
    ],
  },
  {
    icon: Users2,
    title: 'Individual Consulting',
    description: 'Personalized consulting services for entrepreneurs and professionals',
    features: [
      'Career Development',
      'Personal Branding',
      'Skills Assessment',
      'Leadership Coaching',
    ],
  },
  {
    icon: Building2,
    title: 'Mergers & Acquisitions',
    description: 'Expert guidance through complex M&A processes',
    features: [
      'Due Diligence',
      'Valuation Services',
      'Integration Planning',
      'Risk Assessment',
    ],
  },
  {
    icon: LineChart,
    title: 'Portfolio Management',
    description: 'Strategic portfolio optimization and investment management',
    features: [
      'Asset Allocation',
      'Risk Management',
      'Performance Analysis',
      'Investment Strategy',
    ],
  },
  {
    icon: Code2,
    title: 'Developer Solutions',
    description: 'Cutting-edge technology consulting with in-house expertise',
    features: [
      'Technical Architecture',
      'Code Review & Optimization',
      'DevOps Implementation',
      'Cloud Solutions',
    ],
  },
  {
    icon: HardHat,
    title: 'Construction Services',
    description: 'Comprehensive construction consulting and management',
    features: [
      'Project Planning',
      'Cost Estimation',
      'Quality Control',
      'Safety Management',
    ],
  },
];

export function Services() {
  return (
    <div className="min-h-screen bg-black dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader
          title="Our Services"
          description="Comprehensive consulting solutions powered by cutting-edge technology and industry expertise"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors"
            >
              <service.icon className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-300"
                  >
                    <span className="h-1.5 w-1.5 bg-purple-400 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 py-16 mt-16 rounded-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology-driven services can help achieve your goals
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}