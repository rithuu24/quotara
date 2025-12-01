import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-4">
            Last Updated: January 1, 2025
          </p>
          <p className="text-lg text-muted-foreground mb-16">
            Your privacy is important to us. This Privacy Policy explains how Quotara collects, uses, and protects your information.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-light mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Account information (name, email, company details)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Usage data and analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Quotation data and business information</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Communication preferences</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Provide, maintain, and improve our services</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Process transactions and send related information</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Send technical notices, updates, and support messages</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Respond to your comments and questions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Analyze usage patterns to improve user experience</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">3. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement enterprise-grade security measures to protect your information:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>End-to-end encryption for data in transit and at rest</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Regular security audits and penetration testing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>SOC 2 Type II compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Role-based access controls and authentication</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>With your consent or at your direction</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>With service providers who assist in our operations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>To comply with legal obligations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>To protect our rights and prevent fraud</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Access and receive a copy of your personal data</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Correct inaccurate or incomplete data</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Request deletion of your data</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Object to or restrict certain processing activities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Data portability</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">6. Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to collect information about your browsing activities. 
                You can control cookies through your browser settings. For more details, please see our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">7. International Data Transfers</h2>
              <p className="text-muted-foreground">
                Your information may be transferred to and processed in countries other than your own. We ensure 
                appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <p className="text-muted-foreground">
                Email: <a href="mailto:privacy@quotara.com" className="text-primary hover:underline">privacy@quotara.com</a><br />
                Address: Quotara Inc., San Francisco, CA, United States
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}