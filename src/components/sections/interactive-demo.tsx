import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SoundWaveIcon = () => {
  return (
    <div className="flex items-end gap-px h-3">
      <div className="w-0.5 h-[5px] bg-white/90 rounded-full" />
      <div className="w-0.5 h-[12px] bg-white/90 rounded-full" />
      <div className="w-0.5 h-[8px] bg-white/90 rounded-full" />
      <div className="w-0.5 h-[3px] bg-white/90 rounded-full" />
    </div>
  );
};

export default function InteractiveDemo() {
  return (
    <section className="relative w-full h-[800px] overflow-hidden bg-[#fafafa]">
      <Image
        src="https://framerusercontent.com/images/24OfCYG4XkE8ch6FRXBfpC6Rig.png?width=2784&height=1328"
        alt="Scenic mountain landscape at dusk"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      <div className="relative z-10 h-full w-full max-w-[1200px] mx-auto px-10">
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-full max-w-[420px]">
          <div className="bg-[#171717] rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-[#ff6c37] flex-shrink-0" />
            <p className="text-white text-[16px] font-normal leading-[1.6]">
              Need a quote for 200 AC units delivered by Oct 15. Include shipping to Dallas.
            </p>
          </div>
        </div>

        <div className="absolute top-[48%] left-1/2 -translate-x-[calc(50%+60px)] w-full max-w-[420px]">
          <div className="bg-white rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-[#007aff] flex-shrink-0" />
            <div>
              <p className="text-black text-[16px] font-normal leading-[1.6]">
                Drafted a quote with tiered pricing, delivery terms, and taxes. Ready to send for approval.
              </p>
              <a href="#" className="text-[#007aff] text-[16px] font-normal leading-[1.6] mt-3 block">
                Learn more
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[28%] left-1/2 -translate-x-1/2">
          <div className="bg-black/40 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center gap-2.5">
            <SoundWaveIcon />
            <p className="text-white/90 text-[15px] font-normal leading-tight">
              Add installation and net‑30 terms to the quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}