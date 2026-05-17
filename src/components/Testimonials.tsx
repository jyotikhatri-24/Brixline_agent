import React from 'react';
import { motion } from 'motion/react';
import SplitText from './SplitText';
import { Star, Quote } from 'lucide-react';

const stories = [
  {
    quote: "The transparency Brixline offers is unmatched. I've scaled my brokerage by 40% in just six months.",
    author: "Shruti Menon",
    role: "Broker Partner",
    rating: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8bkr-Qz5j4R_2TVPmqdVdw9azfWW4-KUFTylEi40yVP-zwb5jQvmwh9S78D5JdKStD_d9Z-dF_6YA_U3dK5u7CmnCA4jpA5zAMbeNTGmFiZQUkX-Gapw3itSrTxbPQndaS1wTCTk2-fmR8_TMg1dAGzGQCkbEH-Wa_5yhuGpPJRquaCQ_-TO1nH-_qVx-lYzUU0GZDoz9SlckW9k11ztiqRlq1t4tv1eXdweePaI0FpXv8Qx9P65kgdoIR-8bIfiVeuX8tjBl"
  },
  {
    quote: "Managing client documents used to be a nightmare. Now it's all automated. Legal support is top-notch.",
    author: "Priya Sharma",
    role: "Real Estate Expert",
    rating: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPkPyV6XouH7bMFhmm3-enwHZUrSVTHRMw0hOI0EHJCS7VtLX9L83eXX3qpDwouEJbb0v8xYjoRKmEpo0iPKbA50D0b3quB7krBvqD7c0yUO2IUVyxx3rotRDBrMic5Bd306QEp5gTjKwUSEq9Op_p4IsgoimQB4IOSDjLwi-OAKMv1KdfIZfT1UH7L4XuyHdq7itSzu4htI6zQhynXBLJoTeGFAkb_fabUZvHgziwh54nxg4HO4CF02Zi-BTWVcRDxQAWThRk"
  },
  {
    quote: "Brixline's verified listings mean I never waste time. My closing rate has significantly improved.",
    author: "Rahul Verma",
    role: "Premium Associate",
    rating: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCybiHqNFkRJVXf2GgTH_fWQSN317DjSWiXSaslDxFpVxfN4LJtCoFQk8PL0ADtuQVAp0KAC3GDEbbsGi9lraEJuOZw-062a4SYGLsx5k1PJXUFYptQWcjKqTaufPDwy-_qszzjC-nnlWTYdPqU7x6fY0Y2JIN-E7iVNu--Rdg9rw9MgF9JGBDbvPtvf4-XAHnX4SbLkkJ8UNEeDSiSrMVlsbqev46ZmcisKhoJM18z88z_vrJ2WMCyf-0roj5tRTw_Icjsom4r"
  },
  {
    quote: "The commission payout is always on time. It's the most reliable partner platform I've used.",
    author: "Neha Gupta",
    role: "Independent Agent",
    rating: 5,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZOy4RqpYWjO64QMuwGr2uxX4nsOsHb35H2W9LGfQBI7_3w7STjKr8R5jcbxOSGY0JGju1A-iS2fe0t27wJIabZfydgrfSHdQqPhSTmfv-yAzrIvGRj6m4onRMJp5vyDTYcM2RL1yy3s6pdRgxYMVPd4KVyprD2Xu97zj2cBknYYXGZKOO2ZmcQtiU1H8jWOqzglMMhvM3oMeKBhMsdTUqnMTwnoGuaaxBbz3L1hz_CyPn1z-i2aL7DWh8iZrfIpf_Jly8TW9Z"
  }
];

type Story = typeof stories[0];

function TestimonialCard({ story }: { story: Story }) {
  return (
    <div className="w-[380px] shrink-0 bg-white border border-gray-100 p-8 rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group">
      <div>
        <div className="w-10 h-10 rounded-2xl bg-primary/8 flex items-center justify-center mb-5">
          <Quote size={18} className="text-primary" />
        </div>
        <div className="flex gap-1 mb-4">
          {Array.from({ length: story.rating }).map((_, i) => (
            <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-on-surface/80 text-base leading-relaxed mb-8 whitespace-normal font-medium">"{story.quote}"</p>
      </div>
      <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
        <img
          className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors"
          src={story.image}
          alt={story.author}
          referrerPolicy="no-referrer"
        />
        <div>
          <h4 className="font-bold text-sm text-on-surface">{story.author}</h4>
          <p className="text-xs text-on-surface/40">{story.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = [...stories, ...stories, ...stories, ...stories];
  const row2 = [...stories.slice(2), ...stories, ...stories, ...stories];

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-surface overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 md:mb-16 text-center relative z-10">
        {/* Big bold eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-primary/30 rounded-full" />
          <span className="text-primary font-black text-sm md:text-base uppercase tracking-[0.3em]">Success Stories</span>
          <div className="h-px w-16 bg-primary/30 rounded-full" />
        </div>
        <SplitText
          text="Hear What Our Brokers Say"
          tag="h2"
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-on-surface"
          delay={40}
        />
        <p className="text-on-surface/50 text-base md:text-lg mt-4 md:mt-6 max-w-xl mx-auto">
          Real results from real estate professionals who chose Brixline.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative flex mb-5">
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-surface to-transparent z-10 pointer-events-none" />
        <motion.div
          animate={{ x: [0, -1600] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-5 whitespace-nowrap"
        >
          {row1.map((story, i) => <TestimonialCard key={`r1-${i}`} story={story} />)}
        </motion.div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative flex">
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-surface to-transparent z-10 pointer-events-none" />
        <motion.div
          animate={{ x: [-1600, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex gap-5 whitespace-nowrap"
        >
          {row2.map((story, i) => <TestimonialCard key={`r2-${i}`} story={story} />)}
        </motion.div>
      </div>
    </section>
  );
}
