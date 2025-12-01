import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            See Quotara in Action
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Experience how Quotara transforms complex enterprise quotations into simple, automated workflows.
          </p>

          <div className="bg-card border border-border rounded-lg p-12 mb-12">
            <h2 className="text-3xl font-light mb-8 text-center">
              Request a Personalized Demo
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  What would you like to see in the demo?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-3xl font-medium hover:bg-primary/90 transition-colors"
              >
                Request Demo
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-medium mb-3">Tailored to Your Needs</h3>
              <p className="text-muted-foreground text-sm">
                Every demo is customized to address your specific use cases and challenges
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-3">Expert Guidance</h3>
              <p className="text-muted-foreground text-sm">
                Our team will walk you through features and answer all your questions
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium mb-3">No Commitment</h3>
              <p className="text-muted-foreground text-sm">
                Explore Quotara risk-free with no obligation to purchase
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}