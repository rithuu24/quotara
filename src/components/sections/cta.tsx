"use client";

import React from "react";
import Link from "next/link";
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation';

const CtaSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="bg-background py-16 sm:py-20 md:py-24 lg:py-[120px]">
      <div className={`container flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 px-4 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="text-center max-w-3xl">
          <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Create Your Next Quote
          </h2>
          <p className="text-neutral-gray text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Join thousands of businesses generating professional quotes in seconds
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/generate"
            className="btn-text inline-flex items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-700 px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-base sm:text-lg text-white transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Generate Now
          </Link>
          <p className="text-sm text-neutral-gray">
            No credit card required • 3 free quotes to start
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;