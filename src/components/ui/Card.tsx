interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors ${className}`}>
      {children}
    </div>
  );
}