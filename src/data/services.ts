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
import type { Service } from '../types';

export const services: Service[] = [
  {
    icon: Brain,
    title: 'Company Consulting',
    description: 'Comprehensive consulting solutions for enterprises of all sizes',
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
      'Education Advancement',
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