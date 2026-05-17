import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SplitText from './SplitText';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What kind of properties can I find here?",
      answer: "We offer a wide range of verified properties including residential apartments, commercial spaces, and premium villas across prime locations. Every listing undergoes a rigorous 20-point verification process."
    },
    {
      question: "How do I search for the right property?",
      answer: "Our advanced filter system allows you to search by location, budget, property type, and specific amenities. You can also use our 'Smart Match' feature which suggest properties based on your client's historical preferences."
    },
    {
      question: "Can Brixline help with home loans?",
      answer: "Yes, we have integrated partners who offer competitive home loan rates and quick processing. Our platform even handles the initial documentation submission to speed up the approval process."
    },
    {
      question: "Is there a limit to how many properties I can list?",
      answer: "As a verified broker, you have unlimited access to our inventory. You can manage as many client inquiries and property visits as your business requires."
    }
  ];

  return (
    <section id="faqs" className="py-16 px-4 md:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-start">
      <div className="lg:w-2/5 lg:sticky top-32">
        <SplitText
          text="Common Questions"
          tag="h2"
          className="text-4xl md:text-6xl font-extrabold mb-8 text-on-surface"
          delay={40}
          textAlign="left"
        />
        <p className="text-on-surface/50 text-lg mb-10 leading-relaxed max-w-md">
          Everything you need to know about the Brixline ecosystem and how it empowers your brokerage to go above and beyond.
        </p>
        <div className="flex flex-wrap gap-3">
          {['Brokerage', 'Advantage', 'Security', 'Payouts'].map((tab) => (
            <button key={tab} className="px-6 py-2.5 rounded-full text-sm font-bold bg-surface hover:bg-primary/10 transition-colors text-on-surface/70 hover:text-primary border border-gray-100">
              {tab}
            </button>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10">
          <h4 className="font-bold text-xl mb-2 text-on-surface">Still have questions?</h4>
          <p className="text-on-surface/60 mb-6 font-medium">We're here to help you scale your business.</p>
          <button className="text-primary font-bold hover:underline">Contact Support →</button>
        </div>
      </div>

      <div className="lg:w-3/5 space-y-6">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index} 
            className={`transition-all duration-300 rounded-[2rem] ${openIndex === index ? 'bg-surface p-8 border border-primary/10' : 'p-8 border border-transparent'}`}
          >
            <button 
              className="w-full flex items-center justify-between text-left group"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className={`font-bold text-xl md:text-2xl transition-colors ${openIndex === index ? 'text-primary' : 'text-on-surface group-hover:text-primary'}`}>
                {faq.question}
              </span>
              <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-surface text-gray-400 group-hover:bg-primary/10 group-hover:text-primary'}`}>
                <ChevronDown 
                  className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="pt-6 text-on-surface/60 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
