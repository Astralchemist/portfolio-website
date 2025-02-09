// Import the necessary components and types
import { Card } from '../ui/Card';
import { LucideIcon } from 'lucide-react';  // Ensure to import the correct icon type
import React from 'react';

// Define the Service interface
interface Service {
  title: string;
  description: string;
  icon: LucideIcon;  // This makes sure icon is a valid React component
  features: string[];
}

// ServiceCard Component
interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;  // Assign the icon to a React component

  return (
    <Card>
      {/* Now you can safely pass className to the icon */}
      <Icon className="h-12 w-12 text-purple-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-3">
        {service.title}
      </h3>
      <p className="text-gray-400 mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="h-1.5 w-1.5 bg-purple-400 rounded-full mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
}
