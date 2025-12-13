import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-light mb-8">Send us a Message</h2>
              
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
                    Email *
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
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-3xl font-medium hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      For general inquiries
                    </p>
                    <a
                      href="mailto:hello@quotyl.com"
                      className="text-primary hover:underline"
                    >
                      hello@quotyl.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Location</h3>
                    <p className="text-muted-foreground text-sm">
                      San Francisco, CA<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-muted rounded-lg p-8">
                <h3 className="text-xl font-medium mb-4">Sales Inquiries</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Interested in Quotyl for your enterprise? Our sales team is ready to help you find the perfect solution.
                </p>
                <a
                  href="/demo"
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-3xl font-medium hover:bg-primary/90 transition-colors"
                >
                  Schedule a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}