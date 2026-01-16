
import React from 'react';
import CTAButton from './CTAButton';
import { WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark-secondary">
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white [text-shadow:2px_2px_6px_rgba(0,0,0,0.5)]">
          Ready to <span className="bg-brand-accent text-brand-dark px-3 rounded-md">blow up</span> your personal brand?
        </h2>
        <div className="w-24 h-1 mx-auto mt-6 bg-brand-accent rounded-full"></div>
        <div className="mt-8 w-full px-4 sm:px-0 sm:w-auto inline-block">
          <CTAButton href={WHATSAPP_LINK}>
            Yes, Edit My First Reel FREE 👉
          </CTAButton>
        </div>
      </div>
      <div className="bg-brand-dark py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>© 2024 reels.editor.india. Helping Coaches & Creators Scale.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
