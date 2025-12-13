import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { CheckCircle, Zap, Shield, BarChart3, Globe, Sparkles } from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-10 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-7xl font-light mb-6">
              Enterprise Quote Automation
            </h1>
            <p className="text-xl text-neutral-gray leading-relaxed">
              Transform your quoting process with AI-powered automation. Generate accurate, 
              compliant quotes in seconds with intelligent pricing and seamless integrations.
            </p>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="container mx-auto px-10 py-20 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-accent/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-orange-accent" />
              </div>
              <h3 className="text-2xl mb-4">Lightning Fast Quotes</h3>
              <p className="text-neutral-gray leading-relaxed">
                Generate comprehensive quotes in seconds instead of hours. AI-powered automation 
                handles complex pricing rules and calculations instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-accent/10 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-blue-accent" />
              </div>
              <h3 className="text-2xl mb-4">Smart Pricing Engine</h3>
              <p className="text-neutral-gray leading-relaxed">
                Dynamic pricing with volume discounts, tiered rates, and promotional rules. 
                Optimize margins while staying competitive.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-accent/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-accent" />
              </div>
              <h3 className="text-2xl mb-4">Enterprise Security</h3>
              <p className="text-neutral-gray leading-relaxed">
                SOC 2 compliant with end-to-end encryption. Role-based access controls 
                and comprehensive audit trails for compliance.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-success-green/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-success-green" />
              </div>
              <h3 className="text-2xl mb-4">Template Management</h3>
              <p className="text-neutral-gray leading-relaxed">
                Pre-built compliance-ready templates for different industries. Customize 
                and maintain brand consistency across all quotes.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-accent/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-orange-accent" />
              </div>
              <h3 className="text-2xl mb-4">Multi-Currency Support</h3>
              <p className="text-neutral-gray leading-relaxed">
                Support for 150+ currencies with real-time exchange rates. Handle 
                international quotes with automatic tax calculations.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-accent/10 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-blue-accent" />
              </div>
              <h3 className="text-2xl mb-4">AI-Powered Insights</h3>
              <p className="text-neutral-gray leading-relaxed">
                Get intelligent recommendations on pricing strategies and win probability. 
                Learn from historical data to optimize conversion rates.
              </p>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="bg-background-light py-20 mt-20 animate-in fade-in duration-700 delay-300">
          <div className="container mx-auto px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-medium tracking-wide text-neutral-gray uppercase mb-4">
                THE QUOTYL WAY
              </p>
              <h2 className="text-5xl mb-6">Streamlined Quote Process</h2>
              <p className="text-lg text-neutral-gray leading-relaxed">
                From prompt to quote in seconds. Our intelligent workflow handles 
                everything from product selection to final approval.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-medium text-xl">
                  01
                </div>
                <h3 className="text-xl mb-3">Input Requirements</h3>
                <p className="text-neutral-gray">
                  Simple prompt or form to capture customer needs and specifications.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-medium text-xl">
                  02
                </div>
                <h3 className="text-xl mb-3">AI Processing</h3>
                <p className="text-neutral-gray">
                  Intelligent matching of products, pricing rules, and discounts.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-medium text-xl">
                  03
                </div>
                <h3 className="text-xl mb-3">Review & Customize</h3>
                <p className="text-neutral-gray">
                  Quick review with ability to adjust terms, pricing, and conditions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-medium text-xl">
                  04
                </div>
                <h3 className="text-xl mb-3">Send & Track</h3>
                <p className="text-neutral-gray">
                  Instantly deliver quotes and track engagement and conversion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        

        {/* CTA Section */}
        <section className="container mx-auto px-10 py-20 text-center animate-in fade-in duration-700 delay-500">
          <h2 className="text-5xl mb-6">Ready to transform your quoting process?</h2>
          <p className="text-xl text-neutral-gray mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises automating their quote generation with Quotyl.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Talk to us
          </a>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}