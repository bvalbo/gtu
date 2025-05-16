'use client';

import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
  withBorder?: boolean;
}

export default function Section({ 
  children, 
  title, 
  subtitle, 
  className = '', 
  id,
  withBorder = false
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-8 ${withBorder ? 'border-t border-gray-800' : ''} ${className}`}
    >
      {title && (
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
        </div>
      )}
      
      {children}
    </section>
  );
}