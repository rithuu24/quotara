import Image from "next/image";
import { ArrowUp, RefreshCcw, Target, LayoutGrid } from "lucide-react";

const metrics = [
  { value: "840", percentage: "10%", description: "Refine escalation rules to improve first-call resolution" },
  { value: "472", percentage: "16%", description: "Optimize routing to reduce transfers across teams" },
  { value: "225", percentage: "8%", description: "Standardize follow-up flows to improve customer satisfaction" },
];

const features = [
  { icon: RefreshCcw, title: "Closes the loop", description: "Translates raw conversations into targeted actions inside Agent Canvas." },
  { icon: Target, title: "Impact over noise", description: "Get recommendations tied to real business metrics." },
  { icon: LayoutGrid, title: "Fits the workflow", description: "Every insight connects back to transcripts, tickets, and test cases." },
];

const workflowSteps = [
  { id: "01", title: "Choose an objective", description: "Select a metric like resolution rate, transfer reduction, or customer satisfaction." },
  { id: "02", title: "Generate insights", description: null },
  { id: "03", title: "Validate at scale", description: null },
  { id: "04", title: "Implement and track", description: null },
];

export default function Insights() {
  return (
    <section className="bg-background-light py-24 sm:py-32">
      <div className="container">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-blue-accent"></div>
            <p className="text-xs font-medium tracking-[0.2em] text-neutral-gray">
              ACTIONABLE INTELLIGENCE
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-primary-black">
            Insights for revenue, retention, and resolution
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-16">
            <div className="relative rounded-3xl overflow-hidden aspect-[1.2/1]">
              <Image
                src="https://framerusercontent.com/images/f4RM6T0VnYbpTv0wWpe3DJWeYA.jpg?lossless=1&width=4717&height=2984"
                alt="silhouette of mountains during nigh time photography"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 right-5 sm:right-10 flex flex-col xl:flex-row items-stretch gap-5">
                <div className="flex-1 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
                  <p className="text-sm font-medium text-foreground mb-4">
                    Resolution rate improvement
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {metrics.map((metric, index) => (
                      <div key={index} className="flex flex-col gap-1">
                        <p className="text-2xl font-medium text-primary-black">{metric.value}</p>
                        <div className="flex items-center gap-1 text-sm font-medium text-success-green">
                          <ArrowUp className="w-4 h-4" />
                          <span>{metric.percentage}</span>
                        </div>
                        <p className="text-xs text-neutral-gray mt-1">
                          {metric.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col items-center justify-center border border-white/20">
                  <div className="relative w-32 h-32">
                    <div
                      className="w-full h-full rounded-full"
                      style={{
                        background: 'conic-gradient(from 180deg at 50% 50%, #A855F7 0%, #C4B5FD 35%, #6EE7B7 55%, #34D399 65%, #FBBF24 75%, #F87171 85%, #FCA5A5 100%)',
                        maskImage: 'radial-gradient(circle at center, transparent 60%, black 61%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, transparent 60%, black 61%)',
                      }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <p className="font-medium text-primary-black text-3xl">34%</p>
                      <p className="text-xs text-neutral-gray mt-1 leading-tight">
                        Improvement<br />Opportunity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex flex-col gap-3">
                    <Icon className="w-6 h-6 text-blue-accent" />
                    <h3 className="text-sm font-medium text-primary-black">{feature.title}</h3>
                    <p className="text-neutral-gray text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column */}
          <div className="pt-0 lg:pt-12">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="https://framerusercontent.com/images/P9wPRLGpwlOk0kdQBj96V5qzEw.png?width=104&height=104"
                width={52}
                height={52}
                alt="Insights Icon"
                className="shrink-0"
              />
              <h3 className="text-2xl font-medium text-primary-black">Insights</h3>
            </div>
            <p className="text-neutral-gray mb-8 leading-relaxed">
              Insights cluster conversations dynamically, helping enterprises focus on what matters most: revenue, resolution, and retention.
            </p>
            <div className="flex flex-col">
              {workflowSteps.map((step) => (
                <div key={step.id} className="py-8 border-b border-border first:border-t">
                  <div className="flex items-start gap-6 sm:gap-8">
                    <p className="text-base text-light-gray">{step.id}</p>
                    <div className="flex flex-col gap-2">
                      <p className="text-base font-medium text-primary-black">{step.title}</p>
                      {step.description && <p className="text-base text-neutral-gray leading-relaxed">{step.description}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}