import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            About Quotyl
          </h1>
          <p className="text-lg text-muted-foreground mb-16">
            Transforming enterprise quotations with intelligent automation.
          </p>

          <section className="mb-16">
            <h2 className="text-3xl font-light mb-6">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Quotyl, we believe that creating professional quotations shouldn't be a complex, 
              time-consuming process. Our mission is to empower enterprises with intelligent automation 
              that transforms the way quotes are generated, managed, and delivered.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're building the future of enterprise quotation management—where AI meets procurement, 
              and complexity becomes simplicity.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-light mb-6">What We Do</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Quotyl is an AI-powered platform designed for enterprises that handle complex quotations 
              at scale. We help organizations:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Generate accurate quotes in seconds using natural language prompts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Automate pricing calculations with dynamic rules and regional variations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Ensure compliance with built-in templates and approval workflows</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Integrate seamlessly with existing ERP and CRM systems</span>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-light mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-3">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  We push the boundaries of what's possible with AI to solve real enterprise challenges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Reliability</h3>
                <p className="text-muted-foreground text-sm">
                  Enterprise-grade security and uptime you can depend on for mission-critical operations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Simplicity</h3>
                <p className="text-muted-foreground text-sm">
                  We make complex processes simple without sacrificing power or flexibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Customer Success</h3>
                <p className="text-muted-foreground text-sm">
                  Your success is our success. We're committed to delivering measurable value.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-muted rounded-lg p-12 text-center">
            <h2 className="text-3xl font-light mb-4">Join Us on Our Journey</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're building the future of enterprise quotation management. If you're ready to 
              transform how your organization handles quotes, let's talk.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-3xl font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}