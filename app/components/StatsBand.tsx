'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedStat {
  value: string;
  label: string;
  animateTo?: number;
  prefix?: string;
  suffix?: string;
}

const stats: AnimatedStat[] = [
  { value: '30%', label: 'Reply Rate', animateTo: 30, suffix: '%' },
  { value: '25×', label: 'Exposure', animateTo: 25, suffix: '×' },
  { value: '2–3×', label: 'Meeting Rate' },
  { value: '14–21', label: 'Days of Desk Presence' },
];

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}{suffix}</>;
}

export default function StatsBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{ background: '#f5f4f6' }}
    >
      <div className="mx-auto w-full px-4 sm:px-6 md:px-[7vw] py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="font-display font-light text-neutral-900 mb-2"
                style={{
                  fontSize: 'clamp(1.5rem, 3.85vw, 6.15rem)',
                  lineHeight: '1.1',
                }}
              >
                {hasAnimated && stat.animateTo != null ? (
                  <AnimatedNumber target={stat.animateTo} suffix={stat.suffix} />
                ) : hasAnimated ? (
                  stat.value
                ) : (
                  '\u00A0' // non-breaking space placeholder before animation
                )}
              </div>
              <div
                className="text-neutral-500 uppercase tracking-widest font-light"
                style={{ fontSize: 'clamp(0.5rem, 0.95vw, 1.5rem)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
