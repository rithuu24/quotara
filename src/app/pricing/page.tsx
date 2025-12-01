import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-32">
        <section className="container mx-auto px-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-center max-w-4xl mx-auto min-h-[60vh] flex flex-col items-center justify-center">
            <h1 className="text-6xl md:text-7xl font-light mb-8">
              Pricing Under Progress
            </h1>
            <p className="text-xl md:text-2xl text-neutral-gray leading-relaxed max-w-3xl">
              We're currently crafting the perfect pricing plans for freelancers, agencies, and enterprises.
              <br />
              <br />
              Our goal? To make Quotara accessible, transparent, and worth every rupee.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}