import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Sparkles, Zap, Shield, Globe } from 'lucide-react';

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-10 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-7xl font-light mb-6">
              Product Updates
            </h1>
            <p className="text-xl text-neutral-gray leading-relaxed">
              Stay up to date with the latest features, improvements, and fixes to Quotyl.
            </p>
          </div>
        </section>

        {/* Changelog Entries */}
        <section className="container mx-auto px-10 py-20 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Version 2.4.0 */}
            <div className="border-l-2 border-orange-accent pl-8 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-accent rounded-full"></div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-medium text-neutral-gray">January 15, 2025</span>
                <span className="px-3 py-1 bg-orange-accent/10 text-orange-accent rounded-full text-sm font-medium">
                  v2.4.0
                </span>
              </div>
              <h2 className="text-3xl mb-4">AI-Powered Quote Recommendations</h2>
              <p className="text-neutral-gray mb-6 leading-relaxed">
                We're introducing intelligent quote recommendations that analyze historical data 
                to suggest optimal pricing and product bundles. Our AI learns from your win rates 
                and customer patterns to help close more deals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                 
                  <div>
                    <p className="font-medium mb-1">Prompt → Quote Generator</p>
                    <p className="text-neutral-gray">User types business needs (“Website design package for small business”)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  
                  <div>
                    <p className="font-medium mb-1">Smart Formatting</p>
                    <p className="text-neutral-gray">Auto-create quotation in professional format: header, line items, terms, total.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  
                  <div>
                    <p className="font-medium mb-1">Context-Aware Retrieval</p>
                    <p className="text-neutral-gray">Pulls context from your company profile</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Version 2.0.0 */}
            <div className="border-l-2 border-neutral-gray pl-8 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-neutral-gray rounded-full"></div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-medium text-neutral-gray">September 15, 2024</span>
                <span className="px-3 py-1 bg-neutral-gray/10 text-neutral-gray rounded-full text-sm font-medium">
                  v2.0.0
                </span>
              </div>
              <h2 className="text-3xl mb-4">Major Platform Redesign</h2>
              <p className="text-neutral-gray mb-6 leading-relaxed">
                Complete UI/UX overhaul with modern design, improved navigation, and enhanced 
                mobile experience. The new interface is faster, more intuitive, and built for scale.
              </p>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-10 py-20 text-center animate-in fade-in duration-700 delay-300">
          <h2 className="text-5xl mb-6">Stay Updated</h2>
          <p className="text-xl text-neutral-gray mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified about new features and updates.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-orange-accent"
            />
            <button className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90">
              Subscribe
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}