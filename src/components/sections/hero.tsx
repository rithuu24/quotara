import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const PulsingDot = () => (
  <div className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-accent opacity-75"></span>
    <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-accent"></span>
  </div>
);

const HeroSection = () => {
  return (
    <section className="w-full bg-background-light pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">

          <Link href="/" className="group flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-xs sm:text-sm font-medium text-accent-foreground transition-colors hover:bg-border">
            <PulsingDot />
            <span className="hidden sm:inline">Introducing Quotyl: prompt-to-business quotation maker</span>
            <span className="sm:hidden">Introducing Quotyl</span>
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
            <h1 className="max-w-4xl font-display text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-light leading-[1.1] tracking-tight text-primary px-4">
              Prompt-to-Quote
              <br />
              for Enterprise
            </h1>
            
            <p className="text-sm sm:text-base font-medium text-neutral-gray max-w-md px-4">
              No setup. No templates. Just tell us what you need.
            </p>
            
            <p className="max-w-[580px] font-body text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-snug text-muted-foreground px-4">
              Turn natural-language prompts into ready-to-send business quotations in seconds.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Link
              href="/generate"
              className="btn-text flex h-10 sm:h-11 md:h-12 items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-700 px-6 sm:px-7 md:px-8 text-sm sm:text-base font-medium text-white transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Generate
            </Link>
            
            <p className="text-xs sm:text-sm text-neutral-gray">
              Start with 3 free quotes today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;