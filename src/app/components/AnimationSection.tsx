// components/AnimatedSection.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'slide-left' | 'slide-right' | 'slide-up' | 'zoom';
}

export default function AnimatedSection({
  children,
  animation = 'slide-up',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animationClasses = {
    'slide-up': isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-12',
    'slide-left': isVisible
      ? 'opacity-100 -translate-x-0'
      : 'opacity-0 translate-x-12',
    'slide-right': isVisible
      ? 'opacity-100 translate-x-0'
      : 'opacity-0 -translate-x-12',
    zoom: isVisible
      ? 'opacity-100 scale-100'
      : 'opacity-0 scale-90',
  };

  return (
    <div
      ref={ref}
      className={clsx(
        'transition-all duration-1000 ease-out will-change-transform',
        animationClasses[animation]
      )}
    >
      {children}
    </div>
  );
}
