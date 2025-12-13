import Image from "next/image";

/**
 * Testimonial section featuring a quote from a business leader.
 */
const Testimonial = () => {
  return (
    <section className="bg-[#f9f9f9] py-[120px]">
      <div className="mx-auto max-w-[1200px] px-10">
        <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:gap-20">
          {/* Business Leader Photo */}
          <div className="aspect-square w-full max-w-[280px] flex-shrink-0 sm:max-w-xs lg:w-[387px] animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="h-full w-full bg-gradient-to-br from-orange-accent to-purple-accent rounded-lg flex items-center justify-center">
              <span className="text-white text-9xl font-bold">GT</span>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="flex max-w-xl flex-col gap-10 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <h2 className="text-black">
              Quotyl is transforming how enterprises handle quotations… They've built state‑of‑the‑art AI that turns prompts into professional quotes faster than any manual process.
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">Y</span>
              </div>
              <div className="flex flex-col">
                <p className="font-body text-base font-medium leading-tight text-black">
                  Garry Tan
                </p>
                <p className="font-body text-sm font-normal leading-normal text-neutral-gray">
                  President at Y Combinator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;