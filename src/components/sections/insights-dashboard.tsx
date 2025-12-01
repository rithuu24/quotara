"use client";

import Image from 'next/image';
import { TrendingUp, Target, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation';

const InsightIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="12" fill="url(#paint0_linear_1_1)"/>
    <path d="M12.9999 26.8824L12.9999 18.0588L18.7999 12.0294L24.5999 18.0588L26.9999 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear_1_1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F97316"/>
        <stop offset="1" stopColor="#D946EF"/>
      </linearGradient>
    </defs>
  </svg>
);

const SemiCircleChart = () => (
  <div className="relative h-[120px] sm:h-[140px] md:h-[160px] w-full max-w-[320px] mx-auto mt-4 mb-2">
    <svg viewBox="0 0 320 160" className="w-full h-full">
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A487F8" />
          <stop offset="100%" stopColor="#D5B3F9" />
        </linearGradient>
      </defs>
      {/* Background Arc */}
      <path
        d="M 40 155 A 120 120 0 0 1 280 155"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="20"
      />
      {/* Progress Arc (42%) */}
      <path
        d="M 40 155 A 120 120 0 0 1 145 38"
        fill="none"
        stroke="url(#chartGradient)"
        strokeWidth="20"
      />
      
      {/* Colorful ticks */} 
      <g>
        {Array.from({ length: 15 }).map((_, i) => (
            <rect key={`arc-tick-${i}`} x="159" y="10" width="2" height="10" fill={ i > 10 ? '#fde047' : i > 5 ? '#f87171' : '#a7f3d0' } transform={`rotate(${ -75 + i * 4.2 } 160 160)`} />
        ))}
      </g>
    </svg>
    <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 text-center text-white">
      <p className="text-3xl sm:text-4xl md:text-5xl font-medium leading-none">42%</p>
      <p className="text-xs sm:text-sm text-white/70 mt-2">Conversion Opportunity</p>
    </div>
  </div>
);

const InsightsDashboard = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
    
  const dataRows = [
    { value: "2.8K", percentage: 18, description: "Quotes generated with standard templates vs. custom logic", trend: "up" },
    { value: "1.2K", percentage: 24, description: "Win rate improved by including delivery terms upfront", trend: "up" },
    { value: "890", percentage: 12, description: "Quotes with net-30 terms close faster than net-60", trend: "up" }
  ];

  const features = [
    { icon: <TrendingUp className="w-4 h-4" />, title: "Performance tracking", description: "Track which quote types convert best and iterate." },
    { icon: <Target className="w-4 h-4" />, title: "Smart recommendations", description: "Get insights on optimal pricing and delivery terms." },
    { icon: <Zap className="w-4 h-4" />, title: "Real-time analytics", description: "Monitor quote generation, approval times, and conversion rates." },
  ];
  
  const insightsSteps = [
    { number: "01", title: "Select a metric", description: "Choose win rate, turnaround time, or average deal size." },
    { number: "02", title: "Generate insights" },
    { number: "03", title: "Validate patterns" },
    { number: "04", title: "Apply and track" },
  ]

  return (
    <section ref={sectionRef} className="bg-[#F9F9F9] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500"></span>
            <p className="text-neutral-gray text-[10px] sm:text-[11px] font-medium tracking-[1.1px]">
              ACTIONABLE INTELLIGENCE
            </p>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-primary-black px-4">
            Insights for better quotes,
            <br />
            faster deals, higher revenue
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-8 md:gap-10 lg:gap-8 items-start">
            <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden bg-cover bg-center min-h-[500px] sm:min-h-[600px] lg:min-h-0 lg:h-full flex flex-col transition-all duration-700 delay-200 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ backgroundImage: "url('https://framerusercontent.com/images/f4RM6T0VnYbpTv0wWpe3DJWeYA.jpg?lossless=1&width=4717&height=2984')" }}>
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(16,22,28,0.4)] to-[#10161C]"></div>

                <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between h-full text-white">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl hover:bg-white/15 transition-all duration-300">
                      <h3 className="text-base sm:text-lg font-medium tracking-tight">Quote conversion insights</h3>
                      <div className="my-3 sm:my-4 space-y-2 sm:space-y-3">
                          {dataRows.map((row, index) => (
                              <div key={index} className={`flex justify-between items-start gap-3 sm:gap-4 pb-2 sm:pb-3 ${index !== dataRows.length - 1 ? 'border-b border-white/10' : ''}`}>
                                  <div className="flex items-baseline flex-shrink-0">
                                      <p className="text-lg sm:text-xl font-medium">{row.value}</p>
                                      <p className="text-xs sm:text-sm text-emerald-400 ml-2">↑{row.percentage}%</p>
                                  </div>
                                  <p className="text-[10px] sm:text-xs text-white/70 text-right">{row.description}</p>
                              </div>
                          ))}
                      </div>
                      <SemiCircleChart />
                    </div>

                    <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                       {features.map((feature, index) => (
                           <div key={index} className="transition-transform duration-300 hover:scale-105">
                               <div className="flex items-center gap-2 mb-1 sm:mb-2">
                                <div className="border border-white/30 rounded-full p-1.5">
                                   {feature.icon}
                                </div>
                                <h4 className="font-medium text-sm sm:text-base">{feature.title}</h4>
                               </div>
                               <p className="text-xs sm:text-sm text-white/70">{feature.description}</p>
                           </div>
                       ))}
                    </div>
                </div>
            </div>

            <div className={`lg:pt-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <InsightIcon />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium mb-2">Quote Analytics</h3>
                    <p className="text-neutral-gray text-sm sm:text-base leading-relaxed">
                      Quote Analytics surfaces patterns from your quotations to help you optimize pricing, close deals faster, and improve customer satisfaction.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 sm:mt-10 md:mt-12 space-y-6 sm:space-y-8">
                  {insightsSteps.map((step, index) => (
                    <div key={index} className={`pb-6 sm:pb-8 ${index !== insightsSteps.length -1 ? 'border-b border-gray-200' : ''} transition-all duration-300 hover:translate-x-2`}>
                        <div className="flex items-baseline gap-4 sm:gap-6">
                            <span className="font-body text-emerald-400 text-xl sm:text-2xl flex-shrink-0">{step.number}</span>
                             <h4 className="font-medium text-base sm:text-lg leading-tight">{step.title}</h4>
                        </div>
                        {step.description && <p className="ml-10 sm:ml-12 mt-2 text-neutral-gray text-sm sm:text-base">{step.description}</p>}
                    </div>
                  ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsDashboard;