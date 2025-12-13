import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { FileText, Sliders, Workflow, Send, BarChart } from 'lucide-react';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-10 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-7xl font-light mb-6">
              The Complete Quote Platform
            </h1>
            <p className="text-xl text-neutral-gray leading-relaxed">
              From initial request to signed contract, Quotyl streamlines every step 
              of your quoting workflow with intelligent automation and powerful insights.
            </p>
          </div>
        </section>

        {/* Product Overview */}
        <section className="container mx-auto px-10 py-20 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          <div className="bg-gradient-to-br from-teal-dark to-blue-accent rounded-2xl p-12 text-white">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wide uppercase mb-4 opacity-90">
                PRODUCT OVERVIEW
              </p>
              <h2 className="text-5xl mb-6">Built for Enterprise Scale</h2>
              <p className="text-lg leading-relaxed opacity-90">
                Quotyl combines AI-powered automation with enterprise-grade reliability. 
                Handle thousands of quotes per day while maintaining accuracy, compliance, 
                and personalization at scale.
              </p>
            </div>
          </div>
        </section>

        {/* Core Components */}
        <section className="container mx-auto px-10 py-20 animate-in fade-in duration-700 delay-300">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium tracking-wide text-neutral-gray uppercase mb-4">
              CORE COMPONENTS
            </p>
            <h2 className="text-5xl mb-6">Everything You Need</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quote Builder */}
            <div className="space-y-6">
              <div className="">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl">Quote Builder</h3>
              <p className="text-lg text-neutral-gray leading-relaxed">
                Intuitive interface for creating quotes from scratch or templates. 
                Drag-and-drop product selection, automatic pricing calculations, and 
                real-time validation ensure accuracy every time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-accent font-medium">•</span>
                  <span className="text-neutral-gray">Smart product catalog with AI-powered search</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-accent font-medium">•</span>
                  <span className="text-neutral-gray">Dynamic pricing with volume discounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-accent font-medium">•</span>
                  <span className="text-neutral-gray">Custom line items and notes</span>
                </li>
              </ul>
            </div>

            {/* Pricing Engine */}
            <div className="space-y-6">
              <div className="">
                <Sliders className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl">Pricing Engine</h3>
              <p className="text-lg text-neutral-gray leading-relaxed">
                Configure complex pricing rules once and apply them automatically. 
                Support for tiered pricing, volume discounts, promotional rates, and 
                customer-specific pricing agreements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-accent font-medium">•</span>
                  <span className="text-neutral-gray">Rule-based pricing automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-accent font-medium">•</span>
                  <span className="text-neutral-gray">Multi-currency and tax handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-accent font-medium">•</span>
                  <span className="text-neutral-gray">Margin protection and alerts</span>
                </li>
              </ul>
            </div>

            {/* Approval Workflows */}
            <div className="space-y-6">
              <div className="">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl">Approval Workflows</h3>
              <p className="text-lg text-neutral-gray leading-relaxed">
                Configurable approval chains ensure quotes meet your business rules. 
                Automatic routing based on deal size, discount level, or custom criteria. 
                Mobile approval for on-the-go decision making.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-accent font-medium">•</span>
                  <span className="text-neutral-gray">Multi-level approval chains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-accent font-medium">•</span>
                  <span className="text-neutral-gray">Rule-based routing logic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-accent font-medium">•</span>
                  <span className="text-neutral-gray">Real-time notifications</span>
                </li>
              </ul>
            </div>

            {/* Quote Delivery */}
            <div className="space-y-6">
              <div className="">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl">Quote Delivery</h3>
              <p className="text-lg text-neutral-gray leading-relaxed">
                Beautiful, branded quote documents delivered via email or shareable link. 
                Track when quotes are viewed, downloaded, and accepted. Support for 
                electronic signatures and payment collection.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-medium">•</span>
                  <span className="text-neutral-gray">Customizable PDF templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-medium">•</span>
                  <span className="text-neutral-gray">Engagement tracking and analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success-green font-medium">•</span>
                  <span className="text-neutral-gray">E-signature integration</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section className="bg-background-light py-20 mt-20 animate-in fade-in duration-700 delay-400">
          <div className="container mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium tracking-wide text-neutral-gray uppercase mb-4">
                  ANALYTICS & INSIGHTS
                </p>
                <h2 className="text-5xl mb-6">Data-Driven Decisions</h2>
                <p className="text-lg text-neutral-gray leading-relaxed mb-8">
                  Comprehensive analytics dashboard gives you visibility into your quoting 
                  performance. Track win rates, average deal size, time-to-quote, and more. 
                  Get AI-powered recommendations to optimize your pricing strategy.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <BarChart className="w-6 h-6 text-orange-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Win Rate Analysis</p>
                      <p className="text-neutral-gray">Track conversion rates by product, customer segment, and sales rep</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart className="w-6 h-6 text-blue-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Performance Metrics</p>
                      <p className="text-neutral-gray">Monitor quote volume, response times, and approval bottlenecks</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart className="w-6 h-6 text-purple-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Revenue Insights</p>
                      <p className="text-neutral-gray">Forecast pipeline value and identify revenue opportunities</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-border shadow-lg">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-neutral-gray">Win Rate</span>
                      <span className="text-2xl font-light">68%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-success-green w-[68%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-neutral-gray">Avg. Response Time</span>
                      <span className="text-2xl font-light">12min</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-blue-accent w-[85%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-neutral-gray">Quote Volume</span>
                      <span className="text-2xl font-light">3.2K</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-purple-accent w-[92%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-neutral-gray">Customer Satisfaction</span>
                      <span className="text-2xl font-light">4.8</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div className="h-full bg-orange-accent w-[96%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-10 py-20 text-center animate-in fade-in duration-700 delay-500">
          <h2 className="text-5xl mb-6">See Quotyl in Action</h2>
          <p className="text-xl text-neutral-gray mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how Quotyl can transform your quote-to-cash process.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Request a Demo
          </a>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}