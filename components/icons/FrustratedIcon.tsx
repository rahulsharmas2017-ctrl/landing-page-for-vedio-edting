
import React from 'react';

const FrustratedIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
     <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 14.5a5 5 0 015 0" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h.01M15 10h.01" />
  </svg>
);

export default FrustratedIcon;
