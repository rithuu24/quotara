import { Shield, Zap, RefreshCw, Globe } from "lucide-react";

interface Benefit {
  icon: React.ElementType;
  title: React.ReactNode;
  description: string;
}

const benefitsData: Benefit[] = [
  {
    icon: Shield,
    title: (
      <>
        Enterprise-grade
        <br />
        Security
      </>
    ),
    description:
      "SOC 2 compliant with encryption, role-based access controls, and audit logs for complete quote traceability.",
  },
  {
    icon: Zap,
    title: (
      <>
        Lightning-fast
        <br />
        Generation
      </>
    ),
    description:
      "Generate complex quotes in seconds with AI-powered pricing logic and template automation.",
  },
  {
    icon: RefreshCw,
    title: (
      <>
        Seamless
        <br />
        Integrations
      </>
    ),
    description:
      "Connect with your CRM, ERP, and procurement systems for real-time pricing and inventory sync.",
  },
  {
    icon: Globe,
    title: (
      <>
        Multi-currency
        <br />
        Support
      </>
    ),
    description:
      "Handle international deals with automatic currency conversion and regional compliance.",
  },
];

const EnterpriseBenefits = () => {
  return (
    <section className="bg-[#F9F9F9] py-16 sm:py-20 md:py-24 lg:py-[120px]">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20">
          <h2 className="text-center font-display text-3xl sm:text-4xl md:text-[48px] font-normal leading-[1.2] text-black animate-in fade-in slide-in-from-bottom-4 duration-700 px-4">
            Unlock quote automation
            <br />
            for your enterprise
          </h2>
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-x-8 md:gap-y-12">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="feature-card flex flex-col gap-4 sm:gap-5 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 p-4 rounded-xl hover:shadow-lg hover:bg-white cursor-pointer" style={{ animationDelay: `${index * 100}ms` }}>
                <benefit.icon
                  className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="font-body text-sm sm:text-base font-medium leading-[1.2] text-black">
                  {benefit.title}
                </h3>
                <p className="font-body text-xs sm:text-sm font-normal leading-[1.5] text-neutral-gray">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseBenefits;