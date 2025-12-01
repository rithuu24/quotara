import Image from "next/image";
import { DollarSign, Clock, FileCheck } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Dynamic pricing",
    description: "Volume discounts, tiered rates, and regional pricing applied automatically.",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    description: "Generate quotes in seconds, not hours or days.",
  },
  {
    icon: FileCheck,
    title: "Compliance ready",
    description: "Built-in templates ensure quotes meet legal and procurement standards.",
  },
];

const TrainingFeatures = () => {
    return (
        <section className="relative bg-[#151718] rounded-[60px] overflow-hidden flex flex-col justify-end min-h-[50vh] md:min-h-[810px] animate-in fade-in zoom-in-95 duration-700">
            <div className="absolute inset-0 opacity-30">
                <Image
                    src="https://framerusercontent.com/images/L99UAAz4NRpBXrhNsiBLHjXb3Y.png?width=3520&height=3136"
                    alt="A background image of a misty mountain landscape at dusk."
                    fill
                    className="object-cover"
                    sizes="100vw"
                    quality={100}
                />
            </div>
            
            <div className="relative z-10 p-12 md:p-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-10">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${index * 150}ms` }}>
                            <feature.icon className="w-5 h-5 text-orange-accent" strokeWidth={1.5} />
                            <h3 className="font-body text-base font-medium text-white leading-[1.2]">
                                {feature.title}
                            </h3>
                            <p className="font-body text-base font-normal text-white/70 leading-relaxed max-w-xs">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainingFeatures;