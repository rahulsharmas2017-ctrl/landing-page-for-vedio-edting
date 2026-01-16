
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Record & Send',
    description: 'Shoot a raw video on your phone and send it via Drive or WhatsApp. Good lighting is all you need.',
  },
  {
    number: '02',
    title: 'The 24-Hour Magic',
    description: 'We add pro captions, B-roll, and effects, polishing your reel to professional standards overnight.',
  },
  {
    number: '03',
    title: 'Post & Grow',
    description: 'Receive the final MP4 the next day. Approve, post, and watch your engagement grow.',
  },
];

const Process: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white [text-shadow:2px_2px_6px_rgba(0,0,0,0.5)]">
            Get Your Reel <span className="bg-brand-accent text-brand-dark px-3 rounded-md">"Posted & Sorted"</span> in 3 Steps
          </h2>
           <div className="w-24 h-1 mx-auto mt-6 bg-brand-accent rounded-full"></div>
        </div>
        
        <div className="mt-16 sm:mt-20 flex flex-col md:flex-row justify-between items-center gap-y-16 md:gap-x-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="relative flex flex-col items-center text-center max-w-xs">
                
                {index > 0 && (
                  <div 
                    aria-hidden="true" 
                    className="md:hidden absolute bottom-full left-1/2 -translate-x-1/2 w-px h-16 bg-gray-800"
                  />
                )}

                <div className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-brand-dark-secondary border-4 border-brand-accent text-brand-accent font-extrabold text-4xl mb-6 shadow-xl shadow-brand-accent/20">
                  {/* Keyframe marker */}
                  <div className="absolute -top-2 w-4 h-4 bg-brand-accent rotate-45 rounded-sm"></div>
                  {step.number}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-100 mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div 
                  aria-hidden="true" 
                  className="hidden md:block flex-1 border-t-2 border-dashed border-gray-700"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
