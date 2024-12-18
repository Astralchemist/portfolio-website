import { Card } from '../ui/Card';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  
  return (
    <Card>
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