import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export function CTASection({ title, description, ctaText, ctaLink }: CTASectionProps) {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{description}</p>
        <Link
          to={ctaLink}
          className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          {ctaText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}