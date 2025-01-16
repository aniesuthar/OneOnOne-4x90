import React from 'react';
import { cn } from '@/lib/utils'; // Utility for conditional classNames

export default function BoxLayout({ children, className, as: Component = 'div' }) {
  return (
    <Component
      className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </Component>
  );
}

