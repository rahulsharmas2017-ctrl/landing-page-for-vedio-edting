
import React from 'react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ href, children, className = '' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block w-full sm:w-auto bg-brand-accent text-black font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-lime-300 hover:shadow-xl hover:shadow-brand-accent/30 active:scale-95 sm:text-xl sm:py-5 [text-shadow:1px_1px_2px_rgba(0,0,0,0.1)] ${className}`}
    >
      {children}
    </a>
  );
};

export default CTAButton;
