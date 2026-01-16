
import React, { useState } from 'react';
import ChevronDownIcon from './icons/ChevronDownIcon';

const faqData = [
  {
    question: 'Why is it only ₹199? Is the quality low?',
    answer: 'Not at all. We are a specialized Indian agency focused on volume and long-term relationships. We keep our margins slim to help you scale. You get premium quality at an introductory price.',
  },
  {
    question: 'How does the "First Reel Free" work?',
    answer: "Simple. Send us your raw video. We edit it completely free. If you like it, we discuss a monthly package or the ₹199/reel plan. If you don't like it, you pay nothing. No hard feelings.",
  },
  {
    question: 'What is the 24-hour guarantee?',
    answer: 'We respect your content schedule. If you send us the raw footage by 6 PM, you get the edited reel by 6 PM the next day. We don\'t do delays.',
  },
  {
    question: 'What style of editing do you do?',
    answer: 'We specialize in dynamic "Talking Head" reels (similar to Alex Hormozi, Ali Abdaal, or Ankur Warikoo). This includes bold captions, emojis, sound effects, and fast cuts designed to hold attention on Instagram and LinkedIn.',
  },
];

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-brand-dark-secondary border border-gray-800 rounded-xl overflow-hidden transition-colors hover:bg-gray-900/50">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-bold text-gray-100 mr-4">
          {question}
        </span>
        <div className="flex-shrink-0 ml-4">
            <ChevronDownIcon
              className={`w-7 h-7 text-brand-accent transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-gray-300 text-sm sm:text-base leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-brand-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white [text-shadow:2px_2px_6px_rgba(0,0,0,0.5)]">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 mx-auto mt-6 bg-brand-accent rounded-full"></div>
        </div>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
