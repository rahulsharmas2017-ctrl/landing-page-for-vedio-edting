
import React from 'react';
import CTAButton from './CTAButton';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
      ></div>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-black/80 z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="animate-item-enter animation-delay-100 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-snug sm:leading-tight [text-shadow:2px_2px_8px_rgba(0,0,0,0.6)]">
          Raw Footage to<br className="sm:hidden" /> <span className="inline-block font-black bg-brand-accent text-brand-dark px-4 rounded-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300 ease-in-out shadow-lg">Viral Reels</span> in 24 Hours.
        </h1>
        
        <div className="animate-item-enter animation-delay-200 mt-8 flex flex-col sm:flex-row items-center gap-4">
            <div className="text-base sm:text-lg font-semibold bg-brand-accent/10 border border-brand-accent/30 text-brand-accent px-6 py-2 rounded-full">
                Just ₹199 Per Reel
            </div>
             <div className="text-base sm:text-lg font-semibold bg-gray-500/10 border border-gray-500/30 text-gray-200 px-6 py-2 rounded-full">
                ⚡ 24-Hour Delivery Guaranteed
            </div>
        </div>

        <h2 className="animate-item-enter animation-delay-300 mt-6 text-base sm:text-lg md:text-xl max-w-2xl text-gray-300">
          Stop struggling with CapCut. We edit high-retention "Talking Head" reels for Coaches & Creators.
          <br />
          Your First Reel is <strong className="text-gray-100 bg-brand-accent/20 px-2 py-1 rounded-md">100% FREE.</strong>
        </h2>

        <div className="animate-item-enter animation-delay-400 mt-12 mb-4 w-full px-4 sm:px-0 sm:w-auto">
          <CTAButton href={WHATSAPP_LINK}>
            Get My FREE Viral Reel Now 👉
          </CTAButton>
        </div>

        <div className="animate-item-enter animation-delay-500 mt-8 text-sm sm:text-base text-gray-400 font-semibold flex items-center justify-center space-x-2 sm:space-x-4 flex-wrap">
          <span>✅ No Advance Payment</span>
          <span className='hidden sm:inline text-gray-700'>•</span>
          <span>🇮🇳 Trusted by Indian Creators</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;