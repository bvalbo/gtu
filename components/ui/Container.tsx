'use client';

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export default function Container({ 
  children, 
  className = '', 
  maxWidth = 'xl' 
}: ContainerProps) {
  // Maksimal bredde basert på Tailwind-størrelser
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full'
  };
  
  // Kombinerte klasser
  const containerClasses = `mx-auto px-4 sm:px-6 ${maxWidthClasses[maxWidth]} ${className}`;
  
  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
}