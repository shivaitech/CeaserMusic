import React from 'react';

interface LogoProps {
    size?: 'sm' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ size = 'lg' }) => {
  return (
    <span className={`font-condensed tracking-tighter uppercase ${size === 'lg' ? 'text-4xl' : 'text-2xl'} text-black select-none`}>
      AZ:UR
    </span>
  );
};