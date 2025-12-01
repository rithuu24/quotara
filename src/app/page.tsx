import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import EnterpriseFeatures from '@/components/sections/enterprise-features';
import InsightsDashboard from '@/components/sections/insights-dashboard';
import EnterpriseBenefits from '@/components/sections/enterprise-benefits';
import CtaSection from '@/components/sections/cta';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <EnterpriseFeatures />
        <InsightsDashboard />
        <EnterpriseBenefits />
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
}