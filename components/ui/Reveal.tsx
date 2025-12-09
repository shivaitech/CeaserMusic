import React, { useEffect, useRef, useState } from 'react';
import { ScrollRevealProps } from '../../types';

export const Reveal: React.FC<ScrollRevealProps> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className={`reveal-text ${isVisible ? 'visible' : ''}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
};