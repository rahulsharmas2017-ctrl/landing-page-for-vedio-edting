
import React from 'react';
import ClockIcon from './icons/ClockIcon';
import FrustratedIcon from './icons/FrustratedIcon';
import GraphIcon from './icons/GraphIcon';

const problems = [
  {
    icon: <ClockIcon className="w-12 h-12 text-brand-accent" />,
    title: 'The "Time Waste" Trap',
    description: 'You spend 3 hours editing a 30-second video instead of coaching clients or building your business. Your time is worth more than that.',
  },
  {
    icon: <FrustratedIcon className="w-12 h-12 text-brand-accent" />,
    title: 'The "CapCut" Headache',
    description: 'Struggling with auto-captions, pacing, and trending audio? One technical glitch and your hard work looks amateur.',
  },
  {
    icon: <GraphIcon className="w-12 h-12 text-brand-accent" />,
    title: 'The Reach Killer',
    description: 'Inconsistent posting kills your algorithm reach. You have the content ideas, but the editing backlog stops you from hitting "Post" daily.',
  },
];

const Problem: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-brand-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white [text-shadow:2px_2px_6px_rgba(0,0,0,0.5)]">
            Focus on Your Genius. We'll <span className="bg-brand-accent text-brand-dark px-3 rounded-md">Handle the Reels.</span>
          </h2>
          <div className="w-24 h-1 mx-auto mt-6 bg-brand-accent rounded-full"></div>
          <p className="mt-6 text-base sm:text-lg text-gray-400">
            Stop wasting hours on tasks that don't scale. We take the editing headache away so you can focus on what you do best: creating great content.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {problems.map((problem, index) => (
            <div key={index} className="bg-brand-dark p-8 rounded-xl border border-gray-800 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-brand-accent/50 hover:shadow-2xl hover:shadow-brand-accent/10">
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">
                {problem.title.split('"')[0]}
                <span className="bg-brand-accent text-brand-dark px-2 py-1 rounded-md">{problem.title.split('"')[1]}</span>
                {problem.title.split('"')[2]}
              </h3>
              <p className="text-gray-400">{problem.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 sm:mt-20 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Sound familiar? There's a better way.</h3>
            <a href="#pricing" className="mt-4 inline-block text-brand-accent font-bold text-lg sm:text-xl hover:underline transition-colors">
                See The Solution 👇
            </a>
        </div>
      </div>
    </section>
  );
};

export default Problem;
