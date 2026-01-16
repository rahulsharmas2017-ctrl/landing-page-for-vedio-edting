
import React from 'react';
import CheckIcon from './icons/CheckIcon';
import CTAButton from './CTAButton';
import { WHATSAPP_LINK, WHATSAPP_LINK_PAID } from '../constants';

// Reduced text density for faster scanning
const features = [
  "'Hormozi Style' Captions",
  'Engaging Zooms & Cuts',
  'Stock B-Roll & Music',
  'Pro Color & Audio Polish',
  '24-Hour Express Delivery',
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 bg-brand-dark-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Highlight "First Reel Free" more prominently */}
        <div className="bg-brand-dark/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 text-center ring-2 ring-brand-accent/50">
           <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Not Sure Yet? No Problem.</h3>
           <p className="text-lg sm:text-xl font-bold text-gray-100 mb-6">Try 1 Reel <span className="bg-brand-accent text-brand-dark px-3 py-1 rounded-lg">Completely FREE</span>. No Hidden Charges.</p>
           <div className="inline-block">
             <CTAButton href={WHATSAPP_LINK}>
                Get My FREE Reel First 👉
             </CTAButton>
           </div>
        </div>
      
        <div className="bg-brand-dark rounded-xl border-2 border-brand-accent shadow-2xl shadow-brand-accent/20 p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white [text-shadow:2px_2px_6px_rgba(0,0,0,0.5)]">
            The <span className="bg-brand-accent text-brand-dark px-3 rounded-md">"Viral Starter"</span> Pack
          </h3>
          <div className="w-24 h-1 mx-auto mt-6 bg-brand-accent rounded-full"></div>
          
          {/* Visually separate price from features */}
          <div className="my-8 py-6 border-y border-gray-800">
            <span className="text-5xl sm:text-6xl font-extrabold text-white">₹199</span>
            <span className="text-lg sm:text-xl font-medium text-gray-400">/ Per Reel</span>
            {/* Add "Why this price?" micro-copy */}
            <p className="mt-3 text-sm text-gray-500">
              Our specialized Indian agency pricing to help you scale.
            </p>
          </div>
          
          <h4 className="text-lg sm:text-xl font-bold text-left mb-5 text-gray-100">What's Included:</h4>
          <ul className="space-y-4 text-left my-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-base sm:text-lg">
                <CheckIcon className="w-7 h-7 text-brand-accent flex-shrink-0 mr-4" />
                <span className={`text-gray-300 ${index === features.length - 1 ? 'font-bold text-white' : ''}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          
          <div className="mt-10">
            <div className="w-full sm:w-auto">
              <CTAButton href={WHATSAPP_LINK_PAID}>
                Start My ₹199 Edit Now 👉
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
