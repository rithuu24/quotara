"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Calculator, FileText, Settings, Workflow, Rocket, BarChart3 } from 'lucide-react';

interface TimelineItemProps {
  number: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  badge?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ number, title, description, isActive, onClick, badge }) => {
  return (
    <div 
      className={`flex gap-4 sm:gap-6 md:gap-8 py-4 sm:py-6 md:py-8 border-t border-border-light cursor-pointer transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
      onClick={onClick}
    >
      <div className="text-xs sm:text-sm font-medium font-body text-orange-accent pt-2.5 leading-snug flex-shrink-0">
        {number}
      </div>
      <div className="flex flex-col gap-1 sm:gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-body text-lg sm:text-xl md:text-2xl font-medium text-primary-black">{title}</h3>
          {badge && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200">
              {badge}
            </span>
          )}
        </div>
        {isActive && (
          <p className="text-sm sm:text-base leading-relaxed text-neutral-gray max-w-sm">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const EnterpriseFeatures = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const timelineItems = [
        {
          number: "01",
          title: "Define product catalog",
          description: "Set up your products, services, and pricing tiers so Quotara understands what you sell.",
          badge: "New"
        },
        { 
          number: "02", 
          title: "Configure pricing rules", 
          description: "Add volume discounts, regional pricing, and custom business logic.",
          badge: "Beta"
        },
        { 
          number: "03", 
          title: "Set approval workflows", 
          description: "Design multi-level approvals and routing based on deal size or complexity." 
        },
        { 
          number: "04", 
          title: "Test and deploy", 
          description: "Simulate quote generation with real prompts and deploy with confidence.",
          badge: "Enterprise"
        },
        { 
          number: "05", 
          title: "Track and optimize", 
          description: "Monitor quote performance and conversion rates to refine your strategy." 
        },
    ];

  return (
    <section className="bg-background-light py-16 sm:py-20 md:py-24 lg:py-[120px] px-4 sm:px-6 md:px-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16 md:mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <p className="text-xs sm:text-sm font-medium tracking-[1.5px] sm:tracking-[2px] text-neutral-gray uppercase">THE ENTERPRISE WAY</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-primary-black px-4">
            Built for complex<br />pricing and workflows
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-start">
          <div className="lg:pt-8 animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-[44px] sm:w-[48px] md:w-[52px] h-[44px] sm:h-[48px] md:h-[52px] relative flex-shrink-0">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Screenshot-2025-10-02-095911-1759636746755.png"
                  alt="Quote Builder Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-body text-xl sm:text-2xl font-medium text-primary-black">Quote Builder</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-gray mb-6 sm:mb-8">
              Quote Builder is an intelligent engine that transforms natural language prompts into structured business quotations with pricing, terms, and delivery details.
            </p>
            
            <div className="border-b border-border-light">
              {timelineItems.map((item, index) => (
                <TimelineItem 
                  key={index} 
                  {...item} 
                  isActive={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[672/600] w-full animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.18)]">
              <Image
                src="https://framerusercontent.com/images/L99UAAz4NRpBXrhNsiBLHjXb3Y.png"
                alt="Landscape background for quotation UI"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 sm:gap-4 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                    <p className="text-white text-xs sm:text-sm font-medium">Create new quote</p>
                  </div>
                  
                  <div className="flex gap-2 mt-3 sm:mt-4 ml-3 sm:ml-6 flex-wrap">
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-white/20 bg-white/20 backdrop-blur-xl transition-all duration-200 hover:bg-white/30">
                      <span className="text-white text-xs sm:text-sm font-medium">Standard Quote</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-white/10 bg-black/10 backdrop-blur-xl opacity-60 transition-all duration-200 hover:opacity-80">
                      <span className="text-white text-xs sm:text-sm font-medium">Custom Pricing</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full border border-white/10 bg-black/10 backdrop-blur-xl opacity-60 transition-all duration-200 hover:opacity-80">
                      <span className="text-white text-xs sm:text-sm font-medium">Bulk Order</span>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl sm:rounded-2xl bg-black/30 backdrop-blur-xl p-4 sm:p-6 text-white space-y-3 sm:space-y-4">
                    <div className="text-center">
                        <p className="font-medium text-sm sm:text-base">Configure quote parameters</p>
                        <p className="text-xs sm:text-sm text-white/70 mt-1">Set products, quantities, and delivery requirements</p>
                    </div>
                    <div className="w-full border-2 border-dashed border-white/30 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center text-center space-y-2">
                         <p className="text-xs sm:text-sm">Enter customer requirements or drag files</p>
                         <p className="text-[10px] sm:text-xs text-white/60">Supports natural language prompts</p>
                    </div>
                    <div className="flex gap-3 sm:gap-4 w-full">
                        <button className="flex-1 text-center py-2 sm:py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white font-medium text-xs sm:text-sm">Cancel</button>
                        <button className="flex-1 text-center py-2 sm:py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition-colors text-white font-medium text-xs sm:text-sm">Generate quote</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;