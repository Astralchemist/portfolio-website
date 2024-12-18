import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      {description && <p className="text-gray-400">{description}</p>}
    </div>
  );
}