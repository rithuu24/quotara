import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-4">
            Last Updated: January 1, 2025
          </p>
          <p className="text-lg text-muted-foreground mb-16">
            Please read these Terms of Service carefully before using Quotyl.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-light mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Quotyl's services, you accept and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                Quotyl provides an AI-powered platform for enterprise quotation management. Our services include:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Automated quotation generation and management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>AI-powered pricing and workflow automation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Integration with third-party business systems</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Analytics and reporting tools</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">3. User Accounts</h2>
              <p className="text-muted-foreground mb-4">
                To use Quotyl, you must create an account. You agree to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Provide accurate, current, and complete information</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Maintain the security of your account credentials</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Accept responsibility for all activities under your account</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Notify us immediately of any unauthorized access</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">4. Acceptable Use</h2>
              <p className="text-muted-foreground mb-4">
                You agree not to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Use the service for any illegal or unauthorized purpose</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Violate any laws in your jurisdiction</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Transmit malicious code or attempt to compromise security</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Interfere with or disrupt the service</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Reverse engineer or attempt to extract source code</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All rights, title, and interest in Quotyl's services, including all intellectual property rights, 
                remain with Quotyl Inc. You retain all rights to your data and content.
              </p>
              <p className="text-muted-foreground">
                You grant Quotyl a limited license to use your data solely to provide and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">6. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                If you subscribe to a paid plan:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Fees are charged in advance on a recurring basis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>You authorize us to charge your payment method</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>All fees are non-refundable except as required by law</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>We may change pricing with 30 days' notice</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">7. Service Level Agreement</h2>
              <p className="text-muted-foreground">
                We strive to maintain 99.9% uptime for our services. Details of our Service Level Agreement (SLA), 
                including uptime guarantees and remedies, are available in your subscription agreement.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">8. Data and Privacy</h2>
              <p className="text-muted-foreground">
                Your use of Quotyl is also governed by our Privacy Policy. We are committed to protecting your 
                data and maintaining compliance with applicable data protection regulations including GDPR and CCPA.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">9. Termination</h2>
              <p className="text-muted-foreground mb-4">
                Either party may terminate this agreement:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>You may cancel your subscription at any time</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>We may suspend or terminate access for violations of these terms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Upon termination, you will have 30 days to export your data</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">10. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, Quotyl shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
                directly or indirectly.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">11. Warranty Disclaimer</h2>
              <p className="text-muted-foreground">
                The service is provided "as is" without warranties of any kind, either express or implied, including 
                but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">12. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by the laws of the State of California, United States, without regard 
                to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">13. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. We will provide notice of material changes 
                by email or through the service. Continued use after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4">14. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <p className="text-muted-foreground">
                Email: <a href="mailto:legal@quotyl.com" className="text-primary hover:underline">legal@quotyl.com</a><br />
                Address: Quotyl Inc., San Francisco, CA, United States
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}