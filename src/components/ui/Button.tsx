import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
}

export function Button({ variant = 'primary', href, children, ...props }: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-md transition-colors';
  const variantClasses = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700',
    secondary: 'bg-gray-700 text-white hover:bg-gray-600',
  };

  const className = `${baseClasses} ${variantClasses[variant]}`;

  if (href) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}