import Image from "next/image";
import Link from "next/link";

const CustomerSpotlight = () => {
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left side - Image with overlay */}
          <div className="relative aspect-[1.35] rounded-[32px] overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/3zeyza4DjndfU5nii2YMEWaSXIY.jpg?width=2400&height=1600"
              alt="Capital.com case study"
              fill
              className="object-cover"
              style={{ filter: 'blur(2px)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

            {/* Capital.com logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-white font-bold text-5xl tracking-tight">
                capital com
              </h3>
            </div>

            {/* Stats at bottom */}
            <div className="absolute bottom-10 left-10 right-10 flex flex-col sm:flex-row justify-between gap-8 text-white">
              <div>
                <p className="font-display text-5xl leading-none text-white font-light">
                  $323K
                </p>
                <p className="font-body text-sm mt-2 text-white/80">
                  in deposits.
                </p>
              </div>
              <div>
                <p className="font-display text-5xl leading-none text-white font-light">
                  16,133 calls
                </p>
                <p className="font-body text-sm mt-2 text-white/80">
                  with 35% pickup rate.
                </p>
              </div>
              <div>
                <p className="font-display text-5xl leading-none text-white font-light">
                  90%
                </p>
                <p className="font-body text-sm mt-2 text-white/80">
                  deflection rate.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-body text-[40px] leading-tight font-normal text-black">
                How Capital.com scaled customer engagement with Giga
              </h2>
              <Link
                href="#"
                className="inline-block mt-8 bg-black text-white text-base font-medium px-8 py-4 rounded-full hover:bg-black/90 transition-colors"
              >
                Read full case study
              </Link>
            </div>

            {/* Testimonial */}
            <div className="mt-12">
              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="https://framerusercontent.com/images/wbji9jW9WYrGVnTROyyiZB9KGmU.png?width=6344&height=3528"
                    alt="Christopher Demetriou"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold text-black tracking-wide uppercase">
                    CHRISTOPHER DEMETRIOU,
                  </p>
                  <p className="font-body text-xs text-[#666666] uppercase">
                    HEAD OF SALES (MENA REGION)
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="font-body text-[17px] text-[#666666] leading-relaxed">
                "The results speak for themselves: over $323K in deposits, and 61 FTDs generated within the pilot, with one client alone producing 50% of revenue after being contacted just one week post-registration."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSpotlight;