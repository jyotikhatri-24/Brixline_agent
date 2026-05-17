import React, { useEffect, useState } from 'react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
}

export default function CountUp({ end, start = 0, duration = 2, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const range = end - start;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      // ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(start + eased * range));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, start, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}
